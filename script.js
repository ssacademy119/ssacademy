<!DOCTYPE html>
<html lang="tr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SS Academy - Minecraft ScreenShare & AAC Eğitimi</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        dark: {
                            900: '#070b19',
                            800: '#0b132b',
                            700: '#1c2541',
                        },
                        accent: {
                            cyan: '#00f2fe',
                            blue: '#4facfe',
                        }
                    }
                }
            }
        }
    </script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Özel CSS Dosyamız -->
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-dark-900 text-slate-100 selection:bg-accent-cyan selection:text-dark-900">

    <!-- Navbar -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-slate-800/60">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-blue to-accent-cyan flex items-center justify-center glow-effect">
                    <i class="fa-solid fa-shield-halved text-dark-900 text-xl font-bold"></i>
                </div>
                <span class="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-200 to-accent-cyan bg-clip-text text-transparent">
                    SS <span class="text-accent-cyan">ACADEMY</span>
                </span>
            </div>

            <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                <a href="#anasayfa" class="hover:text-accent-cyan transition">Anasayfa</a>
                <a href="#egitimler" class="hover:text-accent-cyan transition">Eğitim Seviyeleri</a>
                <a href="#hakkimizda" class="hover:text-accent-cyan transition">Hakkımızda</a>
                <a href="#iletisim" class="hover:text-accent-cyan transition">İletişim</a>
            </nav>

            <div>
                <a href="#egitimler" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-dark-900 font-bold text-sm shadow-lg hover:opacity-90 transition transform hover:-translate-y-0.5">
                    Hemen Başla
                </a>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="anasayfa" class="pt-36 pb-20 relative overflow-hidden">
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-700/60 border border-slate-700/80 text-accent-cyan text-xs font-semibold mb-6">
                <i class="fa-solid fa-terminal"></i> Profesyonel Minecraft ScreenShare & AAC Akademisi
            </div>
            
            <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Minecraft Güvenliğinde <br>
                <span class="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent glow-text">Zirveye Oyna</span>
            </h1>
            
            <p class="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Prefetch, USN Journal analizleri, gizli `.jar` imza taramaları ve profesyonel AAC (Advanced Anti-Cheat) süreçleriyle kusursuz bir hile dedektörü ol.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#egitimler" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-dark-900 font-bold shadow-lg hover:opacity-90 transition flex items-center justify-center gap-2">
                    Eğitimleri Keşfet <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="#hakkimizda" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-dark-800 border border-slate-700 hover:border-accent-cyan/50 text-slate-200 font-semibold transition">
                    Daha Fazla Bilgi
                </a>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-slate-800/80">
                <div class="text-center">
                    <div class="text-3xl font-extrabold text-accent-cyan">3</div>
                    <div class="text-sm text-slate-400 mt-1">Ana Seviye (Level)</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-extrabold text-accent-cyan">500+</div>
                    <div class="text-sm text-slate-400 mt-1">Mezun Yetkili</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-extrabold text-accent-cyan">%100</div>
                    <div class="text-sm text-slate-400 mt-1">Pratik Odaklı</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-extrabold text-accent-cyan">Pro</div>
                    <div class="text-sm text-slate-400 mt-1">ScreenShare Taktiği</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Eğitim Seviyeleri (Levels) -->
    <section id="egitimler" class="py-20 bg-dark-800/40 border-t border-slate-800/50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-3xl font-bold mb-4">Kademeli ScreenShare Müfredatı</h2>
                <p class="text-slate-400">Temel Windows adli tıp araçlarından profesyonel AAC ve memory incelemelerine kadar adım adım uzmanlaşın.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Level 1 -->
                <div class="bg-dark-800 border border-slate-700/60 rounded-2xl p-8 hover:border-accent-cyan/50 transition duration-300 relative group flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition">
                            01
                        </div>
                        <span class="text-xs font-semibold text-accent-cyan uppercase tracking-wider">Level 1</span>
                        <h3 class="text-xl font-bold mt-1 mb-4 text-white">Temel SS & Prefetch / USN Journal Analizi</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-6">
                            İlk tarama adımları, Windows prefetch (`.pf`) kayıtları, USN Journal takibi ve temel sistem kalıntılarını inceleme teknikleri.
                        </p>
                    </div>
                    <ul class="space-y-2.5 text-sm text-slate-300 border-t border-slate-700/60 pt-6">
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-accent-cyan text-xs"></i> Prefetch Dosya Analizi</li>
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-accent-cyan text-xs"></i> USN Journal Kontrolleri</li>
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-accent-cyan text-xs"></i> Temel Windows İnceleme</li>
                    </ul>
                </div>

                <!-- Level 2 -->
                <div class="bg-dark-800 border border-slate-700/60 rounded-2xl p-8 hover:border-accent-cyan/50 transition duration-300 relative group flex flex-col justify-between shadow-xl">
                    <div class="absolute -top-3 right-6 bg-gradient-to-r from-accent-blue to-accent-cyan text-dark-900 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                        Popüler
                    </div>
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition">
                            02
                        </div>
                        <span class="text-xs font-semibold text-accent-cyan uppercase tracking-wider">Level 2</span>
                        <h3 class="text-xl font-bold mt-1 mb-4 text-white">İleri Dosya Denetimi & .jar İmza Taramaları</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-6">
                            Gizli hile dosyalarını, `.jar` mod imzalarını yakalama, silinmiş logları kurtarma ve gelişmiş script tarama yöntemleri.
                        </p>
                    </div>
                    <ul class="space-y-2.5 text-sm text-slate-300 border-t border-slate-700/60 pt-6">
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-accent-cyan text-xs"></i> .jar Cheat İmza Taraması</li>
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-accent-cyan text-xs"></i> Gizli Dosya & Log Kurtarma</li>
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-accent-cyan text-xs"></i> Otomatik Tarama Araçları</li>
                    </ul>
                </div>

                <!-- Level 3 -->
                <div class="bg-dark-800 border border-slate-700/60 rounded-2xl p-8 hover:border-accent-cyan/50 transition duration-300 relative group flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition">
                            03
                        </div>
                        <span class="text-xs font-semibold text-accent-cyan uppercase tracking-wider">Level 3</span>
                        <h3 class="text-xl font-bold mt-1 mb-4 text-white">Profesyonel AAC / SS İnceleme ve Vakalar</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-6">
                            Detaylı memory/bellenim denetimleri, profesyonel ScreenShare taktikleri, karmaşık hile vakaları ve operasyonel süreçler.
                        </p>
                    </div>
                    <ul class="space-y-2.5 text-sm text-slate-300 border-t border-slate-700/60 pt-6">
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-accent-cyan text-xs"></i> Gelişmiş Memory İncelemesi</li>
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-accent-cyan text-xs"></i> Profesyonel SS Taktikleri</li>
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-accent-cyan text-xs"></i> Gerçek Vaka Analizleri</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-slate-800/80 text-center text-slate-500 text-sm">
        <p>&copy; 2026 SS Academy. Tüm hakları saklıdır. Minecraft ScreenShare & Güvenlik Akademisi.</p>
    </footer>

    <!-- Özel JS Dosyamız -->
    <script src="script.js"></script>
</body>
</html>