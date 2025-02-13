// Dropdown options
const genders = ['Male', 'Female'];
const states = [
  'Abuja',
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
];
const socioEconomicStatuses = ['Low', 'Middle', 'High'];
const maritalStatuses = ['Single', 'Married', 'Divorced', 'Widowed'];
const professions = ['Self Employed', 'Government Worker', 'Private Worker', "Unemployed"];
const statesLGAsCoordinates: { [key: string]: { name: string; lat: number; lng: number }[] } = {
  Abuja: [
    { name: 'Abaji', lat: 8.867896550000001, lng: 6.828181568716731 },
    { name: 'Bwari', lat: 9.23574785, lng: 7.4718745759887035 },      
    { name: 'Gwagwalada', lat: 9.079515, lng: 7.04411313821964 },     
    { name: 'Kuje', lat: 8.698441500000001, lng: 7.300499254299503 }, 
    { name: 'Kwali', lat: 9.06431034209936, lng: 7.481255967513445 }, 
    {
      name: 'Municipal Area Council',
      lat: 9.0805107,
      lng: 7.496900526205773
    }
  ],
  Abia: [
    { name: 'Aba North', lat: 5.0938628, lng: 7.394787707670602 },    
    { name: 'Aba South', lat: 5.08765915, lng: 7.349713517654941 },   
    {
      name: 'Arochukwu',
      lat: 5.5185153499999995,
      lng: 7.869404471078063
    },
    { name: 'Bende', lat: 5.639079799999999, lng: 7.5893402023544 },  
    { name: 'Ikwuano', lat: 5.40927745, lng: 7.572991607658478 },     
    {
      name: 'Isiala Ngwa North',
      lat: 5.2795472,
      lng: 7.442293067171033
    },
    {
      name: 'Isiala Ngwa South',
      lat: 5.385552199999999,
      lng: 7.416350925
    },
    {
      name: 'Isuikwuato',
      lat: 5.8080022499999995,
      lng: 7.46967045670808
    },
    {
      name: 'Obi Ngwa',
      lat: 5.1522714999999994,
      lng: 7.447814154474358
    },
    { name: 'Ohafia', lat: 5.6629147500000006, lng: 7.832488645403231 },
    { name: 'Osisioma', lat: 5.19249225, lng: 7.335839868561562 },
    {
      name: 'Ugwunagbo',
      lat: 5.0223493999999995,
      lng: 7.355465552118695
    },
    { name: 'Ukwa East', lat: 4.9369271, lng: 7.402802303197825 },
    { name: 'Ukwa West', lat: 4.9791653, lng: 7.264681212658806 },
    {
      name: 'Umuahia North',
      lat: 5.607821449999999,
      lng: 7.476200272801194
    },
    {
      name: 'Umuahia South',
      lat: 5.498079300000001,
      lng: 7.4618448809739935
    },
    { name: 'Umu Nneochi', lat: 5.9731936, lng: 7.405340265424122 }
  ],
  Adamawa: [
    { name: 'Demsa', lat: 9.422218149999999, lng: 12.08752172995121 },
    { name: 'Fufore', lat: 9.25771005, lng: 12.75928711268894 },
    { name: 'Ganye', lat: 8.43799075, lng: 11.854490084941265 },
    { name: 'Girei', lat: 9.41821195, lng: 12.47454252514791 },
    { name: 'Gombi', lat: 10.242524150000001, lng: 12.538840010089467 },
    { name: 'Guyuk', lat: 9.8359475, lng: 11.9223112147302 },
    { name: 'Hong', lat: 10.262294749999999, lng: 12.94792540302047 },
    { name: 'Jada', lat: 8.69646275, lng: 12.32158181639036 },
    { name: 'Lamurde', lat: 9.6072357, lng: 11.7930477 },
    { name: 'Madagali', lat: 10.786603, lng: 13.488551266407342 },
    { name: 'Maiha', lat: 9.8562705, lng: 13.15763974963749 },
    { name: 'Mayo-Belwa', lat: 8.871243, lng: 12.020226810083912 },
    { name: 'Michika', lat: 10.57750505, lng: 13.404557869849604 },
    { name: 'Mubi North', lat: 10.2801221, lng: 13.321450130328785 },
    { name: 'Mubi South', lat: 10.148035, lng: 13.328497909670821 },
    { name: 'Numan', lat: 9.4598443, lng: 12.0359283 },
    { name: 'Shelleng', lat: 9.9784484, lng: 12.10808912025199 },
    { name: 'Song', lat: 9.778979750000001, lng: 12.642119036835934 },
    { name: 'Toungo', lat: 8.11751, lng: 12.0469523 },
    { name: 'Yola North', lat: 9.26628495, lng: 12.251131996050141 },
    { name: 'Yola South', lat: 9.2581806, lng: 12.408212476465668 }
  ],
  'Akwa Ibom': [
    { name: 'Abak', lat: 5.004073099999999, lng: 7.795666795599514 },
    { name: 'Eastern Obolo', lat: 4.5130764, lng: 7.682723334359615 },
    { name: 'Eket', lat: 4.6360066, lng: 7.957541614633177 },
    { name: 'Esit Eket', lat: 4.64273405, lng: 8.075903467172743 },
    { name: 'Essien Udim', lat: 5.1035626, lng: 7.6567272806092 },
    { name: 'Etim Ekpo', lat: 4.954823, lng: 7.573844611841997 },
    { name: 'Etinan', lat: 4.8457415, lng: 7.843149923536664 },
    { name: 'Ibeno', lat: 4.5580121, lng: 8.108555125919988 },
    {
      name: 'Ibesikpo Asutan',
      lat: 4.9179451499999995,
      lng: 7.964799070155389
    },
    { name: 'Ibiono-Ibom', lat: 5.2040105, lng: 7.897450604600483 },
    { name: 'Ika', lat: 5.0161686, lng: 7.5426190019120956 },
    { name: 'Ikono', lat: 5.18323465, lng: 7.790899593684118 },
    { name: 'Ikot Abasi', lat: 4.60783505, lng: 7.634969399377504 },
    { name: 'Ikot Ekpene', lat: 5.181975, lng: 7.7132177 },
    { name: 'Ini', lat: 5.403971650000001, lng: 7.75151857782899 },
    { name: 'Itu', lat: 5.1451749499999995, lng: 8.003291358380968 },
    { name: 'Mbo', lat: 4.6506469, lng: 8.249397606336037 },
    {
      name: 'Mkpat-Enin',
      lat: 4.7047345499999995,
      lng: 7.761009542834241
    },
    { name: 'Nsit-Atai', lat: 4.8185556, lng: 8.013983047476689 },
    { name: 'Nsit-Ibom', lat: 4.90363455, lng: 7.896614017212878 },
    { name: 'Nsit-Ubium', lat: 4.7597313, lng: 7.948723551688754 },
    { name: 'Obot Akara', lat: 5.24345495, lng: 7.60069573223162 },
    { name: 'Okobo', lat: 4.8136649, lng: 8.123968138524376 },
    { name: 'Onna', lat: 4.63675835, lng: 7.8723706795971164 },
    { name: 'Oron', lat: 4.8169432, lng: 8.2369999 },
    { name: 'Oruk Anam', lat: 4.82023505, lng: 7.650814706357024 },
    { name: 'Udung-Uko', lat: 4.7505095, lng: 8.263193872899205 },
    { name: 'Ukanafun', lat: 4.9038458, lng: 7.605502805573577 },
    { name: 'Uruan', lat: 5.0038805, lng: 8.077482440919034 },
    {
      name: 'Urue-Offong/Oruko',
      lat: 4.722390900000001,
      lng: 8.16880139056803
    },
    { name: 'Uyo', lat: 4.9902370000000005, lng: 7.9974399113319485 }
  ],
  Anambra: [
    { name: 'Aguata', lat: 5.9842248, lng: 7.090643210873353 },
    {
      name: 'Anambra East',
      lat: 6.314698249999999,
      lng: 6.892956691269136
    },
    {
      name: 'Anambra West',
      lat: 6.4925694499999995,
      lng: 6.776578597606342
    },
    { name: 'Anaocha', lat: 6.0922999, lng: 7.021171370313768 },
    { name: 'Awka North', lat: 6.34178755, lng: 7.058343655240461 },
    { name: 'Awka South', lat: 6.19405605, lng: 7.0943469415059655 },
    {
      name: 'Ayamelum',
      lat: 6.5346229000000005,
      lng: 6.974797440094921
    },
    { name: 'Dunukofia', lat: 6.2738049, lng: 6.9780011462764495 },
    { name: 'Ekwusigo', lat: 5.9883647, lng: 6.840200353859071 },
    { name: 'Idemili North', lat: 6.13714625, lng: 6.885697107849618 },
    { name: 'Idemili South', lat: 6.0722537, lng: 6.833237248297729 },
    { name: 'Ihiala', lat: 5.8443234, lng: 6.873287365423218 },
    { name: 'Njikoka', lat: 6.1892624, lng: 6.993784205355688 },
    {
      name: 'Nnewi North',
      lat: 6.0062320499999995,
      lng: 6.91201584625799
    },
    {
      name: 'Nnewi South',
      lat: 5.9604744499999995,
      lng: 6.9807065781309365
    },
    { name: 'Ogbaru', lat: 5.9212864, lng: 6.76099690724087 },
    {
      name: 'Onitsha North',
      lat: 6.1506953499999995,
      lng: 6.802854813426453
    },
    { name: 'Onitsha South', lat: 6.13936475, lng: 6.773247019073018 },
    {
      name: 'Orumba North',
      lat: 6.113402150000001,
      lng: 7.162569595915986
    },
    {
      name: 'Orumba South',
      lat: 5.989224849999999,
      lng: 7.204919877906828
    },
    { name: 'Oyi', lat: 6.23959565, lng: 6.9073480096803745 }
  ],
  Bauchi: [
    { name: 'Alkaleri', lat: 9.89681595, lng: 10.430836589611221 },
    { name: 'Bauchi', lat: 10.3168749, lng: 9.8410189 },
    { name: 'Bogoro', lat: 9.6369083, lng: 9.620027211743103 },
    { name: 'Damban', lat: 11.61760605, lng: 10.766686785344458 },
    { name: 'Darazo', lat: 11.11887545, lng: 10.556201653796672 },
    { name: 'Dass', lat: 10.011407949999999, lng: 9.471820252261256 },
    { name: 'Gamawa', lat: 12.014595, lng: 10.593478102717132 },
    { name: 'Ganjuwa', lat: 10.7493609, lng: 9.989956592845882 },
    { name: 'Giade', lat: 11.416582649999999, lng: 10.23468981718198 },
    { name: 'Itas/Gadau', lat: 11.87706395, lng: 10.044534902521644 },
    { name: "Jama'are", lat: 11.6515401, lng: 9.888518444520232 },
    { name: 'Katagum', lat: 11.65573285, lng: 10.35037189496593 },
    { name: 'Kirfi', lat: 10.439376549999999, lng: 10.536092874857369 },
    { name: 'Misau', lat: 11.38611935, lng: 10.468552146884349 },
    { name: 'Ningi', lat: 11.00462865, lng: 9.201678755593958 },
    { name: 'Shira', lat: 11.46488435, lng: 10.062994066601998 },
    { name: 'Tafawa Balewa', lat: 9.8441524, lng: 9.593306138581767 },
    { name: 'Toro', lat: 10.3502951, lng: 9.3286619610377 },
    { name: 'Warji', lat: 11.1465091, lng: 9.758817861476874 },
    { name: 'Zaki', lat: 12.18746605, lng: 10.24482061512251 }
  ],
  Bayelsa: [
    { name: 'Brass', lat: 4.5121961, lng: 6.4818844927311074 },
    { name: 'Ekeremor', lat: 4.94401565, lng: 5.710205995415053 },
    {
      name: 'Kolokuma/Opokuma',
      lat: 5.06637585,
      lng: 6.246108441457386
    },
    { name: 'Nembe', lat: 4.5154824, lng: 6.283182612322712 },
    { name: 'Ogbia', lat: 4.79574445, lng: 6.313819305052865 },
    { name: 'Sagbama', lat: 5.0969489, lng: 6.126744220883079 },
    { name: 'Southern Ijaw', lat: 4.71321975, lng: 5.876791333931289 },
    { name: 'Yenagoa', lat: 4.9334651, lng: 6.2747786 }
  ],
  Benue: [
    { name: 'Ado', lat: 6.780125849999999, lng: 8.061362696739234 },
    { name: 'Agatu', lat: 7.87317565, lng: 7.879691587275744 },
    { name: 'Apa', lat: 7.600634100000001, lng: 7.8852036340193585 },
    { name: 'Buruku', lat: 7.419196599999999, lng: 9.213748213501832 },
    { name: 'Gboko', lat: 7.37784815, lng: 8.871322377025628 },
    { name: 'Guma', lat: 7.8682914, lng: 8.828653716146246 },
    {
      name: 'Gwer East',
      lat: 7.378216999999999,
      lng: 8.35274251749189
    },
    { name: 'Gwer West', lat: 7.62104465, lng: 8.206342041492976 },
    { name: 'Katsina-Ala', lat: 7.3157084, lng: 9.5663631129473 },
    { name: 'Konshisha', lat: 7.1204698, lng: 8.618047290964688 },
    { name: 'Kwande', lat: 6.8549397, lng: 9.399803497845813 },
    { name: 'Logo', lat: 7.66717125, lng: 9.207467574683378 },
    { name: 'Makurdi', lat: 7.7312634, lng: 8.538425 },
    { name: 'Obi', lat: 7.04398035, lng: 8.30383794000037 },
    { name: 'Ogbadibo', lat: 7.00883295, lng: 7.645656879745118 },
    { name: 'Ohimini', lat: 7.25025535, lng: 7.95726724779183 },
    { name: 'Oju', lat: 6.8701551, lng: 8.3636441817853 },
    { name: 'Okpokwu', lat: 7.045375849999999, lng: 7.910100235718337 },
    { name: 'Otukpo', lat: 7.1912599, lng: 8.1328576 },
    { name: 'Tarka', lat: 7.61490515, lng: 8.823735009461853 },
    { name: 'Ukum', lat: 7.607726550000001, lng: 9.60592333685921 },
    {
      name: 'Ushongo',
      lat: 7.1040665999999995,
      lng: 9.097223976623711
    },
    {
      name: 'Vandeikya',
      lat: 6.833444350000001,
      lng: 9.045834371061535
    }
  ],
  Borno: [
    { name: 'Abadam', lat: 13.37042585, lng: 13.26816088911142 },
    { name: 'Askira/Uba', lat: 10.72515255, lng: 13.156518868461916 },
    { name: 'Bama', lat: 11.54544, lng: 14.0064277 },
    { name: 'Bayo', lat: 10.452489, lng: 11.6827984 },
    { name: 'Biu', lat: 10.6146098, lng: 12.1909612 },
    { name: 'Chibok', lat: 10.8690461, lng: 12.8480309 },
    { name: 'Damboa', lat: 11.0793105, lng: 12.668863342750114 },
    { name: 'Dikwa', lat: 11.94430165, lng: 14.07116043047716 },
    { name: 'Gubio', lat: 12.6718417, lng: 12.77563465826085 },
    {
      name: 'Guzamala',
      lat: 12.864006499999999,
      lng: 13.250896927021696
    },
    { name: 'Gwoza', lat: 11.0831008, lng: 13.6941974 },
    { name: 'Hawul', lat: 10.4545467, lng: 12.307770259271482 },
    { name: 'Jere', lat: 11.93607445, lng: 13.181670342190419 },
    { name: 'Kaga', lat: 11.6008803, lng: 12.530187561016273 },
    { name: 'Kala/Balge', lat: 11.906762, lng: 14.456253937715818 },
    { name: 'Konduga', lat: 11.6327538, lng: 13.184069211838036 },
    { name: 'Kukawa', lat: 13.1239109, lng: 13.777522293656205 },
    { name: 'Kwaya Kusar', lat: 10.4857449, lng: 11.85431947163584 },
    { name: 'Mafa', lat: 11.9239025, lng: 13.6002436 },
    { name: 'Magumeri', lat: 12.1432355, lng: 12.6629372030111 },
    { name: 'Maiduguri', lat: 11.8395375, lng: 13.1536214 },
    { name: 'Marte', lat: 12.4029201, lng: 13.832638559769695 },
    { name: 'Mobbar', lat: 13.066903499999999, lng: 12.67769691340996 },
    { name: 'Monguno', lat: 12.65344525, lng: 13.685671189571734 },
    { name: 'Ngala', lat: 12.3758114, lng: 14.085234189140309 },
    {
      name: 'Nganzai',
      lat: 12.449344450000002,
      lng: 13.125241114358442
    },
    { name: 'Shani', lat: 10.151198, lng: 11.9796686 }
  ],
'Cross River': [
    { name: 'Abi', lat: 5.88668345, lng: 8.032871142441985 },
    { name: 'Akamkpa', lat: 5.38964605, lng: 8.544655607884728 },       
    { name: 'Akpabuyo', lat: 4.89563435, lng: 8.480388103512073 }, 
    { name: 'Bakassi', lat: 4.8171, lng: 8.6021},     
    { name: 'Bekwarra', lat: 6.7068095, lng: 8.89437370930537 },        
    { name: 'Biase', lat: 5.547368049999999, lng: 8.052026653081514 },  
    { name: 'Boki', lat: 6.26803565, lng: 9.02908406588377 },
    {
      name: 'Calabar Municipal',
      lat: 5.0153885,
      lng: 8.346658001516946
    },
    {
      name: 'Calabar South',
      lat: 4.8527024999999995,
      lng: 8.320731524615253
    },
    { name: 'Etung', lat: 5.8739933, lng: 8.807615309080273 },
    { name: 'Ikom', lat: 5.962765, lng: 8.7239694 },
    { name: 'Obanliku', lat: 6.4864846, lng: 9.2946333825018 },
    { name: 'Obubra', lat: 6.0153110000000005, lng: 8.414666700929725 },
    { name: 'Obudu', lat: 6.5583976, lng: 9.053288883929998 },
    { name: 'Odukpani', lat: 5.1865544, lng: 8.197549140273129 },       
    { name: 'Ogoja', lat: 6.52780295, lng: 8.687844754183175 },
    { name: 'Yakurr', lat: 5.8176086, lng: 8.177905748477649 },
    { name: 'Yala', lat: 6.58959245, lng: 8.495931006643174 }
  ],
  Delta: [
    { name: 'Aniocha North', lat: 6.36799405, lng: 6.470280438186837 }, 
    { name: 'Aniocha South', lat: 6.1419725, lng: 6.477390127053598 },
    { name: 'Bomadi', lat: 5.2255299, lng: 5.809729480925212 },
    { name: 'Burutu', lat: 5.3522824, lng: 5.5079208 },
    { name: 'Ethiope East', lat: 5.6672926, lng: 5.972129657996909 },
    {
      name: 'Ethiope West',
      lat: 5.9113228499999995,
      lng: 5.7758592177283745
    },
    { name: 'Ika North East', lat: 6.2361939, lng: 6.320776988087539 },
    {
      name: 'Ika South',
      lat: 6.1849053000000005,
      lng: 6.138080871147166
    },
    { name: 'Isoko North', lat: 5.52134205, lng: 6.130870491268007 },
    { name: 'Isoko South', lat: 5.3895204, lng: 6.211049621044424 },
    { name: 'Ndokwa East', lat: 5.6582752, lng: 6.496140761353628 },
    { name: 'Ndokwa West', lat: 5.8260994, lng: 6.416355059643836 },
    { name: 'Okpe', lat: 5.7004104, lng: 5.75187931671686 },
    { name: 'Oshimili North', lat: 6.30333, lng: 6.64777291488069 },
    {
      name: 'Oshimili South',
      lat: 6.1303620500000005,
      lng: 6.730733427256107
    },
    { name: 'Patani', lat: 5.17453215, lng: 6.0940440926907 },
    { name: 'Sapele', lat: 5.8948144, lng: 5.6795885 },
    { name: 'Udu', lat: 5.47735195, lng: 5.821686039389325 },
    {
      name: 'Ughelli North',
      lat: 5.486883649999999,
      lng: 6.01752592725169
    },
    {
      name: 'Ughelli South',
      lat: 5.360209449999999,
      lng: 5.967778669073083
    },
    {
      name: 'Ukwuani',
      lat: 5.8494399999999995,
      lng: 6.252058277544972
    },
    { name: 'Uvwie', lat: 5.56503105, lng: 5.787757748459799 },
    { name: 'Warri North', lat: 5.92353055, lng: 5.134861808677374 },
    { name: 'Warri South', lat: 5.626158, lng: 5.6514533 },
    {
      name: 'Warri South West',
      lat: 5.60422775,
      lng: 5.323033095030304
    }
  ],
Ebonyi: [
    { name: 'Abakaliki', lat: 6.3208897, lng: 8.1133202 },
    {
      name: 'Afikpo North',
      lat: 5.8602469500000005,
      lng: 7.918471197664151
    },
    {
      name: 'Afikpo South',
      lat: 5.8274591000000004,
      lng: 7.783914192743355
    },
    { name: 'Ebonyi', lat: 6.5335734, lng: 8.133139120996997 },      
    { name: 'Ezza North', lat: 6.2590742, lng: 7.98352256784563 },   
    {
      name: 'Ezza South',
      lat: 6.1269331000000005,
      lng: 8.021690955000397
    },
    { name: 'Ikwo', lat: 6.083020449999999, lng: 8.185629934811326 },
    { name: 'Ishielu', lat: 6.4270885, lng: 7.844114881037367 },     
    { name: 'Ivo', lat: 5.9093492, lng: 7.637394973252905 },
    { name: 'Izzi', lat: 6.552373449999999, lng: 8.271863275150157 },
    { name: 'Ohaozara', lat: 6.00455525, lng: 7.793850098935701 },
    { name: 'Ohaukwu', lat: 6.52403735, lng: 8.010848072925828 },
    { name: 'Onicha', lat: 6.1085424, lng: 7.814240755923017 }
  ],
  Edo: [
    {
      name: 'Akoko-Edo',
      lat: 7.352393599999999,
      lng: 6.125235110308745
    },
    { name: 'Egor', lat: 6.34383845, lng: 5.561566783662107 },
    { name: 'Esan Central', lat: 6.7047055, lng: 6.207925867430832 },
    { name: 'Esan North-East', lat: 6.7867315, lng: 6.433488407005409 },
    {
      name: 'Esan South-East',
      lat: 6.576807049999999,
      lng: 6.486083843005495
    },
    { name: 'Esan West', lat: 6.65464905, lng: 6.13966245006791 },
    { name: 'Etsako Central', lat: 6.978096, lng: 6.515776051138975 },
    { name: 'Etsako East', lat: 7.1872207, lng: 6.516912285629234 },
    {
      name: 'Etsako West',
      lat: 6.996928199999999,
      lng: 6.301801401207017
    },
    { name: 'Igueben', lat: 6.6018648, lng: 6.242448 },
    {
      name: 'Ikpoba-Okha',
      lat: 6.199765449999999,
      lng: 5.662246701746319
    },
    { name: 'Oredo', lat: 6.229763050000001, lng: 5.561790183209288 },
    { name: 'Orhionmwon', lat: 6.0884175, lng: 5.948360079068117 },
    { name: 'Ovia North-East', lat: 6.3963337, lng: 5.502826307782771 },
    {
      name: 'Ovia South-West',
      lat: 6.47095345,
      lng: 5.299159132565771
    },
    {
      name: 'Owan East',
      lat: 7.030605550000001,
      lng: 6.105629730319855
    },
    { name: 'Owan West', lat: 6.92744635, lng: 5.8934671742557025 },
    { name: 'Uhunmwonde', lat: 6.52593615, lng: 5.900073206903087 }
  ],
  Ekiti: [
    { name: 'Ado Ekiti', lat: 7.6232482, lng: 5.22274 },
    { name: 'Efon', lat: 7.68364815, lng: 4.934886763006355 },
    { name: 'Ekiti East', lat: 7.72080945, lng: 5.659776705090287 },
    {
      name: 'Ekiti South-West',
      lat: 7.52346375,
      lng: 5.033357944837451
    },
    { name: 'Ekiti West', lat: 7.7210934, lng: 5.034239031290989 },
    { name: 'Emure', lat: 7.42937515, lng: 5.512924362872782 },
    {
      name: 'Gbonyin',
      lat: 7.6176543500000005,
      lng: 5.502384054210898
    },
    { name: 'Ido Osi', lat: 7.86334825, lng: 5.196943466283316 },
    { name: 'Ijero', lat: 7.831735849999999, lng: 5.058355303718265 },
    { name: 'Ikere', lat: 7.5135717, lng: 5.220275870775892 },
    { name: 'Ikole', lat: 7.883153200000001, lng: 5.5156487227271995 },
    { name: 'Ilejemeje', lat: 7.96015315, lng: 5.230613473129341 },
    {
      name: 'Irepodun/Ifelodun',
      lat: 7.70622395,
      lng: 5.2644601866019975
    },
    { name: 'Ise/Orun', lat: 7.4205606, lng: 5.384951048253926 },
    { name: 'Moba', lat: 7.99288365, lng: 5.131157961258554 },
    { name: 'Oye', lat: 7.88053585, lng: 5.337534402902156 }
  ],
Enugu: [
    { name: 'Aninri', lat: 6.0679259000000005, lng: 7.597108458884581 },
    { name: 'Awgu', lat: 6.17313265, lng: 7.451247777659612 },
    {
      name: 'Enugu East',
      lat: 6.548344500000001,
      lng: 7.556835903397333
    },
    { name: 'Enugu North', lat: 6.44107845, lng: 7.538320722978639 },
    {
      name: 'Enugu South',
      lat: 6.4001342999999995,
      lng: 7.514390368282138
    },
    { name: 'Ezeagu', lat: 6.41705535, lng: 7.237960116169273 },
    { name: 'Igbo Etiti', lat: 6.6889069, lng: 7.405926584253853 },
    {
      name: 'Igbo Eze North',
      lat: 7.004796750000001,
      lng: 7.459485291146693
    },
    { name: 'Igbo Eze South', lat: 6.9519151, lng: 7.349986631250698 },
    { name: 'Isi Uzo', lat: 6.741861800000001, lng: 7.680936693306513 },
    { name: 'Nkanu East', lat: 6.3371067, lng: 7.6610906163598065 },
    { name: 'Nkanu West', lat: 6.3215568, lng: 7.520835130944854 },
    { name: 'Nsukka', lat: 6.8561, lng: 7.3927 },
    {
      name: 'Oji River',
      lat: 6.165493250000001,
      lng: 7.303022878249402
    },
    { name: 'Udenu', lat: 6.89582755, lng: 7.560805075519086 },
    { name: 'Udi', lat: 6.4361489, lng: 7.398736395013145 },
    { name: 'Uzo Uwani', lat: 6.68966435, lng: 7.162330771688465 }
  ],
  Gombe: [
    { name: 'Akko', lat: 10.1003094, lng: 11.00285957035756 },
    { name: 'Balanga', lat: 9.945255, lng: 11.600761 },
    { name: 'Billiri', lat: 9.8350997, lng: 11.141875886913159 },
    { name: 'Dukku', lat: 10.779917699999999, lng: 10.821052294886123 },
    { name: 'Funakaye', lat: 10.85419905, lng: 11.444681215995438 },
    { name: 'Gombe', lat: 10.28221605, lng: 11.16297712124402 },
    { name: 'Kaltungo', lat: 9.8269458, lng: 11.436106409330003 },
    { name: 'Kwami', lat: 10.49187565, lng: 11.227419583688036 },
    { name: 'Nafada', lat: 11.05056365, lng: 11.255126126709488 },
    { name: 'Shongom', lat: 9.7357178, lng: 11.273237905251648 },
    {
      name: 'Yamaltu/Deba',
      lat: 10.307170750000001,
      lng: 11.373215278351738
    }
  ],
  Imo: [
    { name: 'Aboh Mbaise', lat: 5.4188933, lng: 7.260670204366807 },
    { name: 'Ahiazu Mbaise', lat: 5.5631995, lng: 7.263626847762457 },
    { name: 'Ehime Mbano', lat: 5.6882541, lng: 7.300181361809889 },
    { name: 'Ezinihitte', lat: 5.4732246, lng: 7.322460107520685 },
    { name: 'Ideato North', lat: 5.8611507, lng: 7.1358231552650855 },
    {
      name: 'Ideato South',
      lat: 5.8053246000000005,
      lng: 7.138923109844448
    },
    { name: 'Ihitte/Uboma', lat: 5.6492083, lng: 7.381495792349654 },
    { name: 'Ikeduru', lat: 5.5596812, lng: 7.148927127483982 },
    { name: 'Isiala Mbano', lat: 5.68468955, lng: 7.196353758503406 },
    { name: 'Isu', lat: 5.6868982500000005, lng: 7.056131289560314 },
    { name: 'Mbaitoli', lat: 5.59354735, lng: 7.0191523268949565 },
    { name: 'Ngor Okpala', lat: 5.3274231, lng: 7.157503381166101 },
    { name: 'Njaba', lat: 5.70549515, lng: 7.00213193492228 },
    { name: 'Nkwerre', lat: 5.7442951, lng: 7.099426682955977 },
    { name: 'Nwangele', lat: 5.7111706, lng: 7.119574125421648 },
    { name: 'Obowo', lat: 5.5585649, lng: 7.360563717064813 },
    { name: 'Oguta', lat: 5.65946435, lng: 6.778382444173406 },
    { name: 'Ohaji/Egbema', lat: 5.4234836, lng: 6.838826088324313 },
    { name: 'Okigwe', lat: 5.822709100000001, lng: 7.319829879090532 },
{name: 'Onuimo',lat: 5.7736,lng: 7.2411},
    { name: 'Orlu', lat: 5.8179105, lng: 7.0409322202359785 },
    { name: 'Orsu', lat: 5.84942675, lng: 6.982806157947056 },
    { name: 'Oru East', lat: 5.72748475, lng: 6.947875477635026 },
    { name: 'Oru West', lat: 5.7544954, lng: 6.9107675264366915 },
    {
      name: 'Owerri Municipal',
      lat: 5.479900600000001,
      lng: 7.021982734009069
    },
    {
      name: 'Owerri North',
      lat: 5.432385699999999,
      lng: 7.107475476129818
    },
    { name: 'Owerri West', lat: 5.40682745, lng: 6.9851183090486755 }
  ],
Jigawa: [
    { name: 'Auyo', lat: 12.33332965, lng: 9.912834520175645 },
    { name: 'Babura', lat: 12.6050122, lng: 8.827580247812131 },
    { name: 'Biriniwa', lat: 12.8364638, lng: 10.083571878861262 },
    { name: 'Birnin Kudu', lat: 11.4514358, lng: 9.477428 },
    { name: 'Buji', lat: 11.5483373, lng: 9.731501519753731 },
    { name: 'Dutse', lat: 11.6909859, lng: 9.3390747 },
    { name: 'Gagarawa', lat: 12.48563115, lng: 9.520262932885505 },
    { name: 'Garki', lat: 12.4303749, lng: 9.113041563301067 },
    { name: 'Gumel', lat: 12.6232524, lng: 9.404416879167805 },
    { name: 'Guri', lat: 12.7284315, lng: 10.4197948 },
    { name: 'Gwaram', lat: 11.2198673, lng: 10.050664857933867 },
    { name: 'Gwiwa', lat: 12.73763335, lng: 8.292064045745363 },
    { name: 'Hadejia', lat: 12.4526098, lng: 10.0418934 },
    { name: 'Jahun', lat: 12.0753808, lng: 9.6257925 },
    { name: 'Kafin Hausa', lat: 12.16437175, lng: 9.987356934845145 },
    { name: 'Kaugama', lat: 12.5509256, lng: 9.759197802985565 },
    {
      name: 'Kazaure',
      lat: 12.664935700000001,
      lng: 8.435242947472004
    },
    {
      name: 'Kiri Kasama',
      lat: 12.598074350000001,
      lng: 10.251415687522005
    },
    { name: 'Kiyawa', lat: 11.7964786, lng: 9.519497538469512 },
    { name: 'Maigatari', lat: 12.6935744, lng: 9.610345090992876 },
    { name: 'Malam Madori', lat: 12.5297795, lng: 9.895976877882704 },
    { name: 'Miga', lat: 12.235651950000001, lng: 9.698027227118311 },
    { name: 'Ringim', lat: 12.165828900000001, lng: 9.11005475941608 },
    { name: 'Roni', lat: 12.56388195, lng: 8.370934528105362 },
    { name: 'Sule Tankarkar', lat: 12.6512968, lng: 9.247542772730274 },
    { name: 'Taura', lat: 12.2724893, lng: 9.36241882485775 },
    { name: 'Yankwashi', lat: 12.73964415, lng: 8.560579128907008 }
  ],
  Kaduna: [
    { name: 'Birnin Gwari', lat: 10.88376995, lng: 6.585878038383575 },
    { name: 'Chikun', lat: 10.4202275, lng: 7.313579502066943 },
    { name: 'Giwa', lat: 11.0464629, lng: 7.233943456404118 },
    { name: 'Igabi', lat: 10.7490822, lng: 7.528949832280797 },
    { name: 'Ikara', lat: 11.3111222, lng: 8.1640684973984 },
    { name: 'Jaba', lat: 9.4747461, lng: 8.012491652398126 },
    { name: "Jema'a", lat: 9.4136358, lng: 8.252928350616807 },
    { name: 'Kachia', lat: 9.85707265, lng: 7.688585658040869 },
    { name: 'Kaduna North', lat: 10.5561853, lng: 7.4527471166317945 },
    { name: 'Kaduna South', lat: 10.4984812, lng: 7.402214166515211 },
    { name: 'Kagarko', lat: 9.4903756, lng: 7.574326397196802 },
    { name: 'Kajuru', lat: 10.25505145, lng: 7.771493932349519 },
    { name: 'Kaura', lat: 9.64241625, lng: 8.451618841990786 },
    { name: 'Kauru', lat: 10.35579885, lng: 8.182845371259415 },
    { name: 'Kubau', lat: 10.81213315, lng: 8.360917074181163 },
    { name: 'Kudan', lat: 11.2638864, lng: 7.717562574076165 },
    { name: 'Lere', lat: 10.36175115, lng: 8.572399288003599 },
    { name: 'Makarfi', lat: 11.3292772, lng: 7.945396237650533 },
    { name: 'Sabon Gari', lat: 11.16656815, lng: 7.7068114047212335 },
    { name: 'Sanga', lat: 9.2458822, lng: 8.459390672268526 },
    { name: 'Soba', lat: 10.9579962, lng: 8.02990519665422 },
    { name: 'Zangon Kataf', lat: 9.89681685, lng: 8.258212780819786 },
    { name: 'Zaria', lat: 11.0248119, lng: 7.651853311586596 }
  ],
  Kano: [
    { name: 'Ajingi', lat: 11.958974, lng: 9.033873076491497 },
    { name: 'Albasu', lat: 11.646029200000001, lng: 9.040314173927829 },
    { name: 'Bagwai', lat: 12.1017637, lng: 8.119844434778582 },
    { name: 'Bebeji', lat: 11.5370886, lng: 8.310648558419471 },
    { name: 'Bichi', lat: 12.2334, lng: 8.24026 },
    { name: 'Bunkure', lat: 11.6690434, lng: 8.54874857424554 },
    { name: 'Dala', lat: 12.0296959, lng: 8.49096147567484 },
    { name: 'Dambatta', lat: 12.428521, lng: 8.596550658601423 },
    { name: 'Dawakin Kudu', lat: 11.79747965, lng: 8.706588726528924 },
    { name: 'Dawakin Tofa', lat: 12.142136, lng: 8.36111612636891 },
    { name: 'Doguwa', lat: 10.8799648, lng: 8.676158907714266 },
    { name: 'Fagge', lat: 12.032223, lng: 8.517419685338357 },
    {
      name: 'Gabasawa',
      lat: 12.134883649999999,
      lng: 8.857034712903719
    },
    { name: 'Garko', lat: 11.5649275, lng: 8.83693382221001 },
    { name: 'Garun Mallam', lat: 11.586468, lng: 8.422951041141168 },
    { name: 'Gaya', lat: 11.818957099999999, lng: 9.026711262480958 },
    { name: 'Gezawa', lat: 12.06431815, lng: 8.718839698782373 },
    { name: 'Gwale', lat: 11.974746499999998, lng: 8.474636198463235 },
    { name: 'Gwarzo', lat: 11.9009397, lng: 7.983679322929268 },
    { name: 'Kabo', lat: 11.891463250000001, lng: 8.200628471157401 },
    {
      name: 'Kano Municipal',
      lat: 11.983542100000001,
      lng: 8.526936464554032
    },
    { name: 'Karaye', lat: 11.7608489, lng: 7.978801685195886 },
    { name: 'Kibiya', lat: 11.49268805, lng: 8.69690150871487 },
    { name: 'Kiru', lat: 11.556848250000002, lng: 8.098950881095178 },
    {
      name: 'Kumbotso',
      lat: 11.917455350000001,
      lng: 8.519836317464101
    },
    { name: 'Kunchi', lat: 12.46843785, lng: 8.259083654297008 },
    { name: 'Kura', lat: 11.77914325, lng: 8.474385714057192 },
    { name: 'Madobi', lat: 11.817919400000001, lng: 8.343269328069738 },
    { name: 'Makoda', lat: 12.4269267, lng: 8.43128875208519 },
    { name: 'Minjibir', lat: 12.19363175, lng: 8.614219316298197 },
    { name: 'Nasarawa', lat: 12.0446, lng: 8.98309 },
    { name: 'Rano', lat: 11.48508015, lng: 8.51360422561324 },
    { name: 'Rimin Gado', lat: 11.9243341, lng: 8.331859567091005 },
    { name: 'Rogo', lat: 11.509048199999999, lng: 7.853361626149859 },
    {
      name: 'Shanono',
      lat: 12.097207000000001,
      lng: 7.9264412116487915
    },
    { name: 'Sumaila', lat: 11.258160100000001, lng: 8.87022418828029 },
    { name: 'Takai', lat: 11.4853125, lng: 9.156044842198048 },
    { name: 'Tarauni', lat: 11.9614371, lng: 8.56516097177794 },
    { name: 'Tofa', lat: 12.024584449999999, lng: 8.341577971892384 },
    { name: 'Tsanyawa', lat: 12.2847503, lng: 7.996379375418847 },
    {
      name: 'Tudun Wada',
      lat: 11.315691999999999,
      lng: 8.523903856610533
    },
    { name: 'Ungogo', lat: 12.0916, lng: 8.49534 },
    { name: 'Warawa', lat: 11.90462715, lng: 8.793401693069448 },
    { name: 'Wudil', lat: 11.76688, lng: 8.839014947885374 }
  ],
  Katsina: [
    { name: 'Bakori', lat: 11.67740625, lng: 7.407795563075952 },
    {
      name: 'Batagarawa',
      lat: 12.867776899999999,
      lng: 7.531429830714286
    },
    { name: 'Batsari', lat: 12.84542205, lng: 7.26798265661981 },
    { name: 'Baure', lat: 12.789771949999999, lng: 8.78163952631247 },
    { name: 'Bindawa', lat: 12.7082443, lng: 7.881593072005751 },
    { name: 'Charanchi', lat: 12.5582006, lng: 7.67595015418118 },
    { name: 'Dandume', lat: 11.4169922, lng: 7.222459472401029 },
    { name: 'Danja', lat: 11.4083136, lng: 7.479053321311095 },
    { name: 'Dan Musa', lat: 12.25876835, lng: 7.2858517364851565 },
    { name: 'Daura', lat: 13.035917, lng: 8.319388 },
    { name: 'Dutsi', lat: 12.92134055, lng: 8.156820609762908 },
    { name: 'Dutsin Ma', lat: 12.4067522, lng: 7.5272850341769715 },
    { name: 'Faskari', lat: 11.7138498, lng: 7.099331452361396 },
    { name: 'Funtua', lat: 11.5232142, lng: 7.307497 },
    { name: 'Ingawa', lat: 12.61491505, lng: 8.110948938848082 },
    { name: 'Jibia', lat: 12.982695150000001, lng: 7.467752013130163 },
    { name: 'Kafur', lat: 11.632705000000001, lng: 7.697548634953403 },
    { name: 'Kaita', lat: 13.1799187, lng: 7.7922703894852665 },
    {
      name: 'Kankara',
      lat: 11.972022500000001,
      lng: 7.360937404163552
    },
    { name: 'Kankia', lat: 12.4289363, lng: 7.7953998889183325 },
    { name: 'Katsina', lat: 12.9894283, lng: 7.6006278 },
    { name: 'Kurfi', lat: 12.6891921, lng: 7.460675926287232 },
    { name: 'Kusada', lat: 12.4618432, lng: 7.948573662397761 },
    { name: "Mai'Adua", lat: 13.161061, lng: 8.212968220192417 },
    { name: 'Malumfashi', lat: 11.86634845, lng: 7.80918679450607 },
    { name: 'Mani', lat: 12.90744115, lng: 7.933179542984094 },
    { name: 'Mashi', lat: 13.1318643, lng: 8.012838277891843 },
    { name: 'Matazu', lat: 12.2380556, lng: 7.65879006833928 },
    {
      name: 'Musawa',
      lat: 12.111249449999999,
      lng: 7.7097377855317255
    },
    { name: 'Rimi', lat: 12.89190945, lng: 7.714542299452518 },
    { name: 'Sabuwa', lat: 11.340138249999999, lng: 7.075489674248669 },
    { name: 'Safana', lat: 12.5182313, lng: 7.232482683477534 },
    { name: 'Sandamu', lat: 12.9326254, lng: 8.405698361715064 },
    { name: 'Zango', lat: 12.95365, lng: 8.544623641156464 }
  ],
  Kebbi: [
    { name: 'Aleiro', lat: 12.320311749999998, lng: 4.453195243411876 },
    { name: 'Arewa Dandi', lat: 12.7215033, lng: 4.074757938717666 },
    { name: 'Argungu', lat: 12.6967675, lng: 4.447372784785237 },
    { name: 'Augie', lat: 12.901092949999999, lng: 4.629064947240981 },
    { name: 'Bagudo', lat: 11.4040393, lng: 4.2277586 },
    { name: 'Birnin Kebbi', lat: 12.4573462, lng: 4.2006114 },
    { name: 'Bunza', lat: 12.20107745, lng: 3.9337264094456583 },
    { name: 'Dandi', lat: 11.901967599999999, lng: 3.7945764363759333 },
    { name: 'Fakai', lat: 11.52675065, lng: 4.883012174634741 },
    { name: 'Gwandu', lat: 12.4893811, lng: 4.627794873242951 },
    { name: 'Jega', lat: 12.1012026, lng: 4.4659199216975125 },
    { name: 'Kalgo', lat: 12.38983755, lng: 4.043178900694501 },
    { name: 'Koko/Besse', lat: 11.4355339, lng: 4.479387123141443 },
    { name: 'Maiyama', lat: 12.00689755, lng: 4.2962991508389745 },
    { name: 'Ngaski', lat: 10.57670075, lng: 4.720882781318753 },
    { name: 'Sakaba', lat: 11.177563450000001, lng: 5.542071603612442 },
    { name: 'Shanga', lat: 11.1964232, lng: 4.6058887534624064 },
    { name: 'Suru', lat: 11.79234945, lng: 4.146012652769343 },
    { name: 'Wasagu/Danko', lat: 11.38117415, lng: 5.746452549841939 },
    { name: 'Yauri', lat: 10.77690515, lng: 4.734334969175672 },
    { name: 'Zuru', lat: 11.436776, lng: 5.231177447667553 }
  ],
Kogi: [
    { name: 'Adavi', lat: 7.68441465, lng: 6.4667074788060965 },
    { name: 'Ajaokuta', lat: 7.5639973, lng: 6.6291171 },
    { name: 'Ankpa', lat: 7.469318149999999, lng: 7.61915275970415 },
    { name: 'Bassa', lat: 7.7467992, lng: 6.961064928865445 },
    { name: 'Dekina', lat: 7.595390549999999, lng: 7.143441884839058 },
    { name: 'Ibaji', lat: 6.79157185, lng: 6.759935446608314 },
    { name: 'Idah', lat: 7.1099854, lng: 6.7340488 },
    {
      name: 'Igalamela Odolu',
      lat: 7.03541445,
      lng: 7.059106213066727
    },
    { name: 'Ijumu', lat: 7.842371, lng: 5.895747404666862 },
    { name: 'Kabba/Bunu', lat: 8.07009815, lng: 6.141418638966092 },
    { name: 'Kogi', lat: 8.1270318, lng: 6.855609504313039 },
    { name: 'Lokoja', lat: 7.802355, lng: 6.7430327 },
    {
      name: 'Mopa Muro',
      lat: 8.140445750000001,
      lng: 5.8889260200909685
    },
    { name: 'Ofu', lat: 7.3294933, lng: 7.068971049937361 },
    {
      name: 'Ogori/Magongo',
      lat: 7.4786734500000005,
      lng: 6.1558738694303905
    },
    { name: 'Okehi', lat: 7.73313455, lng: 6.356100253115201 },
    { name: 'Okene', lat: 7.461039550000001, lng: 6.398817009039226 },
    { name: 'Olamaboro', lat: 7.16977665, lng: 7.5133535057786025 },
    { name: 'Omala', lat: 7.777827950000001, lng: 7.565886300000329 },
    { name: 'Yagba East', lat: 8.13475275, lng: 5.7048150709835195 },
    { name: 'Yagba West', lat: 8.2763953, lng: 5.556420642697231 }
  ],
  Kwara: [
    { name: 'Asa', lat: 8.41326505, lng: 4.442381499804297 },
    { name: 'Baruten', lat: 9.384549, lng: 3.480657539153882 },
    { name: 'Edu', lat: 8.845391750000001, lng: 5.212079172840301 },
    { name: 'Ekiti', lat: 8.11201715, lng: 5.343855910217266 },
    { name: 'Ifelodun', lat: 8.632704749999998, lng: 5.17887760291553 },
    { name: 'Ilorin East', lat: 8.59327985, lng: 4.785398052725244 },
    { name: 'Ilorin South', lat: 8.4404502, lng: 4.6894413601867075 },
    { name: 'Ilorin West', lat: 8.4864338, lng: 4.513892773645063 },
    { name: 'Irepodun', lat: 8.19357875, lng: 4.854945860794899 },
    { name: 'Isin', lat: 8.2579064, lng: 5.038849070678933 },
    { name: 'Kaiama', lat: 9.536017900000001, lng: 4.114813774660677 },
    { name: 'Moro', lat: 8.8535638, lng: 4.515472249381954 },
    { name: 'Offa', lat: 8.1560008, lng: 4.7227435 },
    { name: 'Oke Ero', lat: 8.1803193, lng: 5.296435718110166 },
    { name: 'Oyun', lat: 8.19984915, lng: 4.631635446280292 },
    { name: 'Pategi', lat: 8.6704602, lng: 5.81727279551744 }
  ],
  Lagos: [
    { name: 'Agege', lat: 6.6252516, lng: 3.311209577009965 },
    {
      name: 'Ajeromi-Ifelodun',
      lat: 6.4551345,
      lng: 3.335965485658985
    },
    { name: 'Alimosho', lat: 6.58438825, lng: 3.257587568904711 },
    { name: 'Amuwo-Odofin', lat: 6.4470565, lng: 3.2663154978394693 },
    { name: 'Apapa', lat: 6.445187000000001, lng: 3.3683731679424094 },
    { name: 'Badagry', lat: 6.43932225, lng: 2.9060324070376966 },
    { name: 'Epe', lat: 6.5858219, lng: 3.9753453 },
    { name: 'Eti-Osa', lat: 6.4602312, lng: 3.5321809094205427 },
    { name: 'Ibeju-Lekki', lat: 6.4711251, lng: 3.8147504423714778 },
{
  name: 'Ifako-Ijaiye',
  lat: 6.6847,
  lng: 3.2889
},
    { name: 'Ikeja', lat: 6.5960605, lng: 3.340787 },
    { name: 'Ikorodu', lat: 6.6191233, lng: 3.5041271 },
    { name: 'Kosofe', lat: 6.581974000000001, lng: 3.4148359416178415 },
    { name: 'Lagos Island', lat: 6.5148613, lng: 3.490866161390065 },
    { name: 'Lagos Mainland', lat: 6.49327785, lng: 3.388354552780147 },
    { name: 'Mushin', lat: 6.52476545, lng: 3.3516347714948544 },
{ name: 'Ojo', lat: 6.46249745, lng: 3.1657098698814075 },
    { name: 'Oshodi-Isolo', lat: 6.53984935, lng: 3.3123840190146954 },
    { name: 'Shomolu', lat: 6.533564500000001, lng: 3.38416340600858 },
    { name: 'Surulere', lat: 6.4855737, lng: 3.353990695126856 }
  ],
  Nasarawa: [
    { name: 'Akwanga', lat: 9.01527025, lng: 8.340625440688873 },
    { name: 'Awe', lat: 8.2167306, lng: 9.160923656012685 },
    { name: 'Doma', lat: 8.15993355, lng: 8.33729347889155 },
    { name: 'Karu', lat: 8.995007999999999, lng: 7.751225601625299 },
    { name: 'Keana', lat: 8.1726904, lng: 8.756026355062636 },
    { name: 'Keffi', lat: 8.8453176, lng: 7.876834 },
    { name: 'Kokona', lat: 8.8461237, lng: 8.08336065838977 },
    { name: 'Lafia', lat: 8.483333, lng: 8.516667 },
    { name: 'Nasarawa', lat: 8.330112, lng: 7.750258566299937 },
    { name: 'Nasarawa Egon', lat: 8.72758815, lng: 8.471888017349086 },
    { name: 'Obi', lat: 8.3698344, lng: 8.75789094400396 },
    { name: 'Toto', lat: 8.261649649999999, lng: 7.197157216118699 },
    { name: 'Wamba', lat: 9.0034175, lng: 8.717056694182972 }
  ],
Niger: [
    { name: 'Agaie', lat: 8.93543005, lng: 6.432018784997966 },
    { name: 'Agwara', lat: 10.745301399999999, lng: 4.539417528677225 },
    { name: 'Bida', lat: 9.083333, lng: 6.016667 },
    { name: 'Borgu', lat: 10.1967653, lng: 4.092020592490975 },
    { name: 'Bosso', lat: 9.60090825, lng: 6.346671569878886 },
    { name: 'Chanchaga', lat: 9.61941335, lng: 6.549647085416622 },
    { name: 'Edati', lat: 8.963337450000001, lng: 5.999754848120109 },
    { name: 'Gbako', lat: 9.27903655, lng: 5.997371612556057 },
    { name: 'Gurara', lat: 9.3250486, lng: 7.031667453981063 },
    { name: 'Katcha', lat: 8.7617343, lng: 6.311747 },
    { name: 'Kontagora', lat: 10.399893, lng: 5.4694905 },
    { name: 'Lapai', lat: 8.781127000000001, lng: 6.675381143223844 },
    { name: 'Lavun', lat: 9.3823776, lng: 5.636692331807329 },
    { name: 'Magama', lat: 10.2990765, lng: 5.061088778404983 },
    { name: 'Mariga', lat: 10.60736825, lng: 5.867048258193018 },
    { name: 'Mashegu', lat: 9.81550455, lng: 5.239230389014169 },
    { name: 'Mokwa', lat: 9.121896750000001, lng: 5.323281861668997 },
{
  name: 'Munya',
  lat: 10.0167,
  lng: 7.1000
},
    { name: 'Paikoro', lat: 9.49303915, lng: 6.837678578461804 },
    { name: 'Rafi', lat: 10.2138948, lng: 6.207110156005469 },
    { name: 'Rijau', lat: 11.0430889, lng: 5.2174571835808266 },
    { name: 'Shiroro', lat: 10.08418035, lng: 6.718928615079205 },
    { name: 'Suleja', lat: 9.20816565, lng: 7.187189747918152 },
    { name: 'Tafa', lat: 9.2379532, lng: 7.258775070454983 },
    {
      name: 'Wushishi',
      lat: 9.711346599999999,
      lng: 5.910315277747708
    }
  ],
  Ogun: [
    {
      name: 'Abeokuta North',
      lat: 7.23449515,
      lng: 3.2012258953890234
    },
    {
      name: 'Abeokuta South',
      lat: 7.159413750000001,
      lng: 3.3645465753641925
    },
    { name: 'Ado-Odo/Ota', lat: 6.6244986, lng: 3.0822508619111124 },
    { name: 'Egbado North', lat: 7.1260629, lng: 2.9408573113173397 },
    { name: 'Egbado South', lat: 6.77780235, lng: 2.958357259504273 },
    {
      name: 'Ewekoro',
      lat: 6.961698999999999,
      lng: 3.1734405425983456
    },
    { name: 'Ifo', lat: 6.75635325, lng: 3.241686364984588 },
    { name: 'Ijebu East', lat: 6.8181465, lng: 4.251257460630212 },
    { name: 'Ijebu North', lat: 7.03213095, lng: 3.99145722833996 },
    { name: 'Ijebu North East', lat: 6.887079, lng: 4.006867295349055 },
    { name: 'Ijebu Ode', lat: 6.8140077, lng: 3.9151668 },
    { name: 'Ikenne', lat: 6.9010633, lng: 3.697716759414954 },
    { name: 'Imeko Afon', lat: 7.66895115, lng: 2.860216231075362 },
    { name: 'Ipokia', lat: 6.6435327, lng: 2.811423210941327 },
    { name: 'Obafemi Owode', lat: 6.91716615, lng: 3.445906613345862 },
    { name: 'Odeda', lat: 7.3126235, lng: 3.45640691289545 },
    {
      name: 'Odogbolu',
      lat: 6.8077001500000005,
      lng: 3.814100281641317
    },
    { name: 'Ogun Waterside', lat: 6.46083785, lng: 4.390369481668115 },
    {
      name: 'Remo North',
      lat: 6.9954503500000005,
      lng: 3.7177572310440867
    },
    { name: 'Shagamu', lat: 6.8477165, lng: 3.6440551 }
  ],
  Ondo: [
    {
      name: 'Akoko North-East',
      lat: 7.562587499999999,
      lng: 5.90422625372965
    },
    {
      name: 'Akoko North-West',
      lat: 7.65017915,
      lng: 5.81474406950944
    },
    {
      name: 'Akoko South-East',
      lat: 7.42249085,
      lng: 5.905060679828727
    },
    {
      name: 'Akoko South-West',
      lat: 7.4008129,
      lng: 5.705641607609582
    },
    {
      name: 'Akure North',
      lat: 7.2520757499999995,
      lng: 5.314380499266439
    },
    { name: 'Akure South', lat: 7.22318, lng: 5.168832338164354 },
    { name: 'Ese Odo', lat: 6.230848099999999, lng: 4.953044220362573 },
    { name: 'Idanre', lat: 6.975549, lng: 5.254704691689339 },
    { name: 'Ifedore', lat: 7.3528421, lng: 5.110368124845809 },
    { name: 'Ilaje', lat: 6.19638205, lng: 4.75905575957919 },
    {
      name: 'Ile Oluji/Okeigbo',
      lat: 7.236932550000001,
      lng: 4.891326571472749
    },
    { name: 'Irele', lat: 6.4894071, lng: 4.8700171 },
    { name: 'Odigbo', lat: 6.7318828, lng: 4.885166637855175 },
    { name: 'Okitipupa', lat: 6.56544475, lng: 4.729451168508728 },
    { name: 'Ondo East', lat: 7.06680495, lng: 4.962371206429317 },
    { name: 'Ondo West', lat: 7.03314665, lng: 4.768711120944029 },
    { name: 'Ose', lat: 7.05101395, lng: 5.72865134362812 },
    { name: 'Owo', lat: 7.1962012, lng: 5.5868016 }
  ],
  Osun: [
{
  name: 'Aiyedaade',
  lat: 7.4667,
  lng: 4.3500
},
    { name: 'Aiyedire', lat: 7.57245105, lng: 4.216219872803825 },
    {
      name: 'Atakunmosa East',
      lat: 7.45221015,
      lng: 4.785932050585557
    },
    { name: 'Atakunmosa West', lat: 7.4867096, lng: 4.678869135457796 },
    { name: 'Boluwaduro', lat: 7.94664025, lng: 4.80922862554039 },
    { name: 'Boripe', lat: 7.86220215, lng: 4.659446535737731 },
    { name: 'Ede North', lat: 7.7344181, lng: 4.473998070022581 },
    { name: 'Ede South', lat: 7.65920755, lng: 4.463691717278765 },
    { name: 'Egbedore', lat: 7.7874849, lng: 4.436297729823462 },
    { name: 'Ejigbo', lat: 7.8999894, lng: 4.3167086 },
    { name: 'Ife Central', lat: 7.54636905, lng: 4.528026945146403 },
    { name: 'Ife East', lat: 7.40341495, lng: 4.59959459961158 },
    { name: 'Ife North', lat: 7.27761555, lng: 4.452865817628522 },
    { name: 'Ife South', lat: 7.2248225, lng: 4.609975177651254 },
    {
      name: 'Ifedayo',
      lat: 7.9618888000000005,
      lng: 4.984806733325354
    },
    { name: 'Ifelodun', lat: 7.90451645, lng: 4.637033839531609 },
    { name: 'Ila', lat: 7.97027515, lng: 4.8951082231693155 },
{
  name: 'Ilesa East',
  lat: 7.617,
  lng: 4.767
},
    { name: 'Ilesa West', lat: 7.6245894, lng: 4.7414655 },
    { name: 'Irepodun', lat: 7.89548375, lng: 4.522231696595572 },
    { name: 'Irewole', lat: 7.42335375, lng: 4.211292798367986 },
    { name: 'Isokan', lat: 7.2917009, lng: 4.197078309973235 },
    { name: 'Iwo', lat: 7.633333, lng: 4.183333 },
    { name: 'Obokun', lat: 7.77440215, lng: 4.778145756035174 },
    { name: 'Odo Otin', lat: 8.00744345, lng: 4.679048325069425 },
    {
      name: 'Ola Oluwa',
      lat: 7.7457420500000005,
      lng: 4.199432168519866
    },
    { name: 'Olorunda', lat: 7.87344765, lng: 4.582128360065931 },
    { name: 'Oriade', lat: 7.5530772, lng: 4.867413075401172 },
    { name: 'Orolu', lat: 7.903354950000001, lng: 4.473570633364785 }
  ],
Oyo: [
    { name: 'Afijio', lat: 7.747811049999999, lng: 3.8965833157288534 },
    { name: 'Akinyele', lat: 7.5545037, lng: 3.9120420962961147 },
    { name: 'Atiba', lat: 8.235692499999999, lng: 3.8685804390458687 },
    { name: 'Atisbo', lat: 8.403148250000001, lng: 3.251587245035839 },
    { name: 'Egbeda', lat: 7.392644649999999, lng: 4.038721592484448 },
    { name: 'Ibadan North', lat: 7.42065255, lng: 3.9092156150496695 },
    {
      name: 'Ibadan North-East',
      lat: 7.3939066,
      lng: 3.9273483432755025
    },
    {
      name: 'Ibadan North-West',
      lat: 7.40365105,
      lng: 3.8714019998014715
    },
    {
      name: 'Ibadan South-East',
      lat: 7.355048,
      lng: 3.903528862708936
    },
    {
      name: 'Ibadan South-West',
      lat: 7.3733705,
      lng: 3.8589667830512133
    },
    {
      name: 'Ibarapa Central',
      lat: 7.411516450000001,
      lng: 3.247704984452902
    },
    {
      name: 'Ibarapa East',
      lat: 7.5840666500000005,
      lng: 3.4593620075627056
    },
    { name: 'Ibarapa North', lat: 7.64457465, lng: 3.1731014489781906 },
    { name: 'Ido', lat: 7.5191533, lng: 3.6978419912652893 },
    { name: 'Irepo', lat: 9.024608149999999, lng: 3.884951584969749 },
    { name: 'Iseyin', lat: 7.9710106, lng: 3.5956141 },
    { name: 'Itesiwaju', lat: 8.2107134, lng: 3.5481982860888133 },
    { name: 'Iwajowa', lat: 7.990133500000001, lng: 2.98873466669142 },
    { name: 'Kajola', lat: 8.028532550000001, lng: 3.3585942749999997 },
    { name: 'Lagelu', lat: 7.5116973, lng: 4.078903399551278 },
    { name: 'Ogbomosho North', lat: 8.1568767, lng: 4.263380726133171 },
    {
      name: 'Ogbomosho South',
      lat: 8.07471535,
      lng: 4.236984775636078
    },
    { name: 'Ogo Oluwa', lat: 7.9610822, lng: 4.180876231733722 },
    { name: 'Olorunsogo', lat: 8.7931509, lng: 4.060168921166712 },
    {
      name: 'Oluyole',
      lat: 7.219579599999999,
      lng: 3.8929878611762505
    },
    { name: 'Ona Ara', lat: 7.2587189500000004, lng: 4.06494343327626 },
    { name: 'Orelope', lat: 8.7941346, lng: 3.8019226560261554 },
    { name: 'Ori Ire', lat: 8.3093052, lng: 4.203584765711993 },
    { name: 'Oyo East', lat: 7.87008105, lng: 4.028958153694858 },
    { name: 'Oyo West', lat: 7.95719315, lng: 3.8166314853392356 },
    {
      name: 'Saki East',
      lat: 8.710249000000001,
      lng: 3.567627380804063
    },
    { name: 'Saki West', lat: 8.64292215, lng: 3.20315829194248 },
    { name: 'Surulere', lat: 8.0906412, lng: 4.4145759555266695 }
  ],
  Plateau: [
    {
      name: 'Barkin Ladi',
      lat: 9.575489999999999,
      lng: 8.970077030109152
    },
    { name: 'Bassa', lat: 10.05617475, lng: 8.817864994890652 },
    { name: 'Bokkos', lat: 9.2285352, lng: 8.894802402951752 },
    { name: 'Jos East', lat: 9.872746, lng: 9.134016436661367 },
    {
      name: 'Jos North',
      lat: 9.942195850000001,
      lng: 8.892985163197897
    },
    { name: 'Jos South', lat: 9.7587528, lng: 8.848780461155847 },
    { name: 'Kanam', lat: 9.491138, lng: 10.154530167477743 },
    { name: 'Kanke', lat: 9.367178899999999, lng: 9.639354933485457 },
    { name: 'Langtang North', lat: 9.0494609, lng: 9.818724306403762 },
    { name: 'Langtang South', lat: 8.5842962, lng: 9.832994787118064 },
    { name: 'Mangu', lat: 9.36222935, lng: 9.181630173696401 },
    { name: 'Mikang', lat: 9.0122647, lng: 9.554481273060158 },
    { name: 'Pankshin', lat: 9.3054781, lng: 9.37941439290563 },
    {
      name: "Qua'an Pan",
      lat: 8.766416549999999,
      lng: 9.124481602004671
    },
    { name: 'Riyom', lat: 9.5564637, lng: 8.70492496649096 },
    { name: 'Shendam', lat: 8.7365546, lng: 9.515552408238193 },
    { name: 'Wase', lat: 9.0070529, lng: 10.24402090465503 }
  ],
  Rivers: [
    { name: 'Abua/Odual', lat: 4.84693955, lng: 6.560032827719285 },
    { name: 'Ahoada East', lat: 5.0504985, lng: 6.642959979473343 },
    { name: 'Ahoada West', lat: 5.04196595, lng: 6.513133964696992 },
    { name: 'Akuku-Toru', lat: 4.53362895, lng: 6.678670665142749 },
    { name: 'Andoni', lat: 4.5061458000000005, lng: 7.407307242536977 },
    { name: 'Asari-Toru', lat: 4.7529381, lng: 6.834832218320882 },
    { name: 'Bonny', lat: 4.5057810499999995, lng: 7.203465952746459 },
    { name: 'Degema', lat: 4.5905613, lng: 6.938947947009224 },
{
  name: 'Emohua',
  lat: 4.8833,
  lng: 6.8667
},
    { name: 'Eleme', lat: 4.7506524, lng: 7.147425212169866 },
    { name: 'Etche', lat: 5.0765321, lng: 7.092638789196567 },
    { name: 'Gokana', lat: 4.6578536, lng: 7.294484674317097 },
    { name: 'Ikwerre', lat: 5.07051515, lng: 6.882004611347118 },
    { name: 'Khana', lat: 4.6693695, lng: 7.437540599064871 },
    { name: 'Obio/Akpor', lat: 4.86630685, lng: 7.020215533605061 },
    {
      name: 'Ogba/Egbema/Ndoni',
      lat: 5.4512857,
      lng: 6.640917843681434
    },
    { name: 'Ogu/Bolo', lat: 4.6742177, lng: 7.201701991644333 },
    { name: 'Okrika', lat: 4.692077599999999, lng: 7.0614744813187045 },
{
  name: 'Omuma',
  lat: 4.9694,
  lng: 7.0208
},
    { name: 'Opobo/Nkoro', lat: 4.509114, lng: 7.522647157947575 },
    { name: 'Oyigbo', lat: 4.8814078, lng: 7.1334475 },
    { name: 'Port Harcourt', lat: 4.7676576, lng: 7.0188527 },
    { name: 'Tai', lat: 4.769846449999999, lng: 7.261974961229366 }
  ],
  Sokoto: [
    { name: 'Binji', lat: 13.20953865, lng: 4.769435815666514 },
    { name: 'Bodinga', lat: 12.8106793, lng: 5.172353778768104 },
    { name: 'Dange Shuni', lat: 12.82565415, lng: 5.419104692160527 },
    { name: 'Gada', lat: 13.682901600000001, lng: 5.701102718898845 },
    { name: 'Goronyo', lat: 13.3498618, lng: 5.76754115178572 },
    { name: 'Gudu', lat: 13.4596132, lng: 4.4512600888504235 },
    { name: 'Gwadabawa', lat: 13.4160911, lng: 5.322733295273352 },
    { name: 'Illela', lat: 13.6664957, lng: 5.321406970544636 },
    { name: 'Isa', lat: 13.202844, lng: 6.4057228 },
    { name: 'Kebbe', lat: 11.88635425, lng: 4.74361668399929 },
    { name: 'Kware', lat: 13.1554579, lng: 5.293123265570748 },
    { name: 'Rabah', lat: 13.00196675, lng: 5.794525160841275 },
    { name: 'Sabon Birni', lat: 13.53110015, lng: 6.217511839546981 },
    { name: 'Shagari', lat: 12.54266505, lng: 5.072455081520054 },
    { name: 'Silame', lat: 12.98916285, lng: 4.820241231069678 },
    {
      name: 'Sokoto North',
      lat: 13.066579099999998,
      lng: 5.23319846830032
    },
    { name: 'Sokoto South', lat: 13.03565, lng: 5.2629592028676555 },
    {
      name: 'Tambuwal',
      lat: 12.398648399999999,
      lng: 4.942986621272034
    },
    { name: 'Tangaza', lat: 13.47915525, lng: 4.970426147926919 },
    { name: 'Tureta', lat: 12.519032750000001, lng: 5.49499631167466 },
    { name: 'Wamako', lat: 13.08211925, lng: 5.10712328364385 },
    { name: 'Wurno', lat: 13.2428503, lng: 5.476051632084653 },
    { name: 'Yabo', lat: 12.77276975, lng: 4.928053446941808 }
  ],
Taraba: [
    { name: 'Ardo Kola', lat: 8.84709885, lng: 11.132519536742866 },
    { name: 'Bali', lat: 8.090625750000001, lng: 10.952261900675149 },
    { name: 'Donga', lat: 7.6647555999999994, lng: 10.081257673183813 },
    {
      name: 'Gashaka',
      lat: 7.5071870999999994,
      lng: 11.340237110618178
    },
    { name: 'Gassol', lat: 8.38282345, lng: 10.465095568045054 },
    { name: 'Ibi', lat: 8.182155, lng: 9.7472789 },
    { name: 'Jalingo', lat: 8.894985, lng: 11.360042 },
    {
      name: 'Karim Lamido',
      lat: 9.147313100000002,
      lng: 10.858020767083822
    },
    { name: 'Kurmi', lat: 7.26433515, lng: 10.70140763278576 },
    { name: 'Lau', lat: 9.19390015, lng: 11.463019051578591 },
    { name: 'Sardauna', lat: 6.929532, lng: 11.222928807052561 },
    { name: 'Takum', lat: 7.2549376, lng: 9.9852661 },
    { name: 'Ussa', lat: 7.104081600000001, lng: 10.053587947846239 },
    { name: 'Wukari', lat: 7.8705196, lng: 9.7775523 },
    { name: 'Yorro', lat: 8.880304800000001, lng: 11.506784376610817 },
    { name: 'Zing', lat: 8.85858015, lng: 11.76508282612897 }
  ],
  Yobe: [
{
  name: 'Bade',
  lat: 12.867,
  lng: 10.967
},
{
  name: 'Bursari',
  lat: 12.7500,
  lng: 11.7667
},
    { name: 'Damaturu', lat: 11.747, lng: 11.9608 },
    { name: 'Fika', lat: 11.320567, lng: 11.27290933862729 },
    { name: 'Fune', lat: 11.89202165, lng: 11.432449871033418 },
    { name: 'Geidam', lat: 12.8952043, lng: 11.9264702 },
    { name: 'Gujba', lat: 11.344584950000002, lng: 11.920273565801192 },
    {
      name: 'Gulani',
      lat: 10.917834299999999,
      lng: 11.642755224739172
    },
    { name: 'Jakusko', lat: 12.3691, lng: 10.7744631 },
    { name: 'Karasuwa', lat: 13.0000596, lng: 10.671798465693108 },
    { name: 'Machina', lat: 13.0342994, lng: 10.047461755475844 },
    { name: 'Nangere', lat: 11.80754455, lng: 11.056286822287191 },
    { name: 'Nguru', lat: 12.875615, lng: 10.4540091 },
    { name: 'Potiskum', lat: 11.7122553, lng: 11.0762744 },
{
  name: 'Tarmuwa',
  lat: 12.2000,
  lng: 11.7833
},
    { name: 'Yunusari', lat: 13.114159, lng: 11.768641271733841 },
    { name: 'Yusufari', lat: 13.15697495, lng: 10.492274162667854 }
  ],
  Zamfara: [
    { name: 'Anka', lat: 11.983211350000001, lng: 5.964284628401403 },
    { name: 'Bakura', lat: 12.5584645, lng: 5.864073908210667 },
    {
      name: 'Birnin Magaji/Kiyaw',
      lat: 12.4719032,
      lng: 6.869485140778106
    },
    { name: 'Bukkuyum', lat: 11.98501005, lng: 5.5834557072363395 },
    {
      name: 'Bungudu',
      lat: 12.007954949999998,
      lng: 6.515757106498182
    },
{
  name: 'Chafe',
  lat: 11.9333,
  lng: 6.9000
},
    { name: 'Gummi', lat: 12.0443133, lng: 5.10880855134015 },
    { name: 'Gusau', lat: 12.1658358, lng: 6.6606398 },
    {
      name: 'Kaura Namoda',
      lat: 12.477330649999999,
      lng: 6.571665937172176
    },
    {
      name: 'Maradun',
      lat: 12.716290050000001,
      lng: 6.327001709039493
    },
    { name: 'Maru', lat: 11.63648295, lng: 6.320096574985831 },
    {
      name: 'Shinkafi',
      lat: 13.037304899999999,
      lng: 6.370484287253861
    },
    { name: 'Talata Mafara', lat: 12.3990101, lng: 6.082583087838858 },
    { name: 'Zurmi', lat: 12.86324265, lng: 6.760180701843954 }
  ]}

