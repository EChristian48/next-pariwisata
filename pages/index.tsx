import { NextSeo } from 'next-seo'
import {
  FaDribbble,
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaWikipediaW,
} from 'react-icons/fa'
import Achievement, { AchievementProps } from '~root/components/Achievements'
import FixedSideNavbar from '~root/components/FixedSideNavbar'
import PlaceCard, { PlaceCardProps } from '~root/components/PlaceCard'

const menus: string[] = ['Intro', 'Services', 'Our Story', 'Contact Us']

const achievements = new Array<AchievementProps>(4).fill({
  href:
    'https://nasional.tempo.co/read/1286036/bogor-raih-penghargaan-kota-sehat-kategori-tertinggi/full&view=ok',
  deskripsi:
    'Pemerintah Kota Bogor menerima penghargaan anugerah Swastisaba Tahun 2019 dari Kementerian Dalam Negeri Republik Indonesia.',
  judul: 'Bogor Raih Penghargaan Kota Sehat Kategori Tertinggi',
})

const places: PlaceCardProps[] = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Istana_Bogor.jpg',
    children:
      'Istana Bogor (Aksara Sunda Baku: ᮄᮞ᮪ᮒᮔ ᮘᮧᮌᮧᮁ) merupakan salah satu dari enam Istana Presiden Republik Indonesia yang mempunyai keunikan tersendiri dikarenakan aspek historis, kebudayaan, dan faunanya. Salah satunya adalah keberadaan rusa-rusa yang didatangkan langsung dari Nepal dan tetap terjaga dari dulu sampai sekarang. Seperti namanya, istana ini terletak di Bogor, Jawa Barat.',
  },
  {
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Kebun_Raya_Bogor_19.jpg/1280px-Kebun_Raya_Bogor_19.jpg',
    children:
      'Kebun Raya Bogor atau Kebun Botani Bogor (Aksara Sunda Baku: ᮊᮨᮘᮧᮔ᮪ ᮛᮚ ᮘᮧᮍᮧᮁ, Kebon Raya Bogor) adalah sebuah kebun botani besar yang terletak di Kota Bogor, Indonesia. Luasnya mencapai 87 hektar dan memiliki 15.000 jenis koleksi pohon dan tumbuhan.',
  },
  {
    src:
      'https://image.shutterstock.com/z/stock-photo-good-morning-from-gede-pangrango-mountain-bogor-cianjur-west-java-indonesia-1359947378.jpg',
    children:
      'Gunung Pangrango (Aksara Sunda Baku: ᮌᮥᮔᮥᮀ ᮕᮍᮢᮍᮧ) merupakan sebuah gunung yang terdapat di pulau Jawa, Indonesia. Gunung Pangrango mempunyai ketinggian setinggi 3.019 meter dari permukaan laut. Puncaknya dinamakan Puncak Mandalawangi. Puncak Mandalawangi juga merupakan titik pertemuan batas tiga kabupaten yaitu Kabupaten Bogor, Kabupaten Cianjur dan Kabupaten Sukabumi.',
  },
  {
    src:
      'https://explorewisata.com/wp-content/uploads/2018/04/devoyage-bogor.jpg',
    children:
      'Devoyage berpotensi menjadi salah satu objek wisata paling favorit di Kota Bogor. Pada saat Grand Opening saja mengundang penyanyi papan atas sekelas Tulus dan Kahitna. Apalagi melihat aneka spot foto kekinian yang sangat digemari oleh anak muda jaman now, seperti menjadi spot foto corner di Bogor yang sayang untuk dilewatkan.',
  },
]

