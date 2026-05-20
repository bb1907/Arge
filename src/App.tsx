/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Rocket, 
  Building2, 
  ChevronRight, 
  Linkedin, 
  Twitter, 
  Mail, 
  Share2,
  Menu,
  X,
  Target,
  BarChart3,
  Globe,
  Search,
  CheckCircle2,
  Atom
} from "lucide-react";
import React, { useState, useMemo } from "react";

const UNIVERSITIES = [
  "Abdullah Gül Üniversitesi",
  "Acıbadem Mehmet Ali Aydınlar Üniversitesi",
  "Adana Alparslan Türkeş Bilim Ve Teknoloji Üniversitesi",
  "Adıyaman Üniversitesi",
  "Afyonkarahisar Sağlık Bilimleri Üniversitesi",
  "Afyon Kocatepe Üniversitesi",
  "Ağrı İbrahim Çeçen Üniversitesi",
  "Ahmet Yesevi Üniversitesi",
  "Akdeniz Üniversitesi",
  "Aksaray Üniversitesi",
  "Alanya Alaaddin Keykubat Üniversitesi",
  "Alanya Üniversitesi",
  "Altınbaş Üniversitesi",
  "Amasya Üniversitesi",
  "Anadolu Üniversitesi",
  "Ankara Bilim Üniversitesi",
  "Ankara Hacı Bayram Veli Üniversitesi",
  "Ankara Medipol Üniversitesi",
  "Ankara Müzik ve Güzel Sanatlar Üniversitesi",
  "Ankara Sosyal Bilimler Üniversitesi",
  "Ankara Üniversitesi",
  "Ankara Yıldırım Beyazıt Üniversitesi",
  "Antalya Belek Üniversitesi",
  "Antalya Bilim Üniversitesi",
  "Ardahan Üniversitesi",
  "Artvin Çoruh Üniversitesi",
  "Ataşehir Adıgüzel Meslek Yüksekokulu",
  "Atatürk Üniversitesi",
  "Atılım Üniversitesi",
  "Avrasya Üniversitesi",
  "Aydın Adnan Menderes Üniversitesi",
  "Bahçeşehir Üniversitesi",
  "Balıkesir Üniversitesi",
  "Bandırma Onyedi Eylül Üniversitesi",
  "Bartın Üniversitesi",
  "Başkent Üniversitesi",
  "Batman Üniversitesi",
  "Bayburt Üniversitesi",
  "Beykoz Üniversitesi",
  "Bezmialem Vakıf Üniversitesi",
  "Bilecik Şeyh Edebali Üniversitesi",
  "Bingöl Üniversitesi",
  "Biruni Üniversitesi",
  "Bitlis Eren Üniversitesi",
  "Boğaziçi Üniversitesi",
  "Bolu Abant İzzet Baysal Üniversitesi",
  "Burdur Mehmet Akif Ersoy Üniversitesi",
  "Bursa Teknik Üniversitesi",
  "Bursa Uludağ Üniversitesi",
  "Çağ Üniversitesi",
  "Çanakkale Onsekiz Mart Üniversitesi",
  "Çankaya Üniversitesi",
  "Çankırı Karatekin Üniversitesi",
  "Çukurova Üniversitesi",
  "Demiroğlu Bilim Üniversitesi",
  "Dicle Üniversitesi",
  "Doğuş Üniversitesi",
  "Dokuz Eylül Üniversitesi",
  "Düzce Üniversitesi",
  "Ege Üniversitesi",
  "Erciyes Üniversitesi",
  "Erzincan Binali Yıldırım Üniversitesi",
  "Erzurum Teknik Üniversitesi",
  "Eskişehir Osmangazi Üniversitesi",
  "Eskişehir Teknik Üniversitesi",
  "Fatih Sultan Mehmet Vakıf Üniversitesi",
  "Fenerbahçe Üniversitesi",
  "Fırat Üniversitesi",
  "Galatasaray Üniversitesi",
  "Gaziantep İslam Bilim ve Teknoloji Üniversitesi",
  "Gaziantep Üniversitesi",
  "Gazi Üniversitesi",
  "Gebze Teknik Üniversitesi",
  "Giresun Üniversitesi",
  "Gümüşhane Üniversitesi",
  "Hacettepe Üniversitesi",
  "Hakkari Üniversitesi",
  "Haliç Üniversitesi",
  "Harran Üniversitesi",
  "Hasan Kalyoncu Üniversitesi",
  "Hatay Mustafa Kemal Üniversitesi",
  "Hitit Üniversitesi",
  "Iğdır Üniversitesi",
  "Isparta Uygulamalı Bilimler Üniversitesi",
  "Işık Üniversitesi",
  "İbn Haldun Üniversitesi",
  "İhsan Doğramacı Bilkent Üniversitesi",
  "İnönü Üniversitesi",
  "İskenderun Teknik Üniversitesi",
  "İstanbul 29 Mayıs Üniversitesi",
  "İstanbul Arel Üniversitesi",
  "İstanbul Atlas Üniversitesi",
  "İstanbul Aydın Üniversitesi",
  "İstanbul Beykent Üniversitesi",
  "İstanbul Bilgi Üniversitesi",
  "İstanbul Esenyurt Üniversitesi",
  "İstanbul Galata Üniversitesi",
  "İstanbul Gedik Üniversitesi",
  "İstanbul Gelişim Üniversitesi",
  "İstanbul Kent Üniversitesi",
  "İstanbul Kültür Üniversitesi",
  "İstanbul Medeniyet Üniversitesi",
  "İstanbul Medipol Üniversitesi",
  "İstanbul Nişantaşı Üniversitesi",
  "İstanbul Okan Üniversitesi",
  "İstanbul Rumeli Üniversitesi",
  "İstanbul Sabahattin Zaim Üniversitesi",
  "İstanbul Sağlık ve Sosyal Bilimler Meslek Yüksekokulu",
  "İstanbul Sağlık ve Teknoloji Üniversitesi",
  "İstanbul Şişli Meslek Yüksekokulu",
  "İstanbul Teknik Üniversitesi",
  "İstanbul Ticaret Üniversitesi",
  "İstanbul Topkapı Üniversitesi",
  "İstanbul Üniversitesi",
  "İstanbul Üniversitesi-Cerrahpaşa",
  "İstanbul Yeni Yüzyıl Üniversitesi",
  "İstinye Üniversitesi",
  "İzmir Bakırçay Üniversitesi",
  "İzmir Demokrasi Üniversitesi",
  "İzmir Ekonomi Üniversitesi",
  "İzmir Katip Çelebi Üniversitesi",
  "İzmir Konak Meslek Yüksekokulu",
  "İzmir Tınaztepe Üniversitesi",
  "İzmir Yüksek Teknoloji Enstitüsü",
  "Kadir Has Üniversitesi",
  "Kafkas Üniversitesi",
  "Kahramanmaraş İstiklal Üniversitesi",
  "Kahramanmaraş Sütçü İmam Üniversitesi",
  "Kapadokya Üniversitesi",
  "Karabük Üniversitesi",
  "Karadeniz Teknik Üniversitesi",
  "Karamanoğlu Mehmetbey Üniversitesi",
  "Kastamonu Üniversitesi",
  "Kayseri Üniversitesi",
  "Kırıkkale Üniversitesi",
  "Kırklareli Üniversitesi",
  "Kırşehir Ahi Evran Üniversitesi",
  "Kilis 7 Aralık Üniversitesi",
  "Kocaeli Sağlık ve Teknoloji Üniversitesi",
  "Kocaeli Üniversitesi",
  "Koç Üniversitesi",
  "Konya Gıda ve Tarım Üniversitesi",
  "Konya Teknik Üniversitesi",
  "KTO-Karatay Üniversitesi",
  "Kütahya Dumlupınar Üniversitesi",
  "Kütahya Sağlık Bilimleri Üniversitesi",
  "Lokman Hekim Üniversitesi",
  "Malatya Turgut Özal Üniversitesi",
  "Maltepe Üniversitesi",
  "Manisa Celal Bayar Üniversitesi",
  "Mardin Artuklu Üniversitesi",
  "Marmara Üniversitesi",
  "MEF Üniversitesi",
  "Mersin Üniversitesi",
  "Mimar Sinan Güzel Sanatlar Üniversitesi",
  "Mudanya Üniversitesi",
  "Muğla Sıtkı Koçman Üniversitesi",
  "Munzur Üniversitesi",
  "Muş Alparslan Üniversitesi",
  "Necmettin Erbakan Üniversitesi",
  "Nevşehir Hacı Bektaş Veli Üniversitesi",
  "Niğde Ömer Halisdemir Üniversitesi",
  "Nuh Naci Yazgan Üniversitesi",
  "Ondokuz Mayıs Üniversitesi",
  "Ordu Üniversitesi",
  "Orta Doğu Teknik Üniversitesi",
  "Osmaniye Korkut Ata Üniversitesi",
  "OSTİM Teknik Üniversitesi",
  "Özyeğin Üniversitesi",
  "Pamukkale Üniversitesi",
  "Piri Reis Üniversitesi",
  "Recep Tayyip Erdoğan Üniversitesi",
  "Sabancı Üniversitesi",
  "Sağlık Bilimleri Üniversitesi",
  "Sakarya Uygulamalı Bilimler Üniversitesi",
  "Sakarya Üniversitesi",
  "Samsun Üniversitesi",
  "Selçuk Üniversitesi",
  "Siirt Üniversitesi",
  "Sinop Üniversitesi",
  "Sivas Bilim Ve Teknoloji Üniversitesi",
  "Sivas Cumhuriyet Üniversitesi",
  "Süleyman Demirel Üniversitesi",
  "Şırnak Üniversitesi",
  "Tarsus Üniversitesi",
  "TED Üniversitesi",
  "Tekirdağ Namık Kemal Üniversitesi",
  "TOBB Ekonomi ve Teknoloji Üniversitesi",
  "Tokat Gaziosmanpaşa Üniversitesi",
  "Toros Üniversitesi",
  "Trabzon Üniversitesi",
  "Trakya Üniversitesi",
  "Türk-Alman Üniversitesi",
  "Türk Hava Kurumu Üniversitesi",
  "Türk-Japon Bilim ve Teknoloji Üniversitesi",
  "Ufuk Üniversitesi",
  "Uşak Üniversitesi",
  "Üsküdar Üniversitesi",
  "Van Yüzüncü Yıl Üniversitesi",
  "Yalova Üniversitesi",
  "Yaşar Üniversitesi",
  "Yeditepe Üniversitesi",
  "Yıldız Teknik Üniversitesi",
  "Yozgat Bozok Üniversitesi",
  "Yüksek İhtisas Üniversitesi",
  "Zonguldak Bülent Ecevit Üniversitesi",
  "Diğer"
];

