/* CARELIKA Pro Guide - product data. Edit here, the app reads it on load. */
const MIX={
 algae:{fam:"Algae Peel Off",ves:"Bowl",ratio:"1:3",p:25,w:75,temp:"20 °C",time:"15 min",
  why:"The most fluid specification in the range. Alginate begins to set the moment it meets water, so spread it in one unbroken pass from the neck upward."},
 glucose:{fam:"Algae Peel Off with Glucose",ves:"Bowl",ratio:"1:1",p:40,w:40,temp:"20 °C",time:"15 min",
  why:"The glucose base needs a third of the water a plain alginate takes. Same exposure, noticeably thicker mix."},
 caviarhot:{fam:"Hot Peel Off with Caviar",ves:"Bowl",ratio:"1:3",p:20,w:60,temp:"40 °C",time:"15 min",hot:1,
  why:"The only warm specification in the whole range - 40 °C, not 20. Check the water before you pour."},
 whiteclay:{fam:"Brightening Peel Off, White Clay",ves:"Bowl",ratio:"1:1.5",p:40,w:60,temp:"20 °C",time:"15 min",
  why:"A clay-loaded alginate: more water than a glucose mix, less than a plain one."},
 papaya:{fam:"Papaya Enzyme",ves:"Bowl",ratio:"1:0.8",p:30,w:25,temp:"20 °C",time:"15 min",
  why:"An enzyme mask stays a paste and does not lift off as a film - it is rinsed, not peeled."},
 carboxy:{fam:"Carboxy Therapy Fizzing",ves:"Bowl",ratio:"1:0.75",p:20,w:15,temp:"20 °C",time:"10-15 min",
  why:"The least water in the range, only 15 ml. It foams as it is mixed, so let it rise in the bowl before it goes on the face."},
 shpeel:{fam:"Shaker Peel Off",ves:"Shaker",ratio:"1:4",p:20,w:80,temp:"20 °C",time:"10 min",
  why:"Mixed in a closed shaker, so water goes in first and powder follows. Powder first packs at the bottom and will not disperse."},
 shsmou:{fam:"Shaker Smoussy",ves:"Shaker",ratio:"1:4",p:15,w:60,temp:"20 °C",time:"20 min",
  why:"The same ratio as Shaker Peel Off but double the exposure - the mousse works slowly."},
 shpre:{fam:"Shaker Prebiotic",ves:"Shaker",ratio:"1:2",p:15,w:30,temp:"20 °C",time:"20 min",
  why:"The thickest shaker specification. Prebiotic masks stay creamy and are removed with sponges, not peeled."}
};

