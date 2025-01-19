"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const serializeTransaction = (obj)=>{
    const serialized = { ...obj };

    if (obj.balance) {
        serialized.balance = obj.balance.toNumber();
    }
    if (obj.amount) {
        serialized.amount = obj.amount.toNumbser();
    }
    return serialized;
};

export async function createAccount(data) {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });

        if (!user) {
            throw new Error("User not found");
        }

        // Convert Balance to float before saving
        const balanceFloat = parseFloat(data.balance);
        if (isNaN(balanceFloat)) {
            throw new Error("Invalid balance Amount");
        }

        //Check if this is the first user account
        const existingAccounts = await db.account.findMany({
            where: { userId: user.id }
        });

        const shouldBeDefault = 
            existingAccounts.length === 0 ? true : data.isDefault;

        // If account is default, unset other default accounts.
        if (shouldBeDefault) {
            await db.account.updateMany({
                where: { userId: user.id, isDefault: true },
                data: { isDefault: false },
            });
        }

        const account = await db.account.create({
            data: {
                ...data,
                balance: balanceFloat,
                userId: user.id,
                idDefalut: shouldBeDefault,
            },
        });

        const serializedAccount = serializeTransaction(account)

        revalidatePath("/dashboard");
        return { success: true, data: serializedAccount };
    } catch (error) {
        throw new Error(error.message);
    }
}