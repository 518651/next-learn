/*
 * @Date: 2023-12-05 19:12:37
 * @LastEditors: Build By 518651 Dev Copyright @zhuxs.0x7e9fb@qq.com
 * @LastEditTime: 2024-01-10 11:12:05
 * @FilePath: \cs2_server\lib\Function\OAuth\LoginFunc.ts
 */
'use server'

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { AuthTokenResponsePassword, SupabaseClient, UserResponse } from '@supabase/supabase-js'

export async function GetClient(): Promise<SupabaseClient<any, "public", any>>{
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  return supabase;
}

export async function EmailSignUp(email: string, password: string): Promise<AuthTokenResponsePassword | null>{


    try{
      const cookieStore = cookies()
      const supabase = createClient(cookieStore)
      const data = await supabase.auth.signInWithPassword({
        email:email,
        password:password,
      })
      return data

    }catch(error:any){
      console.error(error);
      return null
    }
}


export async function SignOut(): Promise<void>{
  try{
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()

  }catch{
    
  }
}

export async function GetUser(): Promise<UserResponse | null>{
    try{
      const cookieStore = cookies()
      const supabase = createClient(cookieStore)
      const data = await supabase.auth.getUser()
      return data

    }catch{
      return null
    }
}
