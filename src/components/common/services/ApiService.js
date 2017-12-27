const ApiService = () => {
  const nodeEnv = process.env.NODE_ENV.trim() || '';
  let footerUrl = '/footer';
  let baseUrl = '';
  let aboutContentPromise= fetch('/contentpage');
  let testimonialContentPromise= fetch('/endorsement');

  //about api return a promise, which the response.text() is a function return another promise
  let respTextPromise = {};
  respTextPromise.text= function(){
    return new Promise(function(resolve, reject){
      resolve(`{ htmlText = <p>pIn the late 1990’s the Y2K bug motivated four hotel owners to start looking for a new Windows based Property Management System to overcome the Y2K issue and better meet their needs. These needs included complete integration with the accounting system to ensure there’s no chance of a slip up between the Back and Front Offices, simple for staff to use yet offering a comprehensive administration and guest management system. One of their musts was that if needed to be easy to drill down on their financial costs, while at the same time streamlining all the day to day tasks in their hotel.</p>
        <p>could not find software that met all the “must haves,” and they each turned to Production Management Services suggesting that they undertook to develop a suitable solution for them.</p>
        <p>As a result of this request a separate development company, Penthouse Suite was started in 2002 by Liz Clayton and Jessie Homewood. One of the first critical decisions that had to be made was the choice of the back office accounting software. The owners wanted an enterprise grade accounting system that would be flexible and fully integrated with the Front Office. MYOB Exo software was chosen because of its strong financial abilities and the flexibility allowing the development to meet each owners’ different focuses – and running on MSSQL it was perfect to allow the development team to integrate the Front Office, so the system appeared as one. Software development company, Monster Code, owned by Phil Greeks was contracted early in 2003 to develop the applications. Phil’s prior experience working with MYOB’s EXO Business product was invaluable when building the fully integrated system, and the ability to collaborate with each of the hotel owners re their requirements was key to designing the functionality and appearance of Penthouse Suite.</p>
        <p>Over the ensuing 12 years, the software has kept moving forward with continual improvement based on user feedback and the requests of the Hotel Owners, Managers, and Staff.</p>
        <p>In 2016 a decision was made by the remaining stakeholders that exclusivity was no longer a requirement. So the decision was made to rebrand the software as Xenia Suite and to market it to a wider customer base, giving the opportunity for other hotel owners to gain from the use of this innovative, one of a kind software. Xenia Suite’s one aim is to ensure our clients are running as smoothly, efficiently and cost effectively as possible, driving their business further and helping them reach their business targets. To this end, the support provided is beyond expectations, as well as the software being as responsive as possible to our clients’ changing requirements.</p> }`);
    });
  };

  let aboutContentPromiseMock=new Promise(function(rsv, rej){
    rsv(respTextPromise);
  });


  //testimonial api return a promise, which the response.text() is a function return another promise
  let testimonialTextPromise = {};
  testimonialTextPromise.json= function(){
    return new Promise(function(resolve, reject){
      resolve({"items":[{"top":"\u003cp\u003eI have been managing Hotels and Motels for over 30 years and I have never had support like I have received over the last 5 years from this company. It was really outstanding. Day or night, summer or winter the phone is always answered with a smile in the voice and eagerness to help. Thanks so much for making my job easier\u003c/p\u003e\n\u003cp class=\"margin-0\"\u003eGail\u003c/p\u003e\n\u003cp class=\"margin-0\"\u003eHotel Manager\u003c/p\u003e\n\u003cp class=\"margin-0\"\u003eWellington\u003c/p\u003e","bottom":"\u003cp\u003eIt was 9 o’clock at night, the Hotel was full, storms everywhere, then lightening struck and the power surge took out all of our computers. The Server would not start up. So put out an SOS to support expecting them to reply with a promise of help the next day. Instead 3 and half hours later the support staff turned up with a temporary Server in the car. Checked out our gear then pulled the power supply out of their temporary unit, put it into our Server and had us back up and running by 4:00 am. Then had a coffee with us while the Night Audit ran. Once that was done, they left to drive back home, through the storm.\u003c/p\u003e\n\u003cp class=\"margin-0\"\u003eMark\u003c/p\u003e\n\u003cp class=\"margin-0\"\u003eMotel Manager\u003c/p\u003e\n\u003cp class=\"margin-0\"\u003eManawatu\u003c/p\u003e"}]});
    });
  };

  let testimonialContentPromiseMock=new Promise(function(rsv, rej){
    rsv(testimonialTextPromise);
  });


  switch (nodeEnv) {
    case 'development':
      baseUrl = 'http://localhost:3004';
      aboutContentPromise = aboutContentPromiseMock;
      testimonialContentPromise = testimonialContentPromiseMock;
      break;
    case 'production':
      break;
    default:
      break;
  }

  footerUrl = baseUrl + footerUrl;

  return { footerUrl, aboutContentPromise, testimonialContentPromise};
};

export default ApiService;
