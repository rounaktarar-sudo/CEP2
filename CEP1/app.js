
const NAV=[['home','nav_home'],['report','nav_report'],['tree','nav_tree'],['dashboard','nav_dashboard'],['guide','nav_guide'],['leaderboard','nav_leaderboard'],['gallery','nav_gallery'],['ack','nav_ack']];
const WCOLOR={'Wet Waste':'var(--wet)','Dry Waste':'var(--dry)','Plastic':'var(--plastic)','E-Waste':'var(--ewaste)','Hazardous Waste':'var(--haz)','Other':'var(--other)'};
const WKEYS=[['Wet Waste','w_wet'],['Dry Waste','w_dry'],['Plastic','w_plastic'],['E-Waste','w_ewaste'],['Hazardous Waste','w_haz'],['Other','w_other']];
function wLabel(type){const f=WKEYS.find(x=>x[0]===type);return f?tr(f[1]):type;}
function statusLabel(s){return s==='Reported'?tr('st_reported'):s==='Cleaning in Progress'?tr('st_progress'):tr('st_cleaned');}
const AREAS=['Gandhi Chowk','Station Road','Shiv Mandir Marg','School Road','Market Square','Riverside Ghat','Bus Stand Area','Panchayat Bhavan','Village Pond','Community Park','Farmlands','Colony'];

