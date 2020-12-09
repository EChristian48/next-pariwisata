import {} from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <div className='fixed-side-navbar'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <a className='nav-link' href='#home'>
              <span>Intro</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#services'>
              <span>Services</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#portfolio'>
              <span>Portfolio</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#our-story'>
              <span>Our Story</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#contact-us'>
              <span>Contact Us</span>
            </a>
          </li>
        </ul>
      </div>

      <div className='parallax-content baner-content' id='home'>
        <div className='container'>
          <div className='first-content'>
            <h1>Vanilla</h1>
            <span>
              <em>Bootstrap</em> v4.2.1 Theme
            </span>
            <div className='primary-button'>
              <a href='#services'>Discover More</a>
            </div>
          </div>
        </div>
      </div>

      <div className='service-content' id='services'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='left-text'>
                <h4>More About Vanilla</h4>
                <div className='line-dec'></div>
                <p>
                  Vanilla is free HTML CSS template with Bootstrap v4.2.1 and
                  you can apply this theme for your sites. Please share our
                  <a rel='nofollow' href='https://templatemo.com'>
                    website
                  </a>{' '}
                  to your friends or collegues. Thank you.
                </p>
                <ul>
                  <li>- Praesent porta urna id eros</li>
                  <li>- Curabitur consectetur malesuada</li>
                  <li>- Nam pretium imperdiet enim</li>
                  <li>- Sed viverra arcu non nisi efficitur</li>
                </ul>
                <div className='primary-button'>
                  <a href='#portfolio'>Learn More About Us</a>
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='service-item'>
                    <h4>classNameic Modern Design</h4>
                    <div className='line-dec'></div>
                    <p>
                      Sed lacinia ligula est, at venenatis ex iaculis quis.
                      Morbi sollicitudin nulla eget odio pellentesque.
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='service-item'>
                    <h4>Unique &amp; Creative Ideas</h4>
                    <div className='line-dec'></div>
                    <p>
                      Sed lacinia ligula est, at venenatis ex iaculis quis.
                      Morbi sollicitudin nulla eget odio pellentesque.
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='service-item'>
                    <h4>Effective Team Work</h4>
                    <div className='line-dec'></div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed lacinia ligula est, at venenatis ex iaculis quis.
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='service-item'>
                    <h4>Fast Support 24/7</h4>
                    <div className='line-dec'></div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed lacinia ligula est, at venenatis ex iaculis quis.
                    </p>
                  </div>
                </div>
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
                  <div id='tab1'>
                    <img src='/img/1st-tab.jpg' alt='' />
                    <p>
                      Please do not re-distribute our template ZIP file on your
                      template collection sites. You can make a screenshot and a
                      link back to our website. This template can be used for
                      personal or commercial purposes by end-users.
                    </p>
                  </div>
                  <div id='tab2'>
                    <img src='/img/2nd-tab.jpg' alt='' />
                    <p>
                      Aliquam eu ultrices risus, sed condimentum diam. Duis
                      risus nulla, elementum vitae nisi a, ornare maximus nisl.
                      Morbi et vehicula est. Cras at vulputate justo. Cras eu
                      nulla metus. Ut et pretium velit. Pellentesque at neque
                      tristique dui tempor venenatis.
                    </p>
                  </div>
                  <div id='tab3'>
                    <img src='/img/3rd-tab.jpg' alt='' />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed lacinia ligula est, at venenatis ex iaculis quis.
                      Morbi sollicitudin nulla eget odio pellentesque, sed
                      cursus diam iaculis.
                    </p>
                  </div>
                  <div id='tab4'>
                    <img src='/img/4th-tab.jpg' alt='' />
                    <p>
                      Duis risus nulla, elementum vitae nisi a, ornare maximus
                      nisl. Morbi et vehicula est. Cras at vulputate justo. Cras
                      eu nulla metus. Ut et pretium velit. Pellentesque at neque
                      tristique.
                    </p>
                  </div>
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
                    <i className='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-google'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-dribbble'></i>
                  </a>
                </li>
              </ul>
              <p>
                Copyright &copy; 2019 Company Name - Design:
                <a rel='nofollow noopener' href='https://templatemo.com'>
                  <em>TemplateMo</em>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
