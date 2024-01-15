"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, User } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { SignOut } from "@/lib/Function/OAuth/LoginFunc";
import { useRouter } from "next/navigation";
import GetProfile from "@/lib/Function/User/UserFunc";
import { UserProfile } from "@/lib/Interface/User/UserInterface";


export default function UserDownMenu() {
    const [UserReq , SetUser] =useState<UserProfile | null>(null)
    const router = useRouter();

    useEffect(()=>{
        const faiedata =async ()=>{
            const data = await GetProfile();
            SetUser(data)
        }
        faiedata();
    },[])


    async function ExitLogin(){
        await SignOut();
        router.push('/');
    }



    return(
        <Dropdown
            showArrow
            radius="sm"
            classNames={{
                base: "before:bg-default-200", // change arrow background
                trigger: "p-0",
            }}
        >
            <DropdownTrigger>
                <User
                    name={UserReq?.username}
                    description={UserReq?.full_name}
                    avatarProps={{
                        src: UserReq?.avatar_url,
                        className: "w-8 h-8 rounded-full",
                    }}
                    className="cursor-pointer"
                />
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Custom item styles"
                disabledKeys={["profile"]}
                className="p-3"
                itemClasses={{
                    base: [
                        "rounded-md",
                        "text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-default-50",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500",
                    ],
                }}
            >
                <DropdownSection aria-label="Profile" showDivider>
                    <DropdownItem key="Profile">
                        个人信息
                    </DropdownItem>
                    <DropdownItem key="settings" onClick={()=>{router.push('/Settings')}}>设置</DropdownItem>
                </DropdownSection>
                <DropdownSection aria-label="Preferences" showDivider>
                    <DropdownItem key="quick_search" shortcut="⌘K">
                        快速查询
                    </DropdownItem>
                </DropdownSection>
                <DropdownSection aria-label="Help & Feedback">
                    <DropdownItem key="help_and_feedback">
                        帮助 & 反馈
                    </DropdownItem>
                    <DropdownItem key="logout" onClick={ExitLogin}>退出登录</DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}