const D={
dry:{name:"Dry",c:[
 {l:"Dehydration",g:"Intensive hydration",sp:"Hydration Boost Marine Serum",sa:["Unique Hyaluronic Booster with Matrixyl 3%"],
  mp:"Shaker Peel Off Mask with Sodium Hyaluronate",mk:"shpeel",ma:["Hydra Infusion Mask","Algae Peel Off Mask with Cucumber and Glucose"]},
 {l:"Flaking",g:"Nourishment and barrier support",sp:"Orchid Stem Cell Fluid Serum",sa:["Caviar Serum with Hyaluron","Retinol Serum with Apricot Oil","Healthy Skin Microbiota Serum"],
  mp:"Orchid Stem Cell Cream Mask",mk:null,ma:["Extreme Comfort Mask with Pumpkin","Shaker Mask Smoussy Revitalising with Caviar","Hot Peel Off Mask with Caviar"]},
 {l:"Dull, tired-looking skin",g:"Brightening and evening the look of tone",sp:"Orange Serum with Vitamin C",sa:["Brightening Serum with Rice","Phytic Acid Rejuvenation Serum","Acerola Serum with Lemon"],
  mp:"Shaker Peel Off Mask with Apple Stem Cells",mk:"shpeel",ma:["Algae Peel Off Mask with Acerola","Carboxy Therapy Fizzing Foam Mask","Shaker Mask Smoussy with Strawberry"]},
 {l:"Rough, built-up texture",g:"Gentle exfoliation with hydration",sp:"Amber Brightening Serum 15 in 1, succinic acid 2%",sa:[],
  mp:"Papaya Enzyme Mask with Kaolin",mk:"papaya",ma:["Heating and Exfoliating Mask with Cranberries","Carboxy Therapy Fizzing Foam Mask"]},
 {l:"Dry, cracked patches",g:"Comfort and conditioning",sp:"Caviar Serum with Hyaluron",sa:["Retinol Serum with Apricot Oil","Orchid Stem Cell Fluid Serum","Oligo Peptide Serum"],
  mp:"Extreme Comfort Mask with Pumpkin",mk:null,ma:["Algae Peel Off Mask with Lavender Oil"]},
 {l:"Tight, itchy feel",g:"Calming",sp:"Healthy Skin Microbiota Serum",sa:["Hydration Boost Marine Serum"],
  mp:"Shaker Creamy Mask Black Beeome with Prebiotic",mk:"shpre",ma:["Shaker Cristally Mask Rose Petals with Prebiotic","Algae Peel Off Mask with Cryogenic Complex","Extreme Comfort Mask with Pumpkin"]}
]},
oily:{name:"Oily",c:[
 {l:"Blemish-prone skin",g:"Cleansing and soothing",sp:"BHA & Amber Acid Renewal Booster",sa:["AHA Serum"],
  mp:"Shaker Mask Peel Off with Argan-Ghassoul",mk:"shpeel",ma:["Algae Peel Off Mask with Tea Tree Oil","Shaker Creamy Mask Green Clay with Prebiotic"]},
 {l:"Post-blemish marks",g:"Evening the look of tone",sp:"Amber Brightening Serum 15 in 1",sa:["BHA & Amber Acid Renewal Booster"],
  mp:"Algae Peel Off Mask Biowhite & Kaolin with Vitamin C",mk:"algae",ma:["Algae Peel Off Mask with Tea Tree Oil"]},
 {l:"Visible pores",g:"Refining the look of pores",sp:"BHA & Amber Acid Renewal Booster",sa:["Amber Brightening Serum 15 in 1"],
  mp:"Shaker Mask Peel Off with Argan-Ghassoul",mk:"shpeel",ma:["Shaker Mask Peel Off Pollution Control"]},
 {l:"Excess shine",g:"Mattifying and balancing",sp:"BHA & Amber Acid Renewal Booster",sa:[],
  mp:"Shaker Creamy Mask Green Clay with Prebiotic",mk:"shpre",ma:["Shaker Mask Peel Off with Argan-Ghassoul"]},
 {l:"Rough, congested texture",g:"Cleansing and exfoliation",sp:"AHA Serum",sa:["BHA & Amber Acid Renewal Booster"],
  mp:"Papaya Enzyme Mask with Kaolin",mk:"papaya",ma:["Carboxy Therapy Fizzing Foam Mask"]},
 {l:"Reactive to strong products",g:"Calm and balance",sp:"Healthy Skin Microbiota Serum",sa:["Phytic Acid Rejuvenation Serum"],
  mp:"Shaker Creamy Mask Green Clay with Prebiotic",mk:"shpre",ma:["Algae Peel Off Mask with Cryogenic Complex","Algae Peel Off Mask with Cranberry and Glucose"]}
]},
combination:{name:"Combination",c:[
 {l:"Oily T-zone, dry cheeks",g:"Balancing hydration and shine",sp:"Hydration Boost Marine Serum",sa:[],
  mp:"Shaker Mask Peel Off with Argan-Ghassoul",mk:"shpeel",ma:["Carboxy Therapy Fizzing Foam Mask"],z:"Apply by zone: clay or charcoal across the T-zone, a hydrating mask on the cheeks."},
 {l:"Dehydration",g:"Hydration and barrier support",sp:"Hydration Boost Marine Serum",sa:["Brightening Serum with Rice"],
  mp:"Shaker Peel Off Mask with Sodium Hyaluronate",mk:"shpeel",ma:["Shaker Mask Smoussy with Strawberry","Algae Peel Off Mask with Kiwi and Glucose","Algae Peel Off Mask with Cranberry and Glucose"]},
 {l:"Dull, tired-looking skin",g:"Brightening and radiance",sp:"Amber Brightening Serum 15 in 1",sa:["Orange Serum with Vitamin C","Brightening Serum with Rice","Phytic Acid Rejuvenation Serum"],
  mp:"Carboxy Therapy Fizzing Foam Mask",mk:"carboxy",ma:["Heating and Exfoliating Mask with Cranberries","Shaker Smoussy Mask Acerola and Goji with Prebiotic","Algae Peel Off Mask with Acerola"]},
 {l:"Congestion in the T-zone",g:"Cleansing and refining the look of pores",sp:"BHA & Amber Acid Renewal Booster",sa:["AHA Serum"],
  mp:"Papaya Enzyme Mask with Kaolin",mk:"papaya",ma:["Shaker Mask Peel Off with Argan-Ghassoul","Shaker Creamy Mask Green Clay with Prebiotic","Algae Peel Off Mask with Tea Tree Oil"]},
 {l:"Visible signs of aging",g:"Hydration with anti-aging appearance care",sp:"Collagen Serum with Lifting Effect",sa:["Unique Hyaluronic Booster","Hydration Boost Marine Serum","Retinol Serum with Apricot Oil"],
  mp:"Algae Peel Off Mask with Marine Collagen",mk:"algae",ma:["Algae Peel Off Firming Algi-Twin Mask","Algae Peel Off Mask with Cryogenic Complex","Algae Peel Off Mask with Lavender Oil"]}
]},
normal:{name:"Normal",c:[
 {l:"Moderate dryness",g:"Light hydration and conditioning",sp:"Unique Hyaluronic Booster with Matrixyl 3%",sa:["Collagen Elastin Serum","Hydration Boost Marine Serum","Retinol Serum with Apricot Oil"],
  mp:"Shaker Peel Off Mask with Sodium Hyaluronate",mk:"shpeel",ma:["Hydra Infusion Mask","Shaker Mask Smoussy Revitalising with Caviar","Algae Peel Off Mask with Kiwi and Glucose"]},
 {l:"Seasonal change",g:"Protection and balance",sp:"Healthy Skin Microbiota Serum",sa:["Hydration Boost Marine Serum","Orange Serum with Vitamin C","Acerola Serum with Lemon"],
  mp:"Shaker Cristally Mask Rose Petals with Prebiotic",mk:"shpre",ma:["Algae Peel Off Mask with Lavender Oil","Heating and Exfoliating Mask with Cranberries","Shaker Mask Smoussy with Strawberry"]},
 {l:"First visible signs of aging",g:"Renewal and refreshment",sp:"Oligo Peptide Serum",sa:["Brightening Serum with Rice","AHA Serum"],
  mp:"Carboxy Therapy Fizzing Foam Mask",mk:"carboxy",ma:["Shaker Cristally Mask Rose Petals with Prebiotic","Algae Peel Off Mask with Marine Collagen","Shaker Smoussy Mask Acerola and Goji with Prebiotic"]}
]},
sensitive:{name:"Sensitive",c:[
 {l:"Redness and irritation",g:"Soothing and comforting",sp:"Healthy Skin Microbiota Serum",sa:[],
  mp:"Shaker Creamy Mask Black Beeome with Prebiotic",mk:"shpre",ma:["Papaya Enzyme Mask with Kaolin","Shaker Cristally Mask Rose Petals with Prebiotic","Algae Peel Off Mask with Cryogenic Complex"]},
 {l:"Reaction to external factors",g:"Protection and barrier support",sp:"Orchid Stem Cell Fluid Serum",sa:["Brightening Serum with Rice","Healthy Skin Microbiota Serum"],
  mp:"Extreme Comfort Mask with Pumpkin",mk:null,ma:["Algae Peel Off Mask with Lavender Oil","Algae Peel Off Mask with Kiwi and Glucose"]},
 {l:"Visible capillaries",g:"Helps reduce the look of redness",sp:"Orchid Stem Cell Fluid Serum",sa:["Healthy Skin Microbiota Serum","Acerola Serum with Lemon"],
  mp:"Orchid Stem Cell Cream Mask",mk:null,ma:["Algae Peel Off Mask with Bilberry and Vitamin C","Amber Therapy Gel Mask 15 in 1"]},
 {l:"Reactive skin",g:"Calming and conditioning",sp:"Healthy Skin Microbiota Serum",sa:[],
  mp:"Extreme Comfort Mask with Pumpkin",mk:null,ma:["Shaker Cristally Mask Rose Petals with Prebiotic","Algae Peel Off Mask with Cryogenic Complex"]}
]},
mature:{name:"Mature",c:[
 {l:"Lines and loss of firmness",g:"Supports the appearance of firmness",sp:"Oligo Peptide Serum",sa:["Collagen Elastin Serum","Expression Serum with Acmella Oleracea","Caviar Serum with Hyaluron","Unique Hyaluronic Booster"],
  mp:"Algae Peel Off Firming Algi-Twin Mask",mk:"algae",ma:["Thermo Modeling Gypsum Mask","Algae Peel Off Mask with Pomegranate","Algae Peel Off Mask with Marine Collagen"]},
 {l:"Dullness and uneven tone",g:"Brightening and renewed look",sp:"Brightening Serum with Rice",sa:["Acerola Serum with Lemon","Retinol Serum with Apricot Oil"],
  mp:"Shaker Peel Off Mask with Apple Stem Cells",mk:"shpeel",ma:["Carboxy Therapy Fizzing Foam Mask","Algae Peel Off Mask with Acerola"]},
 {l:"Dryness and dehydration",g:"Intense hydration and comfort",sp:"Unique Hyaluronic Booster with Matrixyl 3%",sa:["Hydration Boost Marine Serum","Retinol Serum with Apricot Oil","Caviar Serum with Hyaluron","Orchid Stem Cell Fluid Serum"],
  mp:"Orchid Stem Cell Cream Mask",mk:null,ma:["Shaker Mask Smoussy Revitalising with Caviar","Hot Peel Off Mask with Caviar","Shaker Peel Off Mask with Sodium Hyaluronate","Algae Peel Off Mask with Cucumber and Glucose"]},
 {l:"Dark spots",g:"Helps even the look of tone",sp:"Acerola Serum with Lemon",sa:["AHA Serum","BHA & Amber Acid Renewal Booster"],
  mp:"Brightening Algae Peel Off Mask with White Clay",mk:"whiteclay",ma:["Algae Peel Off Mask with Bilberry and Vitamin C","Algae Peel Off Mask Biowhite & Kaolin with Vitamin C"]},
 {l:"Loss of density",g:"Supports the look of density and elasticity",sp:"Collagen Serum with Lifting Effect",sa:["Oligo Peptide Serum","Unique Hyaluronic Booster","Orchid Stem Cell Fluid Serum"],
  mp:"Algae Peel Off Mask with Pomegranate",mk:"algae",ma:["Algae Peel Off Mask with Marine Collagen","Hot Peel Off Mask with Caviar","Algae Peel Off Firming Algi-Twin Mask"]}
]}};

