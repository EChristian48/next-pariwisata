import { useToast } from '@chakra-ui/react'
import $ from 'jquery'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import { Alert, Carousel, Image, Row } from 'react-bootstrap'
import {
  FaCheckCircle,
  FaDribbble,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWikipediaW,
  FaYoutube,
} from 'react-icons/fa'
import Achievement, { AchievementProps } from '~root/components/Achievements'
import FixedSideNavbar from '~root/components/FixedSideNavbar'
import PlaceCard, { PlaceCardProps } from '~root/components/PlaceCard'

const menus: string[] = ['Bogor', 'Tentang', 'Tempat Wisata', 'Kontak Kami']

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
      'Istana Bogor merupakan salah satu dari enam Istana Presiden Republik Indonesia yang mempunyai keunikan tersendiri dikarenakan aspek historis, kebudayaan, dan faunanya.',
  },
  {
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Kebun_Raya_Bogor_19.jpg/1280px-Kebun_Raya_Bogor_19.jpg',
    children:
      'Kebun Raya Bogor atau Kebun Botani Bogor adalah sebuah kebun botani besar yang terletak di Kota Bogor, Indonesia. Luasnya mencapai 87 hektar dan memiliki 15.000 jenis koleksi pohon dan tumbuhan.',
  },
  {
    src:
      'https://mmc.tirto.id/image/otf/1024x535/2020/07/06/gunung-gede-pangrango-istockphoto_ratio-16x9.jpg',
    children:
      'Gunung Pangrango merupakan sebuah gunung yang terdapat di pulau Jawa, Indonesia. Gunung Pangrango mempunyai ketinggian setinggi 3.019 meter dari permukaan laut.',
  },
  {
    src:
      'https://explorewisata.com/wp-content/uploads/2018/04/devoyage-bogor.jpg',
    children:
      'Devoyage berpotensi menjadi salah satu objek wisata paling favorit di Kota Bogor. Pada saat Grand Opening saja mengundang penyanyi papan atas sekelas Tulus dan Kahitna.',
  },
]

export default function Home() {
  useEffect(() => {
    $(document).ready(function ($) {
      'use strict'

      var top_header = $('.parallax-content')
      top_header.css({ 'background-position': 'center center' }) // better use CSS

      $(window).scroll(function () {
        var st = $(this).scrollTop()
        top_header.css({
          'background-position': 'center calc(50% + ' + st * 0.5 + 'px)',
        })
      })
    })
  }, [])

  const toast = useToast()

  return (
    <>
      <NextSeo title='Home' />

      <FixedSideNavbar {...{ menus }} />

      {/* First Section */}
      <div className='parallax-content baner-content' id='bogor'>
        <div className='container'>
          <div className='first-content'>
            <h1>Bogor</h1>
            <span>
              Yuk <em>Wisata</em> ke Bogor!
            </span>
            <div className='primary-button'>
              <a href='#tentang'>Cari Tahu</a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className='service-content' id='tentang'>
        <div className='container'>
          <Row className='align-items-center justify-content-center py-5'>
            <Image src='/new-img/logokotabogor.webp' alt='Logo Kota Bogor' />
          </Row>
          <div className='row'>
            <div className='col-md-4'>
              {/* Introduction */}
              <div className='left-text'>
                <h4>Tentang Kota Bogor</h4>
                <div className='line-dec'></div>
                <p>
                  Kota Bogor adalah sebuah kota di Provinsi Jawa Barat. Kota ini
                  terletak 59 km² di sebelah selatan Jakarta, dan wilayahnya
                  berada di tengah-tengah wilayah Kabupaten Bogor.
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

                <div className='primary-button'>
                  <a href='https://id.wikipedia.org/wiki/Kota_Bogor'>
                    <FaWikipediaW size={20} /> Halaman Wikipedia
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

      <div className='tabs-content' id='tempat-wisata'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <div className='wrapper'>
                <Carousel>
                  {places.map((place, index) => (
                    <Carousel.Item key={index}>
                      <div className='tabgroup'>
                        <PlaceCard {...place} />
                        <Carousel.Caption>
                          <p>{place.children}</p>
                        </Carousel.Caption>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='parallax-content contact-content' id='kontak-kami'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='contact-form'>
                <div className='row'>
                  <form
                    id='contact'
                    action=''
                    method='post'
                    onSubmit={e => {
                      e.preventDefault()

                      toast({
                        render: () => (
                          <Alert variant='success'>
                            Message sent successfully! <FaCheckCircle />
                          </Alert>
                        ),
                      })
                    }}
                  >
                    <div className='row'>
                      <div className='col-md-12'>
                        <fieldset>
                          <input
                            name='name'
                            type='text'
                            className='form-control'
                            id='name'
                            placeholder='Your name...'
                            required
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
                            required
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
                            required
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
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507368.0597528409!2d106.5338970013562!3d-6.545285958604711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3e312798437%3A0x301576d14feb990!2sBogor%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1607570303268!5m2!1sen!2sid'
                  width='100%'
                  height='390px'
                  style={{ border: 0 }}
                  aria-hidden='false'
                />
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
                <a href='#bogor'>Back To Top</a>
              </div>
              <ul>
                <li>
                  <a href='https://www.youtube.com/channel/UCyhEUzlXbXet57qFnDfdWuw'>
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/smkwikrama/?hl=en'>
                    <FaInstagram />
                  </a>
                </li>
              </ul>
              <p>
                Copyright &copy; 2020{' '}
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
