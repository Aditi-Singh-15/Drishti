import Link from "next/link"

export default function RoleSelection() {
  return (
    <div className="min-h-screen bg-[#FEF6F0] flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 m-4">
        <h1 className="text-[#1D3557] text-3xl font-bold text-center mb-2">Welcome to Drishti</h1>
        <p className="text-[#1D3557] text-center mb-8">Let's set up your profile to get started</p>

        <h2 className="text-[#1D3557] text-2xl font-semibold text-center mb-8">Select your role</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/profile-setup?role=parent-child" className="block">
            <div className="border border-gray-200 rounded-lg p-6 h-full hover:border-[#C85C7F] transition-colors">
              <div className="flex justify-center mb-4">
                <div className="bg-[#FEF6F0] p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C85C7F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#1D3557] text-xl font-semibold text-center mb-2">Parent / Child</h3>
              <p className="text-[#1D3557] text-center">
                Join as a parent or girl child to share achievements and get resources.
              </p>
            </div>
          </Link>

          <Link href="/profile-setup?role=educator-leader" className="block">
            <div className="border border-gray-200 rounded-lg p-6 h-full hover:border-[#C85C7F] transition-colors">
              <div className="flex justify-center mb-4">
                <div className="bg-[#FEF6F0] p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C85C7F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-graduation-cap"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#1D3557] text-xl font-semibold text-center mb-2">Educator / Leader</h3>
              <p className="text-[#1D3557] text-center">
                Join as a teacher, volunteer, or panchayat head to recognize achievements.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