const SKIN={
 dry:{img:"img/skin-dry.jpg",note:"Matte and tight, flakes at the cheeks",
  teach:"Dry skin lacks <mark>oil</mark>, not water - that is the distinction to make at the couch. It reads matte, feels tight after cleansing, and flakes first at the cheeks and around the nose. Build the oil back before you reach for exfoliation."},
 oily:{img:"img/skin-oily.jpg",note:"Shine through the day, visible pores",
  teach:"Oily skin makes more sebum than it needs. Shine returns through the day and pores read larger across the T-zone. <mark>Stripping it makes it worse</mark> - the aim is balance, not removal."},
 combination:{img:"img/skin-combination.jpg",note:"Shine on the T-zone, dry cheeks",
  teach:"Two skins on one face. Treat the T-zone and the cheeks as <mark>separate zones</mark> - one mask rarely serves both well, and zoned application is the normal answer."},
 normal:{img:"img/skin-normal.jpg",note:"Even texture, no strong signals",
  teach:"Balanced skin with no strong signal in either direction. The work here is <mark>maintenance and seasonal adjustment</mark>, not correction."},
 sensitive:{img:"img/skin-sensitive.jpg",note:"Flushes easily, visible redness",
  teach:"Reacts quickly and visibly. <mark>Shorten the exposure</mark>, keep away from heat and strong exfoliation, and patch test anything new on the jawline first."},
 mature:{img:"img/skin-mature.jpg",note:"Lines, slackness, uneven tone",
  teach:"Slower renewal and less density. <mark>Hydration comes first</mark> - a dehydrated mature skin shows every line more sharply than the same skin well watered."}
};

