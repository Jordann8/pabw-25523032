import { fetchNews } from './api.js';

const statusState = document.querySelector('#status-state');
const container = document.querySelector('#list');

function render(list) {
  container.textContent = '';

  list.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'news-card';

    const title = document.createElement('h3');
    title.textContent = item.judul;

    const description = document.createElement('p');
    description.textContent = item.deskripsi;

    const category = document.createElement('p');
    category.textContent = `Kategori: ${item.kategori}`;

    const date = document.createElement('p');
    date.textContent = `Tanggal: ${item.tanggal}`;

    card.append(title, description, category, date);
    container.append(card);
  });
}

async function loadNews() {
  statusState.textContent = 'Memuat data dari server...';

  try {
    const newsList = await fetchNews();

    if (newsList.length === 0) {
      render(newsList);
      statusState.textContent = 'Belum ada berita yang tersedia saat ini.';
      return;
    }

    render(newsList);
    statusState.textContent = `Berhasil memuat ${newsList.length} data.`;
  } catch (error) {
    render([]);
    statusState.textContent = `Gagal memuat data: ${error.message}`;
  }
}

loadNews();
