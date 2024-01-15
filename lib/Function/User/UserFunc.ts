'use server'

import { UserProfile } from '@/lib/Interface/User/UserInterface'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function GetProfile(): Promise<UserProfile | null> {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const UserReqData = await supabase.auth.getUser()

    const { data, error } = await supabase
        .from('profiles')
        .select("*")
        .eq('id', UserReqData.data.user?.id)    // Correct
    if (data !== null) {
        return data[0] as UserProfile;
    }
    return null;
}