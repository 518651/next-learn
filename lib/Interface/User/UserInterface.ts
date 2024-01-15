
//! 定义获取用户数据的接口对象
// 若不加 export 则该结果仅在当前文件中使用，脱离该文件无法引用
export interface UserProfile {
    id: string;
    updated_at: string;
    username: string;
    full_name: string;
    avatar_url: string;
    website: string | null;
}
  