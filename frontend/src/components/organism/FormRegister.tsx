import { Link } from 'react-router-dom'; // Pastikan Link diimport jika belum ada

export default function FormRegister() {
    return (
        <form action="#" method="POST">
            <div className="space-y-4">
                <div className="block space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-blue-500">Nama</label>
                    <input type="text" id="name" className="min-w-full border border-mist-400 rounded-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Nama lengkap anda" />
                </div>
                
                <div className="block space-y-2">
                    <label htmlFor="role_id" className="block text-sm font-semibold text-blue-500">Peran (Role)</label>
                    <select id="role_id" className="min-w-full border border-mist-400 rounded-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white">
                        <option value="" disabled selected>Pilih peran...</option>
                        <option value="student">Siswa</option>
                        <option value="teacher">Guru</option>
                    </select>
                </div>

                <div className="block space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-blue-500">Email</label>
                    <input type="email" id="email" className="min-w-full border border-mist-400 rounded-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Email anda" />
                </div>
                
                <div className="block space-y-2">
                    <label htmlFor="password" className="block text-sm font-semibold text-blue-500">Password</label>
                    <input type="password" id="password" className="min-w-full border border-mist-400 rounded-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                </div>

                <div className="block space-y-2">
                    <label htmlFor="repeatPassword" className="block text-sm font-semibold text-blue-500">Ulangi Password</label>
                    <input type="password" id="repeatPassword" className="min-w-full border border-mist-400 rounded-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                </div>

                <div className="block pt-4">
                    <p className="text-center text-gray-500 pb-2 md:text-sm">Sudah memiliki akun? <Link to={'/login'} className="text-blue-500 hover:text-blue-600">login disini</Link></p>
                    <button type="submit" className="bg-blue-500 text-white font-semibold w-full py-3 rounded-full cursor-pointer hover:bg-blue-600 transition-all">
                        Daftar
                    </button>
                </div>
            </div>
        </form>
    )
}