/* ---------- LANGUAGE ---------- */
let LANG=localStorage.getItem('cgn_lang')||'en';
function setLang(l){LANG=l;localStorage.setItem('cgn_lang',l);render();}
function tr(k){return (T[LANG]&&T[LANG][k])!==undefined?T[LANG][k]:(T.en[k]!==undefined?T.en[k]:k);}
function tr0(k){return tr(k);} /* alias used where local var 'tr' shadows the translation function */
const T={
en:{
 nav_home:'Home',nav_report:'Report Garbage',nav_tree:'Plant a Tree',nav_dashboard:'Dashboard',nav_guide:'Waste Guide',nav_leaderboard:'Green Heroes',nav_gallery:'Gallery',nav_admin:'Admin',
 hero_b1:'🗑️ Report Garbage',hero_b2:'🌳 Plant a Tree',hero_b3:'♻️ Learn Waste Management',
 hero_tag_default:'Our Village, Our Responsibility',about_default:"Report problems, track clean-ups, plant trees and see the whole village's progress in one place.",footer_default:'Together, we can make Nandapuri cleaner, greener and healthier.',
 home_eyebrow:"WHAT WE'RE BUILDING TOGETHER",home_h2:'One platform for a cleaner Nandapuri',
 c1t:'Report Garbage',c1d:'Spot an uncleared spot? Report it with a photo and location in under a minute.',
 c2t:'Plant & Track Trees',c2d:'Log every sapling planted across the village and watch the green cover grow.',
 c3t:'Live Dashboard',c3d:"See reports, clean-ups and waste collected across Nandapuri at a glance.",
 c4t:'Green Heroes',c4d:'Earn points for reporting, planting and participating — climb the leaderboard.',
 c5t:'Before & After',c5d:'Celebrate clean-up drives with real before/after photos from the village.',
 c6t:'Waste Guide',c6d:'Simple visual guide to sorting waste correctly — green, blue and red bins.',
 rep_eyebrow:'KEEP NANDAPURI CLEAN',rep_h2:'Report Garbage',rep_sub:"Found uncollected waste? Tell us where — we'll track it from report to clean-up.",
 f_photo:'Upload Photo',f_photo_ph:'No photo added yet (optional)',f_area:'Location / Area',f_select_area:'Select area',f_type:'Type of Waste',f_desc:'Description',f_desc_ph:'Briefly describe the issue',f_name:'Your Name',f_name_ph:'e.g. Aarav Patil',f_submit_rep:'Submit Report',recent_reports:'Recent Reports',
 st_reported:'Reported',st_progress:'Cleaning in Progress',st_cleaned:'Cleaned',mark_progress:'Mark as Cleaning in Progress ✓',mark_cleaned:'Mark as Cleaned ✓',
 w_wet:'Wet Waste',w_dry:'Dry Waste',w_plastic:'Plastic',w_ewaste:'E-Waste',w_haz:'Hazardous Waste',w_other:'Other',
 tree_eyebrow:'GREEN COVER',tree_h2:'Plant a Tree',tree_sub_pre:'',tree_sub_post:' trees planted so far across Nandapuri. Add yours below.',
 f_tphoto:'Tree Photo',f_tname:'Tree Name / Species',f_tname_ph:'e.g. Neem',f_tarea:'Plantation Location',f_tdate:'Date Planted',f_tby:'Planted By (person / class)',f_tby_ph:'e.g. Class 9-B',f_submit_tree:'Submit Tree',growth_stage:'Growth stage',log_growth:'Log Growth +',
 dash_eyebrow:'VILLAGE OVERVIEW',dash_h2:'Cleanliness Dashboard',dash_sub:'Live snapshot of reports, clean-ups and waste collected across Nandapuri.',
 stat_total:'🗑️ Total Reports',stat_prog:'🔄 In Progress',stat_done:'✅ Areas Cleaned',stat_kg:'♻️ Waste Collected',
 by_type:'Reports by Waste Type',no_reports:'No reports yet.',ward_map:'Nandapuri Ward Map',map_legend:'🟠 Reported &nbsp; 🔵 In Progress &nbsp; 🟢 Cleaned &nbsp; ⚪ No reports',
 lb_eyebrow:'COMMUNITY SPIRIT',lb_h2:'Green Hero Leaderboard',lb_sub:'Points for reporting garbage, planting trees, joining clean-up drives and recycling.',
 lb_t1:'Green Hero',lb_t2:'Eco Champion',lb_t3:'Cleanliness Champion',lb_legend:'+10 reporting garbage &middot; +25 planting a tree &middot; +20 cleanliness drive / before-after upload &middot; +8 recycling waste',
 pts_title:'Earn Green Points',pts_sub:'Every action for Nandapuri earns you points on the leaderboard.',
 pts1:'Report Garbage',pts2:'Plant a Tree',pts3:'Cleanliness Drive / Gallery',pts4:'Recycle Waste',
 home_stat_trees:'🌳 Trees Planted',
 gal_eyebrow:'PROOF OF CHANGE',gal_h2:'Before & After Gallery',gal_sub:'See the real difference clean-up drives make across the village.',
 f_garea:'Area',f_before:'Before Photo',f_before_ph:'📷 Add before photo',f_after:'After Photo',f_after_ph:'📷 Add after photo',f_gby_ph:'e.g. Eco Club Nandapuri',add_gallery:'Add to Gallery',before_lbl:'BEFORE',after_lbl:'AFTER',
 guide_eyebrow:'SORT IT RIGHT',guide_h2:'Waste Management Guide',guide_sub:'Simple rules every household and shop in Nandapuri can follow.',
 bin_green_t:'🟢 Green Bin → Wet Waste',bin_green_d:'Food scraps, peels, leftover cooked food and garden waste. Goes to the composting pit.',
 bin_blue_t:'🔵 Blue Bin → Dry Waste',bin_blue_d:'Paper, cardboard, clean plastic, glass and metal. Sent for recycling.',
 bin_red_t:'🔴 Red Bin → Hazardous Waste',bin_red_d:'Batteries, medicines, chemicals and sharp objects. Handled separately, never mixed.',
 comp_t:'Composting',comp_d:'Turn wet waste into rich soil at home using a simple compost pit or bin.',
 rec_t:'Recycling',rec_d:'Clean and dry waste can be given to the recycling collection every Saturday.',
 pr_t:'Plastic Reduction',pr_d:'Carry a cloth bag, refuse single-use plastic and reuse containers at home.',
 ew_t:'E-Waste Disposal',ew_d:'Drop old electronics at the Panchayat Bhavan collection point, never in regular bins.',
 habits:'Daily Green Habits',
 nav_ack:'Acknowledgment',ack_eyebrow:'WITH GRATITUDE',ack_h2:'Acknowledgment',ack_sub:'This Community Engagement Project was made possible by the guidance and support of the people below.',
 ack_inst_t:'Kavikulguru Institute of Technology & Science, Ramtek',ack_inst_d:'Community Engagement Project - built to bring cleanliness and greenery to Nandapuri village.',
 ack_guides:'Under the Guidance of',ack_team:'Project Team',ack_role_g:'Project Guide',ack_role_s:'Student',
 ack_top_e:'THE PEOPLE BEHIND THIS PROJECT',ack_top_h:'Our Guides & Team',ack_hod_h:'Head of Department',ack_guide_h:'Project Guide',ack_role_hod:'Head of Department',ack_box_h:'Acknowledgment',
 ack_note:'We express our sincere gratitude to Dr. Pankaj S. Ashtankar, Head of Department, for his valuable support and encouragement and for providing the environment needed to complete this Community Engagement Project. We are deeply thankful to our Project Guide, Mrs. Anjali V. Narad, for her constant guidance, patience and insightful suggestions at every stage of the work. We also thank Kavikulguru Institute of Technology & Science, Ramtek for giving us the opportunity to serve society, and the people of Nandapuri village for inspiring this project. Together, we can make Nandapuri cleaner, greener and healthier.',

 login:'Login',register:'Register',logout:'Log Out',my_account:'My Account',auth_eyebrow:'YOUR ACCOUNT',auth_sub:'Log in to report garbage, plant trees and earn Green Points under your own name.',
 f_fullname:'Full Name',f_username:'Username',f_password:'Password',welcome:'Welcome',bad_login:'Wrong username or password',user_taken:'Username already taken',bad_user:'Username: 3-20 letters, numbers, _ or .',bad_pass:'Password must be at least 4 characters',
 gate_t:'Please log in first',gate_d:'Create a free account or log in to submit reports, trees and photos. Your points go to your name.',posting_as:'Posting as',
 acc_pts:'Green Points',acc_rank:'Rank',acc_reports:'My Reports',acc_trees:'My Trees',acc_hi:'Hello',
 cam_take:'Take Photo',cam_choose:'Choose File',cam_snap:'📸 Capture',cam_flip:'🔄 Flip',cam_close:'✕ Close',cam_err:'Camera not available - choose a file instead',photo_added:'Photo added',photo_remove:'Remove',

 tip1:'🌱 Plant more trees',tip2:'🚫 Avoid single-use plastic',tip3:'♻️ Separate waste at source',tip4:'💧 Save water every day',tip5:'🧹 Keep public places clean',
},
hi:{
 nav_home:'होम',nav_report:'कचरा रिपोर्ट करें',nav_tree:'पौधा लगाएं',nav_dashboard:'डैशबोर्ड',nav_guide:'कचरा गाइड',nav_leaderboard:'ग्रीन हीरोज़',nav_gallery:'गैलरी',nav_admin:'एडमिन',
 hero_b1:'🗑️ कचरा रिपोर्ट करें',hero_b2:'🌳 पौधा लगाएं',hero_b3:'♻️ कचरा प्रबंधन सीखें',
 hero_tag_default:'हमारा गांव, हमारी ज़िम्मेदारी',about_default:'समस्याएं दर्ज करें, सफाई को ट्रैक करें, पेड़ लगाएं और पूरे गांव की प्रगति एक ही जगह देखें।',footer_default:'मिलकर हम नंदापुरी को स्वच्छ, हरित और स्वस्थ बना सकते हैं।',
 home_eyebrow:'हम मिलकर क्या बना रहे हैं',home_h2:'एक स्वच्छ नंदापुरी के लिए एक मंच',
 c1t:'कचरा रिपोर्ट करें',c1d:'कहीं कचरा जमा दिखा? फोटो और स्थान के साथ एक मिनट में रिपोर्ट करें।',
 c2t:'पेड़ लगाएं और ट्रैक करें',c2d:'गांव भर में लगाए गए हर पौधे को दर्ज करें और हरियाली बढ़ते देखें।',
 c3t:'लाइव डैशबोर्ड',c3d:'नंदापुरी की रिपोर्ट्स, सफाई और एकत्रित कचरा एक नज़र में देखें।',
 c4t:'ग्रीन हीरोज़',c4d:'रिपोर्ट करने, पौधे लगाने और भाग लेने पर अंक पाएं — लीडरबोर्ड में आगे बढ़ें।',
 c5t:'पहले और बाद में',c5d:'गांव की असली पहले/बाद की फोटो के साथ सफाई अभियानों का जश्न मनाएं।',
 c6t:'कचरा गाइड',c6d:'कचरे को सही तरीके से अलग करने की सरल तस्वीरी गाइड — हरा, नीला और लाल डिब्बा।',
 rep_eyebrow:'नंदापुरी को स्वच्छ रखें',rep_h2:'कचरा रिपोर्ट करें',rep_sub:'कहीं कचरा जमा दिखा? हमें बताएं — हम इसे सफाई तक ट्रैक करेंगे।',
 f_photo:'फोटो अपलोड करें',f_photo_ph:'अभी कोई फोटो नहीं जोड़ी (वैकल्पिक)',f_area:'स्थान / क्षेत्र',f_select_area:'क्षेत्र चुनें',f_type:'कचरे का प्रकार',f_desc:'विवरण',f_desc_ph:'समस्या का संक्षिप्त विवरण दें',f_name:'आपका नाम',f_name_ph:'जैसे आरव पाटिल',f_submit_rep:'रिपोर्ट सबमिट करें',recent_reports:'हाल की रिपोर्ट्स',
 st_reported:'रिपोर्ट किया गया',st_progress:'सफाई जारी है',st_cleaned:'सफाई हो गई',mark_progress:'सफाई जारी के रूप में चिह्नित करें ✓',mark_cleaned:'सफाई पूर्ण के रूप में चिह्नित करें ✓',
 w_wet:'गीला कचरा',w_dry:'सूखा कचरा',w_plastic:'प्लास्टिक',w_ewaste:'ई-कचरा',w_haz:'खतरनाक कचरा',w_other:'अन्य',
 tree_eyebrow:'हरित आवरण',tree_h2:'पौधा लगाएं',tree_sub_pre:'अब तक नंदापुरी में ',tree_sub_post:' पेड़ लगाए जा चुके हैं। अपना पेड़ नीचे जोड़ें।',
 f_tphoto:'पेड़ की फोटो',f_tname:'पेड़ का नाम / प्रजाति',f_tname_ph:'जैसे नीम',f_tarea:'रोपण स्थान',f_tdate:'रोपण तिथि',f_tby:'किसने लगाया (व्यक्ति / कक्षा)',f_tby_ph:'जैसे कक्षा 9-बी',f_submit_tree:'पेड़ जोड़ें',growth_stage:'वृद्धि चरण',log_growth:'वृद्धि दर्ज करें +',
 dash_eyebrow:'गांव का अवलोकन',dash_h2:'स्वच्छता डैशबोर्ड',dash_sub:'नंदापुरी की रिपोर्ट्स, सफाई और एकत्रित कचरे का लाइव अवलोकन।',
 stat_total:'🗑️ कुल रिपोर्ट्स',stat_prog:'🔄 प्रगति में',stat_done:'✅ साफ किए गए क्षेत्र',stat_kg:'♻️ एकत्रित कचरा',
 by_type:'कचरे के प्रकार अनुसार रिपोर्ट्स',no_reports:'अभी कोई रिपोर्ट नहीं।',ward_map:'नंदापुरी वार्ड मानचित्र',map_legend:'🟠 रिपोर्ट किया गया &nbsp; 🔵 प्रगति में &nbsp; 🟢 साफ हो गया &nbsp; ⚪ कोई रिपोर्ट नहीं',
 lb_eyebrow:'सामुदायिक भावना',lb_h2:'ग्रीन हीरो लीडरबोर्ड',lb_sub:'कचरा रिपोर्ट करने, पेड़ लगाने, सफाई अभियान में भाग लेने और रीसाइक्लिंग के लिए अंक।',
 lb_t1:'ग्रीन हीरो',lb_t2:'इको चैंपियन',lb_t3:'स्वच्छता चैंपियन',lb_legend:'+10 कचरा रिपोर्ट करने पर &middot; +25 पेड़ लगाने पर &middot; +20 सफाई अभियान / गैलरी अपलोड &middot; +8 रीसाइक्लिंग',
 pts_title:'ग्रीन पॉइंट्स कमाएं',pts_sub:'नंदापुरी के लिए हर कार्य पर आपको लीडरबोर्ड में अंक मिलते हैं।',
 pts1:'कचरा रिपोर्ट करें',pts2:'पौधा लगाएं',pts3:'सफाई अभियान / गैलरी',pts4:'कचरा रीसाइक्लिंग',
 home_stat_trees:'🌳 लगाए गए पेड़',
 gal_eyebrow:'बदलाव का प्रमाण',gal_h2:'पहले और बाद की गैलरी',gal_sub:'सफाई अभियानों से गांव में हुआ असली बदलाव देखें।',
 f_garea:'क्षेत्र',f_before:'पहले की फोटो',f_before_ph:'📷 पहले की फोटो जोड़ें',f_after:'बाद की फोटो',f_after_ph:'📷 बाद की फोटो जोड़ें',f_gby_ph:'जैसे इको क्लब नंदापुरी',add_gallery:'गैलरी में जोड़ें',before_lbl:'पहले',after_lbl:'बाद',
 guide_eyebrow:'सही तरीके से अलग करें',guide_h2:'कचरा प्रबंधन गाइड',guide_sub:'नंदापुरी का हर घर और दुकान इन नियमों का पालन कर सकता है।',
 bin_green_t:'🟢 हरा डिब्बा → गीला कचरा',bin_green_d:'खाने के टुकड़े, छिलके, बचा खाना और बगीचे का कचरा। कंपोस्टिंग गड्ढे में जाता है।',
 bin_blue_t:'🔵 नीला डिब्बा → सूखा कचरा',bin_blue_d:'कागज़, कार्डबोर्ड, साफ प्लास्टिक, कांच और धातु। रीसाइक्लिंग के लिए भेजा जाता है।',
 bin_red_t:'🔴 लाल डिब्बा → खतरनाक कचरा',bin_red_d:'बैटरी, दवाइयाँ, रसायन और नुकीली चीज़ें। अलग से संभाला जाता है, कभी न मिलाएं।',
 comp_t:'कंपोस्टिंग',comp_d:'गीले कचरे से घर पर ही साधारण गड्ढे या डिब्बे से उपजाऊ मिट्टी बनाएं।',
 rec_t:'रीसाइक्लिंग',rec_d:'साफ और सूखा कचरा हर शनिवार रीसाइक्लिंग संग्रह को दिया जा सकता है।',
 pr_t:'प्लास्टिक में कमी',pr_d:'कपड़े का थैला रखें, एक बार उपयोग प्लास्टिक से बचें और कंटेनर दोबारा उपयोग करें।',
 ew_t:'ई-कचरा निपटान',ew_d:'पुराने इलेक्ट्रॉनिक्स पंचायत भवन संग्रह केंद्र पर दें, सामान्य डिब्बे में कभी न डालें।',
 habits:'रोज़ाना की हरित आदतें',
 nav_ack:'आभार',ack_eyebrow:'कृतज्ञता सहित',ack_h2:'आभार',ack_sub:'यह सामुदायिक सहभागिता परियोजना नीचे दिए गए लोगों के मार्गदर्शन और सहयोग से संभव हो सकी।',
 ack_inst_t:'कविकुलगुरु इंस्टिट्यूट ऑफ टेक्नोलॉजी एंड साइंस, रामटेक',ack_inst_d:'सामुदायिक सहभागिता परियोजना - नंदापुरी गांव में स्वच्छता और हरियाली लाने के लिए बनाई गई।',
 ack_guides:'मार्गदर्शन',ack_team:'परियोजना टीम',ack_role_g:'परियोजना मार्गदर्शक',ack_role_s:'विद्यार्थी',
 ack_top_e:'इस परियोजना के पीछे के लोग',ack_top_h:'हमारे मार्गदर्शक और टीम',ack_hod_h:'विभागाध्यक्ष',ack_guide_h:'परियोजना मार्गदर्शक',ack_role_hod:'विभागाध्यक्ष',ack_box_h:'आभार',
 ack_note:'हम विभागाध्यक्ष डॉ. पंकज एस. अष्टनकर के बहुमूल्य सहयोग, प्रोत्साहन और इस सामुदायिक सहभागिता परियोजना को पूरा करने के लिए आवश्यक वातावरण उपलब्ध कराने हेतु हृदय से आभारी हैं। हम अपनी परियोजना मार्गदर्शक श्रीमती अंजली वी. नराड के प्रत्येक चरण पर निरंतर मार्गदर्शन, धैर्य और उपयोगी सुझावों के लिए गहराई से आभारी हैं। हम कविकुलगुरु इंस्टिट्यूट ऑफ टेक्नोलॉजी एंड साइंस, रामटेक के प्रति भी आभार व्यक्त करते हैं जिसने हमें समाज सेवा का अवसर दिया, और नंदापुरी गांव के लोगों के प्रति भी जिन्होंने इस परियोजना को प्रेरित किया। मिलकर हम नंदापुरी को स्वच्छ, हरित और स्वस्थ बना सकते हैं।',

 login:'लॉगिन',register:'रजिस्टर करें',logout:'लॉग आउट',my_account:'मेरा खाता',auth_eyebrow:'आपका खाता',auth_sub:'कचरा रिपोर्ट करने, पेड़ लगाने और अपने नाम से ग्रीन पॉइंट्स कमाने के लिए लॉगिन करें।',
 f_fullname:'पूरा नाम',f_username:'यूज़रनेम',f_password:'पासवर्ड',welcome:'स्वागत है',bad_login:'यूज़रनेम या पासवर्ड गलत है',user_taken:'यह यूज़रनेम पहले से लिया जा चुका है',bad_user:'यूज़रनेम: 3-20 अक्षर, अंक, _ या .',bad_pass:'पासवर्ड कम से कम 4 अक्षरों का हो',
 gate_t:'कृपया पहले लॉगिन करें',gate_d:'रिपोर्ट, पेड़ और फोटो जमा करने के लिए मुफ़्त खाता बनाएं या लॉगिन करें। अंक आपके नाम पर जुड़ेंगे।',posting_as:'इस नाम से पोस्ट',
 acc_pts:'ग्रीन पॉइंट्स',acc_rank:'रैंक',acc_reports:'मेरी रिपोर्ट्स',acc_trees:'मेरे पेड़',acc_hi:'नमस्ते',
 cam_take:'फोटो खींचें',cam_choose:'फाइल चुनें',cam_snap:'📸 कैप्चर',cam_flip:'🔄 कैमरा बदलें',cam_close:'✕ बंद करें',cam_err:'कैमरा उपलब्ध नहीं - कृपया फाइल चुनें',photo_added:'फोटो जुड़ गई',photo_remove:'हटाएं',

 tip1:'🌱 और पेड़ लगाएं',tip2:'🚫 एक बार उपयोग प्लास्टिक से बचें',tip3:'♻️ स्रोत पर कचरा अलग करें',tip4:'💧 रोज़ पानी बचाएं',tip5:'🧹 सार्वजनिक स्थान साफ रखें',
}
};

