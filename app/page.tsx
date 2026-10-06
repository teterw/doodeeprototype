"use client";

import { useState } from "react";

const subjects = [
  ["คณิตศาสตร์", "ม.3 เทอม 1", "29/11/2024"],
  ["วิทยาศาสตร์", "ม.3 เทอม 1", "29/11/2024"],
  ["ภาษาไทย", "ม.3 เทอม 1", "20/07/2025"],
  ["ภาษาอังกฤษ", "ม.3 เทอม 1", "29/11/2024"],
  ["สังคมศึกษา", "ม.3 เทอม 1", "20/07/2025"],
  ["ประวัติศาสตร์", "ม.3 เทอม 1", "22/07/2025"],
  ["ดนตรี", "โน้ตสรุปทฤษฎี", "15/08/2025"],
  ["ศิลปะ", "แนวข้อสอบ", "16/08/2025"],
  ["คอมพิวเตอร์", "Python เบื้องต้น", "20/08/2025"],
  ["สุขศึกษา", "โภชนาการและการออกกำลังกาย", "25/08/2025"],
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const filteredSubjects = subjects.filter(([name, detail]) =>
    `${name} ${detail}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div id="top" className="bg-gray-50">
      {/* Header */}
      <header className="bg-pink-600 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">DooDee</h1>
          <nav className="hidden md:flex space-x-6 text-white font-medium">
            <a href="#top" className="hover:underline">
              หน้าหลัก
            </a>
            <a href="#subjects" className="hover:underline">
              ไฟล์ทั้งหมด
            </a>
            <a href="#subjects" className="hover:underline">
              วิเคราะห์
            </a>
            <a href="#contact" className="hover:underline">
              วางแผน
            </a>
            <a href="#contact" className="bg-white text-pink-600 px-4 py-1 rounded-lg font-semibold hover:bg-gray-100">
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
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            type="button"
            onClick={() => document.getElementById("subjects")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 py-2 rounded-lg"
          >
            โหลดชีทสรุป
          </button>
          <button
            type="button"
            onClick={() => setMessage("ติดต่อเราได้ที่ doodee@example.com")}
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg"
          >
            ติดต่อพวกเรา
          </button>
        </div>
        {message && <p id="contact" className="mt-4 text-gray-600">{message}</p>}
      </section>

      {/* Table */}
      <section id="subjects" className="max-w-6xl mx-auto px-6 pb-16">
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
              {filteredSubjects.map(([name, detail, date]) => (
                <tr key={name}>
                  <td className="py-3 px-6 font-semibold">{name}</td>
                  <td className="px-6">{detail}</td>
                  <td className="px-6">
                    <button
                      type="button"
                      onClick={() => setMessage(`ยังไม่มีไฟล์ดาวน์โหลดสำหรับวิชา${name}`)}
                      className="bg-green-100 text-green-600 px-3 py-1 rounded-lg"
                    >
                      ดาวน์โหลด
                    </button>
                  </td>
                  <td className="px-6">{date}</td>
                </tr>
              ))}
              {filteredSubjects.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    ไม่พบวิชาที่ค้นหา
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