const RANGE=[
 ["Shaker Peel Off","shpeel",[["Shaker Peel Off Mask Argan-Ghassoul","200 g",19.25,"CPSMAC200"],["Shaker Peel Off Mask Charcoal","200 g",19.25,"CPSMPC200"],["Shaker Peel Off Mask Apple Stem Cells","200 g",19.25,"CPSMSC200"],["Shaker Peel Off Mask Hyaluronic Acid","200 g",21.45,"CPSMSH200"]]],
 ["Shaker Smoussy","shsmou",[["Shaker Smoussy Mask Caviar","200 g",18.22,"CPSMR200"],["Shaker Smoussy Mask Strawberry","200 g",18.22,"CPSMS200"]]],
 ["Shaker Prebiotic","shpre",[["Shaker Prebiotic Creamy Mask Black Beeome","200 g",32.92,"CPSMCS200"],["Shaker Prebiotic Creamy Mask Green Clay","200 g",27.86,"CPSMCM200"],["Shaker Prebiotic Cristally Mask Rose Petals","200 g",26.47,"CPSMRP200"],["Shaker Prebiotic Smoussy Mask Acerola and Goji","200 g",28.35,"CPSMVEB200"],["Shaker Prebiotic Cristally Mask BIOECOLIA","200 g",0,"CPSMB200"]]],
 ["Algae Peel Off","algae",[["Algae Peel Off Mask Acerola","200 g",15.4,"CPAM200"],["Algae Peel Off Mask Bilberry","200 g",15.4,"CPBM200"],["Algae Peel Off Mask Cryogenic Complex","200 g",15.4,"CPCM200"],["Algae Peel Off Mask Lavender and Rosemary","200 g",15.4,"CPLRM200"],["Algae Peel Off Mask Tea Tree Oil","200 g",15.4,"CPPTTM200"],["Algae Peel Off Mask Biowhite and Vitamin C","200 g",21.58,"CPBVCM200"],["Algae Peel Off Mask Actiwhite and Lotus Extract","200 g",21.58,"CPALEM200"],["Algae Peel Off Mask Marine Collagen","200 g",21.58,"CPCPOM200"],["Algae Peel Off Mask Pomegranate","200 g",21.58,"CPLUM200"],["Algae Peel Off Mask Orchid","200 g",32.92,"CPOM200"],["Alginate Mask Neck & Breast","200 g",17.91,"CPDNFM200"]]],
 ["Algae Peel Off with Glucose","glucose",[["Algae Peel Off Mask Cranberry Extract and Glucose","200 g",15.4,"CPGCRM200"],["Algae Peel Off Mask Cucumber Extract and Glucose","200 g",15.4,"CPGCUM200"],["Algae Peel Off Mask Kiwi Extract and Glucose","200 g",0,"CPGKM200"]]],
 ["Algae Peel Off, hot","caviarhot",[["Algae Peel Off Mask Caviar Extract","200 g",15.4,"CPRM200"]]],
 ["Exfoliating","papaya",[["Papaya Enzyme Mask with Kaolin","200 g",21.58,"CPPEM200"]]],
 ["Carboxytherapy","carboxy",[["Carboxy Therapy Fizzing Mask","200 g",23.23,"CPFFM200"],["Amber Carboxy Therapy Mask","200 g",32.52,"CPACTM200"]]],
 ["Contour and body alginates","algae",[["Algae Peel Off Eye Contour Mask","10 g",2.95,"CPECM010"],["Algae Peel Off Lip Contour Mask","10 g",2.95,"CPLCM010"],["Algae Peel Off Mask Algi-Twin + Solution Lotion","125 g",6.39,"CPFATM125"]]],
 ["Cream and modelling",null,[["Orchid Stem Cell Cream Mask","150 ml",30.0,"CPOSCCM150P"],["Purifying Cream Mask","150 ml",30.0,"CPPCM150"],["Extreme Comfort Mask with Pumpkin","150 ml",21.6,"CPECM150P"],["Hydra Infusion Mask","150 ml",20.35,"CPHIM150"],["SOS Overnight Mask","50 ml",40.0,"CPSOM050"],["Thermo Modeling Gypsum Mask","880 g",23.06,"CPTMG880"],["Heating and Exfoliating Mask with Cranberries","15 g",0,"CPHEMC15"]]],
 ["Gel masks",null,[["Amber 15in1 Therapy Gel Mask","100 ml",23.5,"CPATGM100"]]],
 ["Biocellulose sheet",null,[["Biocellulose Face and Neck Mask Blueberry","1 pc",15.0,"1S0035BF003"],["Biocellulose Face and Neck Mask with Collagen","1 pc",15.0,"1S0031EF003"],["Biocellulose Face Mask Blueberry","1 pc",10.0,"1S0035BF002"],["Biocellulose Face Mask with Collagen","1 pc",10.0,"1S0031EF002"],["Biocellulose Face Mask Brightening with Vitamin C","1 pc",10.0,"1S0034BF002"],["Biocellulose Face Mask Purifying and Enriched with Oxygen","1 pc",10.0,"1S0036BF002"]]],
 ["Tissue and cotton sheet",null,[["Softcell Face Mask with Hyaluronic Acid","1 pc",8.0,"1S0140AF002"],["Tissue Face Mask Hyaluronic","1 pc",8.0,"1S0063AF003"],["Tissue Face Mask with Collagen","1 pc",8.0,"1S0064AF003"],["Charcoal Tissue Face Mask Purifying and Detoxifying","1 pc",8.0,"1S0081AF003"],["Organic Cotton Face Mask with Fucogel","1 pc",8.0,"1T0089BF002"]]],
 ["Hydrogel patches",null,[["Hydrogel Age Prevention Eye Contour Mask","1 pc",8.0,"7L0002AF002"],["Hydrogel Moisturizing Eye Patches","1 pc",8.0,"7Y0013AF003"],["Hydrogel Gold Radiance Eye Patches","1 pc",8.0,"7Y0019AF002"],["Hydrogel Moisturizing Lip Mask","1 pc",8.0,"7L0003AF002"],["Biocellulose Illuminating Eye Patches","1 pc",8.0,"1S0032BF002"]]]
];

