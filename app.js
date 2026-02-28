// ==========================================
// KONFIGURASI SUPABASE KLIEN (app.js)
// ==========================================

const SUPABASE_URL = 'https://nieclaypsuyhyskbfftf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pZWNsYXlwc3V5aHlza2JmZnRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzMDI3OTYsImV4cCI6MjA4Nzg3ODc5Nn0.Y_tREg1mREpVogiCgKLr-z8pU4LjpmVkIDCgXtU0OWg';

// Gunakan 'window.supabaseClient' agar variabel ini bisa dibaca oleh index.html dan admin.html
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fungsi untuk mengecek koneksi
async function checkSupabaseConnection() {
    try {
        const { data, error } = await window.supabaseClient.from('courses').select('id').limit(1);
        if (error) throw error;
        console.log("✅ Berhasil terhubung ke database Supabase EduPro!");
    } catch (err) {
        console.error("❌ Gagal terhubung ke Supabase:", err.message);
    }
}

// Jalankan tes koneksi
checkSupabaseConnection();
