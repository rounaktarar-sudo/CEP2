/* Acknowledgment page - separate file. Uses tr() from app.js at render time. */
function renderAck(){
  const P={g1:'assets/g1.jpg',g2:'assets/g2.jpg',s1:'assets/s1.jpg',s2:'assets/s2.jpg',s3:'assets/s3.jpg',s4:'assets/s4.jpg',logo:'assets/logo.png'};
  const card=(k,n,r)=>`<div class="pcard"><img src="${P[k]}" alt="${n}"><div class="pn">${n}</div><div class="pr">${r}</div></div>`;
  return `
  <div class="section-head"><div class="eyebrow">${tr('ack_top_e')}</div><h2>${tr('ack_top_h')}</h2></div>
  <div class="ack-inst"><div class="ack-logo"><img src="${P.logo}" alt="Institute logo"></div>
    <div style="flex:1;min-width:220px"><h3>${tr('ack_inst_t')}</h3><p>${tr('ack_inst_d')}</p></div></div>
  <h3 class="ack-sub">${tr('ack_hod_h')}</h3>
  <div class="pgrid two">${card('g1','Dr. Pankaj S. Ashtankar',tr('ack_role_hod'))}</div>
  <h3 class="ack-sub">${tr('ack_guide_h')}</h3>
  <div class="pgrid two">${card('g2','Mrs. Anjali V. Narad',tr('ack_role_g'))}</div>
  <h3 class="ack-sub">${tr('ack_team')}</h3>
  <div class="pgrid">${card('s1','Piyush D Khergade',tr('ack_role_s'))}${card('s2','Rounak A Tarar',tr('ack_role_s'))}${card('s3','Sagar S Kamde',tr('ack_role_s'))}${card('s4','Surya A Dhonge',tr('ack_role_s'))}</div>
  <section class="ack-end">
    <div class="section-head"><div class="eyebrow">${tr('ack_eyebrow')}</div><h2>${tr('ack_h2')}</h2><p>${tr('ack_sub')}</p></div>
    <div class="ack-box"><p>🌿 ${tr('ack_note')}</p></div>
  </section>`;
}
