import FormRegister from "../organism/FormRegister";

export default function RegisterPage() {

    return (
        <div className="flex items-center justify-center h-screen my-12">
            <div className="overflow-hidden border border-mist-100 relative flex bg-white w-full xl:w-4/5 xl:max-w-4/5 mx-8 shadow-lg rounded-xl shadow-mist-200">
                <div className="flex-1 relative hidden md:block w-1/6">
                    <img src="https://placehold.net/400x400.png" alt="Foto sampul" className="absolute inset-0 w-full h-full object-cover object-center" />
                </div>
                <div className="px-8 py-12 mx-auto">
                    <h1 className="text-3xl font-semibold">Register</h1>
                    <p className="text-gray-500 mb-8 text-lg">Lorem ipsum dolor sit amet.aaaaaaaaaaaaaaaaaaa</p>
                    <FormRegister />
                </div>
            </div >
        </div >
    )
}