"use client"
import { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function OAuthPage() {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)


    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type !== "childList" || mutation.addedNodes.length === 0)
              return;
      
            const addedNodesArray = Array.from(mutation.addedNodes); 
            for (const node of addedNodesArray) {
              if (
                node instanceof HTMLElement &&
                (node.classList.contains("supabase-account-ui_ui-message") ||
                  node.classList.contains("supabase-auth-ui_ui-message"))
              ) {
                const originErrorMessage = node.innerHTML.trim();
      
                let translatedErrorMessage = "<默认消息>";
                switch (originErrorMessage) {
                  case "To signup, please provide your email":
                    translatedErrorMessage = "请提供电子邮件进行注册";
                    break;
                  case "Signup requires a valid password":
                    translatedErrorMessage = "注册需要有效的密码";
                    break;
                  case "User already registered":
                    translatedErrorMessage = "用户已注册";
                    break;
                  case "Only an email address or phone number should be provided on signup.":
                    translatedErrorMessage = "注册时只能提供电子邮件地址或手机号码";
                    break;
                  case "Signups not allowed for this instance":
                    translatedErrorMessage = "此实例不允许注册";
                    break;
                  case "Email signups are disabled":
                    translatedErrorMessage = "电子邮件注册已禁用";
                    break;
                  case "Email link is invalid or has expired":
                    translatedErrorMessage = "电子邮件链接无效或已过期";
                    break;
                  case "Token has expired or is invalid":
                    translatedErrorMessage = "令牌已过期或无效";
                    break;
                  case "The new email address provided is invalid":
                    translatedErrorMessage = "提供的新电子邮件地址无效";
                    break;
                  case "Password should be at least 6 characters":
                    translatedErrorMessage = "密码至少应为6个字符";
                    break;
                  case "Invalid login credentials":
                    translatedErrorMessage = "无效的登录凭据";
                    break;
                }
      
                if (!document.querySelector("#auth-forgot-password")) {
                  node.innerHTML = translatedErrorMessage;
                }
              }
            }
          });
        });
      
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      
        return () => {
          observer.disconnect(); // 清理 observer
        };
      }, []);
      


    return (
        <div className="flex flex-col space-y-4">
            <Auth
                supabaseClient={supabase}
                magicLink={true}
                providers={[]}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: '#404040',
                                brandAccent: '#52525b'
                            }
                        }
                    }
                }}
                localization={{
                    variables: {
                      sign_up: {
                        email_label: '电子邮件地址',
                        password_label: '创建密码',
                        email_input_placeholder:"您的电子邮件地址",
                        password_input_placeholder:"你的密码",
                        button_label:"注册",
                        loading_button_label:"注册....",
                        social_provider_text:"使用 {{provider}} 登录",
                        link_text:"没有帐户？注册",
                        confirmation_text:"查看您邮件里的确认链接",
                      },
                      sign_in: {
                        email_label: "电子邮件地址",
                        password_label: "你的密码",
                        email_input_placeholder: "您的电子邮件地址",
                        password_input_placeholder: "你的密码",
                        button_label: "登入",
                        loading_button_label: "登录中 ...",
                        social_provider_text: "使用 {{provider}} 登录",
                        link_text: "已经有帐户？登入",
                     },
                     magic_link: {
                        email_input_label: "电子邮件地址",
                        email_input_placeholder: "您的电子邮件地址",
                        button_label: "登入",
                        loading_button_label: "登录中 ...",
                        link_text: "已经有帐户？登入",
                        confirmation_text: "检查您的电子邮件中是否有确认链接",
                        empty_email_address: ""
                    },
                    forgotten_password: {
                        email_label: "电子邮件地址",
                        password_label: "你的密码",
                        email_input_placeholder: "您的电子邮件地址",
                        button_label: "发送重置密码说明",
                        loading_button_label: "正在发送重置指令...",
                        link_text: "忘记密码了吗？",
                        confirmation_text: "检查您的电子邮件中的密码重置链接",
                    },
                    update_password: {
                        password_label: "新密码",
                        password_input_placeholder: "您的新密码",
                        button_label: "更新密码",
                        loading_button_label: "正在更新密码...",
                        confirmation_text: "您的密码已更新",
                    },
                    verify_otp: {
                        email_input_label: "电子邮件地址",
                        email_input_placeholder: "您的电子邮件地址",
                        phone_input_label: "电话号码",
                        phone_input_placeholder: "你的电话号码",
                        token_input_label: "代币",
                        token_input_placeholder: "您的 OTP 令牌",
                        button_label: "验证令牌",
                        loading_button_label: "登录中 ...",
                    },
                    },
                  }}
                theme="dark"
            />
        </div>
    )
}