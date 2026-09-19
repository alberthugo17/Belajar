// Data dummy sebagai simulasi database/hasil pencarian
const database = [
  {
    title: "Belajar HTML Dasar untuk Pemula",
    url: "https://example.com/html-dasar",
    description: "Panduan lengkap mempelajari tag, elemen, dan struktur halaman web dengan HTML."
  },
  {
    title: "Tutorial CSS Layout dan Flexbox",
    url: "https://example.com/css-flexbox",
    description: "Pelajari cara membuat tampilan website yang rapi dan responsif menggunakan CSS Flexbox."
  },
  {
    title: "Dasar-Dasar JavaScript Modern (ES6)",
    url: "https://example.com/js-dasar",
    description: "Mengenal variabel, fungsi, event, dan manipulasi DOM menggunakan JavaScript."
  },
  {
    title: "Cara Membuat Website dari Nol",
    url: "https://example.com/membuat-website",
    description: "Langkah mudah membuat website sendiri menggunakan HTML, CSS, dan JavaScript."
  }
];

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');

searchForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah reload halaman saat submit form
  
  const query = searchInput.value.toLowerCase().trim();
  resultsContainer.innerHTML = ''; // Bersihkan hasil sebelumnya

  if (query === '') return;

  // Filter data berdasarkan kata kunci pencarian pada judul atau deskripsi
  const filteredResults = database.filter(item => {
    return item.title.toLowerCase().includes(query) || 
           item.description.toLowerCase().includes(query);
  });

  // Tampilkan hasil pencarian
  if (filteredResults.length > 0) {
    filteredResults.forEach(item => {
      const resultDiv = document.createElement('div');
      resultDiv.classList.add('result-item');
      
      resultDiv.innerHTML = `
        <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
        <p>${item.description}</p>
      `;
      
      resultsContainer.appendChild(resultDiv);
    });
  } else {
    resultsContainer.innerHTML = '<p class="no-results">Tidak ada hasil yang ditemukan.</p>';
  }
});