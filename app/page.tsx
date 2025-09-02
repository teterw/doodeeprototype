// app/page.tsx
import { Noto_Sans_Thai } from "next/font/google";

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div className={`${notoThai.className} bg-gray-50`}>
      {/* Header */}
      <header className="bg-pink-600 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">DooDee</h1>
          <nav className="hidden md:flex space-x-6 text-white font-medium">
            <a href="#" className="hover:underline">
              หน้าหลัก
            </a>
            <a href="#" className="hover:underline">
              ไฟล์ทั้งหมด
            </a>
            <a href="#" className="hover:underline">
              วิเคราะห์
            </a>
            <a href="#" className="hover:underline">
              วางแผน
            </a>
            <a className="bg-white text-pink-600 px-4 py-1 rounded-lg font-semibold hover:bg-gray-100">
              บัญชีของฉัน
            </a>
          </nav>
        </div>
      </header>

      {/* Search + Buttons */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          ชีทสรุปวิชาต่างๆ
        </h2>

        {/* Search bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="ค้นหาวิชา..."
            className="w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 py-2 rounded-lg">
            โหลดชีทสรุป
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg">
            ติดต่อพวกเรา
          </button>
        </div>
      </section>

      {/* Table */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-6">ชื่อวิชา</th>
                <th className="py-3 px-6">รายละเอียด</th>
                <th className="py-3 px-6">ไฟล์</th>
                <th className="py-3 px-6">วันที่</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3 px-6 font-semibold">คณิตศาสตร์</td>
                <td className="px-6">ม.3 เทอม 1</td>
                <td className="px-6">
                  <a
                    href="#"
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-lg"
                  >
                    ดาวน์โหลด
                  </a>
                </td>
                <td className="px-6">29/11/2024</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-semibold">วิทยาศาสตร์</td>
                <td className="px-6">ม.3 เทอม 1</td>
                <td className="px-6">
                  <a
                    href="#"
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-lg"
                  >
                    ดาวน์โหลด
                  </a>
                </td>
                <td className="px-6">29/11/2024</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-semibold">ภาษาไทย</td>
                <td className="px-6">ม.3 เทอม 1</td>
                <td className="px-6">
                  <a
                    href="#"
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-lg"
                  >
                    ดาวน์โหลด
                  </a>
                </td>
                <td className="px-6">20/07/2025</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-semibold">ภาษาอังกฤษ</td>
                <td className="px-6">ม.3 เทอม 1</td>
                <td className="px-6">
                  <a
                    href="#"
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-lg"
                  >
                    ดาวน์โหลด
                  </a>
                </td>
                <td className="px-6">29/11/2024</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-semibold">สังคมศึกษา</td>
                <td className="px-6">ม.3 เทอม 1</td>
                <td className="px-6">
                  <a
                    href="#"
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-lg"
                  >
                    ดาวน์โหลด
                  </a>
                </td>
                <td className="px-6">20/07/2025</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-semibold">ประวัติศาสตร์</td>
                <td className="px-6">ม.3 เทอม 1</td>
                <td className="px-6">
                  <a
                    href="#"
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-lg"
                  >
                    ดาวน์โหลด
                  </a>
                </td>
                <td className="px-6">22/07/2025</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-semibold">ดนตรี</td>
                <td className="px-6">โน้ตสรุปทฤษฎี</td>
                <td className="px-6">
                  <a
                    href="#"
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-lg"
                  >
                    ดาวน์โหลด
                  </a>
                </td>
                <td className="px-6">15/08/2025</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-semibold">ศิลปะ</td>
                <td className="px-6">แนวข้อสอบ</td>
                <td className="px-6">
                  <a
                    href="#"
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-lg"
                  >
                    ดาวน์โหลด
                  </a>
                </td>
                <td className="px-6">16/08/2025</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-semibold">คอมพิวเตอร์</td>
                <td className="px-6">Python เบื้องต้น</td>
                <td className="px-6">
                  <a
                    href="#"
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-lg"
                  >
                    ดาวน์โหลด
                  </a>
                </td>
                <td className="px-6">20/08/2025</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-semibold">สุขศึกษา</td>
                <td className="px-6">โภชนาการและการออกกำลังกาย</td>
                <td className="px-6">
                  <a
                    href="#"
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-lg"
                  >
                    ดาวน์โหลด
                  </a>
                </td>
                <td className="px-6">25/08/2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
