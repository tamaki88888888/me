/**
 * デザインラフ案ページ（確認用・本番には反映しない）
 */
export default function Preview() {
  return (
    <div className="min-h-screen text-black font-sans relative" style={{ backgroundColor: "#f5f0e8" }}>

      {/* 和紙テクスチャオーバーレイ */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <filter id="washi">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended"/>
          <feComposite in="blended" in2="SourceGraphic" operator="in"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#washi)" opacity="0.18"/>
      </svg>

      {/* ヘッダー */}
      <header className="fixed top-0 w-full z-20 border-b border-stone-200" style={{ backgroundColor: "#f5f0e8" }}>
        <div className="max-w-4xl mx-auto px-8 h-14 flex items-center justify-between">
          <span className="text-sm tracking-widest">tamaki</span>
          <nav className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-black transition-colors">About</a>
            <a href="#" className="hover:text-black transition-colors">Work</a>
            <a href="#" className="hover:text-black transition-colors">Notes</a>
            <a href="#" className="hover:text-black transition-colors">Resume</a>
          </nav>
        </div>
      </header>

      {/* ヒーロー：イラストプレースホルダー */}
      <section className="pt-14 relative z-10">
        <div className="w-full bg-white border-b border-gray-100 flex items-end justify-center overflow-hidden">
          <img
            src="/svg/illustration.svg"
            alt="illustration"
            className="w-full max-w-5xl"
          />
        </div>
      </section>

      {/* 自己紹介 */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-16 flex justify-between items-start">
        <div>
          <p className="text-xs text-gray-400 tracking-widest mb-2">ENGINEER / CREATOR</p>
          <h1 className="text-2xl font-light">Tamaki</h1>
        </div>
        <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
          テックと半導体が好きなエンジニア。
          コードを書いたり、キーボードをいじったり、投資をしたりしています。
        </p>
      </section>

      {/* 区切り */}
      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <hr className="border-stone-200" />
      </div>

      {/* Notes 一覧 */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <p className="text-xs text-gray-400 tracking-widest mb-8">NOTES</p>
        <ul className="flex flex-col gap-6">
          {[
            { date: "2026-06-13", title: "はじめての日記", desc: "このサイトにノートを書き始めました" },
            { date: "2026-06-12", title: "Keyball ONE 47 セットアップ記録", desc: "ZMK Studioでキーマップを設定した話" },
            { date: "2026-06-11", title: "半導体株の下落について考えた", desc: "AVGO決算ミスを起点にセクター全体が売られた理由" },
          ].map((note) => (
            <li key={note.title} className="flex gap-8 items-baseline group cursor-pointer">
              <span className="text-xs text-gray-300 w-24 shrink-0">{note.date}</span>
              <div>
                <span className="text-sm group-hover:underline underline-offset-4">{note.title}</span>
                <p className="text-xs text-gray-400 mt-1">{note.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* フッター */}
      <footer className="relative z-10 max-w-4xl mx-auto px-8 py-8 border-t border-stone-200 flex justify-between items-center">
        <span className="text-xs text-gray-300">© 2026 tamaki</span>
        <div className="flex gap-4">
          <a href="#" className="text-xs text-gray-300 hover:text-black transition-colors">GitHub</a>
          <a href="#" className="text-xs text-gray-300 hover:text-black transition-colors">X</a>
        </div>
      </footer>

    </div>
  );
}
