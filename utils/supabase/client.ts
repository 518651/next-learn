/*
 * @Date: 2023-12-15 14:40:59
 * @LastEditors: Build By 518651 Dev Copyright @zhuxs.0x7e9fb@qq.com
 * @LastEditTime: 2023-12-15 14:41:03
 * @FilePath: \cs2_server\lib\supabase\client.ts
 */
import { createBrowserClient } from '@supabase/ssr'

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )