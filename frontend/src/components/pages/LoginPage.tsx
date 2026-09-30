import FormLogin from "../organism/FormLogin";

export default function LoginPage() {

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="overflow-hidden border border-mist-100 relative flex bg-white w-full xl:w-4/5 xl:max-w-4/5 mx-8 shadow-lg rounded-xl shadow-mist-200">
                <div className="flex-3 relative hidden md:block w-1/2">
                    <img src="https://placehold.net/400x400.png" alt="Foto sampul" className="absolute inset-0 w-full h-full object-cover object-center" />
                </div>
                <div className="px-8 py-12 mx-auto">
                    <h1 className="text-3xl font-semibold">Login</h1>
                    <p className="text-gray-500 mb-8 text-lg">Lorem ipsum dolor sit amet.</p>
                    <FormLogin />
                </div>
            </div >
        </div >
    )
}