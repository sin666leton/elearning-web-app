import FormRegister from "../organism/FormRegister";

export default function RegisterPage() {

    return (
        <div className="flex items-center justify-center min-h-screen py-8">
            <div className="overflow-hidden border border-mist-100 relative flex bg-white w-full max-w-5xl mx-6 shadow-lg rounded-xl shadow-mist-200">
                <div className="relative hidden md:block md:w-2/5">
                    <img src="https://placehold.net/400x400.png" alt="Foto sampul" className="absolute inset-0 w-full h-full object-cover object-center" />
                </div>
                <div className="w-full md:w-3/5 px-8 py-10">
                    <h1 className="text-3xl font-semibold">Register</h1>
                    <p className="text-gray-500 mb-6 text-base">Lorem ipsum dolor sit amet.</p>
                    <FormRegister />
                </div>
            </div>
        </div>
    )
}