const tribes = [
    'Afo',
    'Anang',
    'Bachama',
    'Bajju',
    'Bassa',
    'Bini',
    'Birom',
    'Chamba',
    'Ebira',
    'Efik',
    'Egbira',
    'Egun',
    'Ekoi',
    'Esan',
    'Etsako',
    'Fula',
    'Fulani',
    'Gbagyi',
    'Gwari',
    'Hausa',
    'Ibibio',
    'Ibo',
    'Idoma',
    'Igala',
    'Igbo',
    'Ijaw',
    'Ikwerre',
    'Ishan',
    'Isoko',
    'Itsekiri',
    'Jaba',
    'Jukun',
    'Kanuri',
    'Kagoro',
    'Kaje',
    'Kambari',
    'Kano',
    'Karekare',
    'Kataf',
    'Kilba',
    'Koro',
    'Kuteb',
    'Nupe',
    'Ogoni',
    'Ogoja',
    'Okobo',
    'Oron',
    'Sanga',
    'Tiv',
    'Urhobo',
    'Yoruba',
    'Zuru',
    'Other',
];

const COLORS = ['#0088FE', '#FF8042', '#FFBB28', '#00C49F'];

const options = [
  'Description of the Abuse',
  'Frequency of the Abuse',
  'Gender',
  'State',
  'LGA',
  'Tribe',
  'Socio-economic Status',
  'Marital Status',
  'Profession',
] as const;

export {
  tribes,
  genders,
  states,
  socioEconomicStatuses,
  maritalStatuses,
  professions,
  statesLGAsCoordinates,
  options,
  COLORS,
};