function uid(p){return p+'-'+Math.random().toString(36).slice(2,6).toUpperCase();}
function load(){
  let s=localStorage.getItem('cgn_state_v1');
  if(s) return JSON.parse(s);
  const now=Date.now(),day=86400000;
  const s0={
    reports:[
      {id:uid('RPT'),area:'Gandhi Chowk',type:'Plastic',desc:'Plastic bottles piled near the bus stop.',status:'Cleaned',by:'Aarav Patil',photo:'',t:now-9*day},
      {id:uid('RPT'),area:'Station Road',type:'Wet Waste',desc:'Vegetable market waste not collected for 2 days.',status:'Cleaning in Progress',by:'Priya Deshmukh',photo:'',t:now-3*day},
      {id:uid('RPT'),area:'Riverside Ghat',type:'E-Waste',desc:'Old electronics dumped near the ghat steps.',status:'Reported',by:'Eco Club Nandapuri',photo:'',t:now-1*day},
      {id:uid('RPT'),area:'School Road',type:'Dry Waste',desc:'Paper and packaging scattered outside school gate.',status:'Cleaned',by:'Class 9-B',photo:'',t:now-7*day},
      {id:uid('RPT'),area:'Market Square',type:'Hazardous Waste',desc:'Broken glass and chemical containers near shops.',status:'Reported',by:'Ramesh Kumar',photo:'',t:now-day/2},
    ],
    trees:[
      {id:uid('TRE'),name:'Neem',area:'School Road',date:'2026-07-14',by:'Class 9-B',height:1,t:now-80*day},
      {id:uid('TRE'),name:'Banyan',area:'Panchayat Bhavan',date:'2026-08-02',by:'Eco Club Nandapuri',height:1,t:now-60*day},
      {id:uid('TRE'),name:'Gulmohar',area:'Station Road',date:'2026-08-20',by:'Sneha Joshi',height:1,t:now-42*day},
      {id:uid('TRE'),name:'Mango',area:'Gandhi Chowk',date:'2026-09-10',by:'Aarav Patil',height:1,t:now-21*day},
    ],
    gallery:[
      {id:uid('GAL'),area:'Gandhi Chowk',before:'',after:'',by:'Aarav Patil'},
      {id:uid('GAL'),area:'School Road',before:'',after:'',by:'Class 9-B'},
    ],
    points:{'Aarav Patil':40,'Priya Deshmukh':25,'Eco Club Nandapuri':95,'Class 9-B':80,'Sneha Joshi':35,'Ramesh Kumar':10},
    content:{
      siteName:'Clean & Green Nandapuri',
      heroTitle:'Clean & Green Nandapuri',
      heroHindi:'स्वच्छ नंदापुरी • हरित नंदापुरी',
      heroTag:'Our Village, Our Responsibility',
      aboutText:"Report problems, track clean-ups, plant trees and see the whole village's progress in one place.",
      footerMsg:'Together, we can make Nandapuri cleaner, greener and healthier.'
    },
    admins:[{name:'Main Admin',user:'admin',pass:'nandapuri2026'}]
  };
  localStorage.setItem('cgn_state_v1',JSON.stringify(s0));
  return s0;
}
let STATE=load();
/* BACKEND SYNC */
const API=(window.CGN_API||'')+'/api/state';
let _saveT=null;
function pushState(){clearTimeout(_saveT);_saveT=setTimeout(()=>{fetch(API,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(STATE)}).catch(()=>{});},400);}
async function pullState(){try{const r=await fetch(API);if(!r.ok)return;const d=await r.json();if(d&&d.reports){STATE=d;try{localStorage.setItem('cgn_state_v1',JSON.stringify(STATE));}catch(e){}render();}else{pushState();}}catch(e){}}
if(!STATE.content){STATE.content={siteName:'Clean & Green Nandapuri',heroTitle:'Clean & Green Nandapuri',heroHindi:'स्वच्छ नंदापुरी • हरित नंदापुरी',heroTag:'Our Village, Our Responsibility',aboutText:"Report problems, track clean-ups, plant trees and see the whole village's progress in one place.",footerMsg:'Together, we can make Nandapuri cleaner, greener and healthier.'};}
if(!STATE.admins||!STATE.admins.length){STATE.admins=[{name:'Main Admin',user:'admin',pass:'nandapuri2026'}];save();}
function save(){ try{localStorage.setItem('cgn_state_v1',JSON.stringify(STATE));}catch(e){} pushState(); }
if(!STATE.users){STATE.users=[];save();}
function addPoints(name,pts){ if(!name) name='You'; STATE.points[name]=(STATE.points[name]||0)+pts; }
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(window._tt);window._tt=setTimeout(()=>t.classList.remove('show'),2400);}

