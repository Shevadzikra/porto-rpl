export default function Facilities() {
    const facilities = [
        {
            name: 'Lorem Ipsum',
            description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
            image: '/images/lab-computer.jpg'
        },
        {
            name: 'Lorem Ipsum',
            description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
            image: '/images/server-room.jpg'
        },
        {
            name: 'Lorem Ipsum',
            description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
            image: '/images/collab-space.jpg'
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fasilitas Pendukung
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">[Gambar: {facility.name}]</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}