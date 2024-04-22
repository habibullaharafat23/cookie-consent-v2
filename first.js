//google font
var link=document.createElement("link");
link.rel="stylesheet";
link.href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
document.getElementsByTagName("head")[0].appendChild(link);

//linking to css file
var link=document.createElement("link");
link.type="text/css";
link.rel="stylesheet";
link.href="https://cdn.jsdelivr.net/gh/habibullaharafat23/cookie-consent-v2@4fd22ad63a4fe25cef6cd924b9c8fa47341d1319/myStyle.css";
document.getElementsByTagName("head")[0].appendChild(link);



var consentdiv = document.createElement("div");

consentdiv.innerHTML = `
<div class=consent-banner-wrapper>
  <div class=consent-content-area>
    <div class="navigation-header">
      <div class="nav-item active-nav consent">
        <h3 class="consent-headlines">Instemming</h3>
      </div>
      <div class="nav-item details">
        <h3 class="consent-headlines">Details</h3>
      </div>
      <div class="nav-item about">
        <h3 class="consent-headlines">Over</h3>
      </div>
    </div>
    


    <div class="section-container">
      <div class="section-content active-section-content" id="consentSection">
        <p class="consent-descriptions">We gebruiken cookies om inhoud en advertenties te personaliseren, social media functies aan te bieden en ons verkeer te analyseren. We delen ook informatie over uw gebruik van onze site met onze social media-, advertentie- en analyse partners die deze kunnen combineren met andere informatie die u aan hen hebt verstrekt of die zij hebben verzameld tijdens uw gebruik van hun diensten.</p>
      </div>
      <div class="section-content" style="display:none" id="detailsSection">
        <div class="cookie-detail-wrapper necessaryCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Noodzakelijk</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalNecessaryCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked class="inputDisable" disabled>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Essentiële cookies helpen een website bruikbaar te maken door basisfuncties zoals paginanavigatie en toegang tot beveiligde delen van de website mogelijk te maken. De website kan niet goed functioneren zonder deze cookies</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper preferencesCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Voorkeuren</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalPreferencesCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Voorkeur cookies stellen een website in staat om informatie te onthouden die de manier verandert waarop de website zich gedraagt of eruit ziet, zoals je voorkeurstaal of de regio waarin je je bevindt.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper analyticsCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Analyse</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalAnalyticsCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Statistiekcookies helpen website-eigenaren te begrijpen hoe bezoekers interageren met websites door informatie anoniem te verzamelen en rapporteren.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper marketingCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Marketing</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalMarketingCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Marketingcookies worden gebruikt om bezoekers over verschillende websites te volgen. Het doel is om advertenties weer te geven die relevant en boeiend zijn voor de individuele gebruiker en daardoor waardevoller zijn voor uitgevers en adverteerders van derden.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
      </div>
      <div class="section-content" style="display:none" id="aboutSection">
        <p class="consent-descriptions">
          <span class="sec3Content" style="margin-top:15px">Cookies zijn kleine tekstbestanden die door websites gebruikt kunnen worden om de ervaring van een gebruiker efficiënter te maken.</span>
          <span class="sec3Content">De wet stelt dat we cookies op uw apparaat kunnen opslaan als ze strikt noodzakelijk zijn voor de werking van deze site. Voor alle andere soorten cookies hebben we uw toestemming nodig. Dit betekent dat cookies die zijn gecategoriseerd als noodzakelijk, worden verwerkt op basis van GDPR Art. 6 (1) (f). Alle andere cookies, wat betekent die van de categorieën voorkeuren en marketing, worden verwerkt op basis van GDPR Art. 6 (1) (a) GDPR.</span>
          <span class="sec3Content">Deze site maakt gebruik van verschillende soorten cookies. Sommige cookies worden geplaatst door derde partijen die op onze pagina's verschijnen.</span>
          <span class="sec3Content watermark">consent banner by <a href="https://alifmahmud.com" target="_blank">alifmahmud.com</a></span>
        </p>
      </div>
    </div>
    


  </div>

  <div class=consent-action-footer>
    <div class=action-buttons id=consentActionButtons>
      <button action=accept class="action-btn active" id=acceptConsentButton onclick=acceptConsent()>Accepteren</button>
      <button action=reject class=action-btn id=rejectConsentButton onclick=rejectConsent()>Afwijzen</button>
      <button action=preference class=action-btn id=preferenceConsentButton onclick=preferenceConsent()>Voorkeur</button>
    </div>
  </div>

</div>

<div class=miniConsentBanner>
  <img alt="" src=https://cdn.jsdelivr.net/gh/alifmahmudashik/marketing@marketing/consent-banner/img/cookie-icon.svg width="60px">
</div>
`

document.body.appendChild(consentdiv);


 
  