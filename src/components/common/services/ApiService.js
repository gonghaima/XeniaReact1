const ApiService = () => {
  const nodeEnv = process.env.NODE_ENV.trim() || '';
  let footerUrl = '/footer';
  let baseUrl = '';
  let aboutContentPromise= fetch('/contentpage');

  //api return a promise, which the response.text() is a function return another promise
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


  switch (nodeEnv) {
    case 'development':
      baseUrl = 'http://localhost:3004';
      aboutContentPromise = aboutContentPromiseMock;
      break;
    case 'production':
      break;
    default:
      break;
  }

  footerUrl = baseUrl + footerUrl;

  return { footerUrl, aboutContentPromise };
};

export default ApiService;