const NEEDS=[
 {id:"calm",img:"img/need-calm.jpg",label:"Calm & soothe",
  teach:"Reactive skin needs <mark>less, not more</mark>. Shorten the exposure, keep heat out of the session, and choose a mask that comes off without pulling.",
  items:[
   ["Shaker Prebiotic Creamy Mask Black Beeome",["Sens","Dry"],"Prebiotic cream texture. Stays soft and is removed with sponges - no film, no pull on the skin."],
   ["Shaker Prebiotic Cristally Mask Rose Petals",["Sens","Norm","Dry"],"The lightest option in the range. Use when the skin will not tolerate weight or pressure."],
   ["Algae Peel Off Mask Cryogenic Complex",["Sens","Dry","Oily","Comb"],"Cools as it sets. First choice when the skin is hot and visibly flushed."],
   ["Extreme Comfort Mask with Pumpkin",["Dry","Sens"],"Rich occlusive cream mask for skin that feels raw and over-treated."],
   ["Algae Peel Off Mask Lavender and Rosemary",["Dry","Sens","Comb"],"Calms without the sharp chill of the cryogenic version."],
   ["Orchid Stem Cell Cream Mask",["Sens","Dry","Mature"],"Cream mask with no setting film - comfortable on skin that reacts to peel-off removal."],
   ["Algae Peel Off Mask Bilberry",["Sens","Mature"],"Chosen where redness shows as visible capillaries rather than diffuse flushing."]]},

 {id:"cleanse",img:"img/clay.jpg",label:"Deep cleanse",
  teach:"Clay and charcoal lift surface debris. <mark>Stripping oily skin makes it oilier</mark> - the prebiotic and enzyme options clean without that rebound.",
  items:[
   ["Shaker Peel Off Mask Argan-Ghassoul",["Oily","Comb"],"Ghassoul clay in a peel-off film. The standard deep-cleanse choice for an oily back bar."],
   ["Shaker Peel Off Mask Charcoal",["Oily"],"Charcoal in a peel-off film - lifts away carrying surface debris with it."],
   ["Shaker Prebiotic Creamy Mask Green Clay",["Oily","Comb"],"Clay without the tightness - the prebiotic base keeps it tolerable on reactive oily skin."],
   ["Papaya Enzyme Mask with Kaolin",["Oily","Comb","Dry"],"Enzyme paste, rinsed off. Clears rough, congested texture with no mechanical friction."],
   ["Shaker Peel Off Mask Charcoal",["Oily","Comb"],"Aimed at urban grime and surface build-up on city skin."],
   ["Biocellulose Face Mask Purifying and Enriched with Oxygen",["Oily","Comb"],"Ready-to-use biocellulose. Purifying without clay, so nothing dries down."],
   ["Charcoal Tissue Face Mask Purifying and Detoxifying",["Oily"],"Single-use tissue for an express cleanse between full treatments."]]},

 {id:"hydrate",img:"img/need-hydrate.jpg",label:"Hydration",
  teach:"Dehydration is a shortage of <mark>water</mark> and shows on any skin type, oily included. The mask holds the hydrating serum in contact for the full exposure - pair them, never swap one for the other.",
  items:[
   ["Shaker Peel Off Mask Hyaluronic Acid",["Dry","Norm","Comb","Mature"],"The workhorse hydrating peel-off. Suits almost every skin that reads tight."],
   ["Hydra Infusion Mask",["Dry","Norm"],"Ready to use, no mixing. Straightforward hydration with no setting film."],
   ["Algae Peel Off Mask Cucumber Extract and Glucose",["Dry","Mature"],"Glucose base, thicker mix. Cooling and hydrating in one step."],
   ["Algae Peel Off Mask Kiwi Extract and Glucose",["Norm","Comb","Sens"],"Lighter of the glucose masks - suits combination skin that cannot take a rich texture."],
   ["Softcell Face Mask with Hyaluronic Acid",["Dry","Norm","Sens"],"Ready-to-use sheet. Good for a quick hydration finish after a cleansing treatment."],
   ["Organic Cotton Face Mask with Fucogel",["Sens","Dry"],"Organic cotton, the gentlest hydrating option for reactive skin."],
   ["Biocellulose Face and Neck Mask Blueberry",["Dry","Norm"],"Covers face and neck in one piece - useful when the neck is part of the treatment."]]},

 {id:"nourish",img:"img/need-nourish.jpg",label:"Nourish & restore",
  teach:"For skin short of <mark>oil</mark>, not water. Richer textures, longer contact, and no exfoliation in the same session.",
  items:[
   ["Orchid Stem Cell Cream Mask",["Dry","Mature","Sens"],"Cream mask with vitamin E. The nourishing choice when the barrier is compromised."],
   ["Extreme Comfort Mask with Pumpkin",["Dry","Sens"],"The richest texture in the range. For skin that flakes and feels tight straight after cleansing."],
   ["Shaker Smoussy Mask Caviar",["Dry","Mature","Norm"],"Mousse texture, twenty-minute exposure. Comfortable and does not set hard."],
   ["Algae Peel Off Mask Caviar Extract",["Dry","Mature"],"The only warm specification - mixed at 40 °C. Check the water before you pour."],
   ["SOS Overnight Mask",["Mature","Dry"],"Leave-on overnight mask. Retail it for the nights after a treatment."]]},

 {id:"bright",img:"img/need-bright.jpg",label:"Brightening",
  teach:"Vitamin C, acerola and kaolin masks work on the <mark>look of tone</mark>. Results build over a course of treatments, not in one visit - tell the client that at the first appointment.",
  items:[
   ["Algae Peel Off Mask Biowhite and Vitamin C",["Mature","Oily"],"Kaolin-loaded alginate. The strongest brightening option in the peel-off family."],
   ["Algae Peel Off Mask Biowhite and Vitamin C",["Oily","Mature"],"Biowhite with kaolin and vitamin C. Aimed at marks left behind after blemishes."],
   ["Algae Peel Off Mask Acerola",["Dry","Norm","Comb","Mature"],"General radiance. The safe default when tone is dull rather than patchy."],
   ["Algae Peel Off Mask Acerola",["Dry","Comb","Mature"],"Acerola is a natural vitamin C source - gentler than the ascorbic-led masks."],
   ["Shaker Peel Off Mask Apple Stem Cells",["Dry","Mature"],"Apple stem cells with a lightening complex, in a shaker peel-off."],
   ["Algae Peel Off Mask Actiwhite and Lotus Extract",["Mature","Oily"],"For uneven tone across larger areas rather than isolated spots."],
   ["Biocellulose Face Mask Brightening with Vitamin C",["Norm","Comb","Mature"],"Ready to use. A brightening finish with no mixing and no clean-up."]]},

 {id:"firm",img:"img/need-firm.jpg",label:"Firmness & lift",
  teach:"Alginate sets into a film that holds the contour through the exposure. Pair it with a <mark>peptide or collagen serum</mark> underneath - the film is what keeps that serum in place.",
  items:[
   ["Algae Peel Off Mask Algi-Twin + Solution Lotion",["Mature","Comb"],"The dedicated firming alginate. Lifts off in one piece, face and neck together."],
   ["Algae Peel Off Mask Marine Collagen",["Mature","Comb"],"Marine collagen in a peel-off film. The most requested of the firming masks."],
   ["Algae Peel Off Mask Pomegranate",["Mature"],"For mature skin that reads thin and has lost density rather than tone."],
   ["Thermo Modeling Gypsum Mask",["Mature"],"Gypsum modelling mask - warms and sets hard. The showpiece step of a lifting protocol."],
   ["Algae Peel Off Mask Orchid",["Mature"],"The Orchid line's alginate, for the signature Orchid Stem Cell protocol."],
   ["Biocellulose Face and Neck Mask with Collagen",["Mature","Norm"],"Ready to use, covers face and neck. Useful when there is no time to mix."]]},

 {id:"renew",img:"img/petri-amber.jpg",label:"Exfoliation & renewal",
  teach:"Enzyme and carboxy options renew without mechanical friction. <mark>Never stack</mark> an exfoliating mask on top of an acid peel in the same session.",
  items:[
   ["Papaya Enzyme Mask with Kaolin",["Oily","Comb","Dry","Norm"],"Papain enzyme with kaolin. The gentlest route to smoother texture."],
   ["Algae Peel Off Mask Cranberry Extract and Glucose",["Norm","Comb","Dry"],"Warms on application. Not for sensitive or flushed skin."],
   ["Carboxy Therapy Fizzing Mask",["Dry","Norm","Comb","Oily"],"The least water in the range. It foams in the bowl - let it rise before it goes on the face."],
   ["Amber Carboxy Therapy Mask",["Oily","Dry","Mature"],"The Amber line's carboxy step, with succinic acid 2%."]]},

 {id:"matt",img:"img/need-matt.jpg",label:"Mattify & balance",
  teach:"The aim is <mark>balance, not removal</mark>. Clay in a tolerable base, a short exposure, and hydration to finish - skip that last step and the shine comes back faster.",
  items:[
   ["Shaker Prebiotic Creamy Mask Green Clay",["Oily","Comb"],"Green clay in a prebiotic base. Mattifies without the tight, stripped feel."],
   ["Shaker Peel Off Mask Argan-Ghassoul",["Oily","Comb"],"Doubles as the deep-cleanse and the mattifying step in a single treatment."],
   ["Amber 15in1 Therapy Gel Mask",["Oily","Comb"],"Gel mask with succinic acid 2%. No mixing, no film."],
   ["Algae Peel Off Mask Tea Tree Oil",["Oily"],"Tea tree alginate. The usual finish for a blemish-prone treatment."]]},

 {id:"after",img:"img/need-after.jpg",label:"After in-clinic treatments",
  teach:"Comfort and hydration after a clinical procedure. These are <mark>cosmetic masks, not post-procedure medical devices</mark> - always follow the treating provider's own post-care protocol and timing.",
  items:[
   ["Algae Peel Off Mask Cryogenic Complex",["Sens","Dry","Oily","Comb"],"Cools as it sets, which is why it is the usual first choice once heat is the complaint."],
   ["Extreme Comfort Mask with Pumpkin",["Dry","Sens"],"Rich and occlusive, for skin that feels tight and raw afterwards."],
   ["Organic Cotton Face Mask with Fucogel",["Sens","Dry"],"Organic cotton, nothing to mix, nothing to peel away."],
   ["Biocellulose Face and Neck Mask with Collagen",["Mature","Norm","Sens"],"Lies flat against the skin with no pressure and no removal friction."],
   ["Shaker Prebiotic Cristally Mask Rose Petals",["Sens","Norm","Dry"],"The lightest prebiotic option when even a cream mask feels like too much."],
   ["Orchid Stem Cell Cream Mask",["Sens","Dry","Mature"],"Cream texture, removed with sponges - no film to lift off a reactive face."]]}
];

