export default function Facilities() {
    const facilities = {
      ruangTI: {
        name: 'Ruang TI',
        processor: 'Intel(R) Pentium(R) ~3.2GHz',
        memory: '2 GB',
        displayCard: 'Intel(R) HD Graphics',
        image: '/images/facilities-photos/foto-ruang-ti.jpg'
      },
      ruangPPLG: {
          name: 'Ruang PPLG',
          processor: 'Intel(R) Core(TM) i7-10700 ~2.9GHz',
          memory: '16 GB',
          displayCard: 'Intel(R) UHD Graphics 630',
          image: '/images/facilities-photos/foto-ruang-pplg.jpg'
      }
    }

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fasilitas Pendukung
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* RUANG TI */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1">
              <div 
                className="h-72 flex items-center justify-center bg-cover bg-center" 
                style={{ backgroundImage: `url(${facilities.ruangTI.image})`}}>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {facilities.ruangTI.name}
                </h3>

                <p className="text-base font-medium text-gray-700">
                  Spesifikasi Hardware
                </p>

                <div className="w-12 h-[2px] bg-blue-500 mb-2"></div> {/* Line */}
                <ul className="text-gray-600 space-y-1 text-sm leading-relaxed">
                  <li><strong className="text-gray-800">Processor:</strong> {facilities.ruangTI.processor}</li>
                  <li><strong className="text-gray-800">Memory:</strong> {facilities.ruangTI.memory}</li>
                  <li><strong className="text-gray-800">Display Card:</strong> {facilities.ruangTI.displayCard}</li>
                </ul>
              </div>
            </div>

            {/* RUANG PPLG */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1">
              <div 
                className="h-72 flex items-center justify-center bg-cover bg-center" 
                style={{ backgroundImage: `url(${facilities.ruangPPLG.image})`}}>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {facilities.ruangPPLG.name}
                </h3>

                <p className="text-base font-medium text-gray-700">
                  Spesifikasi Hardware
                </p>

                <div className="w-12 h-[2px] bg-blue-500 mb-2"></div> {/* Line */}
                <ul className="text-gray-600 space-y-1 text-sm leading-relaxed">
                  <li><strong className="text-gray-800">Processor:</strong> {facilities.ruangPPLG.processor}</li>
                  <li><strong className="text-gray-800">Memory:</strong> {facilities.ruangPPLG.memory}</li>
                  <li><strong className="text-gray-800">Display Card:</strong> {facilities.ruangPPLG.displayCard}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}