let VIEW='home';
function go(v){closeCamera();VIEW=v;render();window.scrollTo({top:0,behavior:'smooth'});}
function buildNav(){
  document.getElementById('nav').innerHTML=NAV.map(([k,l])=>`<button class="${k===VIEW?'on':''}" onclick="go('${k}')">${tr(l)}</button>`).join('');
  document.getElementById('headerCta').textContent=tr('hero_b1');
  document.getElementById('adminNavBtn').textContent='🔐 '+tr('nav_admin');
  const me=ME(); document.getElementById('userBtn').textContent='👤 '+(me?me.name.split(' ')[0].slice(0,12):tr('login'));
  document.getElementById('camSnap').textContent=tr('cam_snap');document.getElementById('camFlip').textContent=tr('cam_flip');document.getElementById('camClose').textContent=tr('cam_close');
  updateThemeBtn();
}

/* ---------- RENDERERS ---------- */
function renderHome(){
  const total=STATE.reports.length, done=STATE.reports.filter(r=>r.status==='Cleaned').length,
        kg=total*8+done*5, trees=STATE.trees.length;
  return `
  <section class="hero">
    <div class="hero-leaf">🌳</div>
    <h1>${STATE.content.heroTitle}<span class="hi">${STATE.content.heroHindi}</span></h1>
    <p class="tag">${LANG==='hi'?tr('hero_tag_default'):(STATE.content.heroTag||tr('hero_tag_default'))}</p>
    <div class="hero-btns">
      <button class="hbtn" onclick="go('report')">${tr('hero_b1')}</button>
      <button class="hbtn" onclick="go('tree')">${tr('hero_b2')}</button>
      <button class="hbtn ghost" onclick="go('guide')">${tr('hero_b3')}</button>
    </div>
    <div class="illus-row">🌳 🧹 🗑️ ♻️ 🏡 🌿</div>
  </section>

  <div class="grid g4" style="margin-bottom:34px">
    <div class="stat big"><div class="n">${trees}</div><div class="l">${tr('home_stat_trees')}</div></div>
    <div class="stat big"><div class="n">${kg} kg</div><div class="l">${tr('stat_kg')}</div></div>
    <div class="stat big"><div class="n">${total}</div><div class="l">${tr('stat_total')}</div></div>
    <div class="stat big"><div class="n">${done}</div><div class="l">${tr('stat_done')}</div></div>
  </div>

  <div class="section-head"><div class="eyebrow">${tr('home_eyebrow')}</div><h2>${tr('home_h2')}</h2><p>${LANG==='hi'?tr('about_default'):(STATE.content.aboutText||tr('about_default'))}</p></div>
  <div class="grid g3" style="margin-bottom:34px">
    <button class="card cardbtn" onclick="go('report')"><div class="icon-box">🗑️</div><h3>${tr('c1t')}</h3><p>${tr('c1d')}</p></button>
    <button class="card cardbtn" onclick="go('tree')"><div class="icon-box">🌳</div><h3>${tr('c2t')}</h3><p>${tr('c2d')}</p></button>
    <button class="card cardbtn" onclick="go('dashboard')"><div class="icon-box">📊</div><h3>${tr('c3t')}</h3><p>${tr('c3d')}</p></button>
    <button class="card cardbtn" onclick="go('leaderboard')"><div class="icon-box">🏆</div><h3>${tr('c4t')}</h3><p>${tr('c4d')}</p></button>
    <button class="card cardbtn" onclick="go('gallery')"><div class="icon-box">🖼️</div><h3>${tr('c5t')}</h3><p>${tr('c5d')}</p></button>
    <button class="card cardbtn" onclick="go('guide')"><div class="icon-box">♻️</div><h3>${tr('c6t')}</h3><p>${tr('c6d')}</p></button>
  </div>

  <div class="section-head"><div class="eyebrow">${tr('pts_title')}</div><h2>${tr('pts_title')}</h2><p>${tr('pts_sub')}</p></div>
  <div class="grid g4">
    <div class="card" style="text-align:center"><div class="icon-box" style="margin:0 auto 10px">🗑️</div><h3 style="font-size:1.6rem;color:var(--leaf)">+10</h3><p>${tr('pts1')}</p></div>
    <div class="card" style="text-align:center"><div class="icon-box" style="margin:0 auto 10px">🌳</div><h3 style="font-size:1.6rem;color:var(--leaf)">+25</h3><p>${tr('pts2')}</p></div>
    <div class="card" style="text-align:center"><div class="icon-box" style="margin:0 auto 10px">🧹</div><h3 style="font-size:1.6rem;color:var(--leaf)">+20</h3><p>${tr('pts3')}</p></div>
    <div class="card" style="text-align:center"><div class="icon-box" style="margin:0 auto 10px">♻️</div><h3 style="font-size:1.6rem;color:var(--leaf)">+8</h3><p>${tr('pts4')}</p></div>
  </div>`;
}