const SERUMS=["Amber Brightening Serum 15 in 1","Orchid Stem Cell Fluid Serum","Unique Hyaluronic Booster with Matrixyl 3%","Collagen Serum with Lifting Effect","Collagen Elastin Serum","AHA Serum","BHA & Amber Acid Renewal Booster","Oligo Peptide Serum","Acerola Serum with Lemon","Orange Serum with Vitamin C","Brightening Serum with Rice","Phytic Acid Rejuvenation Serum","Healthy Skin Microbiota Serum","Hydration Boost Marine Serum","Expression Serum with Acmella Oleracea","Retinol Serum with Apricot Oil","Caviar Serum with Hyaluron"];
const CREAMS=["Orchid Stem Cells Cream","Orchid Stem Cell Fluid","Mattifying Cream with Red Seaweed","Active Moisturizing Cream with Hyaluronic Acid","Age-defense Day Cream with Peptide","Amber Brightening Cream 15 in 1"];

const CLINIC=[
 {t:"Before extraction",
  s:"Congested skin that needs softening before manual work. The aim is to loosen surface build-up so the extraction itself can be gentler.",
  avoid:["Peel-off films - you would set and lift a mask immediately before working on the same skin","Anything that leaves an occlusive residue over the follicles"],
  use:["Papaya Enzyme Mask with Kaolin - a paste that is rinsed, with no mechanical friction","Algae Peel Off Mask Cranberry Extract and Glucose - warms on application"],
  clear:"Enzyme softening replaces aggressive mechanical pre-work. Not for skin that is already inflamed."},

 {t:"After extraction",
  s:"Follicles are open and the surface has been worked mechanically. Nothing should add more traction to it.",
  avoid:["Peel-off removal of any kind - the film is lifted away, and that is traction","Thermo gypsum and other warming steps","Enzyme and carboxy masks, which exfoliate further"],
  use:["Shaker Prebiotic Creamy Mask Black Beeome - removed with sponges","Shaker Prebiotic Cristally Mask Rose Petals - the lightest prebiotic texture","Biocellulose Face Mask Purifying and Enriched with Oxygen - ready sheet, lifted off whole","Organic Cotton Face Mask with Fucogel - ready sheet, no residue"],
  clear:"Your own antiseptic post-extraction steps come first; the mask is the calming finish, not a substitute for them."},

 {t:"Before a chemical peel",
  s:"A mask is not normally part of the pre-peel step. Cleansing and degreasing to the peel manufacturer's protocol are what decide how the peel behaves.",
  avoid:["Enzyme masks - they change the surface the peel will act on","Carboxy and any acid-bearing step","Occlusive films of any kind"],
  use:["Nothing. Follow the peel manufacturer's own preparation protocol."],
  clear:"Adding an exfoliating step before a peel changes its depth. This is the most common avoidable mistake in a combined protocol."},

 {t:"After a chemical peel",
  s:"The skin has already been exfoliated to the depth the peel was chosen for. Nothing in the same session should exfoliate further.",
  avoid:["Papaya Enzyme and Heating & Exfoliating masks","Carboxy Therapy Fizzing and Amber Carboxy","Thermo gypsum and Hot Peel Off with Caviar - both bring heat","Peel-off removal, which adds traction to freshly exfoliated skin"],
  use:["Organic Cotton Face Mask with Fucogel - sheet, lifted off whole","Biocellulose Face and Neck Mask with Collagen - sheet, no pressure","Extreme Comfort Mask with Pumpkin - rich cream, sponge removal","Orchid Stem Cell Cream Mask - cream, no setting film"],
  clear:"The peel manufacturer's own post-care protocol takes precedence over anything here, including on timing."},

 {t:"After mesotherapy or microneedling",
  s:"The barrier has been punctured. Until the provider says the skin is closed and cleared, nothing is applied to it at all.",
  avoid:["Every peel-off and alginate mask - removal is by traction","Acids, enzymes and carboxy","Warming steps","Anything applied to skin the provider has not cleared"],
  use:["Once cleared: single-use sheet masks that lift off without traction - Biocellulose Face and Neck Mask with Collagen, Organic Cotton Face Mask with Fucogel"],
  clear:"In many US states this is a medical decision and falls outside an esthetician's scope of practice. The treating provider decides whether and when."},

 {t:"After device treatments - laser, RF, ultrasound",
  s:"Heat is the complaint. The skin may read hot and flushed for some time after the device work is finished.",
  avoid:["Thermo Modeling Gypsum Mask - it warms and sets hard","Hot Peel Off with Caviar - mixed at 40 °C","Enzyme, carboxy and any acid step","Peel-off removal until the provider has cleared mechanical contact"],
  use:["Biocellulose Face and Neck Mask with Collagen - sheet, cool, no traction","Organic Cotton Face Mask with Fucogel - sheet, nothing to peel","Extreme Comfort Mask with Pumpkin - cream, sponge removal"],
  clear:"Alginate cools as it sets, which looks attractive here - but it comes off by traction. Use it only once the provider has cleared mechanical contact with the treated area."}
];