export default function Home() {
  return (
    <>
      <NextSeo title='Home' />

      <FixedSideNavbar {...{ menus }} />

      {/* First Section */}
      <div className='parallax-content baner-content' id='intro'>
        <div className='container'>
          <div className='first-content'>
            <h1>Bogor</h1>
            <span>
              <em>Mari</em> ke Sini!
            </span>
            <div className='primary-button'>
              <a href='#services'>Cari Tahu</a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className='service-content' id='services'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              {/* Introduction */}
              <div className='left-text'>
                <h4>Tentang Kota Bogor</h4>
                <div className='line-dec'></div>
                <p>
                  Kota Bogor (aksara Sunda: ᮊᮧᮒ ᮘᮧᮍᮁᮧ) adalah sebuah kota di
                  Provinsi Jawa Barat. Kota ini terletak 59 km² di sebelah
                  selatan Jakarta, dan wilayahnya berada di tengah-tengah
                  wilayah Kabupaten Bogor.
                </p>

                <p>
                  Bogor dikenal dengan julukan Kota Hujan, karena memiliki curah
                  hujan yang sangat tinggi. Kota Bogor terdiri atas 6 kecamatan
                  yang dibagi lagi atas sejumlah 68 kelurahan. Pada masa
                  Kolonial Belanda, Bogor dikenal dengan nama Buitenzorg yang
                  berarti tanpa kecemasan atau aman tenteram.
                </p>

                <p>
                  Hari Jadi Kota Bogor dan Kabupaten Bogor diperingati setiap
                  tanggal 3 Juni, karena tanggal 3 Juni 1482 merupakan hari
                  penobatan Prabu Siliwangi sebagai raja dari Kerajaan
                  Pajajaran.
                </p>

                {/* <ul>
                  <li>- Praesent porta urna id eros</li>
                  <li>- Curabitur consectetur malesuada</li>
                  <li>- Nam pretium imperdiet enim</li>
                  <li>- Sed viverra arcu non nisi efficitur</li>
                </ul> */}

                <div className='primary-button'>
                  <a href='https://id.wikipedia.org/wiki/Kota_Bogor'>
                    <FaWikipediaW /> Halaman Wikipedia
                  </a>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className='col-md-8'>
              <div className='row'>
                {achievements.map((achievement, index) => (
                  <Achievement {...achievement} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='tabs-content' id='our-story'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <div className='wrapper'>
                <section id='first-tab-group' className='tabgroup'>
                  {places.map((place, index) => (
                    <PlaceCard {...place} key={index} />
                  ))}
                </section>

                <ul className='tabs clearfix' data-tabgroup='first-tab-group'>
                  <li>
                    <a href='#tab1' className='active'>
                      2008 - 2014
                    </a>
                  </li>
                  <li>
                    <a href='#tab2'>2014 - 2016</a>
                  </li>
                  <li>
                    <a href='#tab3'>2016 - 2019</a>
                  </li>
                  <li>
                    <a href='#tab4'>2019 - Now</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='parallax-content contact-content' id='contact-us'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='contact-form'>
                <div className='row'>
                  <form id='contact' action='' method='post'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <fieldset>
                          <input
                            name='name'
                            type='text'
                            className='form-control'
                            id='name'
                            placeholder='Your name...'
                          />
                        </fieldset>
                      </div>
                      <div className='col-md-12'>
                        <fieldset>
                          <input
                            name='email'
                            type='email'
                            className='form-control'
                            id='email'
                            placeholder='Your email...'
                          />
                        </fieldset>
                      </div>
                      <div className='col-md-12'>
                        <fieldset>
                          <textarea
                            name='message'
                            rows={6}
                            className='form-control'
                            id='message'
                            placeholder='Your message...'
                          ></textarea>
                        </fieldset>
                      </div>
                      <div className='col-md-12'>
                        <fieldset>
                          <button
                            type='submit'
                            id='form-submit'
                            className='btn'
                          >
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='map'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907'
                  width='100%'
                  height='390'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='primary-button'>
                <a href='#home'>Back To Top</a>
              </div>
              <ul>
                <li>
                  <a href='#'>
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaGoogle />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaDribbble />
                  </a>
                </li>
              </ul>
              <p>
                Made by:{' '}
                <a href='https://www.instagram.com/smkwikrama/?hl=en'>
                  SMK Wikrama Bogor
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
