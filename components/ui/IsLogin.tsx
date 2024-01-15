import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import UserDownMenu from "./UserMenuDown"
import { Button, Link } from "@nextui-org/react"

export default function IsLogin() {
    const cookieStore = cookies()
    const canInitSupabaseClient = () => {
        try {
            createClient(cookieStore)
            return true
        } catch (e) {
            return false
        }
    }

    const isSupabaseConnected = canInitSupabaseClient()


    return isSupabaseConnected &&(
        <IsAuth />
    )
}

async function IsAuth() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

   
    return user ? (
        <UserDownMenu />
    ) : (

        <Button
            href="/OAuth"
            as={Link}
            color="default"
            variant="faded"
        >
            登录
        </Button>
    )
}