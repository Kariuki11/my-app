"use client";

import { updateDefaultAccount } from '@/actions/accounts';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import useFetch from '@/hooks/use fetch';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { toast } from 'sonner';

const AccountCard = ({ account }) => {
    const { name, type, balance, id, isDefault } = account;

    const {
        loading: updateDefaultLoading,
        fn: updateDefaultFn,
        data: updatedAccount,
        error,
    } = useFetch(updateDefaultAccount);

    const handleDefaultChange = async(event)=>{
        event.preventDefault();

        if (isDefault) {
            toast.warning("You need atleast a single default account");
            return; //Do not allow toggling off the Default account.
        }

        await updateDefaultFn(id);
    }

    useEffect(() => {
        if (updatedAccount?.success) {
            toast.success("The Default account has been updated Successfully!")
        }
    }, [updatedAccount, updateDefaultLoading])

    useEffect(() => {
        if (updatedAccount?.success) {
            toast.error(error.message || "Default account failed to Update")
        }
    }, [error])

  return (
    <div>
        <Card className="hover:shadow-md transition-shadow group relative">
            <Link href={`/account/${id}`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium capitalize">{name}</CardTitle>
                    <Switch 
                        checked={isDefault} 
                        onClick={handleDefaultChange}
                        disabled={updateDefaultLoading}
                    />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        ${parseFloat(balance).toFixed(2)}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {type.charAt(0) + type.slice(1).toLowerCase()} Account
                    </p>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <ArrowUpRight className="mr-1 h-4 w-4 text-green-700"/>
                        Income
                    </div>
                    <div className="flex items-center">
                        <ArrowDownRight className="mr-1 h-4 w-4 text-red-600"/>
                        Expense
                    </div>
                </CardFooter>
            </Link>
        </Card>

    </div>
  )
}

export default AccountCard;