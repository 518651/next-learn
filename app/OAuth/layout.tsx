import { AcmeLogo } from "@/components/ui/AcmeLogo"

export default function OAuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="h-screen flex justify-center ">
            <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
                <div className="flex justify-center pb-12 ">
                    <AcmeLogo/>
                </div>
                {children}
            </div>
        </main>
    )
}