/* Mask textures: macro illustration, what it is, how it comes off. Matched to a product by name (first rule that fits). */
const TEXTURES={
 peeloff:{img:"img/tex/peeloff.jpg",label:"Peel-off alginate",sub:"Plasticising film",off:"Sets to a rubber film, peeled off in one piece"},
 smoussy:{img:"img/tex/smoussy.jpg",label:"Smoothie mousse",sub:"Whipped, airy",off:"Stays soft, removed with sponges"},
 cream:{img:"img/tex/cream.jpg",label:"Cream",sub:"Rich, velvety",off:"Stays soft, removed with sponges"},
 grain:{img:"img/tex/grain.jpg",label:"Cream with grains",sub:"Pink, creamy",off:"Pink cream with fine black grains"},
 crystal:{img:"img/tex/crystal.jpg",label:"Crystal gel",sub:"Clear, jelly",off:"Light jelly, removed with sponges"},
 foam:{img:"img/tex/foam.jpg",label:"Fizzing foam",sub:"White, effervescent",off:"Foams on the skin, removed with sponges"},
 enzyme:{img:"img/tex/enzyme.jpg",label:"Enzyme paste",sub:"Soft clay paste",off:"Stays a paste, rinsed off"},
 biocell:{img:"img/tex/biocell.jpg",label:"Biocellulose",sub:"Ready soaked film",off:"Lifted off whole, pat in remaining serum"},
 sheet:{img:"img/tex/sheet.jpg",label:"Sheet",sub:"Ready soaked carrier",off:"Lifted off whole, no residue"},
 gel:{img:"img/tex/gel.jpg",label:"Gel",sub:"Clear, glossy",off:"Light film, removed with sponges"},
 gypsum:{img:"img/tex/gypsum.jpg",label:"Thermo gypsum",sub:"Warms and sets hard",off:"Sets to a shell, lifted off whole"}
};
const TEXTURE_RULES=[
 [/heating.*cranberr/i,"grain"],[/smoussy/i,"smoussy"],[/cristally/i,"crystal"],[/creamy|cream mask|comfort|hydra infusion|overnight/i,"cream"],
 [/fizzing|carboxy/i,"foam"],[/papaya|enzyme/i,"enzyme"],[/biocellulose/i,"biocell"],[/tissue|softcell|cotton|hydrogel|patches/i,"sheet"],
 [/gypsum/i,"gypsum"],[/gel mask|aloe/i,"gel"],[/peel.?off|alginate|algi-twin/i,"peeloff"]
];

/* CARELIKA mixing tools, names and pages as on carelikacosmetics.com */
const TOOLS={
 bowl:{name:"Silicone Mask Mixing Bowl 550ml",img:"img/p/cpsb650.jpg",h:"green-silicone-bowl-650ml"},
 shaker:{name:"Shaker for Mask Mixing 250ml",img:"img/p/cps250.jpg",h:"shaker-for-mixing-face-mask"},
 spoon:{name:"Measure spoon 50ml",img:"img/p/cpms.jpg",h:"measure-spoon-50ml"},
 spatula:{name:"Green Spatula for Applying a Face Mask",img:"img/p/cpsg.jpg",h:"spatula-green-19cm"}
};