function reportStepIdx(s){return s==='Reported'?0:s==='Cleaning in Progress'?1:2;}
function reportSteps(status){
  const i=reportStepIdx(status);
  return `<div class="steps">
    <div class="dot ${i>=0?'on':''}"></div><div class="seg ${i>=1?'on':''}"></div>
    <div class="dot ${i>=1?'on':''}"></div><div class="seg ${i>=2?'on':''}"></div>
    <div class="dot ${i>=2?'on':''}"></div>
  </div><div style="display:flex;justify-content:space-between;font-size:.72rem;color:var(--sub);margin-top:-8px"><span>${tr('st_reported')}</span><span>${tr('st_progress')}</span><span>${tr('st_cleaned')}</span></div>`;
}
function renderReport(){
  const list=[...STATE.reports].sort((a,b)=>b.t-a.t).slice(0,10).map(r=>`
    <div class="reportcard">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap">
        <strong style="font-size:.9rem">${r.id}</strong>
        <span class="badge ${r.status==='Reported'?'b-reported':r.status==='Cleaning in Progress'?'b-progress':'b-cleaned'}">${statusLabel(r.status)}</span>
      </div>
      <div style="margin-top:6px"><span class="waste-tag" style="background:${WCOLOR[r.type]||'#555'}">${wLabel(r.type)}</span></div>
      <p style="margin-top:8px">📍 ${r.area} &middot; 👤 ${r.by}</p>
      <p class="small" style="margin-top:4px">${r.desc}</p>
      ${r.photo?`<img class="rimg" src="${r.photo}" alt="">`:''}
      ${reportSteps(r.status)}
      ${r.status!=='Cleaned'?`<button class="advbtn" onclick="advance('${r.id}')">${r.status==='Reported'?tr('mark_progress'):tr('mark_cleaned')}</button>`:''}
    </div>`).join('');
  return `
  <div class="section-head"><div class="eyebrow">${tr('rep_eyebrow')}</div><h2>${tr('rep_h2')}</h2><p>${tr('rep_sub')}</p></div>
  <div class="grid" style="grid-template-columns:1.1fr 1.4fr;align-items:start;gap:22px">
    ${ME()?`<form class="formcard" onsubmit="submitReport(event)">
      <div class="field"><label>${tr('f_photo')}</label>
        ${photoField('uplabel',tr('f_photo_ph'))}
      </div>
      <div class="field"><label>${tr('f_area')}</label>
        <select id="rarea" required><option value="">${tr('f_select_area')}</option>${AREAS.map(a=>`<option>${a}</option>`).join('')}</select>
      </div>
      <div class="field"><label>${tr('f_type')}</label>
        <select id="rtype" required>${Object.keys(WCOLOR).map(w=>`<option value="${w}">${wLabel(w)}</option>`).join('')}</select>
      </div>
      <div class="field"><label>${tr('f_desc')}</label><textarea id="rdesc" placeholder="${tr('f_desc_ph')}" required></textarea></div>
      <p class="small" style="margin-bottom:14px">👤 ${tr('posting_as')} <strong>${ME()?ME().name:''}</strong></p>
      <button class="submitbtn" type="submit">${tr('f_submit_rep')}</button>
    </form>`:loginGate()}
    <div><h3 style="color:var(--head);margin-bottom:10px">${tr('recent_reports')}</h3>${list}</div>
  </div>`;
}
function photoField(id,ph){
  return `<div class="upload" id="${id}" data-ph="${ph}">${ph}</div>
  <div class="photobtns">
    <button type="button" class="pbtn" onclick="openCamera('${id}')">📷 ${tr('cam_take')}</button>
    <label class="pbtn">🖼️ ${tr('cam_choose')}<input type="file" accept="image/*" style="display:none" onchange="previewPhoto(this,'${id}')"></label>
    <input type="file" accept="image/*" capture="environment" id="${id}_cam" style="display:none" onchange="previewPhoto(this,'${id}')">
  </div>`;
}
function compressDataUrl(src,max=900,q=.72){return new Promise(res=>{const i=new Image();i.onload=()=>{const k=Math.min(1,max/Math.max(i.width,i.height));const c=document.createElement('canvas');c.width=Math.round(i.width*k);c.height=Math.round(i.height*k);c.getContext('2d').drawImage(i,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',q));};i.onerror=()=>res(src);i.src=src;});}
function setPhoto(id,data){
  const el=document.getElementById(id); if(!el)return;
  el.dataset.img=data;
  el.innerHTML=`<img src="${data}" alt="preview"><div class="small">${tr('photo_added')} ✓ &middot; <a href="#" onclick="clearPhoto('${id}');return false">${tr('photo_remove')}</a></div>`;
}
function clearPhoto(id){const el=document.getElementById(id);if(!el)return;delete el.dataset.img;el.textContent=el.dataset.ph||'';}
function previewPhoto(input,labelId){
  if(!input.files||!input.files[0])return;
  const r=new FileReader();
  r.onload=e=>compressDataUrl(e.target.result).then(d=>setPhoto(labelId,d));
  r.readAsDataURL(input.files[0]); input.value='';
}
/* ---------- CAMERA ---------- */
const CAM={stream:null,facing:'environment',target:null};
function openCamera(id){
  const coarse=window.matchMedia('(pointer:coarse)').matches;
  if(coarse||!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)){const i=document.getElementById(id+'_cam');if(i)i.click();return;}
  CAM.target=id; document.getElementById('camwrap').classList.remove('hidden'); startStream();
}
async function startStream(){
  stopStream();
  try{
    CAM.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:CAM.facing}},audio:false});
    const v=document.getElementById('camvideo'); v.srcObject=CAM.stream; await v.play().catch(()=>{});
  }catch(err){
    const id=CAM.target; closeCamera(); toast('📷 '+tr('cam_err'));
    const i=document.getElementById(id+'_cam'); if(i)i.click();
  }
}
function stopStream(){if(CAM.stream){CAM.stream.getTracks().forEach(t=>t.stop());CAM.stream=null;}}
function closeCamera(){stopStream();const w=document.getElementById('camwrap');if(w)w.classList.add('hidden');}
function flipCamera(){CAM.facing=CAM.facing==='environment'?'user':'environment';startStream();}
function snapPhoto(){
  const v=document.getElementById('camvideo'); if(!v.videoWidth)return;
  const c=document.createElement('canvas'); c.width=v.videoWidth; c.height=v.videoHeight; c.getContext('2d').drawImage(v,0,0);
  const id=CAM.target;
  compressDataUrl(c.toDataURL('image/jpeg',.9)).then(d=>{setPhoto(id,d);closeCamera();toast('📸 '+tr('photo_added'));});
}
function submitReport(e){
  e.preventDefault();
  const area=document.getElementById('rarea').value, type=document.getElementById('rtype').value,
        desc=document.getElementById('rdesc').value, name=(ME()||{name:'You'}).name,
        photo=(document.getElementById('uplabel').dataset.img)||'';
  const rep={id:uid('RPT'),area,type,desc,status:'Reported',by:name,photo,t:Date.now()};
  STATE.reports.unshift(rep); addPoints(name,10); save();
  toast(`✅ Report ${rep.id} submitted! +10 Green Points`);
  render();
}
function advance(id){
  const r=STATE.reports.find(x=>x.id===id); if(!r)return;
  r.status = r.status==='Reported' ? 'Cleaning in Progress' : 'Cleaned';
  save(); toast(`${id} updated to "${r.status}"`); render();
}