const SECTORS = [
  "Reklam Teknolojileri (AdTech)",
  "Tarım Teknolojileri (AgriTech)",
  "Biyoteknoloji (BioTech)",
  "Temiz Enerji (CleanTech)",
  "Sivil Teknolojiler (CivTech)",
  "Eğitim Teknolojileri (EdTech)",
  "Kadın Sağlığı (FemTech)",
  "Finansal Teknolojiler (FinTech)",
  "Gıda Teknolojileri (FoodTech)",
  "Kamu Teknolojileri (GovTech)",
  "Sağlık Teknolojileri (HealthTech)",
  "İnsan Kaynakları (HRTech)",
  "Sigorta Teknolojileri (InsurTech)",
  "Hukuk Teknolojileri (LegalTech)",
  "Pazarlama Teknolojileri (MarTech)",
  "Gayrimenkul Teknolojileri (PropTech)",
  "Düzenleme Teknolojileri (RegTech)",
  "Perakende Teknolojileri (RetailTech)",
  "Spor Teknolojileri (SportTech)",
  "Seyahat Teknolojileri (TravelTech)",
  "Diğer"
];

const PreEvaluationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    university: "",
    sector: "",
    budget: "",
    name: "",
    email: "",
    phone: ""
  });

  const filteredUnis = useMemo(() => 
    UNIVERSITIES.filter(u => u.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Yeni Başvuru / Ön Değerlendirme");
    const body = encodeURIComponent(
      `Üniversite: ${formData.university || "Belirtilmedi"}\nSektör: ${formData.sector}\nBütçe: ${formData.budget}\nAd Soyad: ${formData.name}\nE-posta: ${formData.email}\nTelefon: ${formData.phone}`
    );
    window.location.href = `mailto:info@soolx.com?subject=${subject}&body=${body}`;
    setStep(3); // Success step
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-primary/20 backdrop-blur-md"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="glass-card relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-extrabold italic">Ön Değerlendirme Formu</h2>
            <button onClick={onClose} className="p-2 hover:bg-surface-container rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-on-surface-variant mb-6 font-medium">Lütfen projeniz için kurumsal temel bilgileri seçin (Üniversite seçimi isteğe bağlıdır).</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Üniversite Seçimi (Opsiyonel)</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-4 w-4 h-4 text-outline" />
                    <input 
                      type="text"
                      placeholder="Üniversite ara..."
                      className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary transition-all outline-none"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="mt-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-inner z-20 max-h-40 overflow-y-auto">
                      {(!search || "belirtmek istemiyorum".includes(search.toLowerCase())) && (
                        <button 
                          className={`w-full text-left px-4 py-2 hover:bg-secondary/5 transition-colors text-sm ${!formData.university ? 'bg-secondary/10 font-bold' : ''}`}
                          onClick={() => {
                            setFormData({...formData, university: ""});
                            setSearch("");
                          }}
                        >
                          Belirtmek İstemiyorum
                        </button>
                      )}
                      {filteredUnis.map(u => (
                        <button 
                          key={u}
                          className={`w-full text-left px-4 py-2 hover:bg-secondary/5 transition-colors text-sm ${formData.university === u ? 'bg-secondary/10 font-bold text-secondary' : ''}`}
                          onClick={() => {
                            setFormData({...formData, university: u});
                            setSearch(u);
                          }}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Sektör</label>
                  <select 
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary outline-none transition-all"
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                  >
                    <option value="">Sektör Seçin...</option>
                    {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <button 
                  disabled={!formData.sector}
                  onClick={() => setStep(2)}
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  Devam Et
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Tahmini Bütçe (USD)</label>
                  <select 
                    required
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary outline-none transition-all"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  >
                    <option value="">Bütçe Aralığı Seçin...</option>
                    <option value="100-10k">$100 - $10,000</option>
                    <option value="10k-100k">$10,000 - $100,000</option>
                    <option value="100k-1M">$100,000 - $1,000,000</option>
                    <option value="1M-10M">$1,000,000 - $10,000,000</option>
                    <option value="10M+">$10,000,000 +</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Ad Soyad</label>
                    <input 
                      required
                      type="text"
                      placeholder="Adınız Soyadınız"
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl outline-none"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Telefon</label>
                    <input 
                      required
                      type="tel"
                      placeholder="05xx xxx xx xx"
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">E-Posta</label>
                  <input 
                    required
                    type="email"
                    placeholder="ornek@mail.com"
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Başvuruyu Tamamla
                </button>
                <button 
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full text-on-surface-variant text-sm font-medium hover:underline"
                >
                  Geri Dön
                </button>
              </form>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Başvurunuz Alındı!</h3>
              <p className="text-on-surface-variant max-w-xs mx-auto mb-8">
                Değerlendirme sonuçlarınız en kısa sürede e-posta adresinize iletilecektir.
              </p>
              <button 
                onClick={onClose}
                className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold"
              >
                Kapat
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Navigation = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Atom className="text-on-primary w-5 h-5" />
          </div>
          <span className="font-display text-xl font-extrabold tracking-tighter text-primary">AR-GE Pazarı</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group/menu">
            <button className="text-on-surface-variant hover:text-secondary transition-colors font-sans text-sm font-medium flex items-center gap-1">
              Sektörler <ChevronRight className="w-3 h-3 rotate-90" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:pointer-events-auto transition-all">
              <div className="bg-white border border-outline-variant/30 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-x-8 gap-y-2 w-[400px]">
                {SECTORS.slice(0, 20).map((s) => (
                  <button 
                    key={s} 
                    className="text-left text-[11px] font-bold text-on-surface-variant hover:text-secondary transition-colors truncate"
                    onClick={onOpenModal}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {[
            { name: "Hizmetler", href: "#hizmetler" },
            { name: "Hakkımızda", href: "#hakkimizda" }
          ].map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-on-surface-variant hover:text-secondary transition-colors font-sans text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={onOpenModal}
            className="bg-primary text-on-primary px-6 py-2 rounded-lg font-sans text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Başvur
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-outline-variant/30 px-8 py-6 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest opacity-50">Sektörler</span>
            <div className="grid grid-cols-1 gap-1 pl-2">
              {SECTORS.slice(0, 5).map((s) => (
                <button 
                  key={s} 
                  className="text-left text-sm font-medium text-on-surface-variant py-1"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenModal();
                  }}
                >
                  {s}
                </button>
              ))}
              <button className="text-left text-sm font-bold text-secondary py-1" onClick={() => { setIsOpen(false); onOpenModal(); }}>Tüm Sektörler...</button>
            </div>
          </div>
          {[
            { name: "Hizmetler", href: "#hizmetler" },
            { name: "Hakkımızda", href: "#hakkimizda" }
          ].map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-on-surface-variant text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsOpen(false);
              onOpenModal();
            }}
            className="bg-primary text-on-primary w-full py-3 rounded-lg font-sans font-semibold"
          >
            Başvur
          </button>
        </motion.div>
      )}
    </header>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.05]">
            Üniversiteler ve Kurumlar için <br/>
            <span className="text-secondary">AR-GE Proje Pazarı.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl leading-relaxed">
            Onaylı projelerimizle sizlere destek oluyor ve sürecinize katkı sağlıyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onOpenModal}
              className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-sans font-bold hover:shadow-lg transition-all active:scale-95 group"
            >
              Başvur
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://wa.me/905421199337"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-outline text-primary px-8 py-4 rounded-xl font-sans font-bold hover:bg-surface-container-low transition-all flex items-center justify-center"
            >
              Bize Ulaşın
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          <div className="glass-card p-4 md:p-6 rounded-3xl ai-glow relative z-10 w-full">
            <img 
              className="rounded-xl grayscale opacity-90 w-full h-[400px] md:h-[500px] object-cover"
              alt="Bilgisayar, dosyalar ve kalem içeren masaüstü çalışma ortamı"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              referrerPolicy="no-referrer"
            />

          </div>
          {/* Background decoration */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 blur-3xl rounded-full -z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectMarketGains = () => {
  const gains = [
    { title: "Tübitak Ar-Ge Proje Yazım", description: "Uzmanlarımız ile iletişime geçin. Tecrübeli ekiple proje yazın." },
    { title: "Ar-Ge Başvuru Danışmanlığı", description: "Proje yazımı, bütçe planı ve raporlama hizmetleriyle sürecin tamamında yanınızdayız." },
    { title: "Ar-Ge ve Tasarım Merkezi", description: "Ar-Ge Merkezi avantajlarından yararlanın, tüm süreci sizin adınıza biz yönlendirelim." },
    { title: "Ar-Ge teşvikleri sizinle", description: "Hakettiğiniz teşvikleri kaçırmayın Alternatifleri değerlendirelim" },
    { title: "Kapasite Geliştirme", description: "Kapasite Geliştirme Desteği nedir? Başvurunuzu birlikte hazırlayalım." }
  ];

  return (
    <section id="hakkimizda" className="px-8 py-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">AR-GE Proje Pazarı Kazanımları</h2>
            <div className="space-y-4">
              {gains.map((gain, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="mt-1 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                    <ChevronRight className="w-3 h-3 text-secondary group-hover:text-on-secondary" />
                  </div>
                  <div>
                    <p className="text-on-surface font-bold">{gain.title}</p>
                    <p className="text-on-surface-variant text-sm mt-1">{gain.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 bg-surface-container rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-primary italic">Kurumsal AR-GE Sürecimiz</h3>
              
              <div className="relative border-l-2 border-outline-variant/30 ml-4 space-y-8">
                {[
                  { title: "1. Ön Değerlendirme & Analiz", desc: "Firmanızın kapasitesi ve projelerinizin hibe uygunluk analizi yapılır." },
                  { title: "2. Proje Dosyası Hazırlığı", desc: "Fikriniz akademik ve teknik formata uygun, başarı odaklı kaleme alınır." },
                  { title: "3. Başvuru ve Hakem Süreci", desc: "Tüm resmi süreçler, revizyonlar ve hakem izlemeleri adınıza yönetilir." },
                  { title: "4. Yürütme ve Dönemsel Raporlama", desc: "Onaylanan projeniz süresince teknik, mali ve idari raporlama yürütülür." }
                ].map((step, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    <div className="absolute w-4 h-4 rounded-full bg-primary/20 -left-[9px] top-1.5 ring-4 ring-surface-container group-hover:bg-primary transition-colors"></div>
                    <h4 className="font-bold text-lg mb-2 text-on-surface">{step.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <Globe className="absolute -bottom-20 -right-20 w-80 h-80 text-primary/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectMarketThemes = () => {
  const themes = [
    "Makine/İmalat Teknolojileri",
    "Bilişim Teknolojileri",
    "Tıp ve Sağlık Uygulamaları",
    "Yapı Malzemeleri",
    "Kompozit Malzeme",
    "Elektrik-Elektronik",
    "İleri Teknoloji",
    "Lojistik ve Planlama",
    "Gıda ve Tarım",
    "Çevre ve Enerji",
    "Tekstil Teknolojileri",
    "Kimya ve İlaç",
    "Nanoteknoloji",
    "Turizm ve Kültür",
    "Sağlık ve Spor",
    "Diğer Alanlar"
  ];

  return (
    <section id="sektorler" className="px-8 py-24 bg-primary-container text-on-primary-container overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white uppercase tracking-tighter italic">Sektörel Odak Alanları</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {themes.map((theme, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col justify-between group hover:border-secondary transition-all"
            >
              <Sparkles className="text-secondary w-5 h-5 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="font-sans text-sm font-bold text-white/90">{theme}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KPISection = () => {
  const stats = [
    { label: "Başarılı Proje", value: "500+" },
    { label: "Fon Erişimi", value: "2.5B TL" },
    { label: "Partner Kurum", value: "150+" },
  ];

  return (
    <section className="bg-surface-container-lowest px-8 py-16 border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className={`flex flex-col items-center md:items-start p-6 ${idx === 1 ? "md:border-x border-outline-variant/30" : ""}`}>
            <span className="text-4xl font-extrabold text-primary mb-2 italic">
              {stat.value}
            </span>
            <span className="font-mono text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const methodologySteps = [
    { title: "Ön Analiz", desc: "Projenizin fon uygunluğu ve teknik altyapısı analiz edilir.", color: "bg-primary" },
    { title: "Teknik Dosya", desc: "Uzmanlarımızca literatüre uygun teknik dosya hazırlanır.", color: "bg-secondary" },
    { title: "Finansal Plan", desc: "Bütçe yönetimi ve vergi teşvikleri kurgulanır.", color: "bg-secondary-container" },
    { title: "İzleme & Rapor", desc: "Dönemsel raporlamalar titizlikle takip edilir.", color: "bg-inverse-surface" },
  ];

  return (
    <section id="hizmetler" className="px-8 py-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Kapsamlı AR-GE Çözümleri</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Kurumsal inovasyon yolculuğunuzun her aşamasında akademik hassasiyet ve teknolojik güçle yanınızdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Service 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 glass-card p-10 rounded-3xl flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                <Target className="text-secondary w-6 h-6 group-hover:text-on-secondary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Stratejik Danışmanlık</h3>
              <p className="text-on-surface-variant mb-8 text-lg">
                Kurumsal AR-GE yol haritanızı küresel trendler ve akademik verilerle şekillendiriyoruz.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/30">
              <h4 className="text-sm font-bold tracking-widest text-secondary uppercase mb-6">Yönetim Metodolojimiz</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {methodologySteps.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-full ${step.color} text-on-primary flex items-center justify-center font-mono font-bold text-xs`}>
                        {(idx + 1).toString().padStart(2, "0")}
                      </div>
                      <h5 className="font-bold text-sm">{step.title}</h5>
                    </div>
                    <p className="text-on-surface-variant text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-primary-container text-on-primary-container p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10">
              <FileText className="text-secondary w-10 h-10 mb-8" />
              <h3 className="text-2xl font-bold mb-4 text-surface-container-lowest">Proje Yazımı</h3>
              <p className="opacity-70 text-sm leading-relaxed mb-6">
                TÜBİTAK, Horizon Europe ve KOSGEB standartlarında kusursuz dosya hazırlığı.
              </p>
              <img 
                className="w-full h-40 object-cover rounded-xl grayscale brightness-110" 
                alt="Çalışma alanı"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKHEQFzmT7apGhRDGpeSxxOs9cNsSQRJvhP6wfeZThYzEaecNxl0au6bUOCk3Lk4VBRSdnOaXbL4bx1YPJzM16GKxLmPQTv1yVZUZzE7WY6DylHQu3bVJyUnzyJVMW52IeQUHmM6qiWBOhNUR8KxsBMmVuCCVRpZdV24q-yw-tNq0bzyW8kpbrWVn7j_Flbw19RikSf6j_27koSnwxFtGmGK3TiftDBN7BC7P1XS5aH7tAaWjtH7Qt6sDpEWEABnBssHcBUSVpCv0"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 glass-card p-10 rounded-3xl group cursor-pointer"
          >
            <Rocket className="text-secondary w-10 h-10 mb-8" />
            <h3 className="text-2xl font-bold mb-4">Ticarileştirme</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              AR-GE çıktılarınızın pazara giriş stratejilerini ve fikri mülkiyet haklarını yönetiyoruz.
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 glass-card p-10 rounded-3xl relative overflow-hidden group cursor-pointer"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="max-w-md">
                <Building2 className="text-secondary w-10 h-10 mb-8" />
                <h3 className="text-2xl font-bold mb-4">Üniversite-Sanayi İş Birliği</h3>
                <p className="text-on-surface-variant text-lg">
                  Akademik bilgi birikimini sanayinin dinamizmiyle buluşturan köprüler kuruyoruz.
                </p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="px-8 py-24 relative">
      <div className="max-w-5xl mx-auto bg-primary-container text-on-primary-container rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden group">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">
            Geleceğin Teknolojisini <br className="hidden md:block" /> Birlikte Kurgulayalım
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed">
            Ar-Ge merkezi kurulumundan global hibe programlarına kadar size özel stratejiler için ilk adımı atın.
          </p>
          <button 
            onClick={onOpenModal}
            className="bg-secondary text-on-secondary px-12 py-5 rounded-xl font-sans font-extrabold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
          >
            BAŞVUR
          </button>
        </motion.div>
        
        {/* Animated Background decorative glows */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-secondary/20 blur-[100px] group-hover:bg-secondary/30 transition-colors"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary-container/20 blur-[100px] group-hover:bg-secondary-container/30 transition-colors"></div>
        <Globe className="absolute -bottom-10 -left-10 w-64 h-64 text-white/5 rotate-12" />
      </div>
    </section>
  );
};

const Footer = () => {
  const sections = [
    { 
      title: "Hızlı Bağlantılar", 
      links: [
        { name: "Sektörler", href: "#sektorler" }, 
        { name: "Hizmetler", href: "#hizmetler" }, 
        { name: "Hakkımızda", href: "#hakkimizda" }
      ] 
    },
    { 
      title: "Yasal", 
      links: [
        { name: "Gizlilik Politikası", href: "#" }, 
        { name: "Kullanım Şartları", href: "#" }
      ] 
    }
  ];

  return (
    <footer className="w-full bg-surface border-t border-outline-variant/30 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Atom className="text-primary w-6 h-6" />
              <span className="font-display text-xl font-extrabold tracking-tighter text-primary">AR-GE Pazarı</span>
            </a>
            <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
              Kurumsal AR-GE ve İnovasyon ekosisteminin öncü danışmanlık merkezi.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h5 className="font-mono text-xs font-bold text-primary uppercase tracking-widest mb-6">{section.title}</h5>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-on-surface-variant hover:text-secondary text-sm font-medium transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className="font-mono text-xs font-bold text-primary uppercase tracking-widest mb-6">İletişim</h5>
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/905421199337" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-secondary text-sm font-medium transition-colors"
              >
                Bize Ulaşın
              </a>
              <div className="flex gap-4 mt-2">
                {[Share2, Linkedin, Twitter, Mail].map((Icon, i) => (
                  <button key={i} className="text-on-surface-variant hover:text-primary transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/30 text-center">
          <p className="font-mono text-[11px] text-on-surface-variant/70 uppercase tracking-widest">
            © 2024 AR-GE Pazarı Kurumsal AR-GE Danışmanlığı. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface">
      <Navigation onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <KPISection />
        <ProjectMarketGains />
        <ProjectMarketThemes />
        <Services />

        <CTASection onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />

      <AnimatePresence>
        {isModalOpen && (
          <PreEvaluationModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