/* ---------- VILLAGE MAP (zones) ---------- */
const ZONES=[
  {id:'panchayat',en:'Panchayat',hi:'पंचायत',full:'Panchayat / पंचायत',areas:['Panchayat Bhavan','Gandhi Chowk'],x:8,y:12},
  {id:'school',en:'School',hi:'स्कूल',full:'Nandapuri High School / नंदापुरी हाई स्कूल',areas:['School Road'],x:38.4,y:9},
  {id:'market',en:'Market',hi:'बाज़ार',full:'Market / बाज़ार',areas:['Market Square','Station Road','Bus Stand Area'],x:69.4,y:13.6},
  {id:'pond',en:'Pond & Park',hi:'तालाब',full:'Pond & Park / तालाब',areas:['Riverside Ghat','Village Pond','Community Park'],x:13.5,y:53.4},
  {id:'farm',en:'Farmlands',hi:'खेत',full:'Farmlands / खेत',areas:['Farmlands'],x:47.4,y:60},
  {id:'colony',en:'Colony',hi:'कॉलोनी',full:'Colony / कॉलोनी',areas:['Colony','Shiv Mandir Marg'],x:71.6,y:49}
];
let ZONE_SEL='school';
function selZone(id){ZONE_SEL=id;render();}
function zEsc(t){return String(t==null?'':t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function zoneData(z){
  const reps=STATE.reports.filter(r=>z.areas.includes(r.area));
  const trees=STATE.trees.filter(t=>z.areas.includes(t.area));
  const rep=reps.filter(r=>r.status==='Reported').length,
        prog=reps.filter(r=>r.status==='Cleaning in Progress').length,
        done=reps.filter(r=>r.status==='Cleaned').length;
  return {reps,trees,rep,prog,done};
}
function renderVillageMap(){
  const stCls={'Reported':'rep','Cleaning in Progress':'prog','Cleaned':'done'};
  const stLbl={'Reported':'Reported / दर्ज हुआ','Cleaning in Progress':'In Progress / जारी','Cleaned':'Cleaned / साफ हो गया'};
  const cells=ZONES.map(z=>{
    const d=zoneData(z), open=d.rep+d.prog;
    const cls=d.rep?'rep':d.prog?'prog':d.reps.length?'done':'none';
    return `<button class="zone ${ZONE_SEL===z.id?'sel':''} ${z.id==='pond'?'zpond':''}" style="left:${z.x}%;top:${z.y}%" onclick="selZone('${z.id}')" aria-label="${zEsc(z.en)}">
      <span class="zn">${z.en}</span><span class="zh">${z.hi}</span>
      <span class="zbadges"><span class="zb ${cls}" title="Open reports">${d.reps.length?(open||'✓'):'–'}</span><span class="zt" title="Trees">🌳${d.trees.length?`<small>${d.trees.length}</small>`:''}</span></span>
    </button>`;}).join('');
  const z=ZONES.find(x=>x.id===ZONE_SEL)||ZONES[0], d=zoneData(z);
  const list=[...d.reps].sort((a,b)=>b.t-a.t).map(r=>`
    <div class="zrep"><div><div class="zid">${zEsc(r.id)}</div><div class="zdesc">${zEsc(r.desc||r.type)}</div><div class="zarea">📍 ${zEsc(r.area)} · ${zEsc(r.type)}</div></div>
    <span class="zpill ${stCls[r.status]||'rep'}"><i></i>${stLbl[r.status]||zEsc(r.status)}</span></div>`).join('')||'<p class="small">No reports in this zone yet / इस क्षेत्र में अभी कोई रिपोर्ट नहीं</p>';
  return `
  <div class="vmap-wrap">
    <div class="section-head" style="margin-bottom:14px;max-width:none"><h2 style="font-size:1.6rem">Village Map / गाँव का नक्शा</h2><p>Click a zone to see its reports / किसी क्षेत्र पर क्लिक करें</p></div>
    <div class="vmap-grid">
      <div class="vmap-box">
        <div class="vmap">
          <i class="road v1"></i><i class="road v2"></i><i class="road h"></i><i class="road diag"></i>
          <i class="pondbg"></i>
          <span class="deco" style="left:6%;top:10%;background:#DCF3E4"></span><span class="deco" style="right:2%;top:2%;background:#DCF3E4;width:4%"></span>
          <span class="emo" style="left:35%;top:6%">🏫</span><span class="emo" style="left:92%;top:19%">🛕</span><span class="emo" style="left:3.5%;top:44%">🏠</span><span class="emo" style="left:44%;top:70%">🌽</span><span class="emo" style="left:91%;top:8%">🌳</span>
          ${cells}
        </div>
        <div class="vlegend"><span><i class="lg rep"></i>Reported / दर्ज हुआ</span><span><i class="lg prog"></i>In Progress / जारी</span><span><i class="lg done"></i>Cleaned / साफ</span><span>🌳 Trees / पेड़</span></div>
      </div>
      <div class="vpanel">
        <h3>${zEsc(z.full)}</h3>
        <div class="vstats"><span>🌳 ${d.trees.length} trees</span><span><i class="lg rep"></i>${d.rep} reported</span><span><i class="lg prog"></i>${d.prog} in progress</span><span><i class="lg done"></i>${d.done} cleaned</span></div>
        ${list}
      </div>
    </div>
  </div>`;
}

function renderDashboard(){
  const total=STATE.reports.length, done=STATE.reports.filter(r=>r.status==='Cleaned').length,
        prog=STATE.reports.filter(r=>r.status==='Cleaning in Progress').length,
        kg=total*8+done*5;
  const byType={}; STATE.reports.forEach(r=>byType[r.type]=(byType[r.type]||0)+1);
  const maxT=Math.max(1,...Object.values(byType));
  const areaStatus={}; AREAS.forEach(a=>{const rs=STATE.reports.filter(r=>r.area===a); areaStatus[a]= rs.length? (rs.every(r=>r.status==='Cleaned')?'Cleaned':rs.some(r=>r.status==='Reported')?'Reported':'In Progress') : 'No reports';});
  const pinColor={'Cleaned':'var(--leaf)','In Progress':'#1565C0','Reported':'#D97706','No reports':'var(--line)'};
  return `
  <div class="section-head"><div class="eyebrow">${tr('dash_eyebrow')}</div><h2>${tr('dash_h2')}</h2><p>${tr('dash_sub')}</p></div>
  <div class="grid g4" style="margin-bottom:22px">
    <div class="stat"><div class="n">${total}</div><div class="l">${tr('stat_total')}</div></div>
    <div class="stat"><div class="n">${prog}</div><div class="l">${tr('stat_prog')}</div></div>
    <div class="stat"><div class="n">${done}</div><div class="l">${tr('stat_done')}</div></div>
    <div class="stat"><div class="n">${kg} kg</div><div class="l">${tr('stat_kg')}</div></div>
  </div>
  ${renderVillageMap()}
  <div class="card" style="margin-top:22px"><h3>${tr('by_type')}</h3>
      ${Object.entries(byType).map(([k,v])=>`<div class="bar-row"><span class="lbl">${wLabel(k)}</span><div class="bar-track"><div class="bar-fill" style="width:${v/maxT*100}%;background:${WCOLOR[k]}"></div></div><span class="val">${v}</span></div>`).join('')||`<p>${tr('no_reports')}</p>`}
  </div>`;
}

function renderTree(){
  const cards=[...STATE.trees].sort((a,b)=>b.t-a.t).map(tr=>`
    <div class="treecard"><div class="top">${tr.photo?`<img src="${tr.photo}" alt="" style="width:100%;height:100%;object-fit:cover">`:'🌳'}</div><div class="body">
      <h3>${tr.name}</h3>
      <div class="row">📍 ${tr.area}</div>
      <div class="row">📅 ${tr.date}</div>
      <div class="row">👤 ${tr.by}</div>
      <div style="margin-top:10px"><div class="bar-track"><div class="bar-fill" style="width:${Math.min(100,tr.height*22)}%"></div></div><p class="small" style="margin-top:4px">${tr0('growth_stage')} ${tr.height}/5 🌱</p></div>
      <button class="advbtn" style="margin-top:10px" onclick="growTree('${tr.id}')">${tr0('log_growth')}</button>
    </div></div>`).join('');
  return `
  <div class="section-head"><div class="eyebrow">${tr0('tree_eyebrow')}</div><h2>${tr0('tree_h2')}</h2><p>${tr0('tree_sub_pre')}${STATE.trees.length}${tr0('tree_sub_post')}</p></div>
  <div class="grid" style="grid-template-columns:1.1fr 1.4fr;align-items:start;gap:22px">
    ${ME()?`<form class="formcard" onsubmit="submitTree(event)">
      <div class="field"><label>${tr0('f_tphoto')}</label>
        ${photoField('tuplabel',tr0('f_photo_ph'))}
      </div>
      <div class="field"><label>${tr0('f_tname')}</label><input id="tname" placeholder="${tr0('f_tname_ph')}" required></div>
      <div class="field"><label>${tr0('f_tarea')}</label><select id="tarea" required><option value="">${tr0('f_select_area')}</option>${AREAS.map(a=>`<option>${a}</option>`).join('')}</select></div>
      <div class="field"><label>${tr0('f_tdate')}</label><input type="date" id="tdate" required></div>
      <div class="field"><label>${tr0('f_tby')}</label><input id="tby" value="${ME()?ME().name:''}" placeholder="${tr0('f_tby_ph')}" required></div>
      <button class="submitbtn" type="submit">${tr0('f_submit_tree')}</button>
    </form>`:loginGate()}
    <div class="grid g3">${cards}</div>
  </div>`;
}
function submitTree(e){
  e.preventDefault();
  const name=document.getElementById('tname').value, area=document.getElementById('tarea').value,
        date=document.getElementById('tdate').value, by=document.getElementById('tby').value;
  STATE.trees.unshift({id:uid('TRE'),name,area,date,by,height:1,t:Date.now(),photo:(document.getElementById('tuplabel').dataset.img)||''});
  addPoints(by,25); save();
  toast(`🌳 Tree added! +25 Green Points for ${by}`);
  render();
}
function growTree(id){const t=STATE.trees.find(x=>x.id===id); if(!t)return; t.height=Math.min(5,t.height+1); save(); render(); toast('Growth logged 🌱');}

function renderLeaderboard(){
  const arr=Object.entries(STATE.points).sort((a,b)=>b[1]-a[1]);
  const max=arr.length?arr[0][1]:1;
  const medals=['🥇','🥈','🥉'];
  const titles=[tr('lb_t1'),tr('lb_t2'),tr('lb_t3')];
  return `
  <div class="section-head"><div class="eyebrow">${tr('lb_eyebrow')}</div><h2>${tr('lb_h2')}</h2><p>${tr('lb_sub')}</p></div>
  ${arr.map(([name,pts],i)=>`
    <div class="lbrow"><div class="rank">${medals[i]||'🌿'}</div>
      <div style="flex:1"><strong>${name}</strong>${i<3?` <span class="small">&mdash; ${titles[i]}</span>`:''}
        <div class="meter"><i style="width:${pts/max*100}%"></i></div>
      </div>
      <div class="pts">${pts} pts</div>
    </div>`).join('')}
  <p class="small" style="margin-top:14px">${tr('lb_legend')}</p>`;
}

function renderGallery(){
  const cards=STATE.gallery.map(g=>`
    <div class="bacard"><strong>${g.area}</strong><p class="small" style="margin-bottom:8px">by ${g.by}</p>
      <div class="baimgs">
        <div>${g.before?`<img src="${g.before}">`:'🧹'}</div>
        <div>${g.after?`<img src="${g.after}">`:'✨'}</div>
      </div>
      <div class="baimgs"><div class="balabel">${tr('before_lbl')}</div><div class="balabel">${tr('after_lbl')}</div></div>
    </div>`).join('');
  return `
  <div class="section-head"><div class="eyebrow">${tr('gal_eyebrow')}</div><h2>${tr('gal_h2')}</h2><p>${tr('gal_sub')}</p></div>
  <div class="grid g3" style="margin-bottom:26px">${cards}</div>
  ${ME()?`<form class="formcard" onsubmit="submitGallery(event)">
    <div class="field"><label>${tr('f_garea')}</label><select id="garea" required><option value="">${tr('f_select_area')}</option>${AREAS.map(a=>`<option>${a}</option>`).join('')}</select></div>
    <div class="field"><label>${tr('f_before')}</label>${photoField('gbeflabel',tr('f_before_ph'))}</div>
    <div class="field"><label>${tr('f_after')}</label>${photoField('gaftlabel',tr('f_after_ph'))}</div>
    <div class="field"><label>${tr('f_name')}</label><input id="gby" value="${ME()?ME().name:''}" placeholder="${tr('f_gby_ph')}"></div>
    <button class="submitbtn" type="submit">${tr('add_gallery')}</button>
  </form>`:loginGate()}`;
}
function submitGallery(e){
  e.preventDefault();
  const area=document.getElementById('garea').value, by=document.getElementById('gby').value||'You';
  const before=document.getElementById('gbeflabel').dataset.img||'', after=document.getElementById('gaftlabel').dataset.img||'';
  STATE.gallery.unshift({id:uid('GAL'),area,before,after,by});
  addPoints(by,20); save();
  toast('✨ Added to gallery! +20 Green Points');
  render();
}

function renderGuide(){
  return `
  <div class="section-head"><div class="eyebrow">${tr('guide_eyebrow')}</div><h2>${tr('guide_h2')}</h2><p>${tr('guide_sub')}</p></div>
  <div class="binrow"><div class="bindot" style="background:var(--wet)"></div><div><h3 style="color:var(--ink)">${tr('bin_green_t')}</h3><p>${tr('bin_green_d')}</p></div></div>
  <div class="binrow"><div class="bindot" style="background:var(--dry)"></div><div><h3 style="color:var(--ink)">${tr('bin_blue_t')}</h3><p>${tr('bin_blue_d')}</p></div></div>
  <div class="binrow"><div class="bindot" style="background:var(--haz)"></div><div><h3 style="color:var(--ink)">${tr('bin_red_t')}</h3><p>${tr('bin_red_d')}</p></div></div>
  <div class="grid g3" style="margin:22px 0">
    <div class="card"><div class="icon-box">🪱</div><h3>${tr('comp_t')}</h3><p>${tr('comp_d')}</p></div>
    <div class="card"><div class="icon-box">♻️</div><h3>${tr('rec_t')}</h3><p>${tr('rec_d')}</p></div>
    <div class="card"><div class="icon-box">🛍️</div><h3>${tr('pr_t')}</h3><p>${tr('pr_d')}</p></div>
    <div class="card"><div class="icon-box">💻</div><h3>${tr('ew_t')}</h3><p>${tr('ew_d')}</p></div>
  </div>
  <h3 style="color:var(--head);margin-bottom:10px">${tr('habits')}</h3>
  <div class="grid g3">
    <div class="tip">${tr('tip1')}</div>
    <div class="tip">${tr('tip2')}</div>
    <div class="tip">${tr('tip3')}</div>
    <div class="tip">${tr('tip4')}</div>
    <div class="tip">${tr('tip5')}</div>
  </div>`;
}

/* ---------- USER LOGIN (demo: accounts live in this browser) ---------- */
let AUTHTAB='login', NEXT=null;
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function hashPw(p,u){let h1=0xdeadbeef,h2=0x41c6ce57;const str='cgn|'+u+'|'+p;for(let i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677);}h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return (4294967296*(2097151&h2)+(h1>>>0)).toString(36);}
function ME(){const u=localStorage.getItem('cgn_user');return u?(STATE.users||[]).find(x=>x.user===u):null;}
function setAuthTab(t){AUTHTAB=t;render();}
function loginGate(){return `<div class="formcard gate"><div class="icon-box">🔒</div><h3 style="color:var(--head)">${tr('gate_t')}</h3><p>${tr('gate_d')}</p><button class="submitbtn" style="margin-top:14px" onclick="NEXT=VIEW;go('auth')">${tr('login')} / ${tr('register')}</button></div>`;}
function userLogin(e){
  e.preventDefault();
  const u=document.getElementById('lg_user').value.trim().toLowerCase(), p=document.getElementById('lg_pass').value;
  const f=STATE.users.find(x=>x.user===u&&x.pass===hashPw(p,u));
  if(!f){toast('❌ '+tr('bad_login'));return;}
  localStorage.setItem('cgn_user',f.user); toast('👋 '+tr('welcome')+', '+f.name); const n=NEXT||'home'; NEXT=null; go(n);
}
function userRegister(e){
  e.preventDefault();
  const name=esc(document.getElementById('rg_name').value.trim()), u=document.getElementById('rg_user').value.trim().toLowerCase(), p=document.getElementById('rg_pass').value;
  if(!/^[a-z0-9_.]{3,20}$/.test(u)){toast('⚠️ '+tr('bad_user'));return;}
  if(p.length<4){toast('⚠️ '+tr('bad_pass'));return;}
  if(STATE.users.some(x=>x.user===u)){toast('❌ '+tr('user_taken'));return;}
  STATE.users.push({name,user:u,pass:hashPw(p,u),t:Date.now()}); save();
  localStorage.setItem('cgn_user',u); toast('🌿 '+tr('welcome')+', '+name); const n=NEXT||'home'; NEXT=null; go(n);
}
function userLogout(){localStorage.removeItem('cgn_user');go('home');}
function renderAuth(){
  const me=ME();
  if(me){
    const arr=Object.entries(STATE.points).sort((a,b)=>b[1]-a[1]), idx=arr.findIndex(x=>x[0]===me.name);
    return `<div class="section-head"><div class="eyebrow">${tr('my_account')}</div><h2>${tr('acc_hi')}, ${me.name} 👋</h2><p>@${me.user}</p></div>
    <div class="grid g4" style="margin-bottom:22px">
      <div class="stat big"><div class="n">${STATE.points[me.name]||0}</div><div class="l">${tr('acc_pts')}</div></div>
      <div class="stat"><div class="n">${idx<0?'-':'#'+(idx+1)}</div><div class="l">${tr('acc_rank')}</div></div>
      <div class="stat"><div class="n">${STATE.reports.filter(r=>r.by===me.name).length}</div><div class="l">${tr('acc_reports')}</div></div>
      <div class="stat"><div class="n">${STATE.trees.filter(t=>t.by===me.name).length}</div><div class="l">${tr('acc_trees')}</div></div>
    </div>
    <button class="submitbtn" style="max-width:240px" onclick="userLogout()">⎋ ${tr('logout')}</button>`;
  }
  const lg=AUTHTAB==='login';
  return `<div class="section-head"><div class="eyebrow">${tr('auth_eyebrow')}</div><h2>${lg?tr('login'):tr('register')}</h2><p>${tr('auth_sub')}</p></div>
  <div class="formcard">
    <div class="tabs2"><button class="${lg?'on':''}" onclick="setAuthTab('login')">${tr('login')}</button><button class="${lg?'':'on'}" onclick="setAuthTab('register')">${tr('register')}</button></div>
    ${lg?`<form onsubmit="userLogin(event)">
      <div class="field"><label>${tr('f_username')}</label><input id="lg_user" autocomplete="username" required></div>
      <div class="field"><label>${tr('f_password')}</label><input type="password" id="lg_pass" autocomplete="current-password" required></div>
      <button class="submitbtn" type="submit">${tr('login')}</button></form>`
    :`<form onsubmit="userRegister(event)">
      <div class="field"><label>${tr('f_fullname')}</label><input id="rg_name" placeholder="${tr('f_name_ph')}" required></div>
      <div class="field"><label>${tr('f_username')}</label><input id="rg_user" autocomplete="username" required></div>
      <div class="field"><label>${tr('f_password')}</label><input type="password" id="rg_pass" autocomplete="new-password" required></div>
      <button class="submitbtn" type="submit">${tr('register')}</button></form>`}
  </div>`;
}
/* ---------- THEME ---------- */
function effTheme(){const t=document.documentElement.getAttribute('data-theme');if(t)return t;return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
function updateThemeBtn(){const b=document.getElementById('themeBtn');if(b)b.textContent=effTheme()==='dark'?'☀️':'🌙';}
function toggleTheme(){const n=effTheme()==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',n);try{localStorage.setItem('cgn_theme',n);}catch(e){}updateThemeBtn();}

/* ---------- ADMIN ---------- */
let adminTab='overview';
function isAdmin(){const u=localStorage.getItem('cgn_admin');return !!u && STATE.admins.some(a=>a.user===u);}
function currentAdmin(){const u=localStorage.getItem('cgn_admin');return STATE.admins.find(a=>a.user===u);}
function adminLogin(e){
  e.preventDefault();
  const u=document.getElementById('aduser').value.trim(), p=document.getElementById('adpass').value;
  const found=STATE.admins.find(a=>a.user===u && a.pass===p);
  if(found){localStorage.setItem('cgn_admin',found.user);render();}
  else{toast('❌ Invalid username or password');}
}
function adminLogout(){localStorage.removeItem('cgn_admin');go('home');}
function addAdmin(e){
  e.preventDefault();
  const name=document.getElementById('na_name').value, user=document.getElementById('na_user').value.trim(), pass=document.getElementById('na_pass').value;
  if(STATE.admins.some(a=>a.user===user)){toast('❌ Username already taken');return;}
  STATE.admins.push({name,user,pass}); save();
  toast(`✅ Admin "${name}" added`); render();
}
function removeAdmin(user){
  if(STATE.admins.length<=1){toast('⚠️ At least one admin must remain');return;}
  STATE.admins=STATE.admins.filter(a=>a.user!==user); save(); render();
}
function setAdminTab(t){adminTab=t;render();}
function setReportStatus(id,status){const r=STATE.reports.find(x=>x.id===id);if(r){r.status=status;save();render();}}
function deleteReport(id){STATE.reports=STATE.reports.filter(r=>r.id!==id);save();render();}
function deleteTree(id){STATE.trees=STATE.trees.filter(t=>t.id!==id);save();render();}
function deleteGallery(id){STATE.gallery=STATE.gallery.filter(g=>g.id!==id);save();render();}
function adjPoints(name,d){STATE.points[name]=Math.max(0,(STATE.points[name]||0)+d);save();render();}
function saveContent(e){
  e.preventDefault();
  STATE.content={
    siteName:document.getElementById('c_name').value,
    heroTitle:document.getElementById('c_title').value,
    heroHindi:document.getElementById('c_hindi').value,
    heroTag:document.getElementById('c_tag').value,
    aboutText:document.getElementById('c_about').value,
    footerMsg:document.getElementById('c_footer').value
  };
  save(); toast('✅ Website content updated'); render();
}

function renderAdmin(){
  if(!isAdmin()){
    return `<div class="adm"><div class="adm-login">
      <h2>Admin Login</h2><p>Nandapuri Panchayat staff access only.</p>
      <form onsubmit="adminLogin(event)">
        <input id="aduser" placeholder="Username" required>
        <input type="password" id="adpass" placeholder="Password" required>
        <button type="submit">Log In</button>
      </form>
      <p class="small" style="margin-top:12px;color:var(--adm-sub)">Demo: admin / nandapuri2026</p>
    </div></div>`;
  }
  const me=currentAdmin();
  const tabs=[['overview','Overview'],['content','Site Content'],['admins','Manage Admins'],['reports','Reports'],['trees','Trees'],['gallery','Gallery'],['leaderboard','Green Heroes']];
  let content='';
  if(adminTab==='overview'){
    const total=STATE.reports.length, done=STATE.reports.filter(r=>r.status==='Cleaned').length,
          prog=STATE.reports.filter(r=>r.status==='Cleaning in Progress').length, trees=STATE.trees.length;
    content=`<h2>Overview</h2><p>Snapshot of all community activity.</p>
      <div class="adm-stats">
        <div class="adm-stat"><div class="n">${total}</div><div class="l">Total Reports</div></div>
        <div class="adm-stat"><div class="n">${prog}</div><div class="l">In Progress</div></div>
        <div class="adm-stat"><div class="n">${done}</div><div class="l">Cleaned</div></div>
        <div class="adm-stat"><div class="n">${trees}</div><div class="l">Trees Planted</div></div>
        <div class="adm-stat"><div class="n">${STATE.gallery.length}</div><div class="l">Gallery Entries</div></div>
        <div class="adm-stat"><div class="n">${Object.keys(STATE.points).length}</div><div class="l">Active Contributors</div></div>
      </div>`;
  } else if(adminTab==='content'){
    const c=STATE.content;
    content=`<h2>Edit Website Content</h2><p>Changes appear instantly on the public homepage and footer.</p>
      <form class="formcard" style="background:var(--adm-panel);border-color:var(--adm-line);max-width:560px" onsubmit="saveContent(event)">
        <div class="field"><label style="color:var(--adm-sub)">Site Name</label><input id="c_name" value="${c.siteName}" style="background:var(--adm-bg);color:var(--adm-text);border-color:var(--adm-line)" required></div>
        <div class="field"><label style="color:var(--adm-sub)">Hero Title (English)</label><input id="c_title" value="${c.heroTitle}" style="background:var(--adm-bg);color:var(--adm-text);border-color:var(--adm-line)" required></div>
        <div class="field"><label style="color:var(--adm-sub)">Hero Title (Hindi line)</label><input id="c_hindi" value="${c.heroHindi}" style="background:var(--adm-bg);color:var(--adm-text);border-color:var(--adm-line)"></div>
        <div class="field"><label style="color:var(--adm-sub)">Tagline</label><input id="c_tag" value="${c.heroTag}" style="background:var(--adm-bg);color:var(--adm-text);border-color:var(--adm-line)"></div>
        <div class="field"><label style="color:var(--adm-sub)">Homepage About Text</label><textarea id="c_about" style="background:var(--adm-bg);color:var(--adm-text);border-color:var(--adm-line)">${c.aboutText}</textarea></div>
        <div class="field"><label style="color:var(--adm-sub)">Footer Message</label><textarea id="c_footer" style="background:var(--adm-bg);color:var(--adm-text);border-color:var(--adm-line)">${c.footerMsg}</textarea></div>
        <button class="submitbtn" type="submit" style="background:var(--adm-accent);color:#07140C">Save Changes</button>
      </form>`;
  } else if(adminTab==='admins'){
    content=`<h2>Manage Admins</h2><p>Add or remove Panchayat staff who can access this admin panel.</p>
      <table class="adm-table"><tr><th>Name</th><th>Username</th><th></th></tr>
      ${STATE.admins.map(a=>`<tr><td>${a.name}</td><td>${a.user}</td><td><button class="adm-del" onclick="removeAdmin('${a.user}')">Delete</button></td></tr>`).join('')}
      </table>
      <form class="formcard" style="background:var(--adm-panel);border-color:var(--adm-line);max-width:420px;margin-top:18px" onsubmit="addAdmin(event)">
        <div class="field"><label style="color:var(--adm-sub)">Name</label><input id="na_name" placeholder="e.g. Sneha Joshi" style="background:var(--adm-bg);color:var(--adm-text);border-color:var(--adm-line)" required></div>
        <div class="field"><label style="color:var(--adm-sub)">Username</label><input id="na_user" placeholder="e.g. sneha" style="background:var(--adm-bg);color:var(--adm-text);border-color:var(--adm-line)" required></div>
        <div class="field"><label style="color:var(--adm-sub)">Password</label><input type="password" id="na_pass" style="background:var(--adm-bg);color:var(--adm-text);border-color:var(--adm-line)" required></div>
        <button class="submitbtn" type="submit" style="background:var(--adm-accent);color:#07140C">Add Admin</button>
      </form>`;
  } else if(adminTab==='reports'){
    content=`<h2>Manage Reports</h2><p>Update clean-up status or remove invalid reports.</p>
      <table class="adm-table"><tr><th>ID</th><th>Area</th><th>Type</th><th>By</th><th>Status</th><th></th></tr>
      ${STATE.reports.map(r=>`<tr><td>${r.id}</td><td>${r.area}</td><td>${r.type}</td><td>${r.by}</td>
        <td><select onchange="setReportStatus('${r.id}',this.value)">
          ${['Reported','Cleaning in Progress','Cleaned'].map(s=>`<option ${s===r.status?'selected':''}>${s}</option>`).join('')}
        </select></td>
        <td><button class="adm-del" onclick="deleteReport('${r.id}')">Delete</button></td></tr>`).join('')}
      </table>`;
  } else if(adminTab==='trees'){
    content=`<h2>Manage Trees</h2><p>Review plantation records submitted by the village.</p>
      <table class="adm-table"><tr><th>ID</th><th>Species</th><th>Area</th><th>Date</th><th>By</th><th>Growth</th><th></th></tr>
      ${STATE.trees.map(t=>`<tr><td>${t.id}</td><td>${t.name}</td><td>${t.area}</td><td>${t.date}</td><td>${t.by}</td><td>${t.height}/5</td>
        <td><button class="adm-del" onclick="deleteTree('${t.id}')">Delete</button></td></tr>`).join('')}
      </table>`;
  } else if(adminTab==='gallery'){
    content=`<h2>Manage Gallery</h2><p>Remove duplicate or inappropriate before/after submissions.</p>
      <table class="adm-table"><tr><th>ID</th><th>Area</th><th>By</th><th></th></tr>
      ${STATE.gallery.map(g=>`<tr><td>${g.id}</td><td>${g.area}</td><td>${g.by}</td><td><button class="adm-del" onclick="deleteGallery('${g.id}')">Delete</button></td></tr>`).join('')}
      </table>`;
  } else if(adminTab==='leaderboard'){
    content=`<h2>Green Heroes</h2><p>Manually adjust points for drives or corrections.</p>
      <table class="adm-table"><tr><th>Name</th><th>Points</th><th>Adjust</th></tr>
      ${Object.entries(STATE.points).sort((a,b)=>b[1]-a[1]).map(([n,p])=>`<tr><td>${n}</td><td>${p}</td>
        <td><div class="adm-pts"><button onclick="adjPoints('${n}',-5)">−5</button><button onclick="adjPoints('${n}',5)">+5</button></div></td></tr>`).join('')}
      </table>`;
  }
  return `<div class="adm"><div class="adm-shell">
    <div class="adm-side"><div class="brand">🌿 Admin Panel<div class="small" style="color:var(--adm-sub);font-family:'Inter',sans-serif;font-weight:400;margin-top:3px">Logged in as ${me?me.name:''}</div></div>
      ${tabs.map(([k,l])=>`<button class="${adminTab===k?'on':''}" onclick="setAdminTab('${k}')">${l}</button>`).join('')}
      <button class="exit" onclick="adminLogout()">⎋ Log Out</button>
    </div>
    <div class="adm-main">${content}</div>
  </div></div>`;
}

function render(){
  document.documentElement.lang=LANG;
  buildNav();
  document.getElementById('siteLogo').textContent='🌿 '+STATE.content.siteName;
  document.getElementById('footerMsg').textContent='🌿 '+(LANG==='hi'?tr('footer_default'):(STATE.content.footerMsg||tr('footer_default')));
  const fns={home:renderHome,report:renderReport,tree:renderTree,dashboard:renderDashboard,leaderboard:renderLeaderboard,gallery:renderGallery,guide:renderGuide,admin:renderAdmin,auth:renderAuth,ack:renderAck};
  document.getElementById('view').innerHTML=fns[VIEW]();
  if(VIEW==='tree'){const d=document.getElementById('tdate'); if(d) d.value=new Date().toISOString().slice(0,10);}
}
render();
pullState();
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCamera();});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',updateThemeBtn);
