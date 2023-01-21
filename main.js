/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e,n,t,a,r,o,s={7734:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,".fork-gh {\n  align-items: center;\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n  padding-bottom: 10px;\n}\n\n.fork-gh > a:hover {\n  filter: brightness(1.4);\n}\n",""]);const i=s.toString()},8195:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,":host {\n  align-items: center;\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color));\n  border-bottom: 1px solid var(--dk-bg-color-500, var(--lt-bg-color-100));\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: space-between;\n  white-space: nowrap;\n  height: 100%;\n}\n\n.ctn-team {\n  align-items: center;\n  display: flex;\n  gap: 1rem;\n  height: 100%;\n  margin-left: 2.8rem;\n  position: relative;\n}\n\n.primary {\n  stroke-width: 10;\n}\n\n.secondary {\n  stroke-width: 5;\n}\n\n.team-svg {\n  display: block;\n  height: 100%;\n}\n",""]);const i=s.toString()},1565:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,":host {\n  background-color: var(--dk-bg-color-725, var(--lt-bg-color));\n  border-right: 1px solid var(--dk-bg-color-500, var(--lt-bg-color-100));\n  box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  height: 100%;\n  overflow-y: auto;\n  padding: var(--footer-height) 0;\n}\n\nul {\n  margin: 0;\n  min-width: 9rem;\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n}\n\na {\n  display: inline-block;\n  color: var(--dk-on-bg-color, var(--lt-on-db-color));\n  cursor: pointer;\n  height: 100%;\n  padding: 0.5rem 1rem;\n  transition: color 0.2s linear;\n  width: 100%;\n  text-decoration: none;\n  text-transform: capitalize;\n}\n\n.home > a {\n  border-bottom: 1px solid var(--dk-bg-color-500);\n}\n\nli:hover > a {\n  color: var(--dk-on-bg-color-300, var(--lt-on-bg-color-300));\n}\n\n.inbox > a > span,\n.offers > a > span {\n  position: relative;\n}\n\n@keyframes ani-badge {\n  from {\n    filter: brightness(1);\n  }\n\n  to {\n    filter: brightness(1.5);\n  }\n}\n\n.badge {\n  animation: ani-badge 1s linear infinite alternate;\n  background-color: var(--dk-primary-color-300);\n  border-radius: 50%;\n  display: inline-block;\n  color: var(--dk-on-primary-color);\n  font-size: 0.75rem;\n  font-weight: bold;\n  height: 1rem;\n  line-height: 1rem;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  transform: translate(80%, -25%);\n  width: 1rem;\n}\n",""]);const i=s.toString()},8226:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o),i=t(7734),l=s()(r());l.i(i.Z),l.push([e.id,'.game-main {\n  margin: 2rem auto;\n  max-width: 97rem;\n  padding: 0 2%;\n}\n\ndiv[slot="in-main"] {\n  min-height: calc(100vh - var(--header-height));\n}\n\n[slot="in-footer"] {\n  background-color: var(--dk-bg-color-725, var(--lt-bg-color));\n  border-top: 1px solid var(--dk-bg-color-500, var(--lt-bg-color-100));\n  display: flex;\n  height: 100%;\n  padding: 0 1rem;\n}\n\n.fork-gh,\n.footer-infos {\n  margin: 0;\n  padding: 0;\n}\n\n.fork-gh {\n  margin-left: auto;\n}\n\n.footer-infos {\n  align-items: center;\n  display: flex;\n  gap: 1rem;\n}\n\n.footer-infos > li {\n  list-style-type: none;\n}\n\n[slot="in-footer"] a {\n  color: var(--dk-on-bg-color, var(--lt-on-bg-color));\n  text-decoration: none;\n}\n',""]);const d=l.toString()},6909:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o),i=t(2209),l=s()(r());l.i(i.Z),l.push([e.id,":host {\n  align-items: center;\n  background-color: var(--dk-bg-color-750, var(--lt-bg-color-100));\n  border-bottom: 1px solid var(--dk-bg-color-500, var(--lt-bg-color-100));\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.5);\n  display: flex;\n  gap: 0.5rem;\n  height: var(--menu-bar-height);\n  padding: 0 8px;\n  position: sticky;\n  top: var(--header-height);\n  z-index: 1;\n}\n\nmenu-save-file > a {\n  color: var(--dk-on-bg-color, var(--lt-on-bg-color));\n}\n\nsaved-signal {\n  background-image: radial-gradient(\n    50% 50%,\n    var(--dk-positive-color, var(--lt-positive-color)),\n    var(--lt-positive-color-tsp-300, var(--lt-positive-color-tsp-300))\n  );\n  border-radius: 24% / 100%;\n  box-shadow: 0px 1px 3px 0px hsl(0deg 0% 5% / 30%);\n  color: var(--dk-on-positive-color, var(--lt-on-positive-color));\n  font-weight: bold;\n  padding: 0 0.5rem;\n}\n",""]);const d=l.toString()},6829:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o),i=t(1667),l=t.n(i),d=new URL(t(9837),t.b),c=new URL(t(9588),t.b),p=s()(r()),h=l()(d),u=l()(c);p.push([e.id,":host {\n  border-radius: 20px / 35px 0 0 15px;\n  box-shadow: 0px 3px 5px 0px hsla(0, 0%, 5%, 0.25);\n  display: flex;\n  gap: 3px;\n  height: calc(100% - 6px);\n  margin-right: 3px;\n  position: relative;\n  text-align: center;\n}\n\n#play-disabled-desc {\n  background-color: var(--dk-error-color, var(--lt--error-color));\n  border-radius: 18px 0px 25px 10px;\n  box-shadow: 0px 1px 3px 0px hsla(0, 0%, 5%, 0.15);\n  font-size: 0.85rem;\n  font-weight: bold;\n  margin: 0px;\n  padding: 2px 0.75rem;\n  position: absolute;\n  right: 0;\n  top: 100%;\n}\n\n.visual-sim {\n  min-width: 20rem;\n}\n\n.game-date {\n  background-color: var(--dk-bg-color-600, var(--lk-bg-color-100));\n  border-radius: 20px / 35px 0 0 15px;\n  border: 1px solid var(--dk-bg-color-500, var(--lk-bg-color-200));\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 1rem;\n  padding-right: 0.5rem;\n}\n\n:where(btn-sim-options, play-sim) > .btn {\n  border-radius: 0;\n  box-shadow: none;\n  height: 100%;\n  width: 100%;\n}\n\nbtn-sim-options {\n  border: 1px solid var(--dk-bg-color-500, var(--lk-bg-color-200));\n}\n\nbtn-sim-options > .btn {\n  background-color: var(--dk-bg-color-600, var(--lk-bg-color-100));\n  border-left: none;\n  border-right: none;\n  color: var(--dk-on-bg-color, var(--lt-on-bg-color));\n  padding: 0;\n}\n\n.sim-options {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  min-width: max-content;\n}\n\n.sim-options > label {\n  position: absolute;\n  top: -100rem;\n}\n\n.play-btn,\n.sim-btn {\n  width: calc(2.8 * var(--icon-size));\n}\n\n.play-btn {\n  background-image: url("+h+");\n}\n\n.sim-btn {\n  background-image: url("+u+");\n}\n\n.sim-ops-dialog {\n  inset-inline-start: unset;\n}\n",""]);const m=p.toString()},2823:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,'sff-dashboard,\ndashboard-next-match {\n  display: block;\n}\n\nsff-dashboard {\n  align-items: start;\n  display: grid;\n  gap: 1rem 0;\n  grid-template-areas: "fx fx nx nx ix ix" "lg lg lg . . .";\n  grid-template-columns: repeat(6, 1fr);\n  justify-items: stretch;\n}\n\n.bg-grid1 {\n  align-self: stretch;\n  background-color: var(--dk-bg-color-750, var(--lt-bg-color-100));\n  box-shadow: 0px 1px 4px 0px hsl(0deg 0% 6% / 20%);\n  border-radius: 10px;\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n  justify-self: stretch;\n}\n\ndashboard-next-match {\n  margin-top: 1rem;\n  grid-area: nx;\n  text-align: center;\n}\n\nsff-fixtures {\n  font-size: 0.9rem;\n  grid-area: fx;\n  margin: 1rem 5%;\n}\n\nsff-inbox {\n  background-color: var(--dk-bg-color-750, var(--lt-bg-color-100));\n  box-shadow: none;\n  --entry-bg: var(--dk-bg-color-700);\n  --entry-margin-btm: 5px;\n  font-size: 0.88rem;\n  grid-area: ix;\n  margin: 0.5rem 5%;\n}\n\nleague-table {\n  grid-area: lg;\n}\n\n@media screen and (max-width: 85rem) {\n  sff-dashboard {\n    grid-template-areas: "nx fx" "lg ix";\n    grid-template-columns: minmax(0px, 9fr) minmax(0px, 7fr);\n  }\n\n  sff-inbox {\n    margin: 0 0 0 5%;\n  }\n}\n\n@media screen and (max-width: 62rem) {\n  sff-dashboard {\n    grid-template-areas: "nx nx" "fx ix" "lg lg";\n    grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr);\n  }\n\n  sff-inbox {\n    margin: 0 5%;\n  }\n\n  .bg-grid1 {\n    grid-row: 1 / 3;\n  }\n}\n\n@media screen and (max-width: 32rem) {\n  sff-dashboard {\n    grid-template-areas: "nx" "fx" "ix" "lg";\n    grid-template-columns: 1fr;\n  }\n\n  sff-inbox {\n    margin: 0 calc(5% - 6px);\n  }\n\n  .bg-grid1 {\n    grid-row: 1 / 4;\n  }\n}\n\ndashboard-next-match > h2 {\n  margin: 0;\n  margin-bottom: 0.3rem;\n}\n\ndashboard-next-match > p {\n  margin: 0;\n}\n\n.team {\n  display: inline-block;\n  margin: 10px 20px;\n}\n\n.team h3 {\n  margin: 0.25rem;\n}\n\n.team-logo {\n  min-height: 150px;\n}\n\n.history-boxes {\n  border-radius: 3px;\n  display: flex;\n  gap: 2px;\n  overflow: hidden;\n  transform: translateY(-100%);\n}\n\n.history-box {\n  background-color: var(--dk-primary-color, var(--lt-primary-color));\n  box-shadow: 0px 1px 3px 0px hsl(0deg 0% 5% / 5%);\n  color: #2a2a2a;\n  flex: 1 1 1.5rem;\n  padding: 0.2rem 0;\n}\n\n.history-box.won {\n  background-color: var(--dk-positive-color, var(--lt-positive-color));\n}\n\n.history-box.lost {\n  background-color: var(--dk-error-color, var(--lt-error-color));\n}\n\n.history-box.drawn {\n  background-color: var(--dk-neutral-color, var(--lt-neutral-color));\n}\n\n.rst-symbol {\n  font-style: italic;\n  text-transform: uppercase;\n}\n',""]);const i=s.toString()},5670:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,":host {\n  display: block;\n}\n\nh3 {\n  margin: 0 0 0.5rem 0.5rem;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  display: flex;\n  gap: 2%;\n  justify-content: center;\n  list-style-type: none;\n  width: 100%;\n  padding: 5px 5%;\n}\n\nli:nth-of-type(odd) {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-100));\n  border-radius: 4px;\n}\n\nli > time {\n  text-align: right;\n  min-width: 5rem;\n  width: 20%;\n}\n\nli > :first-child {\n  flex-grow: 1;\n}\n\nli > span:nth-of-type(2) {\n  width: max-content;\n}\n",""]);const i=s.toString()},3703:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,"sff-draft {\n  display: block;\n}\n\n.cnt-season-sel {\n  margin: 0.5rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.cnt-season-sel > select {\n  max-width: 10rem;\n}\n\n.cnt-draft-info {\n  display: flex;\n  justify-content: center;\n}\n\n.cnt-draft-players {\n  flex-grow: 1;\n  overflow: auto;\n}\n\ntable {\n  border-collapse: collapse;\n  min-width: 27rem;\n  table-layout: fixed;\n  text-align: center;\n  width: 100%;\n}\n\n.cnt-lottery {\n  flex-grow: 1;\n  max-width: 14rem;\n  padding: 0 1rem;\n}\n\ntr:nth-of-type(even) {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-100));\n}\n\ntd,\nth {\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.rtg-symbol {\n  border-bottom: 2px solid;\n  display: inline-block;\n  width: 1.5rem;\n}\n\ntd:nth-of-type(1) {\n  height: 2rem;\n  padding: 6px 0;\n}\n\nth:nth-of-type(1),\nth:nth-of-type(3),\nth:nth-of-type(4),\nth:nth-of-type(5),\nth:nth-of-type(6) {\n  width: 3.4rem;\n}\n\nth:nth-of-type(8) {\n  width: 5rem;\n}\n\nth:nth-of-type(7) {\n  width: 8rem;\n}\n\n@media screen and (max-width: 58rem) {\n  th:nth-of-type(1) {\n    width: 10%;\n  }\n\n  th:nth-of-type(3),\n  th:nth-of-type(4),\n  th:nth-of-type(5),\n  th:nth-of-type(6),\n  td:nth-of-type(3),\n  td:nth-of-type(4),\n  td:nth-of-type(5),\n  td:nth-of-type(6) {\n    font-size: 0.9rem;\n    width: 8.25%;\n  }\n\n  th:nth-of-type(7),\n  th:nth-of-type(8) {\n    width: 15%;\n  }\n\n  .cnt-draft-info {\n    flex-wrap: wrap;\n  }\n}\n\nth:nth-of-type(2),\ntd:nth-of-type(2) {\n  text-align: start;\n}\n\n.pick-n {\n  background-color: var(--dk-primary-color-300, var(--dk-primary-color-300));\n  border-radius: 8px;\n  color: var(--dk-on-primary-color);\n  display: inline-block;\n  font-weight: bold;\n  width: 1.8rem;\n}\n\n.cnt-lottery > h2 {\n  margin: 0 0 5px 0;\n}\n\n.cnt-lottery > ol {\n  margin: 0;\n  padding: 0;\n}\n\n.lottery > li {\n  padding: 0.4rem 1rem;\n  list-style-position: inside;\n  white-space: nowrap;\n}\n\n.lottery > li:nth-of-type(odd) {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-100));\n}\n\n[data-user] {\n  font-weight: bold;\n}\n\n.lottery > [data-user][data-user] {\n  background-color: var(--dk-primary-color-300, var(--dk-primary-color-300));\n  color: var(--dk-on-primary-color);\n  font-weight: bold;\n  margin: 3px 0;\n}\n\n.lottery > [data-user] a {\n  color: var(--dk-on-primary-color);\n}\n",""]);const i=s.toString()},6094:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,"sff-team-finances {\n  display: block;\n}\n\n.cnt-tb-fin {\n  align-items: start;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  text-transform: capitalize;\n}\n\n.cnt-tb-fin > * {\n  flex-grow: 1;\n  min-width: 0;\n}\n\n.cnt-fin {\n  position: relative;\n}\n\n.info-link {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n}\n\n.cnt-fin > *,\n.fin-liquidity > p,\n.fin-expenses > p,\n.info > p {\n  margin-left: 1rem;\n}\n\ntable {\n  border-collapse: collapse;\n  table-layout: fixed;\n  text-align: center;\n}\n\n@media screen and (max-width: 34rem) {\n  table {\n    width: 100%;\n  }\n}\n\ncaption > h2,\n.cnt-fin > h2 {\n  border-bottom: 2px solid var(--dk-on-bg-color, var(--lt-on-bg-color));\n  border-top: 2px solid var(--dk-on-bg-color, var(--lt-on-bg-color));\n  margin: 0;\n  padding: 1rem 0;\n  text-align: left;\n}\n\ntd,\nth {\n  overflow: hidden;\n  padding: 0.2rem 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\ntd {\n  border-left: 2px solid var(--dk-bg-color, var(--lt-bg-color));\n}\n\nth {\n  border-bottom: 1px solid var(--dk-bg-color-500, var(--lt-bg-color-300));\n}\n\n.wage-totals > td {\n  border-top: 1px solid var(--dk-bg-color-500, var(--lt-bg-color-300));\n}\n\nth:first-child,\ntd:first-child {\n  border-left: none;\n  font-style: italic;\n  padding-left: 0.4rem;\n  text-align: left;\n  width: 35%;\n}\n\ntr:nth-of-type(even) {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-100));\n}\n\ntr.wage-totals,\ntr:last-child {\n  background-color: var(--dk-bg-color, var(--lt-bg-color));\n}\n\ntr.wage-totals > :not(td:first-child) {\n  font-weight: bold;\n}\n\n.fin-bal,\n.gen-info {\n  background-clip: padding-box;\n  box-shadow: 0px 1px 3px 0px hsla(0deg, 0%, 8%, 0.15);\n  color: var(--lt-on-bg-color);\n  padding: 0.25rem;\n}\n\n.fin-bal,\n.cap-space,\n.gen-info,\n.fin-rank {\n  font-weight: bold;\n}\n\n.fin-bal.positive {\n  background-color: var(--dk-positive-color, var(--lt-positive-color));\n}\n\n.fin-bal.negative {\n  background-color: var(--dk-error-color, var(--lt-error-color));\n}\n\n.cap-space {\n  display: inline-block;\n  min-width: 60%;\n}\n\n.cap-space.negative {\n  border-bottom: 2px solid var(--dk-error-color, var(--lt-error-color));\n  color: var(--dk-error-color, var(--lt-error-color));\n}\n\n.cap-space.positive {\n  border-bottom: 2px solid var(--dk-positive-color, var(--lt-positive-color));\n  color: var(--dk-positive-color, var(--lt-positive-color));\n}\n\n.tax.negative {\n  border-bottom: 2px solid var(--dk-error-color, var(--lt-error-color));\n  color: var(--dk-error-color, var(--lt-error-color));\n  font-weight: bold;\n}\n\n.gen-info {\n  border-radius: 8px / 12px;\n  display: inline-block;\n  padding: 0rem 0.25rem;\n}\n\na {\n  color: var(--dk-on-bg-color, var(--lt-on-bg-color));\n}\n",""]);const i=s.toString()},7413:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,":host {\n  display: block;\n  margin: 5px 0px 8px;\n  overflow: auto;\n}\n\ntable {\n  border-collapse: collapse;\n  min-width: 34rem;\n  table-layout: fixed;\n  text-align: center;\n  width: 100%;\n}\n\ncaption > h2 {\n  border-bottom: 2px solid var(--dk-on-bg-color, var(--lt-on-bg-color));\n  border-top: 2px solid var(--dk-on-bg-color, var(--lt-on-bg-color));\n  margin: 0;\n  padding: 1rem 0;\n  text-align: left;\n}\n\ntr:nth-of-type(even) {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-100));\n}\n\nth {\n  text-transform: capitalize;\n}\n\ntd,\nth {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nth:last-child {\n  width: 20%;\n}\n\nth.small-col {\n  width: 4rem;\n}\n\n@media screen and (max-width: 64rem) {\n  th.small-col {\n    width: 6%;\n  }\n\n  .small-col {\n    font-size: 0.9rem;\n  }\n}\n\nth:nth-of-type(1),\ntd:nth-of-type(1) {\n  font-style: italic;\n  padding-left: 1%;\n  text-align: left;\n}\n\n.plr-pos {\n  text-transform: uppercase;\n}\n\n.sign-btn {\n  margin: 3px 0;\n  width: clamp(3.5rem, 90%, 6rem);\n}\n\n.skill-score {\n  border-bottom-style: solid;\n  background-clip: padding-box;\n  border-bottom-width: 1px;\n  display: inline-block;\n  width: 1.3rem;\n}\n",""]);const i=s.toString()},3295:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o),i=t(7734),l=t(1667),d=t.n(l),c=new URL(t(9540),t.b),p=s()(r());p.i(i.Z);var h=d()(c);p.push([e.id,":host {\n  display: block;\n}\n\nsff-home,\nhome-main,\nhome-team-picker,\nhome-new-game {\n  display: block;\n}\n\n:root,\nbody {\n  height: 100%;\n}\n\nbody {\n  background-image: linear-gradient(\n    180deg,\n    var(--dk-bg-color-600, var(--lt-bg-color)),\n    var(--dk-bg-color, var(--lt-bg-color))\n  );\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.bg-wave {\n  background-image: url("+h+');\n  background-size: 100% 200px;\n  background-repeat: no-repeat;\n  height: 200px;\n}\n\nhome-team-picker {\n  text-align: center;\n}\n\n.cnt-content {\n  text-align: center;\n}\n\n.head {\n  font-style: italic;\n}\n\n.head > h1 {\n  font-size: 70px;\n  margin-bottom: 25px;\n  position: relative;\n  white-space: nowrap;\n}\n\n.head > h1 > :first-child {\n  opacity: 0.4;\n}\n\n.head > h1 > :last-child {\n  bottom: 0;\n  left: 50%;\n  opacity: 1;\n  position: absolute;\n  transform: translate(-50%, 40%);\n}\n\n@keyframes ani-btn {\n  from {\n    background-color: var(--dk-bg-color-750);\n  }\n\n  to {\n    background-color: var(--dk-bg-color);\n  }\n}\n\n.hm-btn {\n  animation: ani-btn 700ms linear infinite alternate;\n  background-color: var(--dk-bg-color-750);\n  border: 1px solid transparent;\n  color: var(--dk-on-bg-color);\n  font-size: 24px;\n  height: 85px;\n  transition: border 1s ease-out;\n  width: 160px;\n}\n\n.hm-btn:hover {\n  border: 1px solid var(--dk-primary-color-300);\n}\n\n@media (max-width: 1200px) {\n  .bg-wave {\n    background-size: 100% max(15vw, 70px);\n    height: max(15vw, 70px);\n  }\n}\n\n@media (max-width: 520px) {\n  .bg-wave {\n    background-size: 600px 75px;\n  }\n\n  home-main {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n  }\n\n  .head > h1 {\n    font-size: calc(8px + 10vw);\n  }\n\n  .hm-btn {\n    width: 90%;\n    margin: auto;\n  }\n}\n\n.teams {\n  display: grid;\n  gap: 5px;\n  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));\n  width: calc(100vw - 4rem);\n  max-width: 60rem;\n}\n\n.saves {\n  margin-bottom: 0;\n  min-width: clamp(23rem, 50vw, 40rem);\n}\n\n.saves > li {\n  align-items: baseline;\n  background-color: var(--dk-bg-color-650, var(--lt-bg-color-200));\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px hsl(0deg 0% 5% / 25%);\n  display: flex;\n  gap: 5px;\n  list-style-type: none;\n  margin: 4px;\n  padding: 0.2rem;\n}\n\n.saves > li > em {\n  flex-grow: 1;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.saves > li > button {\n  flex-shrink: 0;\n  width: clamp(4.75rem, 15%, 6rem);\n}\n\n[for="game-file"] {\n  background-color: var(--dk-primary-color-300, var(--lt-primary-color-300));\n  color: var(--dk-on-primary-color);\n  cursor: pointer;\n  display: inline-block;\n  width: 100%;\n}\n\n.cnt-new-game-name {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.pick-team-btn {\n  align-items: stretch;\n  background-color: var(--dk-bg-color-600, var(--lt-bg-color-300));\n  border: 1px solid var(--dk-on-bg-color, var(--lt-on-bg-color));\n  color: var(--dk-on-bg-color, var(--lt-on-bg-color));\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n',""]);const u=p.toString()},4587:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,"sff-inbox-page {\n  display: block;\n}\n",""]);const i=s.toString()},7772:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,":host {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-100));\n  border-radius: 6px;\n  display: block;\n  box-shadow: 0px 1px 3px 0px hsl(0deg 0% 6% / 20%);\n  padding: 4px 6px;\n}\n\n.open-mail {\n  width: 80vw;\n}\n\n@media screen and (max-width: 24rem) {\n  .open-mail {\n    width: calc(100vw - 4rem);\n  }\n}\n\nh2 {\n  margin: 8px;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  background-color: var(--entry-bg, var(--dk-bg-color-750, var(--lt-bg-color)));\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  margin-bottom: var(--entry-margin-btm, 2px);\n  padding: 0.4rem;\n  width: 100%;\n}\n\nli > div {\n  flex-shrink: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nli > :first-child,\nli > div:nth-child(3) {\n  width: 9rem;\n}\n\n.close-cell {\n  flex-shrink: 0;\n  text-align: right;\n  width: 2.5rem;\n  padding-right: 0.3rem;\n  overflow: unset;\n}\n\nli > div:nth-child(2) {\n  flex-grow: 1;\n  flex-shrink: 2;\n}\n\n.date-cell {\n  text-align: right;\n}\n\n@media screen and (max-width: 32rem) {\n  .date-cell {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 20rem) {\n  li {\n    flex-wrap: wrap;\n  }\n\n  li > :first-child {\n    width: 100%;\n  }\n}\n\n.mail--new {\n  font-weight: 600;\n}\n\n.mail-info {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.mail-info > :first-child {\n  margin: 0;\n}\n\n.btn--err {\n  border-radius: 50%;\n  padding: 1px 5px;\n}\n",""]);const i=s.toString()},5812:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,':root {\n  --header-height: 3.5rem;\n  --footer-height: 2.5rem;\n  --menu-bar-height: 1.75rem;\n\n  --lt-bg-color: hsl(275deg, 4%, 100%);\n  --lt-bg-color-100: hsl(275deg, 4%, 95%);\n  --lt-bg-color-200: hsl(275deg, 4%, 90%);\n  --lt-bg-color-300: hsl(275deg, 4%, 85%);\n  --lt-on-bg-color: hsl(0, 0%, 12%);\n  --lt-on-bg-color-50: hsl(0, 0%, 18%);\n  --lt-on-bg-color-100: hsl(0, 0%, 24%);\n  --lt-on-bg-color-200: hsl(0, 0%, 30%);\n  --lt-on-bg-color-300: hsl(0, 0%, 40%);\n\n  /* TODO: pick a color for every one below */\n  --lt-primary-color: hsl(276, 93%, 84%);\n  --lt-primary-color-700: hsl(279, 43%, 63%);\n  --lt-primary-color-300: hsl(300, 100%, 93%);\n\n  --lt-on-primary-color: var(--lt-on-bg-color);\n  --lt-secondary-color: #a8d085;\n  --lt-positive-color: #76db8c;\n  --lt-on-positive-color: var(--lt-on-bg-color);\n  --lt-positive-color-tsp-300: hsla(133, 58%, 66%, 0.7);\n  --lt-error-color: #eb5d5d;\n  --lt-on-error-color: #1c1c1c;\n  --lt-neutral-color: #e1c457;\n\n  --pitch-color: #195905;\n\n  font-family: "Raleway", sans-serif;\n  font-size: clamp(13px, 2vw, 16px);\n  line-height: 1.5;\n}\n\n/* default mode */\n:root.dark {\n  --dk-bg-color: hsl(215deg, 10%, 8%);\n  --dk-bg-color-750: hsl(215deg, 10%, 12%);\n  --dk-bg-color-725: hsl(215deg, 10%, 14%);\n  --dk-bg-color-700: hsl(215deg, 10%, 16%);\n  --dk-bg-color-650: hsl(215deg, 10%, 20%);\n  --dk-bg-color-600: hsl(215deg, 10%, 24%);\n  --dk-bg-color-500: hsl(215deg, 10%, 32%);\n  --dk-bg-color-300: hsl(215deg, 10%, 48%);\n\n  --dk-on-bg-color: hsl(0, 0%, 96%);\n  --dk-on-bg-color-50: hsl(0, 0%, 92%);\n  --dk-on-bg-color-100: hsl(0, 0%, 88%);\n  --dk-on-bg-color-200: hsl(0, 0%, 80%);\n  --dk-on-bg-color-300: hsl(0, 0%, 70%);\n\n  /* TODO: pick a color for every one below */\n  --dk-primary-color: var(--lt-primary-color);\n  --dk-primary-color-700: var(--lt-primary-color-700);\n  --dk-primary-color-300: var(--lt-primary-color-300);\n  --dk-on-primary-color: var(--lt-on-bg-color);\n  --dk-secondary-color: var(--lt-secondary-color);\n  --dk-positive-color: var(--lt-positive-color);\n  --dk-on-positive-color: var(--lt-on-bg-color);\n  --dk-positive-color-tsp-300: var(--lt-positive-color-tsp-300);\n  --dk-error-color: var(--lt-error-color);\n  --dk-on-error-color: #1c1c1c;\n  --dk-neutral-color: var(--lt-neutral-color);\n}\n\nbody {\n  background-color: var(--dk-bg-color, var(--lt-bg-color));\n  color: var(--dk-on-bg-color, var(--lt-on-bg-color));\n  margin: 0;\n}\n\nh1,\nh2 {\n  line-height: 1.2;\n}\n\nh3,\nh4 {\n  line-height: 1.35;\n}\n\n.cnt-404 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* moving towards adding utilities, these variables (for not magic numbers)\nare used to keep extracted component consistent with the utilities.\nI would use an @apply function (like tailwind), but with the shadowDom and\nmultiple files it isn\'t really possible */\n\n:root {\n  /** _____________________ Colors ____________________ */\n  --primary-color: var(--dk-primary-color, var(--lt-primary-color));\n  --error-color: var(--dk-error-color, var(--lt-error-color));\n  --positive-color: var(--dk-positive-color, var(--lt-positive-color));\n  --bg-form-control: var(--dk-bg-color-500, var(--lt-bg-color));\n  --primary-color-300: var(--dk-primary-color-300, var(--lt-primary-color-300));\n  --bg-750: var(--dk-bg-color-750, var(--lt-bg-color-300));\n  --bg-700: var(--dk-bg-color-700, var(--lt-bg-color-300));\n  --bg-650: var(--dk-bg-color-650, var(--lt-bg-color-300));\n  --bg-500: var(--dk-bg-color-500, var(--lt-bg-color-300));\n  --color-on-bg: var(--dk-on-bg-color, var(--lt-on-bg-color));\n  --color-on-bg-100: var(--dk-on-bg-color-100, var(--lt-on-bg-color-100));\n  --color-on-error: var(--dk-on-error-color, var(--lt-on-error-color));\n\n  /** _____________________ BORDERS __________________ */\n  --border-invisible: 1px solid transparent;\n  --rounded-sm: 0.125rem;\n  --rounded: 0.25rem;\n  --rounded-xl: 0.75rem;\n  --rounded-2xl: 1rem;\n  --rounded-full: 50%;\n\n  /** _______________ BOX SPACING __________________ */\n  /**\n    padding: p{direction}-{size in rem, underscore for .} --\x3e pr-0_5 === padding-right: 0.5rem\n    or p{direction}-{size in px}x --\x3e pr-1x === padding-right: 1px\n    when no direction is specified set all sides */\n  --py-1: 0.125rem;\n  --py-2: 0.25rem;\n  --px-2: 0.25rem;\n  --px-6: 0.75rem;\n\n  /** ______________ EFFECTS _________________*/\n  --shadow: 0px 1px 3px 0px hsl(0deg 0% 5% / 20%);\n  --ring-primary: 0 0 0 0.25rem hsla(300, 100%, 90%, 0.35);\n  --ring-error: 0 0 0 0.25rem rgba(255, 62, 80, 0.35);\n  --ring-positive: 0 0 0 0.25rem rgba(98, 255, 106, 0.35);\n\n  /*_______________________ FILTERS __________________ */\n  --brightness-130: brightness(1.3);\n  --brightness-75: brightness(0.75);\n  --brightness-50: brightness(0.5);\n\n  /* _____________________ TRANSITIONS _________________ */\n  --duration-150: 150ms;\n\n  /* ____________________ Sizing ______________________ */\n  --w-6: 1.5rem;\n  --h-6: 1.5rem;\n\n  /* typography */\n  --leading-4: 1;\n}\n',""]);const i=s.toString()},480:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,".cnt-about > h3 {\n  border-bottom: 1px solid var(--dk-bg-color-300, var(--lt-bg-color-300));\n}\n\n.cnt-about > div {\n  margin-left: 1rem;\n}\n\na {\n  color: var(--dk-on-bg-color, var(--lt-on-bg-color));\n}\n\n.cnt-sub {\n  overflow: hidden;\n}\n",""]);const i=s.toString()},3697:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,'negotiate-contract {\n  display: block;\n}\n\n.form-neg {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\noutput {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: bold;\n  min-height: 1.2rem;\n  text-align: center;\n}\n\noutput.successful {\n  text-decoration: underline var(--dk-positive-color, var(--lt-positive-color));\n}\n\noutput.successful::after {\n  content: "👍";\n}\n\noutput.rejected {\n  text-decoration: underline var(--dk-error-color, var(--lt-error-color));\n}\n',""]);const i=s.toString()},5565:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,".history-list > li {\n  list-style: none;\n  margin: 3px 0px;\n}\n",""]);const i=s.toString()},4104:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,'sff-player {\n  display: block;\n}\n\n.plr-info {\n  display: grid;\n  grid-template-areas: "img high" "img info" "btn btn";\n  grid-template-columns: minmax(0rem, 150px) minmax(0rem, max-content);\n  gap: 0 1rem;\n  position: relative;\n}\n\n.info-link {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n}\n\n.cnt-plr-high {\n  display: flex;\n  gap: 3px 1.3rem;\n  grid-area: high;\n  text-align: center;\n}\n\n@media screen and (max-width: 25rem) {\n  .plr-info {\n    grid-template-areas: "high high" "img info" "btn btn";\n    gap: 0;\n    justify-content: center;\n  }\n\n  .cnt-plr-high {\n    justify-self: center;\n    margin-bottom: 0.5rem;\n  }\n\n  .plr-bio {\n    margin-top: 1.6rem;\n  }\n}\n\n.plr-info__name {\n  font-size: 1.3rem;\n  font-style: italic;\n  margin: 0;\n  text-align: center;\n}\n\n.plr-img {\n  width: 150px;\n  height: 150px;\n}\n\n.plr-bio {\n  grid-area: info;\n}\n\n.cnt-plr-img {\n  grid-area: img;\n}\n\nsign-new-player {\n  grid-area: btn;\n}\n\n.plr-high {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 4px 0;\n}\n\n.plr-high > :last-child {\n  font-size: 1.25rem;\n  font-style: italic;\n  font-weight: bold;\n}\n\n.plr-skills {\n  display: grid;\n  gap: 1rem 0;\n  grid-template-columns: repeat(auto-fit, 11rem);\n  justify-content: space-around;\n  margin-top: 2.4rem;\n}\n\n.skill-score {\n  color: var(--lt-on-bg-color);\n  display: inline-block;\n  margin: 0.25rem 0;\n}\n\n.plr-skills > ul {\n  margin: 0;\n  padding: 0;\n}\n\n.plr-skills > ul > ul {\n  padding-left: 2rem;\n}\n\n.plr-skills > ul > :first-child {\n  font-weight: bold;\n}\n\n.plr-skills li {\n  list-style-type: none;\n  text-transform: capitalize;\n  white-space: nowrap;\n}\n\n.plr-high__val,\n.plr-high__val-stl {\n  background-color: var(--dk-bg-color-600, var(--lt-bg-color--200));\n  border-radius: 3px;\n  width: 2.6rem;\n}\n\n.plr-high__val-stl {\n  color: var(--lt-on-bg-color);\n}\n\n.sign-btn {\n  margin-right: 1rem;\n  padding: 3px 0;\n  width: 150px;\n}\n',""]);const i=s.toString()},4101:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,'sff-players,\nplayers-table {\n  display: block;\n}\n\nplayers-table {\n  border-bottom: 1px solid var(--dk-bg-color-500, var(--lt-primary-color-300));\n  height: 90vh;\n  overflow: auto;\n  padding: 0 3px;\n}\n\n.tb-controls {\n  align-items: flex-end;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  justify-content: space-between;\n  padding: 6px 0.5rem;\n}\n\n#search-player {\n  max-width: 15rem;\n}\n\n.tb-pos {\n  display: inline-block;\n  text-align: center;\n  width: 4rem;\n  white-space: nowrap;\n}\n\n.tb-entries,\n.ctl-tb-size,\n.cnt-age-range {\n  align-items: center;\n  display: flex;\n  gap: 0.5rem;\n}\n\ntable {\n  border-collapse: collapse;\n  min-width: 30rem;\n  table-layout: fixed;\n  text-align: center;\n  width: 100%;\n}\n\ntbody > tr {\n  border-bottom: 3px solid var(--dk-bg-color, var(--lt-bg-color));\n}\n\ntd {\n  background-color: var(--dk-bg-color-750, var(--lt-dg-color-100));\n  height: 2.8rem;\n  transition: background-color 0.25s, color 0.25s;\n}\n\ntr:nth-of-type(odd) > td {\n  background-color: var(--dk-bg-color-700, var(--lt-dg-color-100));\n}\n\ntr:hover > td {\n  background-color: var(--dk-primary-color, var(--lt-primary-color));\n  color: var(--dk-on-primary-color, var(--lt-on-primary-color));\n}\n\nsff-go > a {\n  transition: color 0.25s;\n}\n\ntr:hover a {\n  color: var(--dk-on-primary-color, var(--lt-on-primary-color));\n}\n\ntd,\nth {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\ntd:not(:first-child),\nth:not(:first-child) {\n  width: 4rem;\n}\n\n@media screen and (max-width: 64rem) {\n  td:not(:first-child),\n  th:not(:first-child) {\n    width: 7.5%;\n  }\n}\n\ntd:first-child,\nth:first-child {\n  padding-left: 1%;\n  text-align: left;\n}\n\nth {\n  background-color: var(--dk-bg-color, var(--lt-dg-color));\n  position: sticky;\n  top: 0;\n  vertical-align: bottom;\n}\n\ntd:first-child {\n  background-clip: padding-box;\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\ntd:last-child {\n  background-clip: padding-box;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.plr-pos {\n  font-style: italic;\n  text-transform: uppercase;\n}\n\n.rtg-cell {\n  align-items: center;\n  border-bottom: 1px solid;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  margin-top: 1px;\n  width: 100%;\n}\n\nth > .btn-txt {\n  font-weight: bold;\n  font-size: clamp(0.9rem, 2vw, 1rem);\n  text-transform: capitalize;\n  width: 100%;\n}\n\nth:first-child > .btn-txt {\n  text-align: left;\n}\n\n.btn-txt.ascending::after {\n  content: "▲";\n}\n\n.btn-txt.descending::after {\n  content: "▼";\n}\n\n#js-filters {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 10px max(2%, 1rem);\n}\n\n.age-input {\n  width: 5rem;\n}\n\n.cnt-filters {\n  align-items: center;\n  background-color: var(--dk-bg-color-725, var(--lt-bg-color-200));\n  background-clip: padding-box;\n  border: 1px solid var(--dk-primary-color, var(--lt-primary-color));\n  border-radius: 6px;\n  box-shadow: 0px 1px 3px 0px hsl(0deg 0% 4% / 30%);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin-bottom: 5px;\n  overflow: hidden;\n}\n\n.filters-dialog {\n  overflow: auto;\n  top: calc(var(--header-height) + 3.2rem);\n  z-index: 2;\n}\n\n.rst-filters {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 3px 1rem;\n  padding: 5px 0.5rem;\n}\n\n.rst-filters > h2 {\n  margin: 0;\n}\n\n.filter-rst {\n  display: inline-block;\n  padding: 0px 4px;\n}\n\n.filter-btn {\n  align-self: stretch;\n  border-radius: 0;\n  box-shadow: none;\n  padding-right: 1rem;\n}\n\n.cnt-filters > .filter-btn:nth-child(2) {\n  margin-left: 1px;\n}\n',""]);const i=s.toString()},323:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,".cnt-pls {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minMax(16rem, 1fr));\n}\n\n.cnt-plr {\n  background-color: var(--dk-bg-color-750, var(--lt-bg-color-100));\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 0px rgb(15, 15, 15, 0.3);\n  padding: 1rem;\n}\n\n.user-plr {\n  border: 1px solid var(--dk-primary-color-300);\n}\n\n.cnt-plr:nth-of-type(even) {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-200));\n}\n\n.cnt-plr > h3 {\n  margin: 0 0 0.5rem 0;\n}\n\n.cnt-plr > :last-child {\n  display: flex;\n  gap: 1rem;\n}\n",""]);const i=s.toString()},2178:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,":host {\n  display: block;\n}\n\n.rounds {\n  display: grid;\n  grid-auto-rows: max-content;\n  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));\n  height: 35rem;\n  gap: 2px;\n  overflow: auto;\n  position: relative;\n}\n\n.round {\n  border: 1px solid var(--dk-bg-color-600);\n  box-shadow: 0px 2px 4px 0px hsla(0deg, 0%, 10%, 0.25);\n  overflow: hidden;\n}\n\n.next-round {\n  border: 1px solid var(--dk-primary-color-300, var(--lt-primary-color-300));\n}\n\n.round > h3 {\n  background-color: var(--dk-bg-color-750);\n  margin: 0;\n  padding: 0.3rem 0;\n  text-align: center;\n}\n\n.round-fixtures {\n  margin: 0;\n  padding: 0;\n}\n\n.round-fixtures > li {\n  display: flex;\n  list-style-type: none;\n  padding: 2px 0;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.round-fixtures > li:nth-of-type(even) {\n  background-color: var(--dk-bg-color-750, var(--lt-bg-color-100));\n}\n\n.user-fixture.user-fixture.user-fixture {\n  background-color: var(--dk-bg-color-600, var(--lt-bg-color-300));\n  border-bottom: 1px solid\n    var(--dk-primary-color-300, var(--lt-primary-color-300));\n  border-top: 1px solid var(--dk-primary-color-300, var(--lt-primary-color-300));\n}\n\n.result {\n  width: 24%;\n}\n\n.round-fixtures > li > :first-child,\n.round-fixtures > li > :last-child {\n  width: 38%;\n}\n\nh2 {\n  text-align: center;\n}\n",""]);const i=s.toString()},760:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,":host {\n  background-color: var(--dk-bg-color-750);\n  border-radius: 8px;\n  box-shadow: 0px 1px 3px 0px rgb(15, 15, 15, 0.3);\n  display: block;\n  overflow: auto;\n  padding: 0.5rem 1%;\n}\n\ntable {\n  border-collapse: collapse;\n  min-width: 24rem;\n  table-layout: fixed;\n  text-align: center;\n  width: 100%;\n}\n\n.compact {\n  min-width: 16rem;\n}\n\ntd,\nth {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0.25rem 0;\n}\n\nth {\n  text-transform: capitalize;\n  width: 6.5%;\n}\n\n.compact th {\n  width: 9%;\n}\n\n@media screen and (max-width: 35rem) {\n  th {\n    width: 2rem;\n  }\n}\n\nth:nth-child(1) {\n  width: 2.8rem;\n}\n\ntd {\n  height: 2rem;\n}\n\nth:nth-child(2),\ntd:nth-child(2) {\n  text-align: left;\n  width: unset;\n}\n\ncaption {\n  padding: 0.25rem 0;\n}\n\nh2 {\n  margin: 0 0 6px 0;\n}\n\ntr {\n  border-bottom: 1px solid var(--dk-bg-color-600, var(--lt-bg-color-100));\n}\n\ntr:last-child {\n  border-bottom: none;\n}\n\ntr:nth-of-type(even) > td {\n  background-color: var(--dk-bg-color-750, var(--lt-bg-color-100));\n}\n\n.user-row > td {\n  border-top: 1px solid var(--dk-primary-color-300, var(--lt-primary-color-300));\n  border-bottom: 1px solid\n    var(--dk-primary-color-300, var(--lt-primary-color-300));\n}\n\ntd:first-child a {\n  font-style: italic;\n  font-weight: bold;\n}\n",""]);const i=s.toString()},3219:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,"sff-league {\n  display: block;\n}\n",""]);const i=s.toString()},9840:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,"change-pos {\n  display: block;\n}\n\n.pitch {\n  background-color: green;\n  border: 1px solid white;\n  height: 64vw;\n  /* preserve the proportion PITCH_HEIGHT / PITCH_WIDTH */\n  margin: -1rem auto 0 auto;\n  max-width: 100vh;\n  max-height: 80vh;\n  /* this values should match PITCH_WIDTH  and PITCH_HEIGHT */\n  min-width: calc(66px * 4.8);\n  min-height: calc(52px * 4.8);\n  padding: 0;\n  position: relative;\n  width: 80vw;\n}\n\n.spot {\n  background-color: hsla(275deg, 4%, 16%, 0.75);\n  border: none;\n  border-radius: 5%;\n  box-shadow: 0px 1px 3px 0px hsl(0deg 0% 5% / 25%);\n  color: var(--dk-on-bg-color);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 4.5rem;\n  max-width: 7rem;\n  padding: 0;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n  width: 12.5vw;\n}\n\n.spot:hover {\n  filter: brightness(1.25);\n}\n\n.spot-name {\n  background-color: hsla(275deg, 4%, 23.5%, 0.75);\n  border-top: 1px dashed white;\n  font-weight: bold;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n.plr-name {\n  font-size: 0.75rem;\n  font-style: italic;\n  overflow: hidden;\n  padding: 0 2px;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n\n.sub-name {\n  font-style: italic;\n  white-space: nowrap;\n}\n\n.sub-pos {\n  text-transform: uppercase;\n  font-size: 0.7em;\n}\n",""]);const i=s.toString()},3476:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,"sff-team {\n  display: block;\n}\n\n.cnt-team-info {\n  background-color: var(--pitch-color);\n  border: 2px solid var(--dk-bg-color-700, var(--lt-bg-color-100));\n  display: flex;\n  max-width: max-content;\n}\n\n.cnt-team-info > :first-child {\n  /* this value should match ENTIRE_PITCH_WIDTH */\n  width: calc(78px * 9);\n  min-width: 0px;\n  overflow: auto;\n}\n\n.cnt-team-info > :last-child {\n  flex-shrink: 0;\n  padding-right: 4px;\n  padding-top: 6px;\n}\n\n.cnt-tactics {\n  background-color: var(--dk-bg-color-750);\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 0px rgba(19, 19, 19, 0.26);\n  max-width: max-content;\n  padding: 4px 8px;\n  position: relative;\n}\n\n.tactics-head {\n  display: flex;\n  justify-content: space-between;\n}\n\n.tactics-head > h3 {\n  margin: 0;\n}\n\n.tactics {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: 1fr;\n  padding-left: 1rem;\n}\n\n.tactics > li {\n  background-color: var(--dk-bg-color-700);\n  border-radius: 6px;\n  list-style-type: none;\n  padding: 2px 0.5rem;\n}\n\n.tactics > li > i {\n  font-weight: bold;\n}\n\n.cnt-pitch {\n  position: relative;\n  /* this value should match ENTIRE_PITCH_WIDTH */\n  min-width: calc(78px * 5);\n}\n\n@media screen and (max-width: 63rem) {\n  .cnt-team-info {\n    flex-direction: column;\n    max-width: unset;\n  }\n\n  .cnt-team-info > :last-child {\n    flex-shrink: unset;\n    padding: 0;\n  }\n\n  .cnt-team-info > :first-child {\n    width: 100%;\n  }\n\n  .cnt-tactics {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    max-width: unset;\n  }\n\n  .tactics {\n    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));\n    padding-left: unset;\n  }\n}\n\n.cnt-table {\n  flex-grow: 1;\n  overflow: auto;\n}\n\ntable {\n  min-width: 35rem;\n  table-layout: fixed;\n  text-align: center;\n  width: 100%;\n}\n\n.plr,\n.plr-head {\n  align-items: center;\n  border-radius: 8px;\n  display: flex;\n  gap: clamp(2px, 0.5vw, 10px);\n  padding: 3px 10px;\n}\n\n.plr-head {\n  padding: 2px 10px;\n}\n\n.plr:nth-of-type(even) {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-100));\n  box-shadow: 0px 1px 3px 0px hsl(0deg 0% 5% / 15%);\n}\n\n.plr-name {\n  flex-grow: 1;\n  flex-shrink: 2;\n  text-align: left;\n  width: 10rem;\n}\n\n.plr-n {\n  width: 1.5rem;\n}\n\n.plr-pos {\n  width: 2.5rem;\n}\n\ntd.plr-pos {\n  background-color: var(--dk-bg-color-600, var(--lt-bg-color-200));\n  border-radius: 8px;\n  box-shadow: 0px 1px 3px 0px hsl(0deg 0% 5% / 15%);\n  height: 1.9rem;\n}\n\ntd.plr-pos:first-child {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.plr-at {\n  /* background-color: #d44e4e; */\n  align-self: stretch;\n}\n\n.plr-at:hover {\n  filter: brightness(1.25);\n}\n\n.btn-at,\ntd.plr-pos {\n  font-style: italic;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.btn-at {\n  height: 100%;\n  width: 100%;\n  color: var(--dk-on-primary-color);\n}\n\n.starting > .plr-pos {\n  background-color: var(--dk-primary-color-700, var(--lt-primary-color-700));\n}\n\n.skill-score {\n  width: 3rem;\n}\n\ntd.skill-score > span {\n  border-bottom-style: solid;\n  background-clip: padding-box;\n  border-bottom-width: 2px;\n  display: inline-block;\n  font-weight: bold;\n  width: 1.5rem;\n}\n\n.plr > td,\n.plr-head > th {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nsvg {\n  display: block;\n}\n\n.starter-tag {\n  background-color: hsla(275deg, 4%, 16%, 0.75);\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 0px hsl(0deg 0% 5% / 25%);\n  max-width: 7rem;\n  min-width: 5.5rem;\n  position: absolute;\n  text-align: center;\n  transform: translateX(-50%);\n  width: 15vw;\n  white-space: nowrap;\n}\n\n.starter-tag > * {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tag-name {\n  font-size: 0.9rem;\n  padding: 0 0.1rem;\n  padding-top: 0.1rem;\n}\n\n.tag-info {\n  background-color: hsla(275deg, 4%, 23.5%, 0.75);\n  font-size: 0.7rem;\n  padding: 0 0.1rem;\n  padding-bottom: 0.1rem;\n  text-transform: uppercase;\n}\n\n.tag-pos {\n  background-color: var(--dk-primary-color-300, var(--lt-primary-color-300));\n  background-clip: padding-box;\n  border-radius: 4px;\n  color: var(--dk-on-primary-color, var(--lt-on-primary-color));\n  font-weight: bold;\n  padding: 0 2px;\n}\n\n.injured {\n  width: 16px;\n  height: 16px;\n}\n\n.sqd-number {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.tactics > li {\n  text-transform: capitalize;\n}\n\n.tct-dig {\n  inset-inline-start: unset;\n  inset-inline-end: 0px;\n}\n",""]);const i=s.toString()},9961:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,'sff-trade-page,\nsff-trade,\nsff-offers {\n  display: block;\n}\n\nsff-trade {\n  margin-top: 3rem;\n}\n\n.cnt-traders {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.cnt-traders > * {\n  flex-grow: 1;\n  max-width: 52rem;\n}\n\n.trade-ctrl {\n  top: calc(var(--header-height) + var(--menu-bar-height));\n  border-bottom: 1px solid var(--dk-bg-color-500, var(--lt-bg-color-100));\n}\n\n.team-name {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-100));\n  border: 1px solid var(--dk-bg-color-500, var(--lt-bg-color-300));\n  margin: 0;\n  padding: 4px 0;\n  text-align: center;\n}\n\n.fin-preview {\n  display: block;\n}\n\n.fin-preview__status {\n  background-color: var(--dk-primary-color, var(--lt-primary-color));\n  height: 2px;\n  margin: 4px 0;\n}\n\n.fin-bad {\n  background-color: var(--dk-error-color, var(--lt-error-color));\n}\n\n.fin-good {\n  background-color: var(--dk-positive-color, var(--lt-positive-color));\n}\n\n.fin-infos {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n\n.fin-info {\n  flex-grow: 1;\n  padding: 1rem 0.1rem;\n}\n\n.fin-move,\n.fin-info {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-100));\n  border: 1px solid var(--dk-bg-color-500, var(--lt-bg-color-300));\n  box-shadow: 0px 1px 3px 0px hsla(0deg, 0%, 7%, 0.18);\n  text-align: center;\n}\n\n.fin-move {\n  font-weight: bold;\n  margin: 4px 0;\n  padding: 2px 0;\n}\n\n.fin-info > :nth-child(2) {\n  font-weight: bold;\n  margin-top: 5px;\n}\n\n.roster {\n  margin: 0;\n  padding: 0;\n}\n\n.plr-entry {\n  box-shadow: 0px 1px 3px 0px hsla(0deg, 0%, 5%, 0.25);\n  display: flex;\n  list-style-type: none;\n  margin: 4px 0;\n}\n\n.plr-entry > :first-child {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-300));\n  border-right: none;\n  border-bottom: none;\n  flex-grow: 1;\n}\n\n.plr-info {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 6px 1rem;\n}\n\n.plr-bio {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.cnt-checkbox {\n  align-items: center;\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-100));\n  border-left: 1px dashed var(--dk-bg-color-300, var(--lt-bg-color-200));\n  border-radius: 0 3px 3px 0px;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  width: 32px;\n}\n\n.cnt-checkbox--on {\n  background-color: var(--dk-positive-color, var(--lt-positive-color));\n}\n\n.plr-bio > :first-child {\n  margin: 0px;\n}\n\n.plr-bio > :nth-child(2) {\n  font-size: 0.9rem;\n}\n\n.plr-wage {\n  font-weight: bold;\n}\n\ninput[type="checkbox"] {\n  transform: scale(1.25);\n  margin: 0;\n}\n\n.plr-skills {\n  background-color: var(--dk-bg-color-750, var(--lt-bg-color-300));\n  border-top: 1px dashed var(--dk-bg-color-300, var(--lt-bg-color-200));\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.85rem;\n  gap: 1px 1rem;\n  justify-content: flex-start;\n  padding: 4px 1rem 2px;\n  text-transform: capitalize;\n  white-space: nowrap;\n}\n\n.plr-skill {\n  border-left: 2px solid;\n  padding-left: 4px;\n  width: 3.2rem;\n}\n\n/* ----------- Content of the offer result modal ------------------ */\n.rst-p {\n  text-align: center;\n}\n\n.transaction-summary {\n  padding: 0.6rem 1rem;\n}\n\n.trade-summary {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 1rem;\n}\n\n.transaction-title {\n  margin: 4px 0;\n}\n\n.transaction-content {\n  align-items: flex-start;\n  display: flex;\n  gap: 10px;\n}\n\n.team-log {\n  font-size: 24px;\n}\n\n.plr-bio__pos,\n.plr-pos {\n  font-style: italic;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.traded-pls {\n  margin: 0;\n  padding-left: 0;\n}\n\n.cnt-pl-info {\n  list-style-type: none;\n}\n\n.plr-pos {\n  background-color: var(--dk-primary-color-300, var(--lt-primary-color-300));\n  background-clip: padding-box;\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 0px hsla(0deg, 0%, 8%, 0.1);\n  color: var(--dk-on-primary-color, var(--lt-on-primary-color));\n  display: inline-block;\n  font-size: 0.8rem;\n  text-align: center;\n  width: 1.3rem;\n}\n\n.cnt-pl-info > * {\n  white-space: nowrap;\n}\n',""]);const i=s.toString()},1670:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,"sff-transactions {\n  display: block;\n}\n\n.cnt-season-sel {\n  margin: 0.5rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.cnt-season-sel > select {\n  max-width: 10rem;\n}\n\n.ctn-transactions {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\n.ctn-transactions > * {\n  flex-grow: 1;\n}\n\n@media screen and (max-width: 70rem) {\n  .ctn-transactions {\n    flex-wrap: wrap;\n  }\n}\n\n.trades,\n.signings {\n  max-width: 28rem;\n}\n\n@media screen and (min-width: 54rem) {\n  .signings {\n    flex-shrink: 0.2;\n  }\n\n  .trades {\n    max-width: 56rem;\n  }\n\n  .trade-summary > :nth-of-type(2) {\n    min-width: 20rem;\n  }\n}\n\n.trades > h2,\n.signings > h2 {\n  border-bottom: 2px solid var(--dk-on-bg-color);\n  border-top: 2px solid var(--dk-on-bg-color);\n  margin: 0;\n  padding: 0.4rem;\n}\n\n.transactions > h3 {\n  background-color: var(--dk-primary-color, var(--lt-primary-color));\n  box-shadow: 0px 1px 4px 0px hsla(0deg, 0%, 8%, 0.15);\n  color: var(--dk-on-primary-color, var(--lt-on-primary-color));\n  margin: 6px 0 0 0;\n  padding: 0.15rem 1rem;\n}\n\n.transaction-summary {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-100));\n  box-shadow: 0px 1px 3px 0px hsla(0deg, 0%, 8%, 0.1);\n  margin: 3px 0;\n  padding: 0.6rem 1rem;\n}\n\n.transaction-summary:nth-of-type(even) {\n  background-color: var(--dk-bg-color-600, var(--lt-bg-color-200));\n}\n\n.trade-summary {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: space-between;\n}\n\n.ctn-transactions > *,\n.trade-summary > *,\n.transaction-content > * {\n  min-width: 0;\n}\n\n.transaction-title {\n  margin: 4px 0;\n}\n\n.transaction-content {\n  align-items: flex-start;\n  display: flex;\n  gap: 10px;\n}\n\n.team-log {\n  font-size: 24px;\n}\n\n.traded-pls {\n  margin: 0;\n  padding-left: 0;\n}\n\n.cnt-pl-info {\n  list-style-type: none;\n}\n\n.plr-pos {\n  background-color: var(--dk-primary-color-300, var(--lt-primary-color-300));\n  background-clip: padding-box;\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 0px hsla(0deg, 0%, 8%, 0.1);\n  color: var(--dk-on-primary-color, var(--lt-on-primary-color));\n  display: inline-block;\n  font-size: 0.8rem;\n  font-style: italic;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  width: 1.3rem;\n}\n\n.cnt-pl-info > * {\n  white-space: nowrap;\n}\n\na {\n  color: var(--dk-on-bg-color, var(--lt-on-bg-color));\n}\n",""]);const i=s.toString()},1859:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o),i=t(1667),l=t.n(i),d=new URL(t(8485),t.b),c=s()(r()),p=l()(d);c.push([e.id,".btn,\n.btn-close {\n  border: var(--border-invisible);\n  cursor: pointer;\n  display: inline-block;\n  box-shadow: var(--shadow);\n  transition: border-color var(--duration-150) linear,\n    box-shadow var(--duration-150) linear, filter var(--duration-150) linear;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.btn-close {\n  --btn-hover-border-color: var(--dk-error-color, var(--lt-error-color));\n  --btn-focus-box-shadow: var(--ring-error);\n  background-color: var(--close-btn-bg-color, var(--error-color));\n  background-image: url("+p+");\n  background-position: center;\n  border-radius: var(--rounded-full);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  height: var(--h-6);\n  line-height: var(--leading-4);\n  width: var(--w-6);\n}\n\n.btn {\n  --btn-hover-border-color: var(--primary-color);\n  --btn-focus-box-shadow: var(--ring-primary);\n  background-color: var(--primary-color);\n  border-radius: var(--rounded-sm);\n  color: var(--close-btn-color, var(--color-on-error));\n  font-weight: bold;\n  padding: var(--py-2) var(--px-6);\n}\n\n.btn-sml {\n  padding: var(--py-1) var(--px-2);\n}\n\n.btn-rounded {\n  border-radius: var(--rounded-2xl);\n}\n\n.btn-txt,\n.btn-link {\n  --btn-hover-border-color: var(--primary-color);\n  --btn-focus-box-shadow: var(--ring-primary);\n  background-color: transparent;\n  border: none;\n  border-radius: var(--rounded);\n  color: var(--color-on-bg);\n  font: inherit;\n  padding: 0;\n}\n\n.btn-link {\n  cursor: pointer;\n  text-decoration-line: underline;\n}\n\n.btn:hover:not(:disabled),\n.btn-close:hover:not(:disabled) {\n  filter: var(--brightness-130);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .btn,\n  .btn-close {\n    transition: none;\n  }\n}\n\n.btn:focus-visible:not(:disabled),\n.btn-close:focus-visible:not(:disabled),\n.btn-txt:focus-visible:not(:disabled),\n.btn-link:focus-visible:not(:disabled) {\n  border-color: var(--btn-hover-border-color);\n  outline: none;\n  box-shadow: var(--btn-focus-box-shadow);\n}\n\n.btn--err {\n  background-color: var(--dk-error-color, var(--lt-error-color));\n  color: var(--dk-on-error-color, var(--lt-on-error-color));\n  --btn-hover-border-color: var(--dk-error-color, var(--lt-error-color));\n  --btn-focus-box-shadow: var(--ring-error);\n}\n\n.btn--acc {\n  background-color: var(--dk-positive-color, var(--lt-positive-color));\n  --btn-hover-border-color: var(--dk-positive-color, var(--lt-positive-color));\n  --btn-focus-box-shadow: var(--ring-positive);\n}\n\n.btn:disabled,\n.btn-link:disabled,\n.btn-txt:disabled,\n.btn-close:disabled {\n  filter: var(--brightness-50);\n}\n\nbutton:disabled {\n  cursor: not-allowed;\n}\n\n.btn-link:disabled {\n  cursor: default;\n}\n\n.icon-bg-btn {\n  --icon-size: 1rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: var(--icon-size) auto;\n}\n",""]);const h=c.toString()},8674:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,"a {\n  color: var(--dk-on-bg-color, initial);\n}\n\nabbr[title] {\n  text-decoration: none;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\ninput,\nselect,\ntextarea,\nbutton,\noption {\n  font: inherit;\n}\n",""]);const i=s.toString()},8727:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,"dialog {\n  background-color: var(--dk-bg-color-700, var(--lt-bg-color-200));\n  border: 1px solid var(--dk-bg-color-600, var(--lt-bg-color-300));\n  border-radius: 5px;\n  box-shadow: 0px 2px 4px 0px hsl(0deg 0% 4% / 40%);\n  color: var(--dk-on-bg-color, var(--lt-on-bg-color));\n  max-width: 99vw;\n  /* menus the mobile nav bar  */\n  max-height: calc(99vh - 4.5rem);\n  padding: 6px 1rem 1rem 1rem;\n}\n\n.dig-head {\n  border-bottom: 1px solid var(--dk-bg-color-500, var(--lt-bg-color-200));\n  display: flex;\n  gap: 2rem;\n  justify-content: space-between;\n  min-height: 30px;\n  margin-bottom: 1rem;\n  padding-left: 5px;\n}\n\n.dig-title {\n  margin: 0;\n}\n\n.modal-close {\n  align-self: start;\n  margin-left: auto;\n}\n",""]);const i=s.toString()},9784:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o),i=t(1667),l=t.n(i),d=new URL(t(4425),t.b),c=new URL(t(5417),t.b),p=s()(r()),h=l()(d),u=l()(c);p.push([e.id,".form-control,\n.form-select,\n.form-number {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-clip: padding-box;\n  background-color: var(--bg-form-control);\n  border: var(--border-invisible);\n  border-radius: var(--rounded-2xl);\n  color: var(--color-on-bg);\n  display: block;\n  font: inherit;\n  transition: border-color var(--duration-150) linear,\n    box-shadow var(--duration-150) linear;\n  padding: var(--py-2) var(--px-6);\n  width: 100%;\n}\n\n.form-number {\n  -moz-appearance: textfield;\n}\n\n.form-select {\n  --select-icon-width: 1rem;\n  --select-icon-height: 0.75rem;\n  padding-right: calc(var(--select-icon-width) * 1.5 + var(--px-6));\n  background-image: url("+h+");\n  background-repeat: no-repeat;\n  background-position: right var(--px-6) center;\n  background-size: var(--select-icon-width) var(--select-icon-height);\n}\n\n.form-control::placeholder,\n.form-number::placeholder {\n  color: var(--color-on-bg-100);\n  opacity: 1;\n}\n\n.form-control:focus,\n.form-select:focus,\n.form-number:focus {\n  border-color: var(--primary-color-300);\n  outline: 0;\n  box-shadow: var(--ring-primary);\n}\n\n.form-control:disabled,\n.form-select:disabled,\n.form-number:disabled {\n  filter: var(--brightness-75);\n  opacity: 1;\n}\n\n.form-control:not(:placeholder-shown):invalid {\n  --control-error-icon-size: 1.25rem;\n  background-image: url("+u+");\n  background-position: right calc(var(--control-error-icon-size) * 0.5) center;\n  background-repeat: no-repeat;\n  background-size: var(--control-error-icon-size) var(--control-error-icon-size);\n  border-color: var(--dk-error-color);\n  padding-right: calc(var(--control-error-icon-size) * 1.6);\n}\n\n.form-number:not(:placeholder-shown):invalid {\n  border-color: var(--dk-error-color);\n}\n\n.form-control:not(:placeholder-shown):invalid:focus,\n.form-number:not(:placeholder-shown):invalid:focus {\n  border-color: var(--dk-error-color);\n  box-shadow: var(--ring-error);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .form-control,\n  .form-select {\n    transition: none;\n  }\n}\n\n.form-label {\n  display: block;\n  margin-bottom: 0.3rem;\n  font-size: 0.85rem;\n  font-weight: 300;\n}\n",""]);const m=p.toString()},5429:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o),i=t(1667),l=t.n(i),d=new URL(t(3617),t.b),c=new URL(t(9968),t.b),p=s()(r()),h=l()(d),u=l()(c);p.push([e.id,':host {\n  display: grid;\n  grid-template-areas:\n    "head head"\n    "navB main"\n    "foot foot";\n  grid-template-columns: minmax(0px, auto) minmax(0px, 1fr);\n}\n\nnav {\n  grid-area: navB;\n  height: calc(100vh - var(--header-height));\n  position: sticky;\n  top: var(--header-height);\n  transition: opacity 0.3s;\n  z-index: 2;\n}\n\n.btn-toggle-nav {\n  display: none;\n  --icon-size: 1.75rem;\n  width: calc(1.15 * var(--icon-size));\n  height: calc(1.15 * var(--icon-size));\n}\n\n.btn-toggle-nav[data-open="true"] {\n  background-image: url('+h+');\n}\n\n.btn-toggle-nav[data-open="false"] {\n  background-image: url('+u+');\n}\n\n@media screen and (max-width: 36rem) {\n  :host {\n    grid-template-areas:\n      "head"\n      "main"\n      "foot";\n    grid-template-columns: minmax(0px, 1fr);\n  }\n\n  nav {\n    position: fixed;\n    width: 100vw;\n    z-index: 3;\n  }\n\n  .btn-toggle-nav {\n    display: block;\n  }\n\n  .mb-nav-close {\n    display: none;\n  }\n}\n\nheader {\n  grid-area: head;\n  height: var(--header-height);\n  position: sticky;\n  z-index: 4;\n  top: 0px;\n}\n\nmain {\n  grid-area: main;\n}\n\naside {\n  grid-area: side;\n}\n\nfooter {\n  height: var(--footer-height);\n  grid-area: foot;\n  z-index: 2;\n}\n',""]);const m=p.toString()},2209:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,".led {\n  border-radius: 50%;\n  height: 11px;\n  width: 11px;\n}\n\n.led--on {\n  background-image: radial-gradient(\n    50% 50%,\n    var(--dk-positive-color, var(--lt-positive-color)),\n    transparent\n  );\n}\n\n.led--off {\n  background-image: radial-gradient(\n    50% 50%,\n    var(--dk-error-color, var(--lt-error-color)),\n    transparent\n  );\n}\n\n.led--mid {\n  background-image: radial-gradient(\n    50% 50%,\n    var(--dk-neutral-color, var(--lt-neutral-color)),\n    transparent\n  );\n}\n",""]);const i=s.toString()},9488:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o),i=t(8674),l=t(1859),d=t(9784),c=t(8727),p=t(2937),h=s()(r());h.i(i.Z),h.i(l.Z),h.i(d.Z),h.i(c.Z),h.i(p.Z),h.push([e.id,"\n",""]);const u=h.toString()},4294:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,':host {\n  display: block;\n}\n\ndialog {\n  transition: opacity 333ms, transform 333ms;\n}\n\ndialog::backdrop {\n  background-color: var(--backdrop-color, #0f0f0fcc);\n  transition: opacity 333ms;\n}\n\n.opening-dig,\n.opening-dig::backdrop {\n  opacity: 0;\n}\n\n.opening-dig {\n  transform: scale(0);\n}\n\n::slotted(:not([slot])) {\n  padding: 0 1rem;\n}\n\n::slotted([slot="title"]) {\n  margin: 0;\n}\n',""]);const i=s.toString()},2937:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),s=t.n(o)()(r());s.push([e.id,"/** this file apply the utility first approach, the naming convention try (mostly) to stick to Tailwind */\n\n/*_______________ colors ________________*/\n\n.bg-750 {\n  background-color: var(--bg-750);\n}\n\n.bg-700 {\n  background-color: var(--bg-700);\n}\n\n.bg-650 {\n  background-color: var(--bg-650);\n}\n\n.bg-primary-300 {\n  background-color: var(--primary-color-300);\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n/** _______________ PADDING __________________ */\n/**\n  padding: p{direction}-{size in rem, underscore for .} --\x3e pr-0_5 === padding-right: 0.5rem\n  or p{direction}-{size in px}x --\x3e pr-1x === padding-right: 1px\n  when no direction is specified set all sides */\n\n.p-1 {\n  padding: 0.125rem;\n}\n\n.py-1 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n\n.py-2 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.px-2 {\n  padding-left: 0.25rem;\n  padding-right: 0.25em;\n}\n\n.px-4 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.px-6 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n\n.pr-2 {\n  padding-right: 0.25em;\n}\n\n.pl-2 {\n  padding-left: 0.25em;\n}\n\n/** _______________ LAYOUT _________________**/\n\n.hide {\n  position: absolute;\n  left: -999rem;\n}\n\n.grid {\n  display: grid;\n}\n\n.flex {\n  display: flex;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.z-2 {\n  z-index: 2;\n}\n\n/* underscore for percentage */\n.top_50 {\n  top: 50%;\n}\n\n.left-2 {\n  left: 0.375rem;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n/** ______________ Typography ______________ **/\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.italic {\n  font-style: italic;\n}\n\n.font-light {\n  font-weight: 300;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.leading-4 {\n  line-height: var(--leading-4);\n}\n\n.leading-5 {\n  line-height: 1.25;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.align-middle {\n  vertical-align: middle;\n}\n\n/*___________________ border _________________ */\n\n.border-0 {\n  border-width: 0px;\n}\n\n.border-b-1 {\n  border-bottom-width: 1px;\n}\n\n.border-l-1 {\n  border-left-width: 1px;\n}\n\n.border-bg-500 {\n  border-color: var(--bg-500);\n}\n\n.border-solid {\n  border-style: solid;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-bl-xl {\n  border-bottom-left-radius: 0.75rem;\n}\n\n.rounded-full {\n  border-radius: var(--rounded-full);\n}\n\n/* ___________________Sizing____________________ */\n\n.w-4 {\n  width: 1rem;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.w-7 {\n  width: 1.75rem;\n}\n\n.w-24 {\n  width: 6rem;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.h-auto {\n  height: auto;\n}\n\n.w-max {\n  width: max-content;\n}\n\n.max-w-max {\n  max-width: max-content;\n}\n\n.max-w-prose {\n  max-width: 65ch;\n}\n\n.mt-24 {\n  margin-top: 3rem;\n}\n\n/*________________________Flexbox & Grid___________*/\n\n.self-center {\n  align-self: center;\n}\n\n.self-start {\n  align-self: flex-start;\n}\n\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n\n@media (min-width: 40rem) {\n  .sm-grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n.gap-2 {\n  gap: 0.25rem;\n}\n\n.gap-4 {\n  gap: 0.5rem;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n/* __________________ effect ________________*/\n\n.shadow-none {\n  box-shadow: none;\n}\n\n.shadow {\n  box-shadow: var(--shadow);\n}\n\n/* ____________________ transform _______________ */\n\n.translate-y_-50 {\n  transform: translateY(-50%);\n}\n",""]);const i=s.toString()},3645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);a&&s[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),n.push(c))}},n}},1667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},8081:e=>{e.exports=function(e){return e[1]}},1889:(e,n,t)=>{t.d(n,{Z:()=>o,d:()=>s});const a="sff-user-settings",r={simOptions:{tickInterval:500,duration:"simRound"},userSettings:{autoFormation:JSON.parse(localStorage.getItem(a)??"{}").autoFormation??!1}},o=r;function s(e){for(const n in e)r.userSettings[n]=e[n];localStorage.setItem(a,JSON.stringify(r.userSettings))}},487:(e,n,t)=>{t.d(n,{q:()=>i});var a=t(7602),r=t(731);const o=20;function s(e,n){const t=Math.min(a.ef-e,e-a.yr);return n=n?Math.min(n,t):t,Math.round((0,r.ZB)(e,n))}function i(e){switch(e){case"gk":return function(){const e=s(70),n=s(25),t=s(25),a=s(25),r=s(75);return{height:s(e,o),strength:s(e,o),reflexes:s(r,o),handling:s(r,o),diving:s(r,o),speed:s(35),agility:s(40),stamina:s(50),defensivePositioning:s(a,o),interception:s(a,o),marking:s(a,o),passing:s(n,o),vision:s(n,o),technique:s(n,o),offensivePositioning:s(t,o),shot:s(t,o),finishing:s(t,o)}}();case"cb":return function(){const e=s(75),n=s(65),t=s(30),r=s(50,30),i=r-10<a.yr?r:r-10;return{...l(),height:s(n,o),strength:s(n,o),defensivePositioning:s(e,o),interception:s(e,o),marking:s(e,o),agility:s(30),passing:s(r,o),vision:s(r,o),technique:s(i,o),offensivePositioning:s(t,o),shot:s(t,o),finishing:s(t,o)}}();case"lb":case"rb":return function(){const e=s(70),n=s(30),t=s(60,30),r=t-10<a.yr?t:t-10;return{...l(),defensivePositioning:s(e,o),interception:s(e,o),marking:s(e,o),stamina:s(70),speed:s(70),passing:s(t,o),vision:s(r,o),technique:s(t,o),offensivePositioning:s(n,o),shot:s(n,o),finishing:s(n,o)}}();case"dm":return function(){const e=s(70),n=s(65),t=s(30);return{...l(),defensivePositioning:s(n,o),interception:s(n,o),marking:s(n,o),passing:s(e,o),vision:s(e,o),technique:s(e,o),stamina:s(65),offensivePositioning:s(t,o),shot:s(t,o),finishing:s(t,o)}}();case"lm":case"rm":return function(){const e=s(75),n=e-10<a.yr?e:e-10;return{...d(),passing:s(e,o),vision:s(n,o),technique:s(e,o),stamina:s(70),speed:s(70)}}();case"cm":return d();case"am":return function(){const e=s(75),n=s(30),t=s(60),r=t+10>a.ef?t:t+10,i=t-5<a.yr?t:t-5;return{...l(),defensivePositioning:s(n,o),interception:s(n,o),marking:s(n,o),passing:s(e,o),vision:s(e,o),technique:s(e,o),offensivePositioning:s(i,o),shot:s(r,o),finishing:s(t,o)}}();case"lw":case"rw":return function(){const e=s(30),n=s(70),t=s(70),r=t+10>a.ef?t:t+10,i=t-5<a.yr?t:t-5;return{...l(),defensivePositioning:s(e,o),interception:s(e,o),marking:s(e,o),speed:s(70),agility:s(60),passing:s(t,o),vision:s(i,o),technique:s(r,o),offensivePositioning:s(n,o),finishing:s(n,o)}}();case"cf":return function(){const e=s(75),n=s(30);return{...l(),defensivePositioning:s(n,o),interception:s(n,o),marking:s(n,o),offensivePositioning:s(e,o),shot:s(e,o),finishing:s(e,o)}}()}throw new Error(`${e} isn't a valid position`)}function l(){const e=s(50),n=s(50),t=s(50),a=s(50),r=s(20);return{height:s(e,o),strength:s(e,o),reflexes:s(r,o),handling:s(r,o),diving:s(r,o),speed:s(50),agility:s(50),stamina:s(60),defensivePositioning:s(a,o),interception:s(a,o),marking:s(a,o),passing:s(n,o),vision:s(n,o),technique:s(n,o),offensivePositioning:s(t,o),shot:s(t,o),finishing:s(t,o)}}function d(){const e=s(75),n=s(50,30),t=s(50,30),r=t+10>a.ef?t:t+10;return{...l(),defensivePositioning:s(n,o),interception:s(n,o),marking:s(n,o),passing:s(e,o),vision:s(e,o),technique:s(e,o),offensivePositioning:s(t,o),shot:s(r,o),finishing:s(t,o)}}},9702:(e,n,t)=>{t.d(n,{Ff:()=>R,Jq:()=>L,nZ:()=>F});const a={pos:"gk",row:-2,col:6},r={pos:"cb",row:0,col:2},o={pos:"cb",row:0,col:3},s={pos:"cb",row:0,col:4},i={pos:"cb",row:0,col:6},l={pos:"cb",row:0,col:8},d={pos:"cb",row:0,col:9},c={pos:"cb",row:0,col:10},p={pos:"rb",row:0,col:0},h={pos:"lb",row:0,col:12},u={pos:"dm",row:2,col:4},m={pos:"dm",row:2,col:6},g={pos:"dm",row:2,col:8},f={pos:"cm",row:3,col:2},b={pos:"cm",row:3,col:3},v={pos:"cm",row:3,col:4},y={pos:"cm",row:3,col:6},w={pos:"cm",row:3,col:8},x={pos:"cm",row:3,col:9},$={pos:"cm",row:3,col:10},_={pos:"lm",row:3,col:12},k={pos:"rm",row:3,col:0},S={pos:"am",row:4,col:2},C={pos:"am",row:4,col:3},A={pos:"am",row:4,col:6},T={pos:"am",row:4,col:9},E={pos:"am",row:4,col:10},P={pos:"rw",row:6,col:2},j={pos:"lw",row:6,col:10},M={pos:"cf",row:6,col:4},O={pos:"cf",row:6,col:6},D={pos:"cf",row:6,col:8},L={"3-5-2":[a,r,i,c,k,b,y,x,_,M,D],"3-5-2(1)":[a,r,i,c,k,u,g,A,_,M,D],"3-5-2(2)":[a,r,i,c,k,m,b,x,_,M,D],"3-5-2(3)":[a,r,i,c,k,y,C,T,_,M,D],"3-5-2(4)":[a,r,i,c,k,m,C,T,_,M,D],"3-4-3":[a,r,i,c,k,v,w,_,P,O,j],"3-4-3(1)":[a,r,i,c,k,u,g,_,P,O,j],"4-3-3":[a,s,l,p,h,f,y,$,P,O,j],"4-3-3(1)":[a,s,l,p,h,f,m,$,P,O,j],"4-3-3(2)":[a,s,l,p,h,u,g,A,P,O,j],"4-3-3(3)":[a,s,l,p,h,y,S,E,P,O,j],"4-5-1":[a,s,l,p,h,b,y,x,k,_,O],"4-5-1(1)":[a,s,l,p,h,b,m,x,k,_,O],"4-5-1(2)":[a,s,l,p,h,u,g,A,k,_,O],"4-5-1(3)":[a,s,l,p,h,u,g,A,S,E,O],"4-4-2":[a,s,l,p,h,v,w,k,_,M,D],"4-4-2(1)":[a,s,l,p,h,u,g,k,_,M,D],"4-4-2(2)":[a,s,l,p,h,u,g,S,E,M,D],"4-4-2(3)":[a,s,l,p,h,m,f,$,A,M,D],"4-4-2(4)":[a,s,l,p,h,v,w,S,E,M,D],"5-3-2":[a,o,i,d,p,h,f,y,$,M,D],"5-3-2(1)":[a,o,i,d,p,h,f,m,$,M,D],"5-3-2(2)":[a,o,i,d,p,h,S,y,E,M,D],"5-3-2(3)":[a,o,i,d,p,h,u,g,A,M,D],"5-4-1":[a,o,i,d,p,h,v,w,k,_,O],"5-4-1(1)":[a,o,i,d,p,h,m,f,$,A,O],"5-4-1(2)":[a,o,i,d,p,h,u,g,k,_,O],"5-4-1(3)":[a,o,i,d,p,h,v,w,S,E,O],"5-4-1(4)":[a,o,i,d,p,h,u,g,S,E,O]};function F(e,n){return e/13*n+n/13/2}function R(e,n){return e/7*n+n/7/2}},5323:(e,n,t)=>{t.d(n,{Ky:()=>m,BO:()=>d,gA:()=>p,U2:()=>c,mr:()=>h,d$:()=>l,TA:()=>u});var a=t(731),r=t(5285);const o=JSON.parse('{"aQ":{"sender":"${team} Owner","subject":"Welcome to the ${team} Club","content":"I am delighted to welcome you as our new Head Coach, you are a proven coach and an innovator who fits our vision for the Club. I look forward to see you realising the full potential of our squad in the coming months and years."},"f6":{"sender":"Coach Assistant","subject":"It is our turn to draft a player","content":"we have a great opportunity to get a young talent, don\'t waste it"},"Ui":{"sender":"Coach Assistant","subject":"We need to prepare the lineup","content":"we have some position to fill in our team lineup before we can play the next match"}}');var s=t(2272);function i(e,n){return{...e,id:(0,a.Mc)(),opened:!1,sendDate:n.toDateString()}}function l(e,n){const t=o.aQ;return i({sender:(0,r.sX)(t.sender,{team:e}),subject:(0,r.sX)(t.subject,{team:e}),content:t.content},n)}function d(e){return i(o.f6,e)}function c(e){return i({sender:"Coach Assistant",subject:"we have too few players",content:`our team should have at least ${s._C} players, sign some new players to reach this requirement`},e)}function p(e){return i(o.Ui,e)}function h(e,n,t){const a=n.side1.by===t?n.side2:n.side1;return i({sender:"Head Scout",subject:"we received a trade offer",content:`we have received an offer by ${a.by.name} for ${a.content.map((e=>e.name)).join(", ")}`},e)}function u(e,n,t){const a=n.sides[0].team===t.name?n.sides[1]:n.sides[0],r=a.plIds.map((e=>window.$game.state.players[e]));return i({sender:"Head Scout",subject:`${a.team} has withdrawn its offer`,content:`${a.team} has withdrawn its trading offer for ${r.map((e=>e.name)).join(", ")}. The trading conditions aren't met anymore`},e)}function m(e,n,t){return i({sender:"Coach Assistant",subject:`${n} get injured`,content:`unfortunately our player ${n} has sustained an injury, the doctors say he will be fully recovered for the ${new Date(t.when).toLocaleDateString()}, He can't play in the meantime`},e)}},7602:(e,n,t)=>{t.d(n,{A0:()=>R,Ay:()=>S,F7:()=>E,Fi:()=>F,G3:()=>s,HG:()=>b,Hh:()=>D,Oo:()=>c,PU:()=>A,Si:()=>O,UY:()=>M,bI:()=>p,bg:()=>f,dn:()=>h,ef:()=>i,fY:()=>g,jh:()=>d,k1:()=>j,kd:()=>m,kk:()=>y,ko:()=>u,pR:()=>C,rW:()=>T,re:()=>x,rw:()=>P,sR:()=>v,x6:()=>L,yr:()=>l});var a=t(731),r=t(8096),o=t(487);const s=16,i=99,l=0,d=.0025,c=32e4,p=2e5,h=Math.round(c/100),u=Math.round(c/5),m=["gk","cb","lb","rb","cm","dm","lm","rm","am","rw","lw","cf"],g={goalkeeper:["gk"],defender:["cb","cb","lb","rb"],midfielder:["cm","cm","lm","rm","dm","am"],forward:["cf","cf","lw","rw"]};function f(e){return g.goalkeeper.includes(e)?"goalkeeper":g.defender.includes(e)?"defender":g.midfielder.includes(e)?"midfielder":"forward"}const b=["strength","height","reflexes","handling","diving","speed","agility","stamina","defensivePositioning","interception","marking","passing","vision","technique","offensivePositioning","shot","finishing"],v={mobility:["speed","agility","stamina"],physic:["strength","height"],goalkeeper:["reflexes","handling","diving"],defense:["defensivePositioning","interception","marking"],ability:["passing","vision","technique"],offense:["offensivePositioning","shot","finishing"]},y=Object.keys(v),w={gk:{smallPenalty:[],midPenalty:[]},lb:{smallPenalty:["rb"],midPenalty:["cb","lm"]},rb:{smallPenalty:["lb"],midPenalty:["cb","rm"]},cb:{smallPenalty:[],midPenalty:["lb","rb"]},dm:{smallPenalty:["cm"],midPenalty:["cb","lb","rb","rm","lm"]},lm:{smallPenalty:["rm"],midPenalty:["lb","lw","rw","cm","am"]},rm:{smallPenalty:["lm"],midPenalty:["rb","lw","rw","cm","am"]},cm:{smallPenalty:["dm","am"],midPenalty:["lm","rm"]},am:{smallPenalty:["cm"],midPenalty:["lm","rm","lw","rw","cf"]},lw:{smallPenalty:["lm","am","rw"],midPenalty:["rm","cf"]},rw:{smallPenalty:["rm","am","lw"],midPenalty:["lm","cf"]},cf:{smallPenalty:[],midPenalty:["lw","rw"]}};function x(e,n=e.position){return e.position===n?0:w[e.position].smallPenalty.includes(n)?.05:w[e.position].midPenalty.includes(n)?.1:.2}const $=new Set(["defensivePositioning","interception","marking","offensivePositioning","finishing","vision"]),_=new Set(["height"]);class k{constructor(e,n,t){this.name=(0,a.fD)(),this.team="free agent",this.position=e,this.birthday=(0,a.Jz)(t??function(){const e=(0,a.$u)();if(e<.34){const e=19-s+1;return s-1+Math.ceil(e*Math.sqrt(Math.random()))}return e>.62?30+Math.floor((e-.62)/.38*15):20+Math.floor(10*Math.random())}(),n),this.id=(0,a.Mc)(),this.foot=function(e){const n=function(e){return"lb"===e||"lm"===e||"lw"===e?{left:.5,right:.25}:"rb"===e||"rm"===e||"rw"===e?{left:.05,right:.7}:{left:.25,right:.5}}(e),t=Math.random();return n.left>=t?"left":n.left+n.right>=t?"right":"ambidextrous"}(e),this.skills=(0,o.q)(e),this.growthRate=((0,a.$u)()+2*Math.random())/3*d,this.growthState=function(e,n){const t=S(e,n);if(t<27){const n=12*e.growthRate;return 1-Math.max(0,n*(26-t))}return 1-d/2*12*Math.max(0,t-32)}(this,n)}}function S(e,n){return(0,a.ut)(e.birthday,n)}function C(e,n,t){const a=JSON.parse(JSON.stringify(g));a.defender.push("cb"),a.midfielder.push("cm"),a.forward.push("cf");const r=Math.floor(Math.random()*a[n].length);return new k(a[n][r],e,t??void 0)}function A(e,n,t=e.position,a=!0){const r=_.has(n)||!a?e.skills[n]:e.skills[n]*e.growthState;return $.has(n)?r-r*x(e,t):r}function T(e,n,t=e.position,a=!0){return v[n].reduce(((n,r)=>A(e,r,t,a)+n),0)/v[n].length}function E(e,n=e.position,t=!0){let a=0;for(const r in z[n]){const o=r;a+=T(e,o,n,t)*z[n][o]}return a}function P(e,n,t){if(S(e,n)>=27)return E(e);const r=((0,a.vp)(e.id+t.name,200)-100)/100,o=(1+(27-S(e,n))/(27-s)*t.scoutOffset*r)*E(e,void 0,!1),i=E(e);return o<=i?i:o}function j(e,n){const t=S(e,n)<27?e.growthRate:0;e.growthState=Math.min(1,e.growthState+t)}function M(e,n){if(S(e,n)>=32){const n=(0,a.$u)()*d;e.growthState=Math.max(.5,e.growthState-n)}}function O(e){return Math.round(150+e.skills.height/i*55)}function D(e,n){const t=e.popStats.meanScore-1.24*e.popStats.standardDev,a=.9*e.popStats.standardDev,o=g.goalkeeper.includes(n.position)||g.defender.includes(n.position)?.8:1,s=2**((E(n)-t)/a)*h*o;return Math.round((0,r.uh)(s,h,u))}function L({gs:e,t:n,p:t}){const r=.3+(n.appeal-1.5)/1.5*.2,o=.9*e.popStats.standardDev,s=e.popStats.meanScore+1.25*e.popStats.standardDev,i=(0,a.vp)(t.id+n.name+e.date.getTime().toString(36),100)/100;return!(i>.95)&&(n.appeal>3||Math.max(r,(s-E(t))/o)>=i)}function F({gs:e,t:n,p:t}){const a=Math.max(0,(2.5-n.appeal)/12.5),r=e.popStats.meanScore+.73*e.popStats.standardDev,o=D(e,t);return Math.round(E(t)>r?Math.min((a+1)*o,u):o)}function R(e,n){const t=S(e,n);return t>29&&(t>=45||(t-30)/25+.2>=Math.random())}const N={goalkeeper:0,mobility:.25,physic:.05,defense:.5,offense:0,ability:.2},I={goalkeeper:0,mobility:.25,physic:.05,defense:.09,ability:.52,offense:.09},B={goalkeeper:0,mobility:.19,physic:.11,ability:.35,offense:.35,defense:0},z={gk:{goalkeeper:.49,mobility:.12,physic:.28,ability:.11,offense:0,defense:0},cb:{goalkeeper:0,mobility:.1,physic:.2,defense:.5,offense:0,ability:.2},lb:N,rb:N,dm:{goalkeeper:0,mobility:.15,physic:.1,defense:.35,offense:0,ability:.4},cm:{goalkeeper:0,mobility:.13,physic:.1,defense:.11,ability:.55,offense:.11},am:{goalkeeper:0,mobility:.13,physic:.1,ability:.47,offense:.25,defense:.05},lm:I,rm:I,lw:B,rw:B,cf:{goalkeeper:0,mobility:.125,physic:.125,ability:.2,offense:.55,defense:0}}},2272:(e,n,t)=>{t.d(n,{$k:()=>v,CV:()=>S,Cp:()=>y,On:()=>c,SZ:()=>f,Tb:()=>P,UL:()=>w,Z9:()=>T,_1:()=>b,_C:()=>h,_D:()=>x,cE:()=>A,fY:()=>p,mL:()=>u,ni:()=>E,x6:()=>k,zp:()=>C});var a=t(7602),r=t(7786),o=t(63),s=t(731),i=t(8096),l=t(5233);const d=o,c=.2,p=30,h=18,u={huge:4,big:3,medium:2,small:1,"very small":0};function m(e,n){const t=.5*n/5;return Math.round(n+u[e]*t+Math.random()*t)}class g{constructor(e,n,t,a){this.teamName=e.name,this.playerId=n.id,this.wage=t,this.duration=a}}class f{constructor(e){this.playerIds=[],this.appeal=0,this.name=e,this.fanBase=d[e]?d[e].fanBase:"very small",this.scoutOffset=function(e){const n=c/2;return(0,i.uh)(n*((u.huge-u[e.fanBase])/u.huge)+Math.random()*n,0,c)}(this),this.finances={budget:m(this.fanBase,10*a.Oo),revenue:m(this.fanBase,a.Oo+a.Oo/10),health:m(this.fanBase,a.Oo/20),scouting:m(this.fanBase,a.Oo/20),facilities:m(this.fanBase,a.Oo/20)}}static signPlayer(e,n,t){const{gs:a,t:o,p:s}=e;t=t??Math.floor(4*Math.random())+1,s.team=o.name,o.playerIds.includes(s.id)||o.playerIds.push(s.id);const i=new g(o,s,n,t);return r.D2.saveContract(a,i),A(r.D2.getTeamPlayers(a,o.name)),i}static unSignPlayer(e,n){const t=e.teams[n.teamName],a=e.players[n.playerId];a.team="free agent",delete a.number,t.playerIds=t.playerIds.filter((e=>e!==a.id)),r.D2.deleteContract(e,n),n.playerId===e.teams[n.teamName].captain&&(e.teams[n.teamName].captain=void 0)}static transferPlayer(e,n,t){const a=e.players[n.playerId];f.unSignPlayer(e,n),f.signPlayer({gs:e,p:a,t},n.wage,n.duration)}static getExpiringPlayers({gs:e,t:n}){return r.D2.getTeamPlayers(e,n.name).filter((n=>0===r.D2.getContract(e,n)?.duration))}static getNotExpiringPlayers({gs:e,t:n}){return r.D2.getTeamPlayers(e,n.name).filter((n=>0!==r.D2.getContract(e,n)?.duration))}static renewExpiringContracts({gs:e,t:n}){const t=[],r=f.getNotExpiringPlayers({gs:e,t:n});let o=new $(r),s=f.canAfford({gs:e,t:n});return f.getExpiringPlayers({gs:e,t:n}).sort(((t,a)=>f.ratingPlayerByNeed({p:a,t:n,gs:e},o)-f.ratingPlayerByNeed({p:t,t:n,gs:e},o))).forEach((i=>{(0,a.x6)({gs:e,t:n,p:i})&&s((0,a.Fi)({gs:e,p:i,t:n}))&&f.shouldRenew({gs:e,t:n,p:i},o,r.length)&&(f.signPlayer({gs:e,t:n,p:i},(0,a.Fi)({gs:e,p:i,t:n})),t.push(i),r.push(i),o=new $(r),s=f.canAfford({gs:e,t:n}))})),t}static getWagesAmount({gs:e,t:n}){return x(e,f.getNotExpiringPlayers({gs:e,t:n}))}static getMonthlyExpenses({gs:e,t:n}){const{health:t,facilities:a,scouting:r}=n.finances,o=f.getWagesAmount({gs:e,t:n});return o+k(o)+S(o)+t+a+r}static canAfford(e){const{health:n,facilities:t,scouting:r,budget:o,revenue:s}=e.t.finances,i=f.getWagesAmount(e);return e=>{if(e<=a.dn||i<=a.bI)return!0;const l=i+e,d=l+k(l)+n+t+r;return s+(o>0?o/12:o/48)-d>0}}static needPlayer(e){const n=f.getNotExpiringPlayers(e),t=new $(n);return n.length<p&&Object.values(t).some((e=>e>0))}static shouldRenew(e,n,t){return t<=25||0!==n[(0,a.bg)(e.p.position)]?_(e,n)>Math.random():t<p&&_(e,n)/3>Math.random()}static signFreeAgent({gs:e,t:n},t){const r=new $(f.getNotExpiringPlayers({gs:e,t:n})),o=f.canAfford({gs:e,t:n}),s=function(e,{t:n,gs:t},a){return e.length>1?e.reduce(((e,r)=>f.ratingPlayerByNeed({p:r,t:n,gs:t},a)>f.ratingPlayerByNeed({p:e,t:n,gs:t},a)?r:e)):e[0]}(t.filter((t=>(0,a.x6)({gs:e,t:n,p:t})&&o((0,a.Fi)({gs:e,p:t,t:n})))),{t:n,gs:e},r);if(s)return f.signPlayer({gs:e,t:n,p:s},(0,a.Fi)({gs:e,p:s,t:n})),s}static pickDraftPlayer({gs:e,t:n},t){const r=t.reduce(((t,r)=>{return o=t,s=r,(0,a.rw)(s,e.date,n)>(0,a.rw)(o,e.date,n)?s:o;var o,s}));return f.signPlayer({gs:e,t:n,p:r},(0,a.Hh)(e,r),4),r}static updateFinances(e){e.t.finances.budget+=e.t.finances.revenue-f.getMonthlyExpenses(e)}static calcAppeal(e,n,t){const a=n.length-1,r=(a-n.indexOf(e))/a*3,o=u[e.fanBase]/u.huge*1,s=(a-t.indexOf(e))/a*1;return(0,i.uh)(o+r+s,0,5)}static evaluatePlayer({gs:e,t:n,p:t}){return.7*(0,a.rw)(t,e.date,n)+.3*(0,a.F7)(t)}static ratingPlayerByNeed(e,n){return f.evaluatePlayer(e)/a.ef*4+n[(0,a.bg)(e.p.position)]}static estimateGrowthRate(e,n){const t=((0,s.vp)(n.id+e.name,200)-100)/100;return(0,i.uh)(2*t*e.scoutOffset*a.jh+n.growthRate,0,a.jh)}}function b({gs:e,t:n}){n.formation?.lineup.forEach((t=>{const a=t.plID;a&&e.players[a]&&e.players[a].team===n.name||(t.plID=void 0)})),E(n)}function v(e,n){if(!n.formation)return!1;const t=n.formation?.lineup.reduce(((e,n)=>n.plID?++e:e),0);return 11===t||t===n.playerIds.reduce(((n,t)=>e.injuries[t]?n:++n),0)}function y(e,n){e.formation={name:n.name,lineup:n.lineup.map((({pl:e,sp:n})=>({sp:n,plID:e?.id})))},E(e)}function w(e){if(e.t.formation)return{name:e.t.formation.name,lineup:e.t.formation?.lineup.map((n=>({pl:n.plID?e.gs.players[n.plID]:void 0,sp:n.sp})))??[]}}function x(e,n){return n.reduce(((n,t)=>n+(r.D2.getContract(e,t)?.wage??0)),0)}class ${constructor(e){this.goalkeeper=0,this.defender=0,this.midfielder=0,this.forward=0,e.forEach((e=>this[(0,a.bg)(e.position)]++)),this.goalkeeper=(0,i.uh)((3-this.goalkeeper)/3,0,1),this.defender=(0,i.uh)((8-this.defender)/8,0,1),this.midfielder=(0,i.uh)((8-this.midfielder)/8,0,1),this.forward=(0,i.uh)((6-this.forward)/6,0,1)}}function _(e,n){const{meanScore:t,standardDev:r}=e.gs.popStats;if(f.evaluatePlayer(e)<=t-1.5*r)return 0;let o=(f.evaluatePlayer(e)-(t-2*r))/(4*r);o=(0,i.uh)(o,0,1);const s=o+Math.min(.2,1-o)*n[(0,a.bg)(e.p.position)];return 0===n[(0,a.bg)(e.p.position)]?s/2:s}function k(e){const n=Math.max(0,e-a.Oo);return Math.round(n**2/(a.Oo/10)+n)}function S(e){return Math.max(0,a.bI-e)}function C(e,n,t){if(n.length<t)throw new Error(`players have less than ${t} players`);return n.sort(((n,t)=>f.evaluatePlayer({...e,p:t})-f.evaluatePlayer({...e,p:n}))).slice(0,t)}function A(e){const n=new Set(e.map((e=>e?.number))),t=new Set(e.filter((e=>void 0===e?.number))),a=(e,a)=>{a&&(a.number=e,n.add(e),t.delete(a))};[[1,"gk"],[10,"am"],[9,"cf"],[7,"lw"],[11,"rw"],[2,"cb"],[3,"cb"],[4,"lb"],[5,"rb"],[6,"cm"],[8,"cm"]].forEach((e=>{n.has(e[0])||a(e[0],(0,l.A2)(t,e[1]))}));for(const e of t){let t;do{t=11+Math.floor(89*Math.random())}while(n.has(t));a(t,e)}}function T(e,n){n.captain=function(e,n){const{meanScore:t,standardDev:r}=e.popStats,o=n=>.4*(e=>(0,i.uh)(((0,a.F7)(e)-t)/r,0,1))(n)+.6*(n=>((0,a.Ay)(n,e.date)-25)/7)(n);return n.sort(((e,n)=>o(n)-o(e))),n[0]}(e,r.D2.getTeamPlayers(e,n.name))?.id}function E(e){if(!e.setPieces)return;const n=new Set(e.formation?.lineup.map((e=>e.plID))??[]);for(const t in e.setPieces)e.setPieces[t]&&!n.has(e.setPieces[t])&&(e.setPieces[t]=void 0)}function P(e,n){const t=n.filter((e=>Boolean(e.plID)&&"gk"!==e.sp.pos)).map((n=>e.players[n.plID])),a=(0,l.JO)(t,"passing")?.id;return{penalties:(0,l.JO)(t,"finishing")?.id,shortFreeKicks:(0,l.JO)(t,"shot")?.id,longFreeKicks:a,corners:a,throwIns:(0,l.JO)(t,"strength")?.id}}},8146:(e,n,t)=>{t.d(n,{Eq:()=>w,MM:()=>P,PG:()=>x,Pe:()=>T,Sb:()=>b,Ud:()=>m,Zp:()=>C,dT:()=>g,eT:()=>_,jC:()=>u,ps:()=>A,qW:()=>k,qz:()=>f,xe:()=>E,z6:()=>S});var a=t(2833),r=t(7801),o=t(7786),s=t(731),i=t(8096),l=t(5285),d=t(9702),c=t(5323),p=t(7602),h=t(2272);function u(e,n){return h.SZ.estimateGrowthRate(n,e)/p.jh}function m(e,n){const t=["F","E","E+","D","D+","C","C+","B","B+","A","A+"];return t[Math.round(u(e,n)*(t.length-1))]}function g(e,n){const t=n.popStats.meanScore-3*n.popStats.standardDev,a=n.popStats.meanScore+3*n.popStats.standardDev-t;return(0,i.uh)(((0,p.F7)(e)-t)/a,0,1)}function f(e,n){const t=["F","E","E+","D","D+","C","C+","B","B+","A","A+"];return t[Math.round(g(e,n)*(t.length-1))]}function b(e){const n=window.$game.state?.players[e];if(n)return{draft:v(n.id)??void 0,transactions:y(n.id)}}function v(e){const n=window.$game.state.drafts;for(const t in n){const a=n[t].picked.find((n=>n.plId===e));if(a)return{when:new Date(n[t].when).getFullYear(),...a}}}function y(e){const n=window.$game.state.transactions,t={trades:[],signings:[],renewals:[]};for(const a in n)n[a].signings.forEach((n=>{n.plId===e&&t.signings.push(n)})),n[a].trades.forEach((n=>{(n.sides[0].plIds.includes(e)||n.sides[1].plIds.includes(e))&&t.trades.push(n)})),n[a].renewals.forEach((n=>{n.plId===e&&t.renewals.push(n)}));return t}function w(e){const n=window.$game.state,t=n.teams[n.userTeam],a=(0,p.Fi)({gs:n,t,p:e});return a===p.dn?a:Math.round((0,i.uh)(a+.15*a*((0,s.vp)(e.id,100)/100),p.dn,p.ko))}function x(e,n,t){const a=e.teams[e.userTeam],r=h.SZ.getWagesAmount({gs:e,t:a});return e.flags.openFreeSigningWindow?"free agent"!==t.team?{can:!1,why:"the player isn't free"}:e.flags.signLimit&&e.flags.signedNewPlayer?{can:!1,why:"You can't sign others players for today"}:e.rejections[t.id]?{can:!1,why:"The player is unwilling to sign"}:a.playerIds.length>=h.fY?{can:!1,why:`Your team can't have more than ${h.fY} players`}:n>p.dn&&n+r>p.Oo?{can:!1,why:"Your team can't afford the player wage"}:{can:!0,why:""}:{can:!1,why:"The signing window is close"}}function $(e,n,t){const a=window.$game.state,r=a.teams[a.userTeam];return h.SZ.signPlayer({gs:a,t:r,p:e},n,t),{when:(0,l.O4)(a.date),plId:e.id,team:r.name}}function _(e,n,t){const a=window.$game.state;return!!function(e,n,t){return n<(0,p.Fi)({gs:e,t:e.teams[e.userTeam],p:t})?{can:!1,why:"The offer was rejected"}:x(e,n,t)}(a,n,e).can&&(a.transactions.now.signings.push($(e,n,t)),a.flags.signedNewPlayer=!0,window.$game.state=a,!0)}function k(e,n,t){const a=window.$game.state;return n>=(0,p.Fi)({gs:a,t:a.teams[a.userTeam],p:e})&&(a.transactions.now.renewals.push($(e,n,t)),window.$game.state=a,!0)}function S(e,n,t){const a=window.$game.state,o=a.teams[a.userTeam];if(!a.flags.openTradeWindow)return{ok:!1,why:"the trade window is close"};if(0===n.length||0===t.length)return{ok:!1,why:"the trade offer can't have an empty side"};const s=(0,r.P8)({gs:a,t:o},n,t),i=(0,r.P8)({gs:a,t:e},t,n);return s.ok?i.ok?(0,r.rK)({gs:a,t:e},t,n)?{ok:!0,why:""}:{ok:!1,why:`${e.name} rejected your offer`}:{ok:!1,why:`${e.name} is ${i.why}`}:{ok:!1,why:`your team is ${s.why}`}}function C(e,n,t){const a=window.$game.state,o=a.teams[a.userTeam];(0,r.tG)(a,n,o),(0,r.tG)(a,t,e),(0,h._1)({gs:a,t:e}),(0,h._1)({gs:a,t:o}),a.transactions.now.trades.push({when:(0,l.O4)(a.date),sides:[{team:o.name,plIds:t.map((e=>e.id))},{team:e.name,plIds:n.map((e=>e.id))}]}),window.$game.state=a}function A(e){e.flags.openTradeWindow&&(e.tradeOffers=e.tradeOffers.filter((n=>{const t=function(e,n){const[t,a]=n.sides,o=e.teams[t.team],s=e.teams[a.team],i=!t.plIds.some((e=>!o.playerIds.includes(e))),l=!a.plIds.some((e=>!s.playerIds.includes(e)));if(e.flags.openTradeWindow&&i&&l){const t=n.sides[0].plIds.map((n=>e.players[n])),a=n.sides[1].plIds.map((n=>e.players[n]));return(0,r.P8)({gs:e,t:o},a,t).ok&&(0,r.P8)({gs:e,t:s},t,a).ok}return!1}(e,n);return!t&&(0,o.YQ)(e,(0,c.TA)(e.date,n,e.teams[e.userTeam])),t})))}function T(e){const n=window.$game.state,t=n.teams[n.userTeam];t.formation?.name!==e&&(t.formation={name:e,lineup:d.Jq[e].map((e=>({sp:e})))},E(n,t))}async function E(e,n){const t=await(0,a.j)({gs:e,teams:[n.name]});(0,h.Cp)(e.teams[t[0].team],t[0].f),window.$game.state=e}function P(){const e=window.$game.state,n=e.userTeam;return o.D2.getSeasonMatches(e,"now").filter((e=>(e.away===n||e.home===n)&&!e.result))}},5233:(e,n,t)=>{t.d(n,{A2:()=>o,Ex:()=>c,JO:()=>s,S1:()=>l,Ue:()=>m,ZV:()=>d,br:()=>u,gG:()=>h,mJ:()=>i});var a=t(7602),r=(t(7786),t(8146));function o(e,n){let t,r=0;for(const o of e){const e=a.F7(o,n);r<e&&(t=o,r=e)}return t}function s(e,n){return e.length<=1?e[0]:e.reduce(((e,t)=>a.PU(e,n)>=a.PU(t,n)?e:t))}function i(e,n){return e.ascending=!e.ascending&&e.by===n,e.by=n,e.ascending}function l(e,n,t){n.sort(((n,r)=>t?a.PU(n,e)-a.PU(r,e):a.PU(r,e)-a.PU(n,e)))}function d(e,n,t){return n.sort(((n,r)=>t?a.rW(n,e)-a.rW(r,e):a.rW(r,e)-a.rW(n,e))),n}function c(e,n,t,a){"number"===e?n.sort(((n,a)=>t?(n[e]??100)-(a[e]??100):(a[e]??-1)-(n[e]??-1))):"birthday"===e?function(e,n){e.sort(((e,t)=>n?new Date(t.birthday).getTime()-new Date(e.birthday).getTime():new Date(e.birthday).getTime()-new Date(t.birthday).getTime()))}(n,t):"position"===e?h(n,t):"improvability"===e?function(e,n,t){n.sort(((n,a)=>t?(0,r.jC)(n,e)-(0,r.jC)(a,e):(0,r.jC)(a,e)-(0,r.jC)(n,e)))}(a.teams[a.userTeam],n,t):"rating"===e?function(e,n,t){n.sort(((n,a)=>t?(0,r.dT)(n,e)-(0,r.dT)(a,e):(0,r.dT)(a,e)-(0,r.dT)(n,e)))}(a,n,t):"skills"!==e&&"growthRate"!==e&&"growthState"!==e&&n.sort(((n,a)=>t?n[e].localeCompare(a[e]):a[e].localeCompare(n[e])))}Object.keys(a.fY);const p=a.kd.reduce(((e,n,t)=>(e[n]=t,e)),{});function h(e,n){e.sort(((e,t)=>n?p[e.position]-p[t.position]:p[t.position]-p[e.position]))}function u(e,n,t=!0){return"appeal"!==n?e:e.sort(((e,a)=>t?e[n]-a[n]:a[n]-e[n]))}function m(e,n,t=!0){return e.sort(((e,a)=>t?e.finances[n]-a.finances[n]:a.finances[n]-e.finances[n]))}},5210:(e,n,t)=>{t.d(n,{J0:()=>A,TV:()=>_,_3:()=>M,_w:()=>v,dm:()=>F,kG:()=>T,m7:()=>k,mw:()=>O,p9:()=>$,r4:()=>j});var a=t(7786),r=t(9398),o=t(7473),s=t(7602),i=t(2272),l=t(731),d=t(8096),c=t(1094),p=t(7801),h=t(2833),u=t(5323),m=t(8146),g=t(5285),f=t(5233);const b={seasonEnd:!0,seasonStart:!0,retiring:!0,draftStart:!0,draft:!0,openFreeSigningWindow:!0,openTradeWindow:!0,simRound:!0,updateContracts:!0};let v=b,y=!1,w=!1,x={stop:!1};function $(e){return e.flags.userDrafting||!e.flags.canSimRound}function _(){return y}function k(e,n,t,a){if($(e))return()=>{};const r=x;return _()||(function(e){v=e&&"oneDay"===e?{...b,oneDay:!0}:e?{[e]:!0}:b}(a),y=!0,setTimeout((async function a(){w?setTimeout(a,window.$appState.simOptions.tickInterval??0):x.stop||await async function(e){if($(e))return!0;let n=0;for(;n<24&&0!==e.eventQueue.length;){if(e.date.getTime()>=e.eventQueue[0]?.date.getTime()){const n=await C(e,e.eventQueue[0]);return n.done&&(e.flags.onGameEvent=e.eventQueue.shift().type),F(e),n.stop}S(e),e.flags.onGameEvent=void 0,e.flags.signedNewPlayer=!1,n+=12}return n>0&&e.flags.openFreeSigningWindow&&0===e.date.getDay()&&D(e),0===e.eventQueue.length||Boolean(v.oneDay)}(e)?(y=!1,x={stop:!1},t(e)):(n(e),setTimeout(a,window.$appState.simOptions.tickInterval??0))}))),()=>r.stop=!0}function S(e){const n=e.eventQueue[0];n&&n.date.getTime()-e.date.getTime()<=432e5?e.date=new Date(n.date):e.date.setHours(e.date.getHours()+12)}async function C(e,n){return"simRound"===n.type?await async function(e,n){return L(e)?(await async function(e,n=!1){const t=n?Object.keys(e.teams).filter((n=>n!==e.userTeam)):Object.keys(e.teams);(await(0,h.j)({gs:e,teams:t})).forEach((n=>(0,i.Cp)(e.teams[n.team],n.f)))}(e,!window.$appState.userSettings.autoFormation),function(e,n){e.schedules.now?.[n]?.matchIds.forEach((n=>function(e,n){const t=e.matches[n],a=n=>n?.reduce(((n,t)=>n+(0,s.F7)(e.players[t.plID],t.sp.pos)),0)??0,r=(0,d.uh)(a(e.teams[t.home]?.formation?.lineup)-700,0,100)/100+.1,o=(0,d.uh)(a(e.teams[t.away]?.formation?.lineup)-700,0,100)/100-.1,i=Math.round(6*(0,g.I2)(Math.random(),0,.35,-.2,1)),l=1+i,c=(1+r/2-o/2)/2,p=1-c,h=Math.random();t.result=.8*c>=h?{home:l,away:Math.floor(Math.random()*l)}:.8*(c+p)>=h?{home:Math.floor(Math.random()*l),away:l}:{home:Math.round(i/2),away:Math.round(i/2)}}(e,n)))}(e,n.round),P(e,n.round+1),{stop:v.simRound??!1,done:!0}):{stop:!0,done:!1}}(e,n.detail):"skillUpdate"===n.type?function(e){return function(e){for(const n in e.players)(0,s.k1)(e.players[n],e.date),(0,s.UY)(e.players[n],e.date)}(e),j(e),e.popStats=(0,c.H)(Object.values(e.players)),{stop:v.skillUpdate??!1,done:!0}}(e):"seasonEnd"===n.type?function(e){return function(e){const n=e.schedules.now;if(n){const t=n[0].date.getFullYear(),a=n[n.length-1].date.getFullYear();e.schedules[`${t}-${a}`]=e.schedules.now,e.transactions[`${t}-${a}`]=e.transactions.now,e.transactions.now={trades:[],signings:[],renewals:[]}}}(e),function(e){const n=e.date.getFullYear(),t=new Date(n,8,1);a.D2.enqueueGameEvent(e,{date:t,type:"seasonStart"})}(e),function(e){const n=new r.EL(a.D2.getSeasonMatches(e,"now")).getSortedTable().map((n=>e.teams[n.teamName])),t=Object.values(e.teams).sort(((e,n)=>n.finances.facilities-e.finances.facilities));n.forEach((e=>{const a=i.SZ.calcAppeal(e,n,t);e.appeal+=(0,d.uh)(a-e.appeal,-1,1)}))}(e),function(e){const n=i.On/10,t=Object.values(e.teams);t.sort(((e,n)=>n.finances.scouting-e.finances.scouting)).forEach(((e,a)=>{const r=(i.On-n)*(a/(t.length-1))+n,o=(0,d.uh)((r-e.scoutOffset)*Math.random(),-n,n);e.scoutOffset=(0,d.uh)(e.scoutOffset+o,0,i.On)}))}(e),{stop:v.seasonEnd??!1,done:!0}}(e):"seasonStart"===n.type?await async function(e){return A(e),e.flags.signLimit=!1,await T(e,!window.$appState.userSettings.autoFormation),{stop:v.seasonStart??!1,done:!0}}(e):"updateContracts"===n.type?function(e){return function(e){Object.values(e.contracts).forEach((e=>e.duration--))}(e),a.D2.enqueueGameEvent(e,{date:new Date(e.date),type:"renewals"}),{stop:!0,done:!0}}(e):"renewals"===n.type?function(e){return function(e,n=!1){const t=(0,g.O4)(e.date);Object.values(e.teams).forEach((a=>{n&&a.name===e.userTeam||i.SZ.renewExpiringContracts({gs:e,t:a}).forEach((n=>e.transactions.now.renewals.push({team:a.name,plId:n.id,when:t})))}))}(e,!0),function(e){Object.values(e.contracts).forEach((n=>{0===n.duration&&i.SZ.unSignPlayer(e,n)}))}(e),Object.values(e.teams).forEach((n=>(0,i._1)({gs:e,t:n}))),{stop:v.renewals??!1,done:!0}}(e):"updateFinances"===n.type?function(e){return Object.values(e.teams).forEach((n=>i.SZ.updateFinances({gs:e,t:n}))),function(e){const n=new Date(e.date.getFullYear(),e.date.getMonth()+2,0);a.D2.enqueueGameEvent(e,{date:n,type:"updateFinances"})}(e),{stop:v.updateFinances??!1,done:!0}}(e):"signings"===n.type?function(e){if(e.flags.openFreeSigningWindow){!function(e,n=!1){const t=Object.values(e.teams).filter((t=>(!n||t.name!==e.userTeam)&&i.SZ.needPlayer({gs:e,t})));let a=Object.values(e.players).filter((e=>"free agent"===e.team));(0,l.TV)(t).forEach((n=>{const t=i.SZ.signFreeAgent({gs:e,t:n},a);if(t){a=a.filter((e=>e!==t));const r={when:(0,g.O4)(e.date),plId:t.id,team:n.name};e.transactions.now.signings.push(r)}}))}(e,!0);const n=e.eventQueue.some((e=>"seasonStart"===e.type))?1:7;M(e,e.date,"signings",{days:n})}return{stop:v.signings??!1,done:!0}}(e):"retiring"===n.type?function(e){return e.retiring=Object.values(e.players).filter((n=>(0,s.A0)(n,e.date))).map((e=>e.id)),a.D2.enqueueGameEvent(e,{date:new Date(e.date),type:"retire"}),{stop:v.retiring??!1,done:!0}}(e):"retire"===n.type?function(e){return e.retiring.forEach((n=>function(e,n){const t=a.D2.getContract(e,n);t&&i.SZ.unSignPlayer(e,t),delete e.players[n.id],e.retirees[n.id]={name:n.name}}(e,e.players[n]))),e.retiring=[],Object.values(e.teams).forEach((n=>(0,i._1)({gs:e,t:n}))),{stop:v.retire??!1,done:!0}}(e):"draftStart"===n.type?function(e){return a.D2.enqueueGameEvent(e,{date:new Date(e.date),type:"draft"}),{stop:v.draftStart??!1,done:!0}}(e):"draft"===n.type?function(e){for(const n of e.drafts.now.lottery.slice()){if(n===e.userTeam)return e.flags.userDrafting=!0,(0,a.YQ)(e,(0,u.BO)(e.date)),{stop:!0,done:!1};O(e)}return 0===e.drafts.now.lottery.length&&e.drafts.now.picks.forEach((n=>e.players[n.plId].team="free agent")),{stop:v.draft??!1,done:!0}}(e):"trade"===n.type?function(e){const n=e.teams[e.userTeam],t=e.tradeOffers.length;return e.flags.openTradeWindow&&((0,p.Jg)(e).forEach((t=>{t.side1.by===n||t.side2.by===n?(e.tradeOffers.push((0,a.ux)(t,e.date)),(0,a.YQ)(e,(0,u.mr)(e.date,t,n))):((0,p.K)(e,t),(0,i._1)({gs:e,t:t.side1.by}),(0,i._1)({gs:e,t:t.side2.by}))})),M(e,e.date,"trade",{days:1})),{stop:t!==e.tradeOffers.length||(v.trade??!1),done:!0}}(e):"openTradeWindow"===n.type?function(e){return e.flags.openTradeWindow=!0,M(e,e.date,"trade",{days:1}),{stop:v.openTradeWindow??!1,done:!0}}(e):"openFreeSigningWindow"===n.type?function(e){return e.flags.openFreeSigningWindow=!0,e.flags.signLimit=!0,D(e),M(e,e.date,"signings",{days:1}),{stop:v.openFreeSigningWindow??!1,done:!0}}(e):"closeFreeSigningWindow"===n.type?function(e){return e.flags.openFreeSigningWindow=!1,{stop:v.closeFreeSigningWindow??!1,done:!0}}(e):"injuriesUpdate"===n.type?function(e){return M(e,e.date,"injuriesUpdate",{days:1}),function(e){for(const[n,t]of Object.entries(e.injuries))new Date(t.when).getTime()<=e.date.getTime()+864e5+1e3&&delete e.injuries[n]}(e),function(e){const n=(0,f.Ue)(Object.values(e.teams),"health",!1);for(;Math.random()>.45;){const t=Math.floor(Math.random()*n.length),r=n[t].playerIds,o=r[Math.floor(Math.random()*r.length)];if(!e.injuries[o]){const r=5+10*Math.random();let s=Math.random()**3*150+r;s=Math.floor((1+t/n.length*.2)*s);const i=new Date(e.date);i.setDate(i.getDate()+s),e.injuries[o]={when:(0,g.O4)(i)};const l=n[t].formation?.lineup.find((e=>e.plID===o));l&&(l.plID=void 0),n[t].name===e.userTeam&&(0,a.YQ)(e,(0,u.Ky)(e.date,e.players[o].name,e.injuries[o]))}}}(e),{stop:!1,done:!0}}(e):{stop:!1,done:!1}}function A(e){(function(e,n){const t=new Date(e.date.getFullYear(),8,2);if(t.getTime()<=e.date.getTime())throw new Error("should be called before september second");const r=(7-t.getDay())%7;t.setDate(t.getDate()+r),a.D2.saveSchedule(e,new o.Pf(n,t),"now")})(e,Object.keys(e.teams)),e.flags.openTradeWindow=!1,e.tradeOffers=[],P(e,0);const n=function(e){const n=e.date.getFullYear()+1,t={date:new Date(n,5,1),type:"seasonEnd"};return a.D2.enqueueGameEvent(e,t),t}(e).date;M(e,n,"closeFreeSigningWindow",{months:-1}),M(e,n,"retiring",{days:1}),M(e,n,"updateContracts",{days:2}),M(e,n,"draftStart",{days:3}),M(e,n,"openTradeWindow",{days:4}),M(e,n,"openFreeSigningWindow",{days:4}),function(e){e.drafts.now&&(e.drafts[`${new Date(e.drafts.now.when).getFullYear()}`]=e.drafts.now);const n=e.eventQueue.find((e=>"draftStart"===e.type))?.date;n&&(e.drafts.now={when:(0,g.O4)(n),lottery:(0,l.TV)(Object.keys(e.teams)),picks:E(e).map((e=>({team:"",plId:e.id,n:NaN}))),picked:[]})}(e),Object.values(e.players).forEach((e=>delete e.number)),Object.values(e.teams).forEach((n=>{(0,i.cE)(a.D2.getTeamPlayers(e,n.name)),(0,i.Z9)(e,e.teams[n.name])}))}async function T(e,n=!1){w=!0;const t=n?Object.keys(e.teams).filter((n=>n!==e.userTeam)):Object.keys(e.teams);(await(0,h.y)({gs:e,teams:t})).forEach((n=>(0,i.Cp)(e.teams[n.team],n.f))),w=!1}function E(e){const n=()=>s.G3+Math.floor(Math.random()*(20-s.G3)),t=[...(0,a.kr)(e,"goalkeeper",6,n),...(0,a.kr)(e,"defender",17,n),...(0,a.kr)(e,"midfielder",17,n),...(0,a.kr)(e,"forward",12,n)];return t.forEach((e=>e.team="draft")),t}function P(e,n){e.schedules.now?.[n]&&a.D2.enqueueGameEvent(e,{date:e.schedules.now[n].date,type:"simRound",detail:{round:n}})}function j(e){const n=e.date,t=new Date(n.getFullYear(),n.getMonth()+1,1);a.D2.enqueueGameEvent(e,{date:t,type:"skillUpdate"})}function M(e,n,t,r){const o=new Date(n.getFullYear()+(r?.years||0),n.getMonth()+(r?.months||0),n.getDate()+(r?.days||0));return!(e.date.getTime()>o.getTime()||(a.D2.enqueueGameEvent(e,{date:o,type:t}),0))}function O(e,n){if(0===e.drafts.now.lottery.length)return;const t=n?[n]:e.drafts.now.picks.map((n=>e.players[n.plId])),a=e.drafts.now.picked.length+1,r=e.drafts.now.lottery.shift(),o=i.SZ.pickDraftPlayer({gs:e,t:e.teams[r]},t),s=e.drafts.now.picks.findIndex((e=>e.plId===o.id));e.drafts.now.picks.splice(s,1),e.drafts.now.picked.push({team:r,n:a,plId:o.id})}function D(e){const n=e.teams[e.userTeam];n&&(e.rejections={},Object.values(e.players).forEach((t=>{"free agent"!==t.team||(0,s.x6)({gs:e,t:n,p:t})||(e.rejections[t.id]=!0)})))}function L(e){return function(e){const n=e.flags,t=e.teams[e.userTeam];return n.canSimRound=!t||"simRound"!==e.eventQueue[0]?.type||t.playerIds.length>=i._C,n.canSimRound||"underMinTeamSize"===n.whyIsSimDisabled||(n.whyIsSimDisabled="underMinTeamSize",(0,a.YQ)(e,(0,u.U2)(e.date))),n.canSimRound}(e)&&function(e){const n=e.teams[e.userTeam],t=e.eventQueue[0];return e.flags.canSimRound=!n||!t||"simRound"!==t.type||t.date.getTime()-e.date.getTime()>36e5||window.$appState.userSettings.autoFormation||(0,i.$k)(e,n),e.flags.canSimRound||"missingLineup"===e.flags.whyIsSimDisabled||(e.flags.whyIsSimDisabled="missingLineup",(0,a.YQ)(e,(0,u.gA)(e.date))),e.flags.canSimRound}(e)}function F(e){e.teams[e.userTeam]&&(L(e),(0,m.ps)(e))}},2833:(e,n,t)=>{t.d(n,{j:()=>i,y:()=>s});var a=t(7786);const r=new Worker("sim-worker.js");function o(e){return new Promise((n=>{r.onmessage=e=>{r.onmessage=null,n(e.data)},r.postMessage(e)}))}function s(e){return o({type:"getNewFormations",reqs:d(e)})}function i(e){return o({type:"getUpdatedFormations",reqs:c(e)})}function l(e,n){return e.teams.map((t=>({team:t,pls:a.D2.getTeamPlayers(e.gs,t).filter((n=>!e.gs.injuries[n.id])),f:"update"===n?e.gs.teams[t].formation?.name:void 0})))}function d(e){return l(e,"new")}function c(e){return l(e,"update")}},7473:(e,n,t)=>{t.d(n,{Pf:()=>r,rG:()=>i});var a=t(731);class r{constructor(e,n){if(e.length%2==1)throw new Error("the numbers of teams can't be odd");this.startDate=n,this.rounds=function(e){const n=function(e){e=(0,a.TV)([...e]);const n=[];for(let t=0;t<e.length-1;t++)n.push(o(e)),e=s(e);return n}(e).map(((e,n)=>n%2==0?e:e.map((([e,n])=>[n,e]))));return n.concat(n.map((e=>e.map((([e,n])=>[n,e])))))}(e).map(((e,t)=>{const r=new Date(n.getTime());return r.setDate(n.getDate()+7*t),{date:r,matches:e.map((([e,n])=>({id:(0,a.Mc)(),date:r,home:e,away:n})))}}))}}function o(e){const n=[];for(let t=0;t<e.length/2;t++)n.push([e[t],e[e.length-1-t]]);return n}function s(e){const n=[e[0]];for(let t=1;t<e.length;t++)n[(t+1)%e.length||1]=e[t];return n}function i(e,n){return e.home===n||e.away===n}},7801:(e,n,t)=>{t.d(n,{Jg:()=>b,K:()=>v,P8:()=>y,rK:()=>m,tG:()=>f});var a=t(7602),r=t(2272),o=t(7786),s=t(731),i=t(8096);function l(e){const n=(0,i.Ac)(e.p.birthday,e.gs.date)/365,t=(0,a.Ay)(e.p,e.gs.date)+n,o=(0,i.uh)(1-(t-29)/33,.8,1);return r.SZ.evaluatePlayer(e)*o}function d(e,n,t){return function(e,n,t){return e.playerIds.length+n.length-t.length<r._C}(e,n,t)?n.length>=t.length:!function(e,n,t){return e.playerIds.length+n.length-t.length>r.fY}(e,n,t)||t.length>=n.length}function c(e,n){const t=(0,i.TK)(e,n);return t<=.1*Math.abs(e)&&t<=.1*Math.abs(n)}function p(e,n,t){return 2**((t-e)/(n/4))}function h({gs:e},n){if(0===n.length)return NaN;const{meanScore:t,standardDev:a}=e.popStats;return p(t,a,(r=n,.5*Math.max(...r)+r.reduce(((e,n)=>e+n),0)/r.length*.5))+n.reduce(((e,n)=>e+p(t,a,n)),0);var r}function u(e){const n=r.SZ.getWagesAmount(e);return(t,o)=>{const s=n+(0,r._D)(e.gs,t)-(0,r._D)(e.gs,o);return s<a.Oo||s<=n}}function m({gs:e,t:n},t,a){if(!t.length||!a.length||!d(n,t,a))return!1;const r=t.map((t=>l({gs:e,t:n,p:t}))),o=a.map((t=>l({gs:e,t:n,p:t}))),s=h({gs:e,t:n},r),i=h({gs:e,t:n},o);return u({gs:e,t:n})(t,a)&&(s>i||c(s,i))}function g({gs:e,t:n},t){const a=(0,s.TV)(r.SZ.getNotExpiringPlayers({gs:e,t})).slice(0,Math.floor(3*Math.random())+1),o=function({gs:e,t:n},t){const a=(0,s.TV)(r.SZ.getNotExpiringPlayers({gs:e,t:n})).slice(0,20),o=u({gs:e,t:n}),i=new Map;a.forEach((t=>i.set(t,l({gs:e,t:n,p:t}))));const p=h({gs:e,t:n},t.map((t=>l({gs:e,t:n,p:t})))),m=[],g=(r,s)=>{if(!(3<r.length)&&d(n,t,r)){r.length>0&&!m[r.length-1]&&c(h({gs:e,t:n},r.map((e=>i.get(e)))),p)&&o(t,r)&&(m[r.length-1]=r.slice());for(let e=s;e<a.length;e++)r.push(a[s]),g(r,e+1),r.pop()}};return g([],0),(0,s.TV)(m.filter((e=>e)))[0]??[]}({gs:e,t:n},a);if(m({gs:e,t},o,a))return{side1:{by:n,content:o},side2:{by:t,content:a}}}function f(e,n,t){n.forEach((n=>{const a=o.D2.getContract(e,n);a&&r.SZ.transferPlayer(e,a,t)}))}function b(e){const n=[],t=(0,s.TV)(Object.values(e.teams));for(let a=1;a<=t.length/2;a+=2){const r=g({gs:e,t:t[a]},t[a-1]);r&&n.push(r)}return n}function v(e,n){f(e,n.side1.content,n.side2.by),f(e,n.side2.content,n.side1.by),e.transactions.now.trades.push((0,o.ux)(n,e.date))}function y({gs:e,t:n},t,a){return d(n,t,a)?u({gs:e,t:n})(t,a)?{ok:!0,why:""}:{ok:!1,why:"failing the salary cap requirements"}:{ok:!1,why:"failing the squad size requirements"}}},4028:(e,n,t)=>{t.d(n,{Ds:()=>m,ER:()=>u,F5:()=>c,Qo:()=>p,TT:()=>$,ZZ:()=>f,aB:()=>w,jj:()=>y,k6:()=>x,on:()=>g});var a=t(6928),r=t(5285);let o;const s="sff-saves",i="game",l="state";let d=[];function c(e){d.push(e)}function p(e){d=d.filter((n=>e!==n))}function h(e){o=e,d.forEach((e=>e.updateDBState(g()?"on":"off")))}const u="sff-";function m(e){return e?.name.substring(u.length)??"save"}function g(){return!!o}function f(){return JSON.parse(localStorage.getItem(s)??"[]")}function b(e){e.onupgradeneeded=()=>{e.result.createObjectStore(i)}}function v(e,n){e.onsuccess=()=>{h(e.result),e.result.onversionchange=()=>{e.result.close(),h(void 0),!(0,r.Nj)(window.$PUBLIC_PATH)&&(0,a.WF)("/")},e.result.onclose=()=>{h(void 0)},n&&n()}}function y(e){o?.close();const n=indexedDB.open(e.name,1);b(n),v(n,(()=>w(e,(()=>function(e){const n=f();!n.includes(e)&&n?.push(e),localStorage.setItem(s,JSON.stringify(n))}(e.name))))),n.onerror=()=>{console.warn("the autosave is off, unable to open the browser database")}}function w(e,n){const t=o?.transaction(i,"readwrite");t?.objectStore(i).put(e,l),t?.addEventListener("error",(()=>{})),t?.addEventListener("complete",(()=>{n?.(),d.forEach((e=>e.updateDBState("saved")))}))}function x(e,n,t){if(f().includes(e)){o?.close();const a=indexedDB.open(e,1);b(a),v(a,(()=>function(e){const n=o?.transaction(i,"readonly").objectStore(i).get(l);n?.addEventListener("success",(()=>e(n.result))),n?.addEventListener("error",(()=>{alert("sorry the game save doesn't exist")}))}(n))),a.onerror=t}else t()}function $(e,n){const t=indexedDB.deleteDatabase(e);t.onsuccess=()=>{!function(e){localStorage.setItem(s,JSON.stringify(f().filter((n=>n!==e))))}(e),h(void 0),n()},t.onerror=()=>{}}},7786:(e,n,t)=>{t.d(n,{D2:()=>m,yf:()=>b,YQ:()=>f,kr:()=>v,ux:()=>g});var a=t(7602),r=t(2272),o=t(5210),s=t(5323),i=t(63),l=t(1094),d=t(4028);let c="idle";const p={},h=new BroadcastChannel("sync-game");h.onmessage=e=>{const n=window.$game.state?.name,t=e.data.type;"gameUpdate"===t&&e.data.name===n?(c="receiving",h.postMessage({type:"sendGameUpdate"})):"sendGameUpdate"===t&&"sending"===c?(clearTimeout(p.timeoutID),h.postMessage({type:"gameState",state:p.gs}),c="idle",p.gs=void 0):"gameState"===t&&(window.$game.onSyncGameUpdate(e.data.state),c="idle")};var u=t(5285);class m{constructor(e,n="",t=""){this.eventQueue=[],this.players={},this.teams={},this.contracts={},this.schedules={},this.matches={},this.mails=[],this.retiring=[],this.retirees={},this.rejections={},this.tradeOffers=[],this.injuries={},this.flags={openTradeWindow:!1,openFreeSigningWindow:!0,userDrafting:!1,canSimRound:!0,onGameEvent:void 0,signLimit:!1,signedNewPlayer:!1,whyIsSimDisabled:""},this.popStats={sampleSize:0,meanScore:62,medianScore:62,lowestScore:45,highestScore:75,standardDev:5.6},this.drafts={},this.transactions={now:{trades:[],signings:[],renewals:[]}},this.userTeam=n,this.name=t,this.date=new Date(e.getTime())}static init(e=Object.keys(i),n="",t="",d){const c=new m(new Date((new Date).getFullYear(),7,1,10),e.find((e=>e===n))?n:"",t);var p;return p=c,e.map((e=>{const n=new r.SZ(e);m.saveTeam(p,n);const t=e=>e.forEach((e=>r.SZ.signPlayer({gs:p,t:n,p:e},(0,a.Hh)(p,e)))),o={gs:p,t:n};return t((0,r.zp)(o,v(p,"goalkeeper",4),3)),t((0,r.zp)(o,v(p,"defender",10),8)),t((0,r.zp)(o,v(p,"midfielder",10),8)),t((0,r.zp)(o,v(p,"forward",8),6)),n})),function(e){(0,o.J0)(e),(0,o.r4)(e),(0,o._3)(e,e.date,"injuriesUpdate",{days:1}),m.enqueueGameEvent(e,{date:new Date(e.date.getFullYear(),e.date.getMonth()+1,0),type:"updateFinances"})}(c),function(e){const n=Object.values(e.teams).sort(((n,t)=>r.SZ.getWagesAmount({gs:e,t})-r.SZ.getWagesAmount({gs:e,t:n}))),t=Object.values(e.teams).sort(((e,n)=>n.finances.facilities-e.finances.facilities));n.forEach((e=>e.appeal=r.SZ.calcAppeal(e,n,t)))}(c),c.mails=[(0,s.d$)(n,c.date)],c.popStats=(0,l.H)(Object.values(c.players)),(0,o.kG)(c).then((()=>d)),c}static parse(e){return JSON.parse(e,((e,n)=>"date"===e?new Date(n):n))}static enqueueGameEvent(e,n){const t=e.eventQueue.findIndex((e=>e.date.getTime()>n.date.getTime()));-1!==t?e.eventQueue.splice(t,0,n):e.eventQueue.push(n)}static getTeamPlayers(e,n){return e.teams[n]?.playerIds.map((n=>e.players[n]))??[]}static saveContract(e,n){e.contracts[n.playerId]=n}static deleteContract(e,n){delete e.contracts[n.playerId]}static getContract(e,n){return e.contracts[n.id]}static savePlayer(e,n){e.players[n.id]=n}static saveTeam(e,n){e.teams[n.name]=n}static saveSchedule(e,n,t){e.schedules[t]=[],n.rounds.forEach((n=>{e.schedules[t].push({date:n.date,matchIds:n.matches.map((e=>e.id))}),n.matches.forEach((n=>{e.matches[n.id]=n}))}))}static getSeasonRounds(e,n){return e.schedules[n]?.map((n=>n.matchIds.map((n=>e.matches[n]))))}static getNextRound(e){return e.eventQueue.find((e=>"simRound"===e.type))?.detail?.round}static getRound(e,n,t){return e.schedules?.[t]?.[n].matchIds.map((n=>e.matches[n]))}static getSeasonMatches(e,n){return m.getSeasonRounds(e,n)?.flat()??[]}}function g(e,n){return{when:(0,u.O4)(n),sides:[{team:e.side1.by.name,plIds:e.side1.content.map((e=>e.id))},{team:e.side2.by.name,plIds:e.side2.content.map((e=>e.id))}]}}function f(e,n){e.mails.length>=30&&e.mails.pop(),e.mails.unshift(n)}class b{constructor(){this.observers=new Set,this.updateScheduled=!1,this.clearObservers=()=>this.observers.clear()}get state(){return this._state}set state(e){const n=!this._state;this._state=e,this._state&&(0,o.dm)(this._state),this.onUpdate(),n||this.sendState()}sendState(){var e;this.state&&(e=this.state,"receiving"!==c&&(clearTimeout(p.timeoutID),c="sending",p.gs=e,h.postMessage({type:"gameUpdate",name:e.name}),p.timeoutID=setTimeout((()=>{c="idle"}),50)))}onUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask((()=>{this.notifyObservers(),this.updateScheduled=!1})))}addObserver(e){this.observers.add(e)}removeObserver(e){this.observers.delete(e)}notifyObservers(){this.observers.forEach((e=>e.gameStateUpdated(this._state)))}getStateAsJsonUrl(){return URL.createObjectURL(new Blob([this.getJSONSave()],{type:"application/json"}))}getJSONSave(){const e=this._state;return JSON.stringify(e,(function(n,t){return"formation"===n&&e?.userTeam!==this.name?void 0:t}))}newGame(e,n){this.state=m.init(void 0,e,n,(()=>this.state=this._state)),this.saveNewGSOnDB()}loadGameFrom(e){this._state=e,this.saveNewGSOnDB(),(0,o.kG)(this._state,!window.$appState.userSettings.autoFormation).then((()=>this.state=this._state))}saveNewGSOnDB(){this._state?.name&&d.jj(this._state)}saveGsOnDB(e){this._state?.name?d.aB(this._state,e):e?.()}loadGameFromDB(e,n,t){d.k6(e,(e=>{this.state=e,n(),(0,o.kG)(this.state,!window.$appState.userSettings.autoFormation).then((()=>this.state=this._state))}),t)}deleteGame(e,n){this._state?.name===e&&delete this._state,d.ZZ().includes(e)?d.TT(e,n):n()}onSyncGameUpdate(e){e.name===this._state?.name&&(this._state=e,this.notifyObservers())}}function v(e,n,t,r){return Array.from({length:t},(()=>{const t=(0,a.pR)(e.date,n,r?r():void 0);return m.savePlayer(e,t),t}))}},9398:(e,n,t)=>{t.d(n,{EL:()=>i,_4:()=>l});class a{constructor(e){this.played=0,this.won=0,this.drawn=0,this.lost=0,this.points=0,this.goalsFor=0,this.goalsAgainst=0,this.teamName=e}}const r={state:"won",points:3},o={state:"drawn",points:1},s={state:"lost",points:0};class i{constructor(e){this.entries=new Map,e.forEach((e=>this.addMatchResult(e)))}addEntry(e){this.entries.has(e)||this.entries.set(e,new a(e))}getEntry(e){return this.addEntry(e),this.entries.get(e)}getSortedTable(){return[...this.entries.values()].sort(((e,n)=>n.points-e.points))}addMatchResult(e){const n=this.getEntry(e.home),t=this.getEntry(e.away);if(e.result){const a=l(e.result);n.goalsFor+=e.result.home,t.goalsFor+=e.result.away,n.goalsAgainst+=e.result.away,t.goalsAgainst+=e.result.home,n.played++,t.played++,n[a.home.state]++,n.points+=a.home.points,t[a.away.state]++,t.points+=a.away.points}}}function l(e){return e.home>e.away?{home:r,away:s}:e.home<e.away?{home:s,away:r}:{home:o,away:o}}},1094:(e,n,t)=>{t.d(n,{H:()=>o});var a=t(7602),r=t(8096);function o(e){const n=e.map((e=>(0,a.F7)(e))).sort(((e,n)=>e-n)),t=(0,r.J6)(n);return{sampleSize:e.length,meanScore:t,medianScore:n[Math.floor(n.length/2)],lowestScore:n[0],highestScore:n[n.length-1],standardDev:Math.sqrt((0,r.CA)(n,t))}}},3607:(e,n,t)=>{t.a(e,(async(e,n)=>{try{var a=t(1889),r=t(576),o=t(7786),s=t(3066);globalThis.URLPattern||await t.e(892).then(t.bind(t,9892)),window.$appState=a.Z,window.$game=new o.yf,window.$PUBLIC_PATH="/fg/",window.$script=r.Z,(0,s.Z)(),n()}catch(e){n(e)}}),1)},3066:(e,n,t)=>{t.d(n,{Z:()=>lo});var a=t(6928),r=t(3692),o=t(5812),s=t(9488);const i=d(o.Z),l=d(s.Z);function d(e){const n=document.createElement("style");return n.textContent=e,n}var c=t(5429);class p extends HTMLElement{constructor(){super(),this.toggleNav=()=>{const e=this.shadowRoot.querySelector("#js-nav"),n=this.shadowRoot.querySelector(".btn-toggle-nav");if(e.classList.contains("mb-nav-close"))n.setAttribute("data-open","false"),e.classList.remove("mb-nav-close"),e.style.opacity="0",requestAnimationFrame((()=>requestAnimationFrame((()=>e.style.opacity=""))));else{n.setAttribute("data-open","true");const t=()=>{e.style.opacity="",e.classList.add("mb-nav-close"),e.removeEventListener("transitionend",t),e.removeEventListener("transitioncancel",t)};e.addEventListener("transitionend",t),e.addEventListener("transitioncancel",t),e.style.opacity="0"}},this.attachShadow({mode:"open"})}connectedCallback(){this.isConnected&&(a.XP.add(this),this.render())}disconnectedCallback(){a.XP.delete(this)}onRouteLeave(){this.shadowRoot.querySelector("#js-nav")?.classList.contains("mb-nav-close")||this.toggleNav()}render(){(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${c.Z}
        </style>
        <header>
          <slot name="in-header"></slot>
          <button
            data-open="true"
            class="btn btn-toggle-nav icon-bg-btn absolute bg-transparent left-2 top_50 shadow-none translate-y_-50"
            @click=${this.toggleNav}
          ></button>
        </header>
        <nav id="js-nav" class="mb-nav-close">
          <slot name="in-nav"></slot>
        </nav>
        <main>
          <slot name="in-main"></slot>
        </main>
        <footer>
          <slot name="in-footer"></slot>
        </footer>
      `,this.shadowRoot)}}const{H:h}=r.Al,u=()=>document.createComment(""),m=(e,n,t)=>{var a;const r=e._$AA.parentNode,o=void 0===n?e._$AB:n._$AA;if(void 0===t){const n=r.insertBefore(u(),o),a=r.insertBefore(u(),o);t=new h(n,a,e,e.options)}else{const n=t._$AB.nextSibling,s=t._$AM,i=s!==e;if(i){let n;null===(a=t._$AQ)||void 0===a||a.call(t,e),t._$AM=e,void 0!==t._$AP&&(n=e._$AU)!==s._$AU&&t._$AP(n)}if(n!==o||i){let e=t._$AA;for(;e!==n;){const n=e.nextSibling;r.insertBefore(e,o),e=n}}}return t},g=(e,n,t=e)=>(e._$AI(n,t),e),f={},b=(e,n=f)=>e._$AH=n,v=e=>{var n;null===(n=e._$AP)||void 0===n||n.call(e,!1,!0);let t=e._$AA;const a=e._$AB.nextSibling;for(;t!==a;){const e=t.nextSibling;t.remove(),t=e}},y=e=>(...n)=>({_$litDirective$:e,values:n});class w{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,t){this._$Ct=e,this._$AM=n,this._$Ci=t}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}const x=(e,n)=>{var t,a;const r=e._$AN;if(void 0===r)return!1;for(const e of r)null===(a=(t=e)._$AO)||void 0===a||a.call(t,n,!1),x(e,n);return!0},$=e=>{let n,t;do{if(void 0===(n=e._$AM))break;t=n._$AN,t.delete(e),e=n}while(0===(null==t?void 0:t.size))},_=e=>{for(let n;n=e._$AM;e=n){let t=n._$AN;if(void 0===t)n._$AN=t=new Set;else if(t.has(e))break;t.add(e),C(n)}};function k(e){void 0!==this._$AN?($(this),this._$AM=e,_(this)):this._$AM=e}function S(e,n=!1,t=0){const a=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(n)if(Array.isArray(a))for(let e=t;e<a.length;e++)x(a[e],!1),$(a[e]);else null!=a&&(x(a,!1),$(a));else x(this,e)}const C=e=>{var n,t,a,r;2==e.type&&(null!==(n=(a=e)._$AP)&&void 0!==n||(a._$AP=S),null!==(t=(r=e)._$AQ)&&void 0!==t||(r._$AQ=k))};class A extends w{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,t){super._$AT(e,n,t),_(this),this.isConnected=e._$AU}_$AO(e,n=!0){var t,a;e!==this.isConnected&&(this.isConnected=e,e?null===(t=this.reconnected)||void 0===t||t.call(this):null===(a=this.disconnected)||void 0===a||a.call(this)),n&&(x(this,e),$(this))}setValue(e){if((e=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const T=()=>new E;class E{}const P=new WeakMap,j=y(class extends A{render(e){return r.Ld}update(e,[n]){var t;const a=n!==this.Y;return a&&void 0!==this.Y&&this.rt(void 0),(a||this.lt!==this.dt)&&(this.Y=n,this.ct=null===(t=e.options)||void 0===t?void 0:t.host,this.rt(this.dt=e.element)),r.Ld}rt(e){var n;if("function"==typeof this.Y){const t=null!==(n=this.ct)&&void 0!==n?n:globalThis;let a=P.get(t);void 0===a&&(a=new WeakMap,P.set(t,a)),void 0!==a.get(this.Y)&&this.Y.call(this.ct,void 0),a.set(this.Y,e),void 0!==e&&this.Y.call(this.ct,e)}else this.Y.value=e}get lt(){var e,n,t;return"function"==typeof this.Y?null===(n=P.get(null!==(e=this.ct)&&void 0!==e?e:globalThis))||void 0===n?void 0:n.get(this.Y):null===(t=this.Y)||void 0===t?void 0:t.value}disconnected(){this.lt===this.dt&&this.rt(void 0)}reconnected(){this.rt(this.dt)}});var M=t(4294);class O extends HTMLElement{constructor(){super(),this.dialogRef=T(),this.handleClose=()=>{this.dialogRef.value.close(),this.closeHandler?.(this.dataset.id),this.dispatchEvent(new CustomEvent("closeModal",{bubbles:!0,composed:!0,detail:{id:this.dataset.id}}))},this.attachShadow({mode:"open"})}connectedCallback(){this.isConnected&&this.render()}render(){(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${M.Z}
        </style>
        <dialog ${j(this.dialogRef)} @close=${this.handleClose}>
          <header class="dig-head">
            <slot name="title"></slot>
            <button
              autofocus
              class="btn-close self-center"
              aria-label="close modal"
              @click=${this.handleClose}
            ></button>
          </header>
          <slot></slot>
        </dialog>
      `,this.shadowRoot),this.openDialog()}openDialog(){const e=this.dialogRef.value;e.setAttribute("aria-label",this.querySelector(".dig-label")?.textContent??""),e.open||(e.classList.add("opening-dig"),e.showModal(),requestAnimationFrame((()=>requestAnimationFrame((()=>e.classList.remove("opening-dig"))))))}}var D=t(4028),L=t(7786),F=t(3295),R=t(63);const N=t.p+"98583a0a7e978c94f6a5.svg";function I(){return r.dy`
    <p class="fork-gh">
      <span>fork me on</span>
      <a
        target="_blank"
        href="https://github.com/RedAndBlu/space-fantasy-football"
      >
        <img src=${N} alt="gitHub logo" width="20" height="20" />
      </a>
    </p>
  `}class B extends HTMLElement{connectedCallback(){this.isConnected&&(document.title="Space Fantasy Football Home Page",this.render())}render(){(0,r.sY)(r.dy`
        <style>
          ${F.Z}
        </style>
        <div class="bg-wave"></div>
        <div class="cnt-content">
          <header class="head">
            <h1><span>Space Fantasy</span> <span>Football</span></h1>
            <p>An atypical football management game</p>
          </header>
          <home-main></home-main>
          ${I()}
        </div>
      `,this)}}class z extends HTMLElement{constructor(){super(...arguments),this.state="",this.stateUpdater=e=>()=>{this.state=e,this.render()},this.handleCloseModal=this.stateUpdater("")}connectedCallback(){this.isConnected&&(this.render(),this.addEventListener("closeModal",this.handleCloseModal))}disconnectedCallback(){this.removeEventListener("closeModal",this.handleCloseModal)}renderState(){return"loadFile"===this.state?r.dy`<sff-load-file></sff-load-file> `:"loadGame"===this.state?r.dy` <sff-load-game></sff-load-game> `:"newGame"===this.state?r.dy` <sff-open-new-game></sff-open-new-game> `:r.Ld}render(){(0,r.sY)(r.dy`
        <button class="btn hm-btn" @click=${this.stateUpdater("newGame")}>
          New Game
        </button>
        <button class="btn hm-btn" @click=${this.stateUpdater("loadFile")}>
          Load File
        </button>
        <button class="btn hm-btn" @click=${this.stateUpdater("loadGame")}>
          Load Game
        </button>
        ${this.renderState()}
      `,this)}}class H extends HTMLElement{constructor(){super(...arguments),this.handleTeamClick=e=>{this.pickedTeam=e.currentTarget.value,this.render()},this.onSubmitGameName=e=>{e.preventDefault();const n=this.querySelector("#game-name");if(n.value&&/^\w{4,14}$/.test(n.value)){const e=`${D.ER}${n.value}`;window.$game.newGame(this.pickedTeam,e),(0,a.WF)(`${e}/dashboard`)}else alert(`${n.value} is not a valid name`)}}connectedCallback(){this.isConnected&&this.render()}teams(){const e=Object.keys(R).map((e=>r.dy`
        <button
          class="btn pick-team-btn"
          aria-label=${`pick team ${e}`}
          @click=${this.handleTeamClick}
          value=${e}
        >
          <span class="text-2xl italic"> ${e}</span>
          <span class="text-sm font-light">${R[e].fanBase} fanbase</span>
        </button>
      `));return r.dy`
      <h2 class="dig-label" slot="title">Choose a team</h2>
      <div class="teams">${e}</div>
    `}gameName(){return r.dy`
      <h2 class="dig-label" slot="title">Choose a game name</h2>
      <form class="cnt-new-game-name" @submit=${this.onSubmitGameName}>
        <div>
          <label class="form-label" for="game-name"
            >game name between 4 and 14 characters</label
          >
          <input
            class="form-control"
            type="text"
            id="game-name"
            pattern="^\\w{4,14}$"
            size="14"
            required
            placeholder="Name"
          />
        </div>
        <button class="btn btn-rounded btn-acc">Apply</button>
      </form>
    `}render(){(0,r.sY)(r.dy`
        <sff-modal>
          ${this.pickedTeam?this.gameName():this.teams()}
        </sff-modal>
      `,this)}}class Z extends HTMLElement{constructor(){super(...arguments),this.openSave=e=>{const n=L.D2.parse(e),t=n.name.substring(D.ER.length);confirm(`are you sure do you want to open this file?, any other autosave with the name ${t} will be overridden`)&&(window.$game.loadGameFrom(n),(0,a.WF)(`${n.name}/dashboard`))},this.onFileLoad=e=>{const n=e?.target.files?.[0];n&&"application/json"===n.type?n.text().then((e=>this.openSave(e))).catch((()=>alert("the file isn't a valid save"))):alert("the picked file is invalid, pick another one")},this.onLabelPressEnter=e=>{"Enter"===e.code&&this.querySelector("#game-file").click()}}connectedCallback(){this.isConnected&&this.render()}render(){(0,r.sY)(r.dy`
        <sff-modal>
          <h2 class="dig-label" slot="title">Select a game file</h2>
          <div>
            <label
              for="game-file"
              tabindex="0"
              class="btn btn-sml btn-rounded"
              @keydown=${this.onLabelPressEnter}
              >Select Game File</label
            >
            <input
              type="file"
              accept=".json"
              class="hide"
              id="game-file"
              @change=${this.onFileLoad}
            />
          </div>
        </sff-modal>
      `,this)}}class U extends HTMLElement{constructor(){super(...arguments),this.handleLoadSave=e=>{const n=e.target.value;window.$game.loadGameFromDB(n,(()=>(0,a.WF)(`${window.$game.state.name}/dashboard`)),(()=>alert(`something went wrong, the ${n} game wasn't loaded`)))},this.handleDeleteGame=e=>{const n=e.target.value,t=n.substring(D.ER.length);confirm(`are you sure you want to delete ${t}`)&&window.$game.deleteGame(n,(()=>this.render()))}}connectedCallback(){this.isConnected&&this.render()}saves(){return D.ZZ().map((e=>{const n=e.substring(D.ER.length);return r.dy`
        <li>
          <em>${n}</em>
          <button class="btn btn--acc" value=${e} @click=${this.handleLoadSave}>
            open
          </button>
          <button
            class="btn btn--err"
            value=${e}
            @click=${this.handleDeleteGame}
          >
            delete
          </button>
        </li>
      `}))}render(){(0,r.sY)(r.dy`
        <sff-modal>
          <h2 class="dig-label" slot="title">Select a game save</h2>
          <ul class="saves">
            ${this.saves()}
          </ul>
        </sff-modal>
      `,this)}}class G{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class W{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var e;null!==(e=this.Z)&&void 0!==e||(this.Z=new Promise((e=>this.q=e)))}resume(){var e;null===(e=this.q)||void 0===e||e.call(this),this.Z=this.q=void 0}}const Y=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,q=y(class extends A{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CK=new G(this),this._$CX=new W}render(...e){var n;return null!==(n=e.find((e=>!Y(e))))&&void 0!==n?n:r.Jb}update(e,n){const t=this._$Cyt;let a=t.length;this._$Cyt=n;const o=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<n.length&&!(e>this._$Cwt);e++){const r=n[e];if(!Y(r))return this._$Cwt=e,r;e<a&&r===t[e]||(this._$Cwt=1073741823,a=0,Promise.resolve(r).then((async e=>{for(;s.get();)await s.get();const n=o.deref();if(void 0!==n){const t=n._$Cyt.indexOf(r);t>-1&&t<n._$Cwt&&(n._$Cwt=t,n.setValue(e))}})))}return r.Jb}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});var J=t(8226);Symbol("count_modifications");const Q=Symbol("renderer"),V=Symbol("rendering");function K(e,n){return Object.assign(e,{[Q]:n,[V]:!1})}function X(e){const n=e();n[V]||(n[V]=!0,queueMicrotask((()=>{n[V]=!1,n[Q]()})))}var ee=t(6909);class ne extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.setAttribute("role","menu")}connectedCallback(){this.isConnected&&this.render()}render(){(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${ee.Z}
        </style>
        <autosave-led></autosave-led>
        <menu-save></menu-save>
        <menu-save-file></menu-save-file>
        <saved-signal>game saved</saved-signal>
      `,this.shadowRoot)}}class te extends HTMLElement{constructor(){super(),this.active=!1,this.setAttribute("role","log"),this.setAttribute("aria-live","assertive")}connectedCallback(){this.isConnected&&(D.F5(this),this.render())}disconnectedCallback(){D.Qo(this)}updateDBState(e){"saved"===e&&(this.active=!0,this.render(),clearTimeout(this.timeoutID),this.timeoutID=setTimeout((()=>{this.active=!1,this.render()}),3e3))}render(){this.textContent=this.active?"game saved":""}}class ae extends HTMLElement{connectedCallback(){this.isConnected&&(D.F5(this),this.render())}updateDBState(e){"saved"!==e&&this.render()}disconnectedCallback(){D.Qo(this)}render(){const e="autosave "+(D.on()?"on":"off");this.className="led "+(D.on()?"led--on":"led--off"),this.ariaLabel=e,this.title=e,this.setAttribute("role","img")}}class re extends HTMLElement{connectedCallback(){this.isConnected&&(window.$game.addObserver(this),this.json=window.$game.getStateAsJsonUrl(),this.render())}disconnectedCallback(){URL.revokeObjectURL(this.json??""),window.$game.removeObserver(this)}gameStateUpdated(){URL.revokeObjectURL(this.json??""),this.json=window.$game.getStateAsJsonUrl(),this.render()}render(){const e=D.Ds(window.$game.state);(0,r.sY)(r.dy`<a download="${e}.json" href=${this.json}>save file</a>`,this)}}class oe extends HTMLElement{constructor(){super(...arguments),this.state=K({disabled:!D.on()},(()=>this.render())),this.handleClick=()=>{X((()=>Object.assign(this.state,{disabled:!0}))),window.$game.saveGsOnDB((()=>X((()=>Object.assign(this.state,{disabled:!D.on()})))))}}connectedCallback(){this.isConnected&&(D.F5(this),this.render())}updateDBState(e){"saved"!==e&&X((()=>Object.assign(this.state,{disabled:!D.on()})))}disconnectedCallback(){D.Qo(this)}render(){(0,r.sY)(r.dy`<button
        ?disabled=${this.state.disabled}
        class="btn-link"
        @click=${this.handleClick}
      >
        save
      </button>`,this)}}var se=t(8195);const ie=JSON.parse('{"N":{"0.5x":1000,"1x":500,"1.5x":333,"2x":250,"5x":100}}');var le=t(8096),de=t(5210),ce=t(6829);class pe extends HTMLElement{connectedCallback(){this.isConnected&&(window.$game.addObserver(this),this.render())}gameStateUpdated(){this.render()}disconnectedCallback(){window.$game.removeObserver(this)}}function he(e){const n=window.$appState.simOptions;return e.map((e=>{return(t=e[1])===n.duration||t===n.tickInterval?r.dy`<option selected value=${e[1]}>${e[0]}</option>`:r.dy`<option value=${e[1]}>${e[0]}</option>`;var t}))}customElements.get("sim-controls")||(customElements.define("sim-controls",class extends pe{constructor(){super(),this.attachShadow({mode:"open"})}render(){(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${ce.Z}
        </style>
        ${function(){const e=window.$game.state?.date.toLocaleDateString("en-GB",{dateStyle:"medium"})??"";return r.dy`
    <div class="game-date text-sm">
      <div><time>${e}</time></div>
      <div>${function(){switch(window.$game.state.flags.onGameEvent){case"draftStart":return"Draft";case"draft":return"Draft End";case"retiring":return"Retiring day";case"simRound":return"Post-match";case"openTradeWindow":return"transfer window start";case"openFreeSigningWindow":return"free agency start";case"seasonEnd":return"End of season";case"seasonStart":return"Start of season";case"updateContracts":return"re-signing";default:return"Idle"}}()}</div>
    </div>
  `}()}
        <play-sim .gName=${this.gName}></play-sim>
        <btn-sim-options></btn-sim-options>
      `,this.shadowRoot)}}),customElements.define("play-sim",class extends pe{constructor(){super(...arguments),this.state=K({},(()=>this.render())),this.handleCloseModal=()=>{this.simCloser?.()},this.handleSimEnd=e=>{"draftStart"===e.flags.onGameEvent?(0,a.WF)(`/${this.gName}/draft`):"updateContracts"===e.flags.onGameEvent?(0,a.WF)(`/${this.gName}/finances`):"retiring"===e.flags.onGameEvent?(0,a.WF)(`/${this.gName}/retiring`):"openFreeSigningWindow"===e.flags.onGameEvent?(0,a.WF)(`/${this.gName}/players?team=free+agent`):"openTradeWindow"===e.flags.onGameEvent&&(0,a.WF)(`/${this.gName}/trade`),window.$game.state=e,window.$game.saveGsOnDB()},this.handleSimTick=e=>{X((()=>Object.assign(this.state,{simGs:e})))},this.handlePlayClick=()=>{de.TV()||de.p9(window.$game.state)||!this.askPermissionToProceed()||(this.simCloser=de.m7(structuredClone(window.$game.state),this.handleSimTick,this.handleSimEnd,window.$appState.simOptions.duration),window.$appState.simOptions.duration=void 0,this.render())}}disconnectedCallback(){this.handleCloseModal(),super.disconnectedCallback()}renderSim(){return r.dy`
      <sff-modal .closeHandler=${this.handleCloseModal}>
        <h2 class="dig-label" slot="title">Simulating</h2>
        ${function(e){const n=e?.date.toLocaleDateString("en-GB",{dateStyle:"full"})??"";return r.dy`<div class="visual-sim" aria-live="polite">${n}</div>`}(this.state.simGs)}
      </sff-modal>
    `}getDisabledDescription(){const e=window.$game.state;if(e.flags.userDrafting)return"⚠ disabled until you draft a player";if(!e.flags.canSimRound){if("underMinTeamSize"===e.flags.whyIsSimDisabled)return"⚠ disabled your team has too few players";if("missingLineup"===e.flags.whyIsSimDisabled)return"⚠ disabled your team lineup is incomplete"}return""}renderDisabledDescription(){return r.dy`<p id="play-disabled-desc">
      ${this.getDisabledDescription()}
    </p>`}askPermissionToProceed(){return"updateContracts"!==window.$game.state?.flags.onGameEvent||confirm("your team will lose all not re-signed player, are you sure you want to proceed")}render(){const e=de.p9(window.$game.state);(0,r.sY)(r.dy`
        <button
          @click=${this.handlePlayClick}
          ?disabled=${e}
          class="btn btn--acc icon-bg-btn play-btn"
          aria-label="play the simulation"
          aria-describedby=${e?"play-disabled-desc":r.Ld}
        ></button>
        ${e?this.renderDisabledDescription():r.Ld}
        ${de.TV()?this.renderSim():r.Ld}
      `,this)}}),customElements.define("btn-sim-options",class extends pe{constructor(){super(...arguments),this.dialogRef=T(),this.handleOpenOptions=()=>{this.dialogRef.value.show()},this.handleCloseOptions=()=>{this.dialogRef.value.close()}}render(){var e;(0,r.sY)(r.dy`
        <button
          aria-label="open sim options"
          @click=${this.handleOpenOptions}
          class="btn sim-btn icon-bg-btn"
        ></button>
        <dialog
          ${j(this.dialogRef)}
          class="sim-ops-dialog bg-650"
          aria-labelledby="dig-ops-title"
        >
          <div class="dig-head">
            <h2 id="dig-ops-title" class="dig-title">Sim options</h2>
            <button
              autofocus
              @click=${this.handleCloseOptions}
              class="btn-close self-center"
              aria-label="close dialog"
            ></button>
          </div>
          ${e=this.handleCloseOptions,r.dy`
    <form class="sim-options" @submit=${n=>{n.preventDefault();const t=n.target.parentElement,a=t.querySelector("#js-sim-duration"),r=t.querySelector("#js-sim-speed");window.$appState.simOptions.duration=a.value,window.$appState.simOptions.tickInterval=Number(r.value),e()}}>
      <label for="js-sim-duration">choose a simulation duration</label>
      <select class="form-select" id="js-sim-duration">
        ${he(function(){const e=window.$game.state,n=!e.drafts.now.lottery.some((n=>n===e.userTeam)),t=e.eventQueue,a=[["until draft","draftStart"],[n?"until end of draft":"until your pick","draft"],["until free agency","openFreeSigningWindow"],["until transfer window","openTradeWindow"],["until next match","simRound"],["until retiring","retiring"],["until re-sign","updateContracts"]],r=t.find((e=>a.find((n=>n[1]===e.type)))),o=a.find((e=>e[1]===r?.type)),s=[["one day","oneDay"],...[["until end of season","seasonEnd"],["until start of season","seasonStart"]].filter((e=>(e=>t.some((n=>n.type===e)))(e[1])))];return o&&s.push(o),function(e){const n=window.$game.state.date,t=window.$game.state.eventQueue,a=e.map((e=>({days:(0,le.Ti)(n,t.find((n=>n.type===e[1]))?.date??n),op:e}))).sort(((e,n)=>e.days-n.days));return a.forEach((e=>{"oneDay"!==e.op[1]&&(e.op[0]+=1===e.days?" (1 day)":` (${e.days} days)`)})),a.map((e=>e.op))}(s)}())}
      </select>
      <label for="js-sim-speed">choose a simulation speed</label>
      <select class="form-select" id="js-sim-speed">
        ${he(Object.entries(ie.N))}
      </select>
      <button class="btn btn-rounded btn--acc">apply</button>
    </form>
  `}
        </dialog>
      `,this)}}));class ue extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.isConnected&&this.render()}render(){(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${se.Z}
        </style>
        <div class="ctn-team">
          ${function(){const e=window.$game.state.userTeam,[n,t]=R[e].colors,a=`stroke: ${n}`,o=`stroke: ${t}`;return r.dy`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      class="team-svg"
      role="img"
      aria-label="Lines with your Club colors"
    >
      <line style=${a} class="primary" x1="5" x2="60" y1="104" y2="-4" />
      <line style=${o} class="secondary" x1="16" x2="71" y1="104" y2="-4" />
      <line style=${a} class="primary" x1="27" x2="82" y1="104" y2="-4" />
      <line style=${o} class="secondary" x1="38" x2="93" y1="104" y2="-4" />
    </svg>
  `}()}
          <h2 class="bg-700 italic absolute leading-5">
            ${window.$game.state.userTeam}
          </h2>
        </div>
        <sim-controls .gName=${this.gName} class="cts"></sim-controls>
      `,this.shadowRoot)}}var me=t(1565);function ge(e,n){return r.dy`
    <a @click=${a.nt} href=${(0,a.Lo)(e)}>${n}</a>
  `}function fe(){return r.dy`
    <main class="cnt-404">
      <h1 class="cnt-404__head">Not Found (404)</h1>
      <p class="cnt-404__content">
        <span>sorry, the page you are looking for does not exist</span>
        <span>return to the ${ge("/","home page")}</span>
      </p>
    </main>
  `}customElements.get("menu-bar")||(customElements.define("menu-bar",ne),customElements.define("autosave-led",ae),customElements.define("menu-save-file",re),customElements.define("menu-save",oe),customElements.define("saved-signal",te)),customElements.get("sff-game-header")||customElements.define("sff-game-header",ue),customElements.get("sff-game-nav")||customElements.define("sff-game-nav",class extends pe{constructor(){super(),this.attachShadow({mode:"open"})}render(){const e=window.$game.state,n=this.gName,t=(e,n)=>ge(e,r.dy`<span>${n}</span>`);(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${me.Z}
        </style>
        <ul>
          <li class="home">${t("/","⌂ home")}</li>
          <li class="inbox">
            ${t(`/${n}/inbox`,r.dy`inbox${function(){const e=window.$game.state.mails.filter((e=>!e.opened)).length;return e>0?r.dy`<span class="badge">${e}</span>`:r.Ld}()}`)}
          </li>
          <li>${t(`/${n}/dashboard`,"dashboard")}</li>
          <li>${t(`/${n}/players`,"players")}</li>
          <li>${t(`/${n}/league`,"league")}</li>
          <li>${t(`/${n}/team`,"team")}</li>
          <li>${t(`/${n}/finances`,"finances")}</li>
          <li>${t(`/${n}/transactions`,"transactions")}</li>
          <li>${t(`/${n}/draft`,"draft")}</li>
          <li>${t(`/${n}/trade`,"trade")}</li>
          ${e.tradeOffers.length>0?r.dy`<li class="offers">
                ${t(`/${n}/trade-offers`,r.dy`offers${r.dy`<span class="badge"
    >${window.$game.state?.tradeOffers.length??0}</span
  >`}`)}
              </li>`:r.Ld}
          ${"retiring"===e.flags.onGameEvent?r.dy`<li>${t(`/${n}/retiring`,"retiring")}</li>`:r.Ld}
          <li>${t(`/${n}/game-manual`,"manual")}</li>
        </ul>
      `,this.shadowRoot)}});class be extends HTMLElement{constructor(){super(...arguments),this.basePath=`${window.$PUBLIC_PATH}:gName/`,this.pageTemplate=(e,n)=>r.dy`
      <sff-layout>
        <style>
          ${J.Z}
        </style>
        <sff-game-header .gName=${e} slot="in-header"></sff-game-header>
        <sff-game-nav .gName=${e} slot="in-nav"></sff-game-nav>
        <div slot="in-main">
          <menu-bar class="text-sm"></menu-bar>
          <div class="game-main">${n}</div>
        </div>
        <div slot="in-footer">${r.dy`
    <ul class="footer-infos">
      <li>
        <a
          href="https://github.com/RedAndBlu/space-fantasy-football#readme"
          target="_blank"
          >about</a
        >
      </li>
      <li>
        <a
          href="https://github.com/RedAndBlu/space-fantasy-football/issues"
          target="_blank"
          >Report an issue</a
        >
      </li>
    </ul>
  `} ${I()}</div>
      </sff-layout>
    `,this.render=(e,n)=>{const t=e.pathname.groups.gName;if(!window.$game.state&&t){const a=new Promise((a=>{window.$game.loadGameFromDB(e.pathname.groups.gName,(()=>a(this.pageTemplate(t,n))),(()=>a(fe())))}));return r.dy`${q(a,r.Ld)}`}return this.pageTemplate(t,n)}}disconnectedCallback(){this.router?.disconnect()}connectedCallback(){this.isConnected&&(this.router=new a.F0(this,[{path:`${this.basePath}dashboard`,content:e=>this.render(e,r.dy`<sff-dashboard></sff-dashboard>`)},{path:`${this.basePath}players`,content:e=>this.render(e,r.dy`<sff-players></sff-players>`)},{path:`${this.basePath}players/player`,content:e=>this.render(e,r.dy`<sff-player></sff-player>`)},{path:`${this.basePath}league`,content:e=>this.render(e,r.dy`<sff-league></sff-league>`)},{path:`${this.basePath}inbox`,content:e=>this.render(e,r.dy`<sff-inbox-page></sff-inbox-page>`)},{path:`${this.basePath}team`,content:e=>this.render(e,r.dy`<sff-team></sff-team>`)},{path:`${this.basePath}finances`,content:e=>this.render(e,r.dy`<sff-team-finances></sff-team-finances>`)},{path:`${this.basePath}transactions`,content:e=>this.render(e,r.dy`<sff-transactions></sff-transactions>`)},{path:`${this.basePath}draft`,content:e=>this.render(e,r.dy`<sff-draft></sff-draft>`)},{path:`${this.basePath}retiring`,content:e=>this.render(e,r.dy`<retiring-players></retiring-players>`)},{path:`${this.basePath}trade`,content:e=>this.render(e,r.dy`<sff-trade></sff-trade>`)},{path:`${this.basePath}trade-offers`,content:e=>this.render(e,r.dy`<sff-trade data-offers=""></sff-trade>`)},{path:`${this.basePath}game-manual`,content:e=>this.render(e,r.dy`<sff-game-manual></sff-game-manual>`)}],fe()))}}var ve=t(9398),ye=t(760);const we=[{full:"team",abbr:"team",data:e=>e.teamName},{full:"played",abbr:"pl",data:e=>e.played},{full:"won",abbr:"w",data:e=>e.won},{full:"drawn",abbr:"d",data:e=>e.drawn},{full:"lost",abbr:"l",data:e=>e.lost},{full:"goals for",abbr:"GF",data:e=>e.goalsFor},{full:"goals against",abbr:"GA",data:e=>e.goalsAgainst},{full:"goal difference",abbr:"GD",data:e=>e.goalsFor-e.goalsAgainst},{full:"points",abbr:"pts",data:e=>e.points}],xe=we.filter((e=>"GF"!==e.abbr&&"GA"!==e.abbr&&"GD"!==e.abbr));class $e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.isConnected&&(window.$game.addObserver(this),this.render())}disconnectedCallback(){window.$game.removeObserver(this)}static get observedAttributes(){return["data-mode"]}attributeChangedCallback(e,n){"data-mode"===e&&null!==n&&this.render()}gameStateUpdated(){this.render()}renderHeads(){return r.dy`
      <th scope="col"><abbr title="Position">Pos.</abbr></th>
      ${("compact"===this.dataset.mode?xe:we).map((e=>{return"large"===this.dataset.mode&&"GF"!==(n=e.abbr)&&"GA"!==n&&"GD"!==n?r.dy`<th scope="col">${e.full}</th>`:r.dy`<th scope="col"><abbr title=${e.full}>${e.abbr}</abbr></th>`;var n}))}
    `}renderData(e){return("compact"===this.dataset.mode?xe:we).map((n=>{const t=n.data(e);return r.dy`<td>
        ${"team"===n.full&&"string"==typeof t?ge(`team?team=${t}`,t):t}
      </td>`}))}renderRows(){const e=window.$game.state?.userTeam,n=this.dataset.season??"now";return new ve.EL(L.D2.getSeasonMatches(window.$game.state,n)).getSortedTable().map(((n,t)=>r.dy`<tr class=${n.teamName===e?"user-row":""}>
        <td>${t+1}</td>
        ${this.renderData(n)}
      </tr>`))}render(){(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${ye.Z}
        </style>
        <table
          class=${"compact"===this.dataset.mode?"compact":"tb-complete"}
        >
          <caption>
            <h2>🏆 League Table</h2>
          </caption>
          <thead>
            <tr>
              ${this.renderHeads()}
            </tr>
          </thead>
          <tbody class="tby">
            ${this.renderRows()}
          </tbody>
        </table>
      `,this.shadowRoot)}}var _e=t(7772);const ke=y(class extends w{constructor(e){var n;if(super(e),1!==e.type||"class"!==e.name||(null===(n=e.strings)||void 0===n?void 0:n.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((n=>e[n])).join(" ")+" "}update(e,[n]){var t,a;if(void 0===this.nt){this.nt=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in n)n[e]&&!(null===(t=this.st)||void 0===t?void 0:t.has(e))&&this.nt.add(e);return this.render(n)}const o=e.element.classList;this.nt.forEach((e=>{e in n||(o.remove(e),this.nt.delete(e))}));for(const e in n){const t=!!n[e];t===this.nt.has(e)||(null===(a=this.st)||void 0===a?void 0:a.has(e))||(t?(o.add(e),this.nt.add(e)):(o.remove(e),this.nt.delete(e)))}return r.Jb}});class Se extends pe{constructor(){super(),this.handleOpenMail=e=>{this.hasAttribute("data-compact")?(0,a.WF)(`/${window.$game.state.name}/inbox`):(e.opened=!0,this.mail=e,window.$game.state=window.$game.state)},this.handleCloseMail=()=>{this.mail=void 0,this.render()},this.onDeleteMail=e=>{if(!confirm("are you sure do you want to delete this email"))return;const n=window.$game.state;n.mails=n.mails.filter((n=>e.id!==n.id)),window.$game.state=n},this.attachShadow({mode:"open"})}gameStateUpdated(){this.mail&&(this.mail=window.$game.state?.mails.find((e=>this.mail.id===e.id))),super.gameStateUpdated()}mailEntries(){const e=window.$game.state,n=this.hasAttribute("data-compact")?e.mails.slice(0,6):e.mails,t=e=>n=>n.target instanceof HTMLButtonElement?this.onDeleteMail(e):this.handleOpenMail(e);return n.map((e=>r.dy`<li
          class=${ke({"mail--new":!e.opened})}
          @click=${t(e)}
        >
          <div>${e.sender}</div>
          <div>${e.subject}</div>
          ${this.hasAttribute("data-compact")?r.Ld:(e=>r.dy`
      <div class="date-cell">${e.sendDate}</div>
      <div class="close-cell">
        <button class="btn-close w-5 h-5" aria-label="delete mail"></button>
      </div>
    `)(e)}
        </li>`))}render(){var e,n;(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${_e.Z}
        </style>
        <h2>📬 Inbox</h2>
        <ul>
          ${this.mailEntries()}
        </ul>
        ${this.mail&&(e=this.mail,n=this.handleCloseMail,r.dy`
    <sff-modal .closeHandler=${n}>
      <div slot="title" class="mail-info dig-label">
        <h2>${e.sender}</h2>
        <span>${e.sendDate}</span>
      </div>
      <article class="open-mail max-w-prose">
        <p>${e.subject}</p>
        <p>${e.content}</p>
      </article>
    </sff-modal>
  `)}
      `,this.shadowRoot)}}var Ce=t(7473),Ae=t(2823);const Te=t.p+"47883857750cb50ac91e.svg";var Ee=t(8146),Pe=t(5670);customElements.get("sff-fixtures")||customElements.define("sff-fixtures",class extends pe{constructor(){super(),this.attachShadow({mode:"open"})}render(){const e=Ee.MM().slice(0,8),n=window.$game.state.userTeam;(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${Pe.Z}
        </style>
        <h3>Fixtures</h3>
        <ul>
          ${e.length>0?e.map((e=>function(e,n){const t=e=>n===e?"font-bold":"";return r.dy`
    <li>
      <div>
        <span class=${`pr-2 ${t(e.home)}`}>${e.home}</span>
        -
        <span class=${`pl-2 ${t(e.away)}`}>${e.away}</span>
      </div>
      <span>${e.away===n?"away":"home"}</span>
      <time>${new Date(e.date).toLocaleDateString()}</time>
    </li>
  `}(e,n))):r.dy`<li>nothing to do</li>`}
        </ul>
      `,this.shadowRoot)}});class je extends pe{connectedCallback(){this.isConnected&&(document.title=`${window.$game.state?.userTeam} club dashboard - Space Fantasy Football`,super.connectedCallback())}render(){(0,r.sY)(r.dy`
        <style>
          ${Ae.Z}
        </style>
        <div class="bg-grid1"></div>
        <dashboard-next-match role="article"></dashboard-next-match>
        <sff-fixtures role="article"></sff-fixtures>
        <sff-inbox data-compact></sff-inbox>
        <league-table data-mode="compact"></league-table>
      `,this)}}class Me extends pe{resultSymbol(e,n){if(n&&n.result){const t=ve._4(n.result);return n.home===e?t.home.state:t.away.state}return"-"}historyBox(e,n){const t=this.resultSymbol(e,n);return r.dy`
      <div class="history-box ${t}">
        <abbr aria-label=${t} title=${t}>
          <strong class="rst-symbol">${t[0]}</strong>
        </abbr>
      </div>
    `}teamBox(e,n){return r.dy`
      <div class="team">
        <div>
          <h3>${e}</h3>
          <img
            width="150"
            height="150"
            class="team-logo"
            src=${Te}
            alt="a red planet"
          />
        </div>
        <div class="history-boxes" aria-label="previous games results">
          ${Array.from({length:5},((t,a)=>this.historyBox(e,n[a])))}
        </div>
      </div>
    `}renderNextMarch(e){const n=window.$game.state,t=e?.home??"",a=e?.away??"",o=L.D2.getSeasonMatches(n,"now").filter((e=>e.result)),s=o.filter((e=>Ce.rG(e,t))).slice(-5),i=o.filter((e=>Ce.rG(e,a))).slice(-5),l=e?`(${(0,le.Ti)(e.date,n.date)} days)`:"";return r.dy`
      <h2>Next Game</h2>
      <p>
        <time>
          ${e?.date.toLocaleDateString("en-US",{dateStyle:"full"})}
        </time>
        ${l}
      </p>
      <div class="teams">
        ${this.teamBox(t,s)} ${this.teamBox(a,i)}
      </div>
    `}renderUserNextMatch(){const e=window.$game.state,n=L.D2.getNextRound(e);return void 0!==n?this.renderNextMarch(L.D2.getRound(e,n,"now")?.find((n=>Ce.rG(n,e.userTeam)))):this.renderNextMarch()}render(){(0,r.sY)(r.dy`${this.renderUserNextMatch()}`,this)}}var Oe=t(4587);class De extends HTMLElement{connectedCallback(){this.isConnected&&(document.title=`${window.$game.state?.userTeam} club inbox - Space Fantasy Football`,this.render())}render(){(0,r.sY)(r.dy`
        <style>
          ${Oe.Z}
        </style>
        <sff-inbox></sff-inbox>
      `,this)}}var Le=t(3219),Fe=t(2178);class Re extends HTMLElement{constructor(){super(),this.scrollToRound=e=>{requestAnimationFrame((()=>{e instanceof HTMLElement&&(e.parentElement.scrollTop=e.offsetTop)}))},this.attachShadow({mode:"open"})}connectedCallback(){this.isConnected&&(window.$game.addObserver(this),this.render())}disconnectedCallback(){window.$game.removeObserver(this)}gameStateUpdated(){this.render()}render(){const e=L.D2.getSeasonRounds(window.$game.state,"now"),n=L.D2.getNextRound(window.$game.state);(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${Fe.Z}
        </style>
        <h2>📆 League Fixtures</h2>
        <div class="rounds">
          ${e?.map(((e,t)=>r.dy`
                <article
                  class="round ${n===t?"next-round":""}"
                  ${n===t?j(this.scrollToRound):r.Ld}
                >
                  <h3>Matchday ${t+1}</h3>
                  <ul class="round-fixtures">
                    ${e.map((e=>function(e){const n=window.$game.state.userTeam;return r.dy`
    <li class=${n===e.away||n===e.home?"user-fixture":""}>
      <span>${e.home}</span>
      <span class="result"
        >${e.result?.home??""} - ${e.result?.away??""}</span
      >
      <span>${e.away}</span>
    </li>
  `}(e)))}
                  </ul>
                </article>
              `))}
          <div></div>
        </div>
      `,this.shadowRoot)}}customElements.get("league-fixtures")||customElements.define("league-fixtures",Re);class Ne extends HTMLElement{constructor(){super(...arguments),this.mql=window.matchMedia("screen and (max-width: 52rem)"),this.tableMode="large",this.updateTableMode=()=>{this.tableMode=this.mql.matches?"abbr":"large",this.render()}}connectedCallback(){this.isConnected&&(this.mql.addEventListener("change",this.updateTableMode),this.updateTableMode())}disconnectedCallback(){this.mql.removeEventListener("change",this.updateTableMode)}render(){(0,r.sY)(r.dy`
        <style>
          ${Le.Z}
        </style>
        <league-table data-mode=${this.tableMode}></league-table>
        <league-fixtures></league-fixtures>
      `,this)}}const Ie=(e,n,t)=>{const a=new Map;for(let r=n;r<=t;r++)a.set(e[r],r);return a},Be=y(class extends w{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}ht(e,n,t){let a;void 0===t?t=n:void 0!==n&&(a=n);const r=[],o=[];let s=0;for(const n of e)r[s]=a?a(n,s):s,o[s]=t(n,s),s++;return{values:o,keys:r}}render(e,n,t){return this.ht(e,n,t).values}update(e,[n,t,a]){var o;const s=(e=>e._$AH)(e),{values:i,keys:l}=this.ht(n,t,a);if(!Array.isArray(s))return this.ut=l,i;const d=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],c=[];let p,h,u=0,f=s.length-1,y=0,w=i.length-1;for(;u<=f&&y<=w;)if(null===s[u])u++;else if(null===s[f])f--;else if(d[u]===l[y])c[y]=g(s[u],i[y]),u++,y++;else if(d[f]===l[w])c[w]=g(s[f],i[w]),f--,w--;else if(d[u]===l[w])c[w]=g(s[u],i[w]),m(e,c[w+1],s[u]),u++,w--;else if(d[f]===l[y])c[y]=g(s[f],i[y]),m(e,s[u],s[f]),f--,y++;else if(void 0===p&&(p=Ie(l,y,w),h=Ie(d,u,f)),p.has(d[u]))if(p.has(d[f])){const n=h.get(l[y]),t=void 0!==n?s[n]:null;if(null===t){const n=m(e,s[u]);g(n,i[y]),c[y]=n}else c[y]=g(t,i[y]),m(e,s[u],t),s[n]=null;y++}else v(s[f]),f--;else v(s[u]),u++;for(;y<=w;){const n=m(e,c[w+1]);g(n,i[y]),c[y++]=n}for(;u<=f;){const e=s[u++];null!==e&&v(e)}return this.ut=l,b(e,c),r.Jb}});var ze=t(7602),He=t(5233),Ze=t(4101);let Ue,Ge=[];function We(e){const n=new URLSearchParams(location.search);for(const[t,a]of Object.entries(e))"string"==typeof a?n.set(t,a):a?.toString?n.set(t,a.toString()):null==a&&n.delete(t);history.replaceState({},"","?"+n.toString()),Ge.forEach((e=>e.onQueryStringUpdate()))}function Ye(e){Ge.push(e)}function qe(e){Ge=Ge.filter((n=>e!==n))}function Je(){const e=function(){const e={};for(const[n,t]of new URLSearchParams(location.search))e[n]=t;return e}();return{size:e.size?Number(e.size):25,at:e.at?Number(e.at):0,sortBy:e.sortBy??null,sortAsc:!!e.sortAsc&&JSON.parse(e.sortAsc),team:e.team??null,pos:e.pos??null,minAge:e.minAge?Number(e.minAge):null,maxAge:e.maxAge?Number(e.maxAge):null,search:e.search??null}}function Qe(e){e>=0&&e<Ue.players.length&&We({...Ue.state,at:e})}function Ve(e,n){const t=window.$game.state;e in ze.sR?He.ZV(e,Ue.players,n):ze.HG.includes(e)?He.S1(e,Ue.players,n):He.Ex(e,Ue.players,n,t)}function Ke(e){const n=window.$game.state,t=e.search?new RegExp(e.search,"gi"):null;return Object.values(n.players).filter((a=>"draft"!==a.team&&(!e.team||a.team===e.team)&&(!e.pos||a.position===e.pos)&&(!e.minAge||(0,ze.Ay)(a,n.date)>=e.minAge)&&(!e.maxAge||(0,ze.Ay)(a,n.date)<=e.maxAge)&&(!t||t.test(a.name))))}function Xe(e){const n=Ue.state;Ue.players=Ke(e);const t=n.at>=Ue.players.length?Math.trunc(((Ue.players.length||1)-1)/n.size)*n.size:n.at;We({...n,...e,at:t,sortBy:null,sortAsc:!1})}class en extends HTMLElement{connectedCallback(){this.isConnected&&(document.title="Players overview - Space Fantasy Football",function(){const e=Je();Ue={state:e,players:Ke(e),teams:["free agent",...Object.keys(window.$game.state.teams)]},Ue.state.sortBy&&Ve(Ue.state.sortBy,Ue.state.sortAsc)}(),Ye(this),window.$game.addObserver(this),this.gb=Ue,this.render())}disconnectedCallback(){this.gb===Ue&&(Ue=void 0),window.$game.removeObserver(this),qe(this)}onQueryStringUpdate(){Ue.state=Je(),this.render()}gameStateUpdated(){Ue.players=Ke(Ue.state),Ue.state.sortBy&&Ve(Ue.state.sortBy,Ue.state.sortAsc),this.render()}render(){(0,r.sY)(r.dy`
        <style>
          ${Ze.Z}
        </style>
        ${function(){const e=T();return r.dy`
    <div class="cnt-filters">
      <button class="btn btn-sml filter-btn" @click=${()=>e.value?.show()}>
        💡 Filter features
      </button>
      <button class="btn btn-sml filter-btn" @click=${()=>Xe({team:null,pos:null,minAge:null,maxAge:null})}>
        ⌫ Clear filters
      </button>
      <dialog
        class="filters-dialog"
        ${j(e)}
        aria-labelledby="filters-dialog-title"
      >
        <div class="dig-head">
          <h2 class="dig-title" id="filters-dialog-title">Customize filters</h2>
          <button
            autofocus
            class="btn-close"
            @click=${()=>e.value?.close()}
            aria-label="close"
          ></button>
        </div>
        ${r.dy`
    <form
      method="dialog"
      id="js-filters"
      @submit=${e=>{const n=e.currentTarget;Xe({team:n.teams.value||null,pos:n.pos.value||null,minAge:n["min-age"].value||null,maxAge:n["max-age"].value||null,search:Ue.state.search})}}
      aria-label="filter players"
    >
      <select class="form-select" name="teams" aria-label="filter by team">
        <option selected value="">Filter by team</option>
        ${Ue.teams.map((e=>r.dy`<option>${e}</option>`))}
      </select>
      <select class="form-select" name="pos" aria-label="filter by position">
        <option selected value="">Filter by position</option>
        ${ze.kd.map((e=>r.dy`<option>${e}</option>`))}
      </select>
      <div class="cnt-age-range">
        age range ${nn("min-age","min","minimum age")} to
        ${nn("max-age","max","maximum age")}
      </div>
      <button class="btn btn-rounded">Apply filters</button>
    </form>
  `}
      </dialog>
      <div class="rst-filters">
        <h2>Filters:</h2>
        ${function(){const{minAge:e,maxAge:n,team:t,pos:a}=Ue.state,o=(e,n)=>r.dy`<span class="filter-rst">${e} ${n}</span>`;return r.dy`<output form="js-filters">
    ${o("Resulting players:",Ue.players.length)}
    ${e?o("Age ≥",e):r.Ld}
    ${n?o("Age ≤",n):r.Ld}
    ${t?o("Team:",t):r.Ld}
    ${a?o("Position:",a):r.Ld}
  </output>`}()}
      </div>
    </div>
  `}()}
        <div class="tb-controls">${function(){const e=Ue.state,n=Math.ceil((Ue.players.length??0)/e.size),t=Math.trunc(e.at/e.size)+1,a=Array.from({length:8},((e,n)=>2**n*25));return r.dy`
    <div class="ctl-tb-size">
      <button
        class="btn btn-sml bg-primary-300 rounded-md"
        ?disabled=${1===t}
        @click=${()=>Qe(e.at-e.size)}
        aria-label="previous page"
      >
        <abbr title="previous">prev</abbr>
      </button>
      <span class="tb-pos"> ${t} / ${n}</span>
      <button
        class="btn btn-sml bg-primary-300 rounded-md"
        ?disabled=${t===n}
        @click=${()=>Qe(e.at+e.size)}
        aria-label="next page"
      >
        next
      </button>
      <label class="tb-entries">
        Show:
        <select class="form-select" id="sizes" @change=${e=>function(e){if(e!==Ue.state.size){const n=Math.trunc(Ue.state.at/e)*e;We({...Ue.state,size:e,at:n})}}(Number(e.target.value))}>
          ${a.map((n=>r.dy`<option ?selected=${e.size===n}>${n}</option>`))}
        </select>
        entries
      </label>
    </div>
    <label class="hide">Search</label>
    <input
      id="search-player"
      class="form-control"
      type="search"
      @input=${e=>Xe({...Ue.state,search:e.target.value||null})}
      placeholder="Search"
      value=${e.search??""}
    />
  `}()}</div>
        <players-table></players-table>
      `,this)}}function nn(e,n,t){return r.dy`
    <input
      class="form-number age-input"
      name=${e}
      type="number"
      min="15"
      max="60"
      step="1"
      placeholder=${n}
      aria-label=${t}
    />
  `}class tn extends HTMLElement{constructor(){super(...arguments),this.onHeadClick=e=>{const n={by:Ue.state.sortBy,ascending:Ue.state.sortAsc};Ve(e,He.mJ(n,e)),We({...Ue.state,sortBy:n.by,sortAsc:n.ascending})}}connectedCallback(){this.isConnected&&(window.$game.addObserver(this),Ye(this),this.render())}disconnectCallback(){qe(this),window.$game.removeObserver(this)}disconnectedCallback(){qe(this),window.$game.removeObserver(this)}gameStateUpdated(){this.render()}onQueryStringUpdate(){this.render()}sortOrder(e){return Ue.state.sortBy===e?Ue.state.sortAsc?"ascending":"descending":""}headBtn(e,n){const t=this.sortOrder(e),a="ascending"===t||""===t?"descending":"ascending";return r.dy`
      <button class="btn-txt ${t}" @click=${()=>this.onHeadClick(e)} aria-label="sort ${a}">
        ${n}
      </button>
    `}renderHead(){const e=e=>r.dy`<abbr title=${e}>${e.substring(0,3)}.</abbr>`;return r.dy`<tr>
      <th class="${this.sortOrder("name")}">${this.headBtn("name","name")}</th>
      <th class="${this.sortOrder("position")}">
        ${this.headBtn("position",e("position"))}
      </th>
      <th class="${this.sortOrder("rating")}">
        ${this.headBtn("rating",e("rating"))}
      </th>
      <th class="${this.sortOrder("birthday")}">
        ${this.headBtn("birthday","age")}
      </th>
      <th class="${this.sortOrder("improvability")}">
        ${this.headBtn("improvability",e("improvability"))}
      </th>
      ${Object.keys(ze.sR).map((n=>{const t=this.headBtn(n,e(n));return r.dy`<th class="${this.sortOrder(n)}">${t}</th>`}))}
    </tr>`}render(){const{at:e,size:n}=Ue.state;(0,r.sY)(r.dy`
        <table>
          <thead>
            ${this.renderHead()}
          </thead>
          <tbody>
            ${function(e){const n=window.$game.state;return Be(e,(e=>e.id),(e=>r.dy`<tr>
        <td>${ge(`players/player?id=${e.id}`,e.name)}</td>
        <td class="plr-pos">${e.position}</td>
        ${function(e,n){return an(Ee.qz(e,n),Ee.dT(e,n))}(e,n)}
        <td>${(0,ze.Ay)(e,n.date)}</td>
        ${function(e,n){const t=n.teams[n.userTeam];return an(Ee.Ud(e,t),Ee.jC(e,t))}(e,n)}
        ${Object.keys(ze.sR).map((n=>r.dy`<td>${Math.round((0,ze.rW)(e,n))}</td>`))}
      </tr>`))}(Ue.players.slice(e,e+n))}
          </tbody>
        </table>
      `,this)}}function an(e,n){const t=`border-color: hsl(${120*n}deg 100% 60%)`;return r.dy`
    <td>
      <div class="rtg-cell" style=${t}><span>${e}</span></div>
    </td>
  `}var rn=t(4104);const on=t.p+"6dd88c4a3b0b9366e64d.svg";var sn=t(5565);class ln extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.isConnected&&(window.$game.addObserver(this),this.render())}disconnectedCallback(){window.$game.removeObserver(this)}gameStateUpdated(){this.render()}render(){(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${sn.Z}
        </style>
        <section>
          <h2>Transfer History</h2>
          ${function(e){const n=Ee.Sb(e);if(!n)return;const t=n.draft;return r.dy`
    <ul class="history-list">
      ${t?r.dy`<li>Draft: ${t.when} - pick ${t.n} by ${t.team}</li>`:r.Ld}
      ${function(e,n){return function(e){const n=[],t=({key:e,i:t},a)=>n.push({when:new Date(a).getTime(),i:t,key:e});return e.trades.forEach((({when:e},n)=>t({i:n,key:"trades"},e))),e.signings.forEach((({when:e},n)=>t({i:n,key:"signings"},e))),e.renewals.forEach((({when:e},n)=>t({i:n,key:"renewals"},e))),n.sort(((e,n)=>e.when-n.when))}(e).map((t=>"trades"===t.key?function(e,n){const t=e.sides[0].plIds.includes(n),a=t?e.sides[0].team:e.sides[1].team,o=t?e.sides[1].team:e.sides[0].team;return r.dy`<li>
    On ${new Date(e.when).toDateString()} was traded by ${a} to ${o}
  </li>`}(e[t.key][t.i],n):"signings"===t.key?dn(e[t.key][t.i],!1):dn(e[t.key][t.i],!0)))}(n.transactions,e)}
    </ul>
  `}(this.dataset.plId??"")}
        </section>
      `,this.shadowRoot)}}function dn(e,n){const t=n?"Re-signed":"Signed";return r.dy`<li>
    On ${new Date(e.when).toDateString()} ${t} for ${e.team}
  </li>`}var cn=t(2272),pn=t(3697);class hn extends HTMLElement{constructor(){super(),this.result="pending",this.gs=window.$game.state,this.user=this.gs.teams[this.gs.userTeam],this.userPayroll=cn.SZ.getWagesAmount({gs:this.gs,t:this.user}),this.onOffer=()=>{if("successful"===this.result)return;const e=this.props?.plr,n=Number(this.shadowRoot.querySelector("#wage").value),t=Number(this.shadowRoot.querySelector("#length").value);e&&t>=1&&t<5&&this.trySignPlayer()(e,n,t)?this.result="successful":this.result="rejected",this.render()},this.attachShadow({mode:"open"})}connectedCallback(){this.isConnected&&this.render()}trySignPlayer(){return this.props.newSign?Ee.eT:Ee.qW}resultMessage(){return"rejected"===this.result?"The offer was rejected":"successful"===this.result?"The offer was accepted":""}renderForm(){const e=this.props.newSign?Math.floor((0,le.uh)(ze.Oo-this.userPayroll,ze.dn,ze.ko)):ze.ko;return r.dy`
      <form class="form-neg" @submit=${e=>e.preventDefault()}>
        <label class="hide" for="wage">wage offer</label>
        <input
          class="form-number"
          id="wage"
          type="number"
          min=${ze.dn}
          max=${e}
          step="100"
          placeholder=${`wage request ${Ee.Eq(this.props.plr)}₡`}
        />
        <label class="hide" for="length">contract duration</label>
        <input
          class="form-number"
          id="length"
          type="number"
          min="1"
          max="4"
          step="1"
          placeholder="contract duration"
        />
        <button
          class="btn btn-rounded btn--acc"
          @click=${this.onOffer}
          id="btn-offer"
        >
          Make Offer
        </button>
        <output class=${this.result} for="btn-offer"
          >${this.resultMessage()}</output
        >
      </form>
    `}render(){this.props&&(r.dy`<output class=${this.result} for="btn-offer"
      >${this.resultMessage()}</output
    >`,(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>

          ${pn.Z}
        </style>
        <sff-modal .closeHandler=${this.props?.onClose}>
          <h3 class="dig-label" slot="title">
            Negotiating with ${this.props?.plr.name}
          </h3>
          ${"successful"===this.result?r.dy`<output class=${this.result} for="btn-offer"
                >${this.resultMessage()}</output
              >`:this.renderForm()}
        </sff-modal>
      `,this.shadowRoot))}}customElements.get("player-history")||customElements.define("player-history",ln),customElements.get("negotiate-contract")||customElements.define("negotiate-contract",hn);class un extends pe{connectedCallback(){this.isConnected&&(document.title=`Player overview ${mn()?.name} - Space Fantasy Football`,super.connectedCallback())}render(){const e=mn();(0,r.sY)(r.dy`
        <style>
          ${rn.Z}
        </style>
        ${e?function(e){return r.dy`
    <section class="plr-info">
      <div class="cnt-plr-img">
        <h3 class="plr-info__name">${e?.name}</h3>
        <img class="plr-img" src=${on} alt="a football player" />
      </div>
      ${function(e){const n=window.$game.state,t=n.teams[n.userTeam],a=L.D2.getContract(window.$game.state,e),o=new Intl.NumberFormat("en-GB").format(a?.wage??0),s=a?.duration,i=e=>`background-color: ${e}`,l=`hsl(${120*Ee.dT(e,n)}deg 100% 60%)`,d=`hsl(${120*Ee.jC(e,t)}deg 100% 60%)`,c=n.teams[e.team]?`../team?team=${e.team}`:"",p=n.injuries[e.id];return r.dy`
    <div class="cnt-plr-high">
      <div class="plr-high">
        <div>Position</div>
        <div class="plr-high__val">${e.position.toUpperCase()}</div>
      </div>
      <div class="plr-high">
        <div>Rating</div>
        <div class="plr-high__val-stl" style=${i(l)}>
          ${Ee.qz(e,n)}
        </div>
      </div>
      <div class="plr-high">
        <div>
          <abbr title="Improvability">Improv.</abbr>
        </div>
        <div class="plr-high__val-stl" style=${i(d)}>
          ${Ee.Ud(e,t)}
        </div>
      </div>
      <div class="plr-high">
        <div>Team</div>
        <div>${c?ge(c,e.team):e.team}</div>
      </div>
    </div>
    <div class="plr-bio text-sm">
      <div>
        ${(0,ze.Ay)(e,n.date)} y. o. ${new Date(e.birthday).toDateString()}
      </div>
      <div>${(0,ze.Si)(e)} cm</div>
      <div>Preferred foot ${e.foot}</div>
      <div>wage: ${o}₡</div>
      <div>contract: ${s?`length ${s} seasons`:"free"}</div>
      ${p?r.dy`<div>
            injured for ${(0,le.Ti)(n.date,new Date(p.when))} days 🚑
          </div>`:r.Ld}
    </div>
  `}(e)}
      <sign-new-player data-plr-id=${e.id}></sign-new-player>
    </section>
    <div class="plr-skills">${e&&function(e){return Object.keys(ze.sR).map((n=>function(e,n){return r.dy`
    <ul>
      <li>${fn((0,ze.rW)(e,n))} ${n}</li>
      <ul>
        ${ze.sR[n].map((n=>r.dy`<li>
              ${fn((0,ze.PU)(e,n))} ${function(e){switch(e){case"defensivePositioning":return r.dy`<abbr title="defensive positioning">Def. positioning</abbr>`;case"offensivePositioning":return r.dy`<abbr title="offensive positioning">Off. positioning</abbr>`;default:return e}}(n)}
            </li>`))}
      </ul>
    </ul>
  `}(e,n)))}(e)}</div>
    <player-history data-pl-id=${e?.id??""}></player-history>
  `}(e):r.Ld}
      `,this)}}function mn(){const e=new URLSearchParams(location.search).get("id");return window.$game.state.players[e??""]}class gn extends pe{constructor(){super(...arguments),this.negotiating=!1,this.closeNegotiation=()=>{this.negotiating=!1,this.render()},this.openNegotiation=()=>{this.negotiating=!0,this.render()}}render(){const e=window.$game.state,n=e.players[this.dataset.plrId??""],t=Ee.PG(e,3*(0,ze.Fi)({gs:e,t:e.teams[e.userTeam],p:n})/4,n);console.log(t,n.team),(0,r.sY)(r.dy`
        <div class="cnt-plr-sign">
          <button
            class="btn btn--acc sign-btn"
            ?disabled=${!t.can}
            @click=${t.can?this.openNegotiation:r.Ld}
            title=${t.can?"Negotiate contract":t.why}
            aria-label=${t.can?"Negotiate contract":t.why}
          >
            Negotiate
          </button>
          ${this.negotiating?r.dy`<negotiate-contract
                .props=${{plr:n,onClose:this.closeNegotiation,newSign:!0}}
              ></negotiate-contract>`:r.Ld}
        </div>
      `,this)}}function fn(e){const n=bn(e),t=`background-color: ${n.color}`;return r.dy`<span
    class="skill-score w-7 text-center font-bold rounded-md"
    style=${t}
    >${n.score}</span
  >`}function bn(e){const n=Math.round(e);return{color:`hsl(${e/ze.ef*120}deg 100% 60%)`,score:n?String(n).padStart(2,"0"):""}}const vn=y(class extends w{constructor(e){var n;if(super(e),1!==e.type||"style"!==e.name||(null===(n=e.strings)||void 0===n?void 0:n.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((n,t)=>{const a=e[t];return null==a?n:n+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`}),"")}update(e,[n]){const{style:t}=e.element;if(void 0===this.vt){this.vt=new Set;for(const e in n)this.vt.add(e);return this.render(n)}this.vt.forEach((e=>{null==n[e]&&(this.vt.delete(e),e.includes("-")?t.removeProperty(e):t[e]="")}));for(const e in n){const a=n[e];null!=a&&(this.vt.add(e),e.includes("-")?t.setProperty(e,a):t[e]=a)}return r.Jb}});var yn=t(9702),wn=t(3476),xn=t(9840);class $n extends HTMLElement{constructor(){super(),this.onSpotClick=e=>{const n=window.$game.state,t=this.getAttribute("data-pl-id");if(this.onDone?.(),t&&n.players[t]){const a=n.teams[n.userTeam].formation?.lineup.find((e=>e.plID===t));a?.plID&&(a.plID=e.plID),e.plID=t,(0,cn.ni)(n.teams[n.userTeam]),window.$game.state=n}},this.attachShadow({mode:"open"})}connectedCallback(){this.isConnected&&this.render()}render(){const e=window.$game.state.players[this.getAttribute("data-pl-id")??""];(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${xn.Z}
        </style>
        <sff-modal .closeHandler=${this.onDone}>
          <h2 slot="title" class="dig-label">
            Positioning <span class="sub-name">${e?.name}</span>
            <span class="sub-pos">${e?.position}</span>
          </h2>
          ${function(e){const n=window.$game.state,t=n.teams[n.userTeam].formation?.lineup;return t?r.dy`
      <div class="pitch">
        ${t.map((t=>{const a=n.players[t.plID??""],o={left:Ln(t.sp,!0)/Tn*100+"%",top:Fn(t.sp,!0)/En*100+"%"};return r.dy`
            <button
              style=${vn(o)}
              class="spot"
              @click=${()=>e(t)}
              aria-label="add to ${t.sp.pos}"
            >
              <span class="plr-name">${a?a.name:""}</span>
              <span class="spot-name">${t.sp.pos}</span>
            </button>
          `}))}
      </div>
    `:r.dy`<div class="pitch"></div>`}(this.onSpotClick)}
        </sff-modal>
      `,this.shadowRoot)}}var _n=t(1889),kn=t(5285);const Sn=t.p+"b78b6be28ee4434e54ab.png",Cn=t.p+"371bc2d516c9f99d0809.svg",An=t.p+"8df570066e1d5bfc4823.svg";customElements.get("change-spot")||customElements.define("change-spot",$n);const Tn=74,En=52,Pn=Tn+4,jn=En+4;class Mn extends pe{constructor(){super(...arguments),this.updateLineup={open:!1},this.team=function(){const e=new URLSearchParams(location.search).get("team");return e?window.$game.state.teams[e]:void 0}()??window.$game.state.teams[window.$game.state.userTeam],this.closeUpdateLineup=()=>{this.updateLineup={open:!1},this.render()},this.openUpdateLineup=e=>{this.updateLineup={open:!0,plId:e},this.render()}}connectedCallback(){this.isConnected&&(document.title=`${window.$game.state?.userTeam} club team overview - Space Fantasy Football`,super.connectedCallback())}disconnectedCallback(){(0,r.sY)(r.Ld,window.$modalRoot),super.disconnectedCallback()}renderUpdateLineup(){return r.dy`
      <change-spot
        data-pl-id=${this.updateLineup.plId}
        .onDone=${this.closeUpdateLineup}
      >
      </change-spot>
    `}render(){const e=window.$game.state.userTeam===this.team.name;(0,r.sY)(r.dy`
        <style>
          ${wn.Z}
        </style>
        ${function(e,n){const t=window.$game.state,a=L.D2.getTeamPlayers(t,e.name);if(!(0,cn.$k)(t,e)&&(t.userTeam!==e.name||window.$appState.userSettings.autoFormation))return Ee.xe(t,e),r.Ld;e.setPieces||e.name!==t.userTeam||(e.setPieces=(0,cn.Tb)(t,e.formation?.lineup??[]));const o=(0,cn.UL)({gs:t,t:e})?.lineup??[];return r.dy`
    <section slot="in-main" class="team-main">
      <div class="cnt-team-info">
        <div>${s=o,r.dy`
    <div class="cnt-pitch">
      ${function(e){return r.dy`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 ${Pn} ${jn}"
    >
      <image
        href=${Cn}
        x="0"
        y="0"
        width=${Pn}
        height=${jn}
      />
      ${e.map((e=>function(e){const n=Ln(e)-4.5,t=Fn(e)-4.5;return r.YP`
    <image href=${on} x=${n} y=${t} height=${9} width=${9}/>
  `}(e.sp)))}
    </svg>
  `}(s)} ${s.map((e=>function(e){const n={left:Ln(e.sp)/Pn*100+"%",top:Fn(e.sp)/jn*100+"%"};return r.dy`
    <div
      style=${vn(n)}
      class="starter-tag"
      aria-label="starting player"
    >
      <div class="tag-name"><em>${e.pl?.name}</em></div>
      <div class="tag-info">
        <span class="tag-pos">${e.sp.pos}</span>
        <span class="tag-pos" style=${Dn(e)}
          >${e.pl?.position}</span
        >
        <span class="sqd-number">${e.pl?.number??""}</span>
      </div>
    </div>
  `}(e)))}
    </div>
  `}</div>
        <div>
          <article class="cnt-tactics">
            <header class="tactics-head">
              <h3>Tactics</h3>
              <div class="self-start">
                ${e.name===t.userTeam?function(){const e=Object.keys(yn.Jq),n=window.$game.state,t=n.teams[n.userTeam],a=T(),o=t.formation?.lineup.filter((e=>Boolean(e.plID))).map((e=>n.players[e.plID]))??[];return r.dy`
    <button
      class="btn-txt leading-4 rounded-full"
      @click=${()=>a.value.show()}
      aria-label="open customize tactics"
    >
      <img class="w-4" src=${An} alt="gear" />
    </button>
    <dialog ${j(a)} aria-labelledby="dig-tactics-title" class="tct-dig">
      <div class="dig-head">
        <h3 class="dig-title" id="dig-tactics-title">Customize Tactics</h3>
        <button
          autofocus
          class="btn-close"
          @click=${()=>a.value.close()}
          aria-label="close"
        ></button>
      </div>
      <form
        @submit=${a=>{const r=a.currentTarget;t.captain=r.captain.value||t.captain,t.setPieces={penalties:r.penalties.value||t.setPieces?.penalties,shortFreeKicks:r["short-kick"].value||t.setPieces?.shortFreeKicks,longFreeKicks:r["long-kick"].value||t.setPieces?.longFreeKicks,corners:r.corners.value||t.setPieces?.corners,throwIns:r["throw-ins"].value||t.setPieces?.throwIns},e.includes(r.formations.value)?Ee.Pe(r.formations.value):window.$game.state=n}}
        method="dialog"
        class="grid .grid-cols-1 sm-grid-cols-2 gap-4 w-max"
      >
        ${s=e,r.dy`
    <label for="forms-slc" class="hide">Choose formation</label>
    <select id="forms-slc" class="form-select" name="formations">
      <option value="">Choose formation</option>
      ${s.map((e=>r.dy`<option value=${e}>${e}</option>`))}
    </select>
  `}
        ${On(o,"Choose captain","captain")}
        ${On(o,"Choose penalties taker","penalties")}
        ${On(o,"Choose corners taker","corners")}
        ${On(o,"Choose long free kick taker","long-kick")}
        ${On(o,"Choose short free kick taker","short-kick")}
        ${On(o,"Choose throw-ins taker","throw-ins")}

        <button class="btn btn-rounded">Apply Tactics</button>
      </form>
    </dialog>
  `;var s}():r.Ld}
              </div>
            </header>
            ${function(e){const n=window.$game.state,t=n.userTeam===e.name,a=Object.entries(e.setPieces??(0,cn.Tb)(n,e.formation?.lineup??[]));return r.dy`
    <menu class="tactics">
      ${t?r.dy`<li>${function(){const e=window.$game.state;return r.dy`
    <label>
      auto update formation
      <input
        type="checkbox"
        @change=${n=>{n.target.checked&&Ee.xe(e,e.teams[e.userTeam]),(0,_n.d)({autoFormation:n.target.checked})}}
        ?checked=${window.$appState.userSettings.autoFormation}
      />
    </label>
  `}()}</li>`:r.Ld}
      <li>Formation: ${e.formation?.name??""}</li>
      <li>
        Captain:
        <i>${n.players[e.captain??""]?.name}</i>
      </li>
      ${a.map((e=>r.dy`<li>
            ${(0,kn.dP)(e[0])}:
            <i>${n.players[e[1]??""]?.name??""}</i>
          </li>`))}
    </menu>
  `}(e)}
          </article>
        </div>
      </div>
      ${function(e,n,t){He.gG(e,!0);const a=Object.keys(ze.sR);return r.dy`
    <div class="cnt-table">
      <table>
        ${function(e){return r.dy`
    <tr class="plr-head">
      <th class="plr-pos"><abbr title="position">pos</abbr></th>
      <th class="plr-pos">
        <abbr aria-label="playing at" title="playing at">at</abbr>
      </th>
      <th class="plr-n"><abbr title="squad number">n.</abbr></th>
      <th class="plr-name">name</th>
      ${e.map((e=>r.dy`<th class="skill-score">
            <abbr title=${e}>${e.substring(0,3)}</abbr>
          </th>`))}
    </tr>
  `}(a)}
        ${e.map((e=>function(e,n,t,a){const o=window.$game.state,s=a?.sp.pos,i=!o.injuries[e.id]&&t;return r.dy`<tr class="plr ${a?"starting":""}">
    <td class="plr-pos"><span>${e.position}</span></td>
    <td class="plr-pos plr-at" style=${Dn(a)}>
      <button
        ?disabled=${!i}
        @click=${i?()=>t(e.id):r.Ld}
        class="btn-at btn-txt"
        aria-label="change starting position"
      >
        ${s}${o.injuries[e.id]?r.dy`<img src=${Sn} alt="player injured" class="injury" />`:r.Ld}
      </button>
    </td>
    <td class="plr-n"><span class="sqd-number">${e.number}</span></td>
    <td class="plr-name">${ge(`players/player?id=${e.id}`,e.name)}</td>
    ${n.map((n=>function(e,n){const t=bn(n);return r.dy`<td class="skill-score">
    <span title=${e} style=${`border-color: ${t.color}`}> ${t.score} </span>
  </td>`}(n,(0,ze.rW)(e,n))))}
  </tr>`}(e,a,t,(e=>n.find((n=>n.pl?.id===e.id)))(e))))}
      </table>
    </div>
  `}(a,o,n)}
    </section>
  `;var s}(this.team,e?this.openUpdateLineup:void 0)}
      `,this),(0,r.sY)(this.updateLineup.open&&e?this.renderUpdateLineup():r.Ld,window.$modalRoot)}}function On(e,n,t){const a=`slc-${t}`;return r.dy`
    <label class="hide" for=${a}>${n}</label>
    <select id=${a} class="form-select" aria-label=${n} name=${t}>
      <option value="">${n}</option>
      ${e.map((e=>r.dy`<option value=${e.id}>${e.name}</option>`))}
    </select>
  `}function Dn(e){switch(e&&e.pl?(0,ze.re)(e.pl,e.sp.pos):-1){case.2:return"background-color: red";case.1:return"background-color: orange";case.05:return"background-color: yellow";case 0:return"background-color: green";default:return""}}function Ln(e,n=!1){const t=(0,yn.nZ)(e.col,.9*Tn)+.05*Tn;return n?t:t+2}function Fn(e,n=!1){const t=(0,yn.Ff)(e.row,.75*En)+.22*En;return n?t:t+2}var Rn=t(7413);var Nn=t(6094);customElements.get("re-sign")||customElements.define("re-sign",class extends pe{constructor(){super(),this.closeNegotiation=()=>{this.pl=void 0,this.render()},this.openNegotiation=e=>{console.log(e),this.pl=e,this.render()},this.attachShadow({mode:"open"})}render(){(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${Rn.Z}
        </style>
        ${function(e){const n=window.$game.state,t=cn.SZ.getExpiringPlayers({gs:n,t:n.teams[n.userTeam]});return r.dy`
    <table>
      <caption>
        <h2>📝 Re-sign:</h2>
      </caption>
      <tr>
        <th>name</th>
        <th class="small-col"><abbr title="position">pos</abbr></th>
        <th class="small-col">age</th>
        ${ze.kk.map((e=>r.dy`<th class="small-col">
              <abbr title=${e}>${e.substring(0,3)}</abbr>
            </th>`))}
        <th>sign</th>
      </tr>
      ${t.map((n=>function(e,n){const t=window.$game.state,a=(0,ze.x6)({gs:t,t:t.teams[t.userTeam],p:e});return r.dy`
    <tr>
      <td>${ge(`players/player?id=${e.id}`,e.name)}</td>
      <td class="small-col"><span class="plr-pos">${e.position}</span></td>
      <td class="small-col">${(0,ze.Ay)(e,t.date)}</td>
      ${ze.kk.map((n=>function(e){const n=`border-color: ${bn(e).color}`;return r.dy`<td class="small-col">
    <span class="skill-score" style=${n}>${e}</span>
  </td>`}(Math.round((0,ze.rW)(e,n)))))}
      <td>
        <button
          class="btn btn-sml btn--acc sign-btn"
          ?disabled=${!a}
          @click=${a?()=>{console.log("hhs"),n(e)}:r.Ld}
        >
          Negotiate
        </button>
      </td>
    </tr>
  `}(n,e)))}
    </table>
  `}(this.openNegotiation)}
        ${this.pl?r.dy`<negotiate-contract
              .props=${{plr:this.pl,onClose:this.closeNegotiation,sign:!1}}
            ></negotiate-contract>`:r.Ld}
      `,this.shadowRoot)}});const In=new Intl.NumberFormat("en-GB");class Bn extends pe{connectedCallback(){this.isConnected&&(document.title=`${window.$game.state?.userTeam} club financial overview - Space Fantasy Football`,super.connectedCallback())}render(){(0,r.sY)(r.dy`
        <style>
          ${Nn.Z}
        </style>
        ${function(e){const n=window.$game.state,t=n?.teams[e];return r.dy`
    <div slot="in-main">
      ${"updateContracts"===n?.flags.onGameEvent?r.dy`<re-sign></re-sign>`:r.Ld}
      <section class="cnt-tb-fin">
        ${t&&function(e){const n=window.$game.state,t=cn.SZ.getNotExpiringPlayers({gs:n,t:e}),a=Array.from({length:4},((e,t)=>n.date.getFullYear()+t));return r.dy`
    <table>
      <caption>
        <h2>⚽ players wages:</h2>
      </caption>
      <tr>
        <th>name</th>
        ${a.map((e=>r.dy`<th aria-label="year wage">${e}</th>`))}
      </tr>
      ${t.map((e=>function(e){const n=window.$game.state,t=L.D2.getContract(n,e),a=`players/player?id=${e.id}`,o=Array.from({length:4},((e,n)=>(t?.duration??0)-n>0?t?.wage:""));return r.dy`
    <tr>
      <td>${ge(a,e.name)}</td>
      ${o.map((e=>r.dy`<td>${e?`${In.format(e)}₡`:e}</td>`))}
    </tr>
  `}(e)))} ${function(e){const n=window.$game.state,t=e.map((e=>L.D2.getContract(n,e))),a=Array.from({length:4},((e,n)=>t.reduce(((e,t)=>e+((e,n)=>n&&n.duration-e>0?n.wage:0)(n,t)),0)));return r.dy`
    <tr class="wage-totals">
      <td>totals</td>
      ${a.map((e=>r.dy`<td>${In.format(e)}₡</td>`))}
    </tr>
    <tr>
      <td>free cap space</td>
      ${a.map((e=>function(e){const n=ze.Oo-e;return r.dy`
    <td>
      <span class="cap-space ${n>=0?"positive":"negative"}">
        ${In.format(n)}₡
      </span>
    </td>
  `}(e)))}
    </tr>
  `}(t)}
    </table>
  `}(t)} ${t&&function(e){const n=window.$game.state,t={all:Object.values(n.teams),t:e},a=e?cn.SZ.getMonthlyExpenses({gs:n,t:e}):0,o=e?cn.SZ.getWagesAmount({gs:n,t:e}):0,s=(e.finances.revenue??0)-a,i=zn(t,"budget"),l=zn(t,"revenue"),d=zn(t,"scouting"),c=zn(t,"facilities"),p=zn(t,"health");return r.dy`
    <div class="cnt-fin">
      <h2>💰 team finances:</h2>
      <div class="fin-liquidity">
        <h3>team liquidity:</h3>
        <p>budget: ${i.v}₡ (${Zn(i.rank)})</p>
        <p>monthly revenue: +${l.v}₡ (${Zn(l.rank)})</p>
      </div>
      <div class="fin-expenses">
        <h3>monthly expenses:</h3>
        <p>scouting: -${d.v}₡ (${Zn(d.rank)})</p>
        <p>facilities: -${c.v}₡ (${Zn(c.rank)})</p>
        <p>health: -${p.v}₡ (${Zn(p.rank)})</p>
        <p>wages: -${In.format(o)}₡</p>
        ${function(e){const n=(0,cn.x6)(e),t=(0,cn.CV)(e);return r.dy`
    <p>
      luxury tax:
      <span class="tax ${n>0?"negative":""}">-${In.format(n)}₡</span>
    </p>
    <p>
      minimum salary tax:
      <span class="tax ${t>0?"negative":""}">-${In.format(t)}₡</span>
    </p>
  `}(o)}
        <p>total: -${In.format(a)}₡</p>
      </div>
      <p>
        <span class="fin-bal ${s>=0?"positive":"negative"}">
          financial balance: ${In.format(s)}₡
        </span>
      </p>
      <div class="info">
        <h3>info:</h3>
        <p>maximum salary cap: ${In.format(ze.Oo)}₡</p>
        <p>minimum salary cap: ${In.format(ze.bI)}₡</p>
        ${function(e){const n=function(e,n,t=!1){const a=He.br(e.all,n,t).findIndex((n=>e.t===n));return{v:e.t[n]?.toString()??"",rank:a+1}}(e,"appeal"),t=`background-color: ${Hn(n.rank)}`,a=`background-color: ${Hn(function(e){const n=cn.mL.huge,t=e.all.length/n*(n-cn.mL[e.t.fanBase]);return 0===t?1:t}(e))}`;return r.dy`
    <p>
      team appeal:
      <span class="gen-info" style=${t}>
        ${n.rank}<sup>${Un(n.rank)}</sup>
      </span>
    </p>
    <p>
      fan base: <span class="gen-info" style=${a}>${e.t.fanBase}</span>
    </p>
  `}(t)}
      </div>
    </div>
  `}(t)}
      </section>
    </div>
  `}(window.$game.state?.userTeam??"")}
      `,this)}}function zn(e,n,t=!1){const a=He.Ue(e.all,n,t).findIndex((n=>e.t===n));return{v:In.format(e.t?.finances[n]??0),rank:a+1}}function Hn(e){return`hsl(${120-e/(Object.values(window.$game.state?.teams??{}).length||1)*120}deg 70% 70%)`}function Zn(e){return r.dy`
    <span class="fin-rank" style="color: ${Hn(e)}">
      ${e}<sup>${Un(e)}</sup>
    </span>
  `}function Un(e){switch(e){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}const Gn="object"==typeof global&&global&&global.Object===Object&&global;var Wn="object"==typeof self&&self&&self.Object===Object&&self;const Yn=Gn||Wn||Function("return this")(),qn=Yn.Symbol;var Jn=Object.prototype,Qn=Jn.hasOwnProperty,Vn=Jn.toString,Kn=qn?qn.toStringTag:void 0;var Xn=Object.prototype.toString;var et=qn?qn.toStringTag:void 0;const nt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":et&&et in Object(e)?function(e){var n=Qn.call(e,Kn),t=e[Kn];try{e[Kn]=void 0;var a=!0}catch(e){}var r=Vn.call(e);return a&&(n?e[Kn]=t:delete e[Kn]),r}(e):function(e){return Xn.call(e)}(e)},tt=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)},at=function(e){if(!tt(e))return!1;var n=nt(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n},rt=Yn["__core-js_shared__"];var ot,st=(ot=/[^.]+$/.exec(rt&&rt.keys&&rt.keys.IE_PROTO||""))?"Symbol(src)_1."+ot:"";var it=Function.prototype.toString;const lt=function(e){if(null!=e){try{return it.call(e)}catch(e){}try{return e+""}catch(e){}}return""};var dt=/^\[object .+?Constructor\]$/,ct=Function.prototype,pt=Object.prototype,ht=ct.toString,ut=pt.hasOwnProperty,mt=RegExp("^"+ht.call(ut).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const gt=function(e){return!(!tt(e)||(n=e,st&&st in n))&&(at(e)?mt:dt).test(lt(e));var n},ft=function(e,n){var t=function(e,n){return null==e?void 0:e[n]}(e,n);return gt(t)?t:void 0},bt=function(){try{var e=ft(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),vt=function(e,n,t,a){for(var r=-1,o=null==e?0:e.length;++r<o;){var s=e[r];n(a,s,t(s),e)}return a},yt=function(e,n,t){for(var a=-1,r=Object(e),o=t(e),s=o.length;s--;){var i=o[++a];if(!1===n(r[i],i,r))break}return e},wt=function(e){return null!=e&&"object"==typeof e},xt=function(e){return wt(e)&&"[object Arguments]"==nt(e)};var $t=Object.prototype,_t=$t.hasOwnProperty,kt=$t.propertyIsEnumerable;const St=xt(function(){return arguments}())?xt:function(e){return wt(e)&&_t.call(e,"callee")&&!kt.call(e,"callee")},Ct=Array.isArray;var At="object"==typeof exports&&exports&&!exports.nodeType&&exports,Tt=At&&"object"==typeof module&&module&&!module.nodeType&&module,Et=Tt&&Tt.exports===At?Yn.Buffer:void 0;const Pt=(Et?Et.isBuffer:void 0)||function(){return!1};var jt=/^(?:0|[1-9]\d*)$/;const Mt=function(e,n){var t=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==t||"symbol"!=t&&jt.test(e))&&e>-1&&e%1==0&&e<n},Ot=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var Dt={};Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Arguments]"]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object Boolean]"]=Dt["[object DataView]"]=Dt["[object Date]"]=Dt["[object Error]"]=Dt["[object Function]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt["[object Object]"]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object WeakMap]"]=!1;var Lt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ft=Lt&&"object"==typeof module&&module&&!module.nodeType&&module,Rt=Ft&&Ft.exports===Lt&&Gn.process,Nt=function(){try{return Ft&&Ft.require&&Ft.require("util").types||Rt&&Rt.binding&&Rt.binding("util")}catch(e){}}(),It=Nt&&Nt.isTypedArray;const Bt=It?(zt=It,function(e){return zt(e)}):function(e){return wt(e)&&Ot(e.length)&&!!Dt[nt(e)]};var zt,Ht=Object.prototype.hasOwnProperty;const Zt=function(e,n){var t=Ct(e),a=!t&&St(e),r=!t&&!a&&Pt(e),o=!t&&!a&&!r&&Bt(e),s=t||a||r||o,i=s?function(e,n){for(var t=-1,a=Array(e);++t<e;)a[t]=n(t);return a}(e.length,String):[],l=i.length;for(var d in e)!n&&!Ht.call(e,d)||s&&("length"==d||r&&("offset"==d||"parent"==d)||o&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Mt(d,l))||i.push(d);return i};var Ut=Object.prototype;const Gt=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object);var Wt=Object.prototype.hasOwnProperty;const Yt=function(e){if(t=(n=e)&&n.constructor,n!==("function"==typeof t&&t.prototype||Ut))return Gt(e);var n,t,a=[];for(var r in Object(e))Wt.call(e,r)&&"constructor"!=r&&a.push(r);return a},qt=function(e){return null!=e&&Ot(e.length)&&!at(e)},Jt=function(e){return qt(e)?Zt(e):Yt(e)},Qt=function(e,n){if(null==e)return e;if(!qt(e))return function(e,n){return e&&yt(e,n,Jt)}(e,n);for(var t=e.length,a=-1,r=Object(e);++a<t&&!1!==n(r[a],a,r););return e},Vt=function(e,n,t,a){return Qt(e,(function(e,r,o){n(a,e,t(e),o)})),a},Kt=function(e,n){return e===n||e!=e&&n!=n},Xt=function(e,n){for(var t=e.length;t--;)if(Kt(e[t][0],n))return t;return-1};var ea=Array.prototype.splice;function na(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var a=e[n];this.set(a[0],a[1])}}na.prototype.clear=function(){this.__data__=[],this.size=0},na.prototype.delete=function(e){var n=this.__data__,t=Xt(n,e);return!(t<0||(t==n.length-1?n.pop():ea.call(n,t,1),--this.size,0))},na.prototype.get=function(e){var n=this.__data__,t=Xt(n,e);return t<0?void 0:n[t][1]},na.prototype.has=function(e){return Xt(this.__data__,e)>-1},na.prototype.set=function(e,n){var t=this.__data__,a=Xt(t,e);return a<0?(++this.size,t.push([e,n])):t[a][1]=n,this};const ta=na,aa=ft(Yn,"Map"),ra=ft(Object,"create");var oa=Object.prototype.hasOwnProperty;var sa=Object.prototype.hasOwnProperty;function ia(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var a=e[n];this.set(a[0],a[1])}}ia.prototype.clear=function(){this.__data__=ra?ra(null):{},this.size=0},ia.prototype.delete=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},ia.prototype.get=function(e){var n=this.__data__;if(ra){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return oa.call(n,e)?n[e]:void 0},ia.prototype.has=function(e){var n=this.__data__;return ra?void 0!==n[e]:sa.call(n,e)},ia.prototype.set=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ra&&void 0===n?"__lodash_hash_undefined__":n,this};const la=ia,da=function(e,n){var t,a,r=e.__data__;return("string"==(a=typeof(t=n))||"number"==a||"symbol"==a||"boolean"==a?"__proto__"!==t:null===t)?r["string"==typeof n?"string":"hash"]:r.map};function ca(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var a=e[n];this.set(a[0],a[1])}}ca.prototype.clear=function(){this.size=0,this.__data__={hash:new la,map:new(aa||ta),string:new la}},ca.prototype.delete=function(e){var n=da(this,e).delete(e);return this.size-=n?1:0,n},ca.prototype.get=function(e){return da(this,e).get(e)},ca.prototype.has=function(e){return da(this,e).has(e)},ca.prototype.set=function(e,n){var t=da(this,e),a=t.size;return t.set(e,n),this.size+=t.size==a?0:1,this};const pa=ca;function ha(e){var n=this.__data__=new ta(e);this.size=n.size}ha.prototype.clear=function(){this.__data__=new ta,this.size=0},ha.prototype.delete=function(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t},ha.prototype.get=function(e){return this.__data__.get(e)},ha.prototype.has=function(e){return this.__data__.has(e)},ha.prototype.set=function(e,n){var t=this.__data__;if(t instanceof ta){var a=t.__data__;if(!aa||a.length<199)return a.push([e,n]),this.size=++t.size,this;t=this.__data__=new pa(a)}return t.set(e,n),this.size=t.size,this};const ua=ha;function ma(e){var n=-1,t=null==e?0:e.length;for(this.__data__=new pa;++n<t;)this.add(e[n])}ma.prototype.add=ma.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},ma.prototype.has=function(e){return this.__data__.has(e)};const ga=ma,fa=function(e,n){for(var t=-1,a=null==e?0:e.length;++t<a;)if(n(e[t],t,e))return!0;return!1},ba=function(e,n,t,a,r,o){var s=1&t,i=e.length,l=n.length;if(i!=l&&!(s&&l>i))return!1;var d=o.get(e),c=o.get(n);if(d&&c)return d==n&&c==e;var p=-1,h=!0,u=2&t?new ga:void 0;for(o.set(e,n),o.set(n,e);++p<i;){var m=e[p],g=n[p];if(a)var f=s?a(g,m,p,n,e,o):a(m,g,p,e,n,o);if(void 0!==f){if(f)continue;h=!1;break}if(u){if(!fa(n,(function(e,n){if(s=n,!u.has(s)&&(m===e||r(m,e,t,a,o)))return u.push(n);var s}))){h=!1;break}}else if(m!==g&&!r(m,g,t,a,o)){h=!1;break}}return o.delete(e),o.delete(n),h},va=Yn.Uint8Array,ya=function(e){var n=-1,t=Array(e.size);return e.forEach((function(e,a){t[++n]=[a,e]})),t},wa=function(e){var n=-1,t=Array(e.size);return e.forEach((function(e){t[++n]=e})),t};var xa=qn?qn.prototype:void 0,$a=xa?xa.valueOf:void 0;var _a=Object.prototype.propertyIsEnumerable,ka=Object.getOwnPropertySymbols;const Sa=ka?function(e){return null==e?[]:(e=Object(e),function(e,n){for(var t=-1,a=null==e?0:e.length,r=0,o=[];++t<a;){var s=e[t];n(s,t,e)&&(o[r++]=s)}return o}(ka(e),(function(n){return _a.call(e,n)})))}:function(){return[]},Ca=function(e){return function(e,n,t){var a=n(e);return Ct(e)?a:function(e,n){for(var t=-1,a=n.length,r=e.length;++t<a;)e[r+t]=n[t];return e}(a,t(e))}(e,Jt,Sa)};var Aa=Object.prototype.hasOwnProperty;const Ta=ft(Yn,"DataView"),Ea=ft(Yn,"Promise"),Pa=ft(Yn,"Set"),ja=ft(Yn,"WeakMap");var Ma="[object Map]",Oa="[object Promise]",Da="[object Set]",La="[object WeakMap]",Fa="[object DataView]",Ra=lt(Ta),Na=lt(aa),Ia=lt(Ea),Ba=lt(Pa),za=lt(ja),Ha=nt;(Ta&&Ha(new Ta(new ArrayBuffer(1)))!=Fa||aa&&Ha(new aa)!=Ma||Ea&&Ha(Ea.resolve())!=Oa||Pa&&Ha(new Pa)!=Da||ja&&Ha(new ja)!=La)&&(Ha=function(e){var n=nt(e),t="[object Object]"==n?e.constructor:void 0,a=t?lt(t):"";if(a)switch(a){case Ra:return Fa;case Na:return Ma;case Ia:return Oa;case Ba:return Da;case za:return La}return n});const Za=Ha;var Ua="[object Arguments]",Ga="[object Array]",Wa="[object Object]",Ya=Object.prototype.hasOwnProperty;const qa=function(e,n,t,a,r,o){var s=Ct(e),i=Ct(n),l=s?Ga:Za(e),d=i?Ga:Za(n),c=(l=l==Ua?Wa:l)==Wa,p=(d=d==Ua?Wa:d)==Wa,h=l==d;if(h&&Pt(e)){if(!Pt(n))return!1;s=!0,c=!1}if(h&&!c)return o||(o=new ua),s||Bt(e)?ba(e,n,t,a,r,o):function(e,n,t,a,r,o,s){switch(t){case"[object DataView]":if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=n.byteLength||!o(new va(e),new va(n)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Kt(+e,+n);case"[object Error]":return e.name==n.name&&e.message==n.message;case"[object RegExp]":case"[object String]":return e==n+"";case"[object Map]":var i=ya;case"[object Set]":var l=1&a;if(i||(i=wa),e.size!=n.size&&!l)return!1;var d=s.get(e);if(d)return d==n;a|=2,s.set(e,n);var c=ba(i(e),i(n),a,r,o,s);return s.delete(e),c;case"[object Symbol]":if($a)return $a.call(e)==$a.call(n)}return!1}(e,n,l,t,a,r,o);if(!(1&t)){var u=c&&Ya.call(e,"__wrapped__"),m=p&&Ya.call(n,"__wrapped__");if(u||m){var g=u?e.value():e,f=m?n.value():n;return o||(o=new ua),r(g,f,t,a,o)}}return!!h&&(o||(o=new ua),function(e,n,t,a,r,o){var s=1&t,i=Ca(e),l=i.length;if(l!=Ca(n).length&&!s)return!1;for(var d=l;d--;){var c=i[d];if(!(s?c in n:Aa.call(n,c)))return!1}var p=o.get(e),h=o.get(n);if(p&&h)return p==n&&h==e;var u=!0;o.set(e,n),o.set(n,e);for(var m=s;++d<l;){var g=e[c=i[d]],f=n[c];if(a)var b=s?a(f,g,c,n,e,o):a(g,f,c,e,n,o);if(!(void 0===b?g===f||r(g,f,t,a,o):b)){u=!1;break}m||(m="constructor"==c)}if(u&&!m){var v=e.constructor,y=n.constructor;v==y||!("constructor"in e)||!("constructor"in n)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(u=!1)}return o.delete(e),o.delete(n),u}(e,n,t,a,r,o))},Ja=function e(n,t,a,r,o){return n===t||(null==n||null==t||!wt(n)&&!wt(t)?n!=n&&t!=t:qa(n,t,a,r,e,o))},Qa=function(e){return e==e&&!tt(e)},Va=function(e,n){return function(t){return null!=t&&t[e]===n&&(void 0!==n||e in Object(t))}},Ka=function(e){var n=function(e){for(var n=Jt(e),t=n.length;t--;){var a=n[t],r=e[a];n[t]=[a,r,Qa(r)]}return n}(e);return 1==n.length&&n[0][2]?Va(n[0][0],n[0][1]):function(t){return t===e||function(e,n,t,a){var r=t.length,o=r,s=!a;if(null==e)return!o;for(e=Object(e);r--;){var i=t[r];if(s&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++r<o;){var l=(i=t[r])[0],d=e[l],c=i[1];if(s&&i[2]){if(void 0===d&&!(l in e))return!1}else{var p=new ua;if(a)var h=a(d,c,l,e,n,p);if(!(void 0===h?Ja(c,d,3,a,p):h))return!1}}return!0}(t,e,n)}},Xa=function(e){return"symbol"==typeof e||wt(e)&&"[object Symbol]"==nt(e)};var er=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nr=/^\w*$/;const tr=function(e,n){if(Ct(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Xa(e))||nr.test(e)||!er.test(e)||null!=n&&e in Object(n)};function ar(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function(){var a=arguments,r=n?n.apply(this,a):a[0],o=t.cache;if(o.has(r))return o.get(r);var s=e.apply(this,a);return t.cache=o.set(r,s)||o,s};return t.cache=new(ar.Cache||pa),t}ar.Cache=pa;var rr,or,sr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ir=/\\(\\)?/g;const lr=(rr=ar((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(sr,(function(e,t,a,r){n.push(a?r.replace(ir,"$1"):t||e)})),n}),(function(e){return 500===or.size&&or.clear(),e})),or=rr.cache,rr);var dr=qn?qn.prototype:void 0,cr=dr?dr.toString:void 0;const pr=function e(n){if("string"==typeof n)return n;if(Ct(n))return function(e,n){for(var t=-1,a=null==e?0:e.length,r=Array(a);++t<a;)r[t]=n(e[t],t,e);return r}(n,e)+"";if(Xa(n))return cr?cr.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t},hr=function(e,n){return Ct(e)?e:tr(e,n)?[e]:lr(function(e){return null==e?"":pr(e)}(e))},ur=function(e){if("string"==typeof e||Xa(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},mr=function(e,n){for(var t=0,a=(n=hr(n,e)).length;null!=e&&t<a;)e=e[ur(n[t++])];return t&&t==a?e:void 0},gr=function(e,n){return null!=e&&n in Object(e)},fr=function(e,n){return null!=e&&function(e,n,t){for(var a=-1,r=(n=hr(n,e)).length,o=!1;++a<r;){var s=ur(n[a]);if(!(o=null!=e&&t(e,s)))break;e=e[s]}return o||++a!=r?o:!!(r=null==e?0:e.length)&&Ot(r)&&Mt(s,r)&&(Ct(e)||St(e))}(e,n,gr)},br=function(e,n){return tr(e)&&Qa(n)?Va(ur(e),n):function(t){var a=function(e,n,t){var a=null==e?void 0:mr(e,n);return void 0===a?t:a}(t,e);return void 0===a&&a===n?fr(t,e):Ja(n,a,3)}},vr=function(e){return e},yr=function(e){return tr(e)?(n=ur(e),function(e){return null==e?void 0:e[n]}):function(e){return function(n){return mr(n,e)}}(e);var n};var wr=Object.prototype.hasOwnProperty;const xr=($r=function(e,n,t){wr.call(e,t)?e[t].push(n):function(e,n,t){"__proto__"==n&&bt?bt(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}(e,t,[n])},function(e,n){var t,a=Ct(e)?vt:Vt,r=_r?_r():{};return a(e,$r,"function"==typeof(t=n)?t:null==t?vr:"object"==typeof t?Ct(t)?br(t[0],t[1]):Ka(t):yr(t),r)});var $r,_r,kr=t(1670);class Sr extends pe{constructor(){super(...arguments),this.season=new URLSearchParams(location.search).get("season")??"now",this.onSeasonChange=e=>{this.season=e.target.value;const n=location.origin+location.pathname+`?season=${this.season}`;history.replaceState({},"",n),this.render()}}connectedCallback(){this.isConnected&&(document.title="Transactions history - Space Fantasy Football",super.connectedCallback())}renderSeasonSelector(){return r.dy`
      <div class="cnt-season-sel">
        <label for="season">Season: </label>
        <select class="form-select" id="season" @change=${this.onSeasonChange}>
          ${Object.keys(window.$game.state.transactions).map((e=>r.dy`<option ?selected=${e===this.season} value=${e}>
                ${"now"===e?"current":e}
              </option>`))}
        </select>
      </div>
    `}render(){const e=window.$game.state.transactions[this.season];(0,r.sY)(r.dy`
        <style>
          ${kr.Z}
        </style>
        ${this.renderSeasonSelector()} ${function(e){return r.dy`
    <div class="ctn-transactions">
      ${t=e.trades,r.dy`
    <section class="trades">
      <h2>🔄 Trades:</h2>
      ${Cr(t).map((e=>function(e){return Ar(new Date(e[0].when).toDateString(),e.map((e=>Er(e))))}(e)))}
    </section>
  `} ${n=e.signings,r.dy`
    <section class="signings">
      <h2>📝 New Signings:</h2>
      ${Cr(n).map((e=>Mr(e)))}
    </section>
  `} ${function(e){return r.dy`
    <section class="signings">
      <h2>✍ Re-signings:</h2>
      ${Cr(e).map((e=>Mr(e)))}
    </section>
  `}(e.renewals)}
    </div>
  `;var n,t}(e)}
      `,this)}}function Cr(e){return Object.values(xr(e,(e=>e.when))).sort(((e,n)=>new Date(n[0].when).getTime()-new Date(e[0].when).getTime()))}function Ar(e,n){return r.dy`
    <article class="transactions">
      <h3><time>${e}</time></h3>
      ${n}
    </article>
  `}function Tr(e,n){return r.dy`
    <div>
      <h4 class="transaction-title">${e}</h4>
      <div class="transaction-content">
        <div class="team-log">🪐</div>
        ${n}
      </div>
    </div>
  `}function Er(e){const n=e.sides[0],t=e.sides[1],a=new Date(e.when);return r.dy`<div class="transaction-summary trade-summary">
    ${Pr(n.team,t.plIds,a)} ${Pr(t.team,n.plIds,a)}
  </div>`}function Pr(e,n,t){return Tr(r.dy`${Or(e)} acquires:`,r.dy`
      <ul class="traded-pls">
        ${n.map((e=>r.dy`<li class="cnt-pl-info">${jr(e,t)}</li>`))}
      </ul>
    `)}function jr(e,n){const t=window.$game.state,a=t.players[e];return a?r.dy`
      <span class="plr-pos" aria-label="position">${a.position}</span>
      ${ge(`players/player?id=${a.id}`,a.name)}
      <span aria-label="age">
        ${(0,ze.Ay)(a,n)} <abbr title="year">y.</abbr>
        <abbr title="old">o.</abbr>
      </span>
    `:r.dy`
    <span class="plr-pos" aria-label="position">-</span>
    ${t.retirees[e].name??""} (retired)
  `}function Mr(e){return Ar(new Date(e[0].when).toDateString(),e.map((e=>r.dy`<div class="transaction-summary">${function(e){return Tr(r.dy`${Or(e.team)} signed:`,r.dy`
      <div class="cnt-pl-info">${jr(e.plId,new Date(e.when))}</div>
    `)}(e)}</div>`)))}function Or(e){return ge(`team?team=${e}`,e)}var Dr=t(3703);const Lr=t.p+"9b15bfa8fae426c0d726.svg";class Fr extends pe{constructor(){super(...arguments),this.season=new URLSearchParams(location.search).get("season")??"now",this.onSeasonChange=e=>{this.season=e.target.value;const n=location.origin+location.pathname+`?season=${this.season}`;history.replaceState({},"",n),this.render()}}connectedCallback(){this.isConnected&&(document.title="Draft overview - Space Fantasy Football",super.connectedCallback())}renderSeasonSelector(){return r.dy`
      <div class="cnt-season-sel">
        <label for="season">Season: </label>
        <select class="form-select" id="season" @change=${this.onSeasonChange}>
          ${Object.keys(window.$game.state.drafts).map((e=>r.dy`<option ?selected=${e===this.season} value=${e}>
                ${"now"===e?"current":e}
              </option>`))}
        </select>
      </div>
    `}render(){const e=window.$game.state.drafts[this.season];var n;(0,r.sY)(r.dy`
        <style>
          ${Dr.Z}
        </style>
        ${this.renderSeasonSelector()}
        <div class="cnt-draft-info">
          ${n=e,r.dy`
    <div class="cnt-draft-players">
      <table>
        <tr>
          <th>Pick</th>
          <th>Name</th>
          <th><abbr title="Position">Pos.</abbr></th>
          <th>Age</th>
          <th><abbr title="Improvability">Imp.</abbr></th>
          <th><abbr title="Rating">Rat.</abbr></th>
          <th>Team</th>
          <th>Draft</th>
        </tr>
        ${n.picked.map((e=>Nr(e,new Date(n.when))))}
        ${n.picks.map((e=>Nr(e,new Date(n.when))))}
      </table>
    </div>
  `} ${function(e){const n=window.$game.state?.userTeam,t=window.$game.state.drafts.now.picked.length+1;return r.dy`
    <article class="cnt-lottery">
      <h2>🎲 Lottery</h2>
      <ol class="lottery" start=${t??1}>
        ${e.map((e=>r.dy`<li ?data-user=${n===e}>${(e=>ge(`team?team=${e}`,e))(e)}</li>`))}
      </ol>
    </article>
  `}(e.lottery)}
        </div>
      `,this)}}function Rr(e){const n=window.$game.state,t=e.target.value;n.flags.userDrafting&&(de.mw(n,n.players[t]),n.flags.userDrafting=!1,window.$game.state=n)}function Nr(e,n){const t=window.$game.state,a=t.players[e.plId],o=`players/player?id=${e.plId}`,s=a&&t.flags.userDrafting&&"draft"===a.team,i=ge(`team?team=${e.team}`,e.team);return r.dy`
    <tr>
      <td><span class="pick-n">${isNaN(e.n)?"":e.n}</span></td>
      <td>${a?ge(o,a.name):`${t.retirees[e.plId]} (retired)`}</td>
      <td>${a?a.position.toUpperCase():""}</td>
      <td>${a?(0,ze.Ay)(a,n):""}</td>
      <td>${a?function(e){const n=window.$game.state,t=n.players[e],a=n.teams[n.userTeam];return Ir(Ee.Ud(t,a),Ee.jC(t,a))}(e.plId):""}</td>
      <td>${a?function(e){const n=window.$game.state,t=n.players[e];return Ir(Ee.qz(t,n),Ee.dT(t,n))}(e.plId):""}</td></td>
      <td ?data-user=${e.team===t.userTeam}>${i}</td>
      <td>
        <button
          class="btn-txt leading-4"
          ?disabled=${!s}
          @click=${s?Rr:r.Ld}
          aria-label="draft player"
          value=${e.plId}
        >
          <img class="w-6 align-middle" src=${Lr} alt="person profile">
        </button>
      </td>
    </tr>
  `}function Ir(e,n){return r.dy`
    <span
      class="rtg-symbol"
      style="border-color: ${`hsl(${120*n}deg 100% 60%)`}"
    >
      ${e}
    </span>
  `}var Br=t(323),zr=t(731);class Hr extends pe{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.isConnected&&(document.title="Retiring players - Space Fantasy Football",super.connectedCallback())}render(){(0,r.sY)(r.dy`
        ${l.cloneNode(!0)}
        <style>
          ${Br.Z}
        </style>
        ${function(){const e=window.$game.state;return r.dy`
    <section class="retire-sec">
      <h2>👋 Retiring Players</h2>
      <div class="cnt-pls">${e.retiring.map((e=>function(e){const n=window.$game.state,t=n.players[e],a="free agent"!==t.team?`team?team=${t.team}`:"";return r.dy`
    <article class="cnt-plr ${n.userTeam===t.team?"user-plr":""}">
      <h3>${ge(`players/player?id=${t.id}`,t.name)}</h3>
      <div>
        <span>${a?ge(a,t.team):t.team}</span>
        <span>${(0,ze.Ay)(t,n.date)} y.o.</span>
        <span>${Math.floor(450*(0,zr.$u)())} games</span>
      </div>
    </article>
  `}(e)))}</div>
    </section>
  `}()}
      `,this.shadowRoot)}}var Zr=t(7801),Ur=t(9961);const Gr=y(class extends w{constructor(){super(...arguments),this.key=r.Ld}render(e,n){return this.key=e,n}update(e,[n,t]){return n!==this.key&&(b(e),this.key=n),t}});class Wr extends pe{connectedCallback(){this.isConnected&&(this.hasAttribute("data-offers")?document.title=`${window.$game.state?.userTeam} club overview of the trade offers received - Space Fantasy Football`:document.title=`${window.$game.state?.userTeam} club trade overview - Space Fantasy Football`,super.connectedCallback())}render(){(0,r.sY)(r.dy`
        <style>
          ${Ur.Z}
        </style>
        ${this.hasAttribute("data-offers")?r.dy`<sff-trade-offers-page></sff-trade-offers-page>`:r.dy`<sff-trade-page></sff-trade-page>`}
      `,this)}}class Yr extends pe{constructor(){super(...arguments),this.onCloseResult=()=>{this.offerResult=void 0,this.render()}}disconnectedCallback(){this.offerResult?.ok&&(0,r.sY)(r.Ld,window.$modalRoot),super.disconnectedCallback()}}function qr(){return window.$game.state?.flags.openTradeWindow?"":" ⚠ The trade window is closed"}class Jr extends Yr{constructor(){super(...arguments),this.offer={get:[],give:[]},this.onCheckboxClick=e=>{const n=e.target;n instanceof HTMLInputElement&&"checkbox"===n.type&&(n.checked?n.name===this.offer.team?this.offer.get.push(n.value):this.offer.give.push(n.value):(this.offer.get=this.offer.get.filter((e=>e!==n.value)),this.offer.give=this.offer.give.filter((e=>e!==n.value))),this.render())},this.onTeamSelect=e=>{const n=e.currentTarget.value;this.offer={get:[],give:[],team:n||void 0},this.render()},this.onSummitTrade=e=>{e.preventDefault();const n=window.$game.state,{get:t,give:a,team:r}=this.offer;if(r&&n.flags.openTradeWindow){const e=n.teams[r],o=a.map((e=>n.players[e])),s=t.map((e=>n.players[e]));this.offerResult=Ee.z6(e,s,o),this.offerResult.ok?Ee.Zp(e,s,o):this.render()}}}connectedCallback(){this.isConnected&&(this.addEventListener("click",this.onCheckboxClick),super.connectedCallback())}gameStateUpdated(){this.offer={get:[],give:[],team:this.offer.team},super.gameStateUpdated()}disconnectedCallback(){this.removeEventListener("click",this.onCheckboxClick),super.disconnectedCallback()}render(){const e=window.$game.state,{team:n,give:t,get:a}=this.offer,o=e.teams[e.userTeam],s=t.map((n=>e.players[n])),i=a.map((n=>e.players[n])),l=n&&e.flags.openTradeWindow&&s.length&&i.length;(0,r.sY)(r.dy`
        <div
          class="trade-ctrl flex gap-2 bg-750 right-0 fixed rounded-bl-xl fixed z-2 px-4 py-2 border-b-1 border-l-1 border-solid border-bg-500 border-0 shadow"
        >
          ${function(e,n){const t=window.$game.state;return r.dy`
    <label for="trade-select-team" class="hide">
      select a team to trade with
    </label>
    <select
      id="trade-select-team"
      class="form-select max-w-max"
      @change="${e}"
    >
      <option ?selected=${!n} value="">Select team</option>
      ${Object.keys(t.teams).filter((e=>e!==t.userTeam)).map((e=>r.dy`<option ?selected=${n===e}>${e}</option>`))}
    </select>
  `}(this.onTeamSelect,n??"")}
          <button
            title=${qr()}
            class="btn btn-rounded"
            id="btn-offer"
            ?disabled=${!l}
            @click=${l?this.onSummitTrade:r.Ld}
          >
            Make offer
          </button>
        </div>
        <section class="cnt-traders">
          ${Xr({team:o,get:i,give:s})}
          ${n?Xr({team:e.teams[n],get:s,give:i}):r.Ld}
        </section>
      `,this),(0,r.sY)(Kr(this.onCloseResult,this.offerResult),window.$modalRoot)}}class Qr extends Yr{constructor(){super(...arguments),this.offer=window.$game.state.tradeOffers[0]??void 0,this.onOfferSelect=e=>{const n=e.currentTarget.value,t=window.$game.state.tradeOffers;this.offer=n&&t[Number(n)]?t[Number(n)]:void 0,this.render()},this.onOfferResponse=e=>{if(!this.offer)return;const n=window.$game.state;n.tradeOffers=n.tradeOffers.filter((e=>e!==this.offer));const{get:t,give:a,team:r}=Vr(this.offer);this.offer=void 0,e?(this.offerResult={ok:!0,why:""},Ee.Zp(r,t,a)):(this.offerResult={ok:!1,why:"the user rejected the offer"},window.$game.state=n)}}gameStateUpdated(){this.offer&&!window.$game.state.tradeOffers.some((e=>{return n=e,t=this.offer,Ja(n,t);var n,t}))&&(this.offer=void 0),super.gameStateUpdated()}renderOffer(){const{user:e,get:n,give:t,team:a}=Vr(this.offer);return r.dy`
      <section class="cnt-traders">
        ${Xr({team:e,give:t,get:n},!0)}
        ${Xr({team:a,get:t,give:n},!0)}
      </section>
    `}render(){const e=!this.offer;(0,r.sY)(r.dy`
        <div
          class="trade-ctrl flex gap-2 bg-750 right-0 fixed rounded-bl-xl fixed z-2 px-4 py-2 border-b-1 border-l-1 border-solid border-bg-500 border-0 shadow"
        >
          ${function(e,n){const t=window.$game.state,a=t.tradeOffers,o=0===a.length;return r.dy`
    <label class="hide"> select an offer </label>
    <select
      class="form-select max-w-max"
      @change="${o?r.Ld:e}"
      ?disabled=${o}
    >
      ${Gr(!n,r.dy`<option ?selected=${!n} value="">Select offer</option>`)}
      ${a.map(((e,a)=>{return r.dy`<option ?selected=${n===e} value=${a}>by ${o=e,o.sides[0].team===t.userTeam?o.sides[1].team:o.sides[0].team}</option>`;var o}))}
    </select>
  `}(this.onOfferSelect,this.offer)}
          <button
            title=${qr()}
            class="btn btn-rounded btn--acc"
            ?disabled=${e}
            @click=${()=>this.onOfferResponse(!0)}
          >
            accept
          </button>
          <button
            class="btn btn-rounded btn--err"
            ?disabled=${e}
            @click=${()=>this.onOfferResponse(!1)}
          >
            reject
          </button>
        </div>
        ${e?r.Ld:this.renderOffer()}
      `,this),(0,r.sY)(Kr(this.onCloseResult,this.offerResult),window.$modalRoot)}}function Vr(e){const n=window.$game.state,[t,a]=e.sides,r=t.team===n.userTeam?t:a,o=t.team===n.userTeam?a:t;return{user:n.teams[r.team],team:n.teams[o.team],get:o.plIds.map((e=>n.players[e])),give:r.plIds.map((e=>n.players[e]))}}function Kr(e,n){const t=window.$game.state.transactions.now.trades;if(n){const a=n.ok?r.dy`
          <h2 class="dig-label" slot="title">The offer was successful!</h2>
          <output aria-label="trade result">
            ${n?Er(t[t.length-1]):r.Ld}
          </output>
        `:r.dy`
          <h2 class="dig-label" slot="title">The offer was unsuccessful!</h2>
          <output aria-label="trade result">
            <p class="rst-p">${n.why}</p>
          </output>
        `;return r.dy`<sff-modal .handleClose=${e}>${a}</sff-modal>`}return r.Ld}function Xr(e,n=!1){const t=window.$game.state,{team:a,give:o}=e,s=new Set(o.map((e=>e.id)));return r.dy`
    <section>
      <h2 class="team-name">🌕 ${a.name}</h2>
      ${function({team:e,get:n,give:t}){const a=window.$game.state,o=(0,cn._D)(a,n),s=(0,cn._D)(a,t),i=cn.SZ.getWagesAmount({gs:a,t:e})+o-s,l=ze.Oo-i,d=new Intl.NumberFormat("en-GB"),c=0!==o||0!==s?(0,Zr.P8)({gs:a,t:e},n,t).ok?"fin-good":"fin-bad":"";return r.dy`
    <output for=${e.playerIds.join(" ")} class="fin-preview">
      <div class="fin-preview__status ${c}"></div>
      <div class="fin-move">${d.format(o)}₡ Incoming</div>
      <div class="fin-move">${d.format(-s)}₡ Outgoing</div>
      <div class="fin-infos">
        ${eo("Roster wages",i)}
        ${eo("Cap Space",l)}
        ${eo("Luxury tax",(0,cn.x6)(i))}
        ${eo("Min cap tax",(0,cn.CV)(i))}
      </div>
    </output>
  `}(e)}
      <ul class="roster">
        ${Be(a.playerIds,(e=>e),(e=>function(e,n,t,a=!1){const o=Gr(t,r.dy`
      <input
        @click=${no}
        ?disabled=${a}
        ?checked=${t}
        type="checkbox"
        name=${n}
        value=${e.id}
        id=${e.id}
        aria-label="add to the trade offer"
      />
    `);return r.dy`
    <li class="plr-entry">
      <div>${function(e){const n=window.$game.state,t=L.D2.getContract(n,e),a=t?.wage?new Intl.NumberFormat("en-GB").format(t?.wage):0;return r.dy`
    <div class="plr-info">
      <div class="plr-bio">
        <h3>${ge(`players/player?id=${e.id}`,e.name)}</h3>
        <div>
          <span class="plr-bio__pos">${e.position}</span>
          <span>
            ${(0,ze.Ay)(e,n.date)} <abbr title="years old">y.o.</abbr>
          </span>
        </div>
      </div>
      <div>
        wage <span class="plr-wage">${a}₡</span> for ${t?.duration||0}
        seasons
      </div>
    </div>
  `}(e)} ${function(e){const n=Object.keys(ze.sR),t=window.$game.state,a=t.teams[t.userTeam];return r.dy`
    <div class="plr-skills">
      ${to("rating",Ee.qz(e,t),Ee.dT(e,t))}
      ${to("improvability",Ee.Ud(e,a),Ee.jC(e,a))}
      ${n.map((n=>{const t=Math.round((0,ze.rW)(e,n));return to(n,t.toString(),t/ze.ef)}))}
    </div>
  `}(e)}</div>
      <div class="cnt-checkbox ${t?"cnt-checkbox--on":""}">
        ${o}
      </div>
    </li>
  `}(t.players[e],a.name,s.has(e),n)))}
      </ul>
    </section>
  `}function eo(e,n){return r.dy`
    <div class="fin-info">
      <div>${e}</div>
      <div>${new Intl.NumberFormat("en-GB").format(n)}₡</div>
    </div>
  `}function no(e){const n=e.currentTarget.closest(".cnt-checkbox");n&&n.classList.toggle("cnt-checkbox--on")}function to(e,n,t){const a=`border-color: hsl(${120*t}deg 100% 60%);`;return r.dy`<div class="plr-skill" style=${a}>
    <abbr title=${e}>${e.substring(0,3)}.</abbr>
    <span>${n}</span>
  </div>`}var ao=t(480);const ro=t.p+"047590d93f8bb57b4c79.png",oo=t.p+"ef67e94780c72d2f083c.webp";class so extends pe{connectedCallback(){this.isConnected&&(document.title="Game manual - Space Fantasy Football",super.connectedCallback())}render(){(0,r.sY)(r.dy`
        <style>
          ${ao.Z}
        </style>
        ${r.dy` <article class="cnt-manual">
    ${r.dy`
    <h2>Space Fantasy Football Manual</h2>
    <p>
      Space Fantasy Football is a football (soccer) management game, but there
      are some major differences from the conventional rules, Some of these
      differences are taken from the NBA system. All characters are fictional
      and randomly generated for each new league
    </p>
    <h3>Some of the major differences</h3>
    <ul>
      <li>
        Roughly the NBA contractual system (you can't buy or sell players only
        trades are allowed)
      </li>
      <li>Roughly the NBA draft system with some differences</li>
      <li>The promotion and relegation systems is temporarily not exist</li>
      <li>Players can’t be loaned out to other clubs</li>
      <li>Roughly The NBA salary cap (and minimum salary cap)</li>
    </ul>
  `}${r.dy`
    <article class="cnt-about">
      <h3>Players</h3>
      <div>
        <h4>Player skills</h4>
        <p>
          The players skills are divided in two category the macro skills (which
          are mobility, physic, goalkeeper, defense, ability and offense) and
          skills. The macro skill is just a category for a set of skills, its
          value is just the mean of that set. The skill instead is a rating
          value between 0 (very bad) and 100 (very good).
        </p>
        <p>
          When a player isn't positioned in his natural position a penalty will
          be applied to some skills, the severity of the penalty is depend on
          position. the penalty for a cb playing as a cf is more severe than
          paying as a rb
        </p>
      </div>
      <div>
        <h4>Player Rating</h4>
        <p>
          The rating value indicates how good a player is respect to all other
          players, when the player is playing in his natural position. This
          value is calculated according to the normal distribution model
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Normal_distribution"
            >wiki normal distribution</a
          >
        </p>
      </div>
      <div>
        <h4>Player Improvability</h4>
        <p>
          The Improvability value indicates how rapidly a player improves his
          skills respect to all other players, usually the player growth stops
          around 27 years old. the correctness of this values is depend on the
          team scouting, and it is calculated according to the normal
          distribution model
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Normal_distribution"
            >wiki normal distribution</a
          >
        </p>
      </div>
    </article>
  `}${r.dy`
    <article class="cnt-about" id="team">
      <h3>Team</h3>
      <div>
        <h4>Team requirements</h4>
        <p>
          The maximum number of players allowed in team is 30, and the minimum
          is 18. The salary cap is 320 thousand cosmos (cosmos is the name of
          the game currency), and the minimum salary cap is 200 thousand cosmos,
          the salary limits are fixed for every team. There isn't any limit on
          which player can be traded, although at the moment lottery picks
          aren't tradable
        </p>
      </div>
      <div>
        <h4>Team scouting, facilities and health</h4>
        <p>
          the scouting effects how precise the improvability value is, the
          health shorten the injury recovery time and the facilities are a
          factor in your team appeal. All the effects above are depend on how
          much the team is spending on them
        </p>
      </div>
      <div>
        <h4>Team appeal and fan base</h4>
        <p>
          The fan base size effects the revenue stream and the appeal of the
          team, larger is better. When a team has an high appeal players are
          usually more willing to sign, the appeal value is effected by the
          facilities, fan base size and team performances
        </p>
      </div>
      <div>
        <h4>Salary cap</h4>
        <p>
          The salary cap works mostly like
          <a href="https://en.wikipedia.org/wiki/NBA_salary_cap" target="_blank"
            >the NBA salary cap</a
          >, teams can still re-sign players for any salary, or sign new players
          for the minimum salary (3,200 cosmos per year), even if they are over
          the cap. teams exceeding the salary cap or below the minium salary cap
          are punished by being forced to pay luxury tax
        </p>
      </div>
    </article>
  `}${r.dy`
    <article class="cnt-about">
      <h3>How to</h3>
      <div class="cnt-sub">
        <h4>substitute a player in the formation</h4>
        <p>
          click the button in red, it will open a modal where you can select
          where to position the clicked player
        </p>
        <picture>
          <source srcset=${oo} type="image/webp" />
          <img
            src=${ro}
            alt="substitute button img"
            loading="lazy"
            width="780"
            height="75"
          />
        </picture>
      </div>
      <div>
        <h4>What the auto update formation does</h4>
        <p>
          this option guaranteed that before simulating a match your formation
          will be updated, this is a global setting shared by all your leagues
        </p>
      </div>
      <div>
        <h4>How to save</h4>
        <p>
          you have to two options one is to use the save file button below the
          header, and the other is to use the save button. the second option is
          the slot dedicated to the autosave (the autosave saves only after a
          simulation run, so you have some margin to make mistakes), it uses the
          Browser API
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"
            target="_blank"
            >indexedDB</a
          >, so be careful when you clean the Browser data. The game is still
          playable only using the first option
        </p>
      </div>
    </article>
  `}
  </article>`}
      `,this)}}function io(){const e=new URLSearchParams(location.search),n=e.get("gh-path");n&&(e.delete("gh-path"),history.replaceState({},"",n+"?"+e.toString()+location.hash))}function lo(){customElements.get("sff-layout")||(customElements.get("sff-layout")||customElements.define("sff-layout",p),customElements.get("sff-modal")||customElements.define("sff-modal",O),customElements.get("sff-home")||(customElements.define("sff-home",B),customElements.define("home-main",z),customElements.define("sff-open-new-game",H),customElements.define("sff-load-file",Z),customElements.define("sff-load-game",U)),customElements.get("league-table")||customElements.define("league-table",$e),customElements.get("sff-inbox")||customElements.define("sff-inbox",Se),customElements.get("sff-dashboard")||(customElements.define("sff-dashboard",je),customElements.define("dashboard-next-match",Me)),customElements.get("sff-inbox-page")||customElements.define("sff-inbox-page",De),customElements.get("sff-league")||customElements.define("sff-league",Ne),customElements.get("sff-players")||(customElements.define("sff-players",en),customElements.define("players-table",tn)),customElements.get("sff-player")||(customElements.define("sff-player",un),customElements.define("sign-new-player",gn)),customElements.get("sff-team")||customElements.define("sff-team",Mn),customElements.get("sff-team-finances")||customElements.define("sff-team-finances",Bn),customElements.get("sff-transactions")||customElements.define("sff-transactions",Sr),customElements.get("sff-draft")||customElements.define("sff-draft",Fr),customElements.get("retiring-players")||customElements.define("retiring-players",Hr),customElements.get("sff-trade")||(customElements.define("sff-trade",Wr),customElements.define("sff-trade-page",Jr),customElements.define("sff-trade-offers-page",Qr)),customElements.get("sff-game-manual")||customElements.define("sff-game-manual",so),customElements.get("sff-game-page")||customElements.define("sff-game-page",be)),document.documentElement.classList.add("dark"),document.head.append(i,l);const e=document.createElement("div"),n=window.$modalRoot=document.createElement("div");document.body.append(e,n),(0,a.S1)(e,[{path:`${window.$PUBLIC_PATH}`,content:()=>r.dy`<sff-home></sff-home>`},{path:`${window.$PUBLIC_PATH}:gName/*`,content:e=>r.dy`<sff-game-page .match=${e}></sff-game-page>`}],fe(),io)}},6928:(e,n,t)=>{t.d(n,{F0:()=>c,Lo:()=>r,S1:()=>d,WF:()=>o,XP:()=>l,nt:()=>s});var a=t(3692);function r(e){return e.startsWith("/")&&!e.startsWith(window.$PUBLIC_PATH)?window.$PUBLIC_PATH+e.substring(1):e}function o(e){const n=new URL(r(e),location.href);history.pushState({},"",n),history.pushState({},"",n),history.back()}function s(e){e.currentTarget instanceof HTMLElement&&e.currentTarget.hasAttribute("href")&&(e.preventDefault(),o(e.currentTarget.getAttribute("href")))}const i=new Set,l=new Set;function d(e,n,t,a){0===i.size&&(window.addEventListener("popstate",(()=>i.forEach((e=>e.onUrlUpdate())))),i.add(new c(e,n,t,a)))}class c{constructor(e,n,t,r){this.root=e,this.routes=[],this.defaultContent=a.Ld,this.routes.push(...n),t&&(this.defaultContent=t),i.add(this),this.preRender=r,this.renderContent()}addRoutes(e){this.routes.push(...e)}onUrlUpdate(){this.renderContent()}renderContent(){this.preRender?.();const e=this.routes.find((e=>new URLPattern({pathname:e.path}).test({pathname:location.pathname}))),n=e?new URLPattern({pathname:e.path}).exec({pathname:location.pathname}):null;(0,a.sY)(e?.content(n)??this.defaultContent,this.root),l.forEach((e=>e.onRouteLeave()))}disconnect(){i.delete(this)}}},731:(e,n,t)=>{t.d(n,{Jz:()=>d,Mc:()=>i,fD:()=>l,ZB:()=>s,ut:()=>c,vp:()=>u,$u:()=>o,TV:()=>h});const a=JSON.parse('{"P":{"names":["John","William","James","Charles","George","Frank","Joseph","Thomas","Henry","Robert","Edward","Harry","Walter","Arthur","Fred","Albert","Samuel","David","Louis","Joe","Charlie","Clarence","Richard","Andrew","Daniel","Ernest","Will","Jesse","Oscar","Lewis","Peter","Benjamin","Frederick","Willie","Alfred","Sam","Roy","Herbert","Jacob","Tom","Elmer","Carl","Howard","Martin","Michael","Bert","Herman","Jim","Francis","Harvey","Earl","Eugene","Ralph","Claude","Edwin","Ben","Charley","Paul","Edgar","Isaac","Otto","Luther","Lawrence","Patrick","Oliver","Theodore","Hugh","Clyde","Alexander","August","Floyd","Homer","Jack","Leonard","Horace","Marion","Philip","Allen","Archie","Stephen","Chester","Willie","Raymond","Rufus","Jessie","Milton","Alex","Leo","Julius","Ray","Bernard","Jerry","Calvin","Dave","Anthony","Eddie","Amos","Dennis","Clifford","Leroy","Wesley","Garfield","Franklin","Nathan","Harold","Matthew","Levi","Moses","Lester","Winfield","Adam","Lloyd","Mack","Fredrick","Jay","Melvin","Noah","Aaron","Alvin","Norman","Gilbert","Elijah","Victor","Nelson","Jake","Christopher","Mike","Cornelius","Felix","Wallace","Simon","Mark","Jose","Wilbur","Abraham","Elbert","Leslie","Owen","Morris","Manuel","Phillip","Nicholas","Curtis","Edmund","Jeff","Harrison","Stanley","Russell","Solomon","Clayton","Irving","Mathew","Scott","Hubert","Andy","Emanuel","Joshua","Millard","Wade","Miles","Rudolph","Austin","Bill","Chas","Monroe","Byron","Pete","Chris","Clark","Gustave","Bruce","Marcus","Preston","Bob"],"surnames":["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen","Sanchez","Wright","King","Scott","Green","Baker","Adams","Nelson","Hill","Ramirez","Campbell","Mitchell","Roberts","Carter","Phillips","Evans","Turner","Torres","Parker","Collins","Edwards","Stewart","Flores","Morris","Nguyen","Murphy","Rivera","Cook","Rogers","Morgan","Peterson","Cooper","Reed","Bailey","Bell","Gomez","Kelly","Howard","Ward","Cox","Diaz","Richardson","Wood","Watson","Brooks","Bennett","Gray","James","Reyes","Cruz","Hughes","Price","Myers","Long","Foster","Sanders","Ross","Morales","Powell","Sullivan","Russell","Ortiz","Jenkins","Gutierrez","Perry","Butler","Barnes","Fisher","Henderson","Coleman","Simmons","Patterson","Jordan","Reynolds","Hamilton","Graham","Kim","Gonzales","Alexander","Ramos","Wallace","Griffin","West","Cole","Hayes","Chavez","Gibson","Bryant","Ellis","Stevens","Murray","Ford","Marshall","Owens","Mcdonald","Harrison","Ruiz","Kennedy","Wells","Alvarez","Woods","Mendoza","Castillo","Olson","Webb","Washington","Tucker","Freeman","Burns","Henry","Vasquez","Snyder","Simpson","Crawford","Jimenez","Porter","Mason","Shaw","Gordon","Wagner","Hunter","Romero","Hicks","Dixon","Hunt","Palmer","Robertson","Black","Holmes","Stone","Meyer","Boyd","Mills","Warren","Fox","Rose","Rice","Moreno","Schmidt","Patel","Ferguson","Nichols","Herrera","Medina","Ryan","Fernandez","Weaver","Daniels","Stephens","Gardner","Payne","Kelley","Dunn","Pierce","Arnold","Tran","Spencer","Peters","Hawkins","Grant","Hansen","Castro","Hoffman","Hart","Elliott","Cunningham","Knight","Bradley"]}}');var r=t(5285);function o(){const e=Array.from({length:4},(()=>Math.random()));return e.reduce(((e,n)=>e+n))/e.length}function s(e,n){return e+2*(o()-.5)*n}function i(){return Math.random().toString(36).slice(2)}function l(){const{names:e,surnames:n}=a.P;return`${e[Math.floor(Math.random()*e.length)]} ${n[Math.floor(Math.random()*n.length)]}`}function d(e,n){return(0,r.O4)(function(e,n){if(e<0)throw new Error("age argument can't be negative");const t=Math.floor(365*Math.random());return new Date(n.getFullYear()-e,n.getMonth(),n.getDate()-t)}(e,n))}function c(e,n){const t=new Date(e),a=n.getMonth()-t.getMonth();let r=n.getFullYear()-t.getFullYear();return(a<0||0===a&&n.getDate()<t.getDate())&&r--,r}function p(e,n,t){const a=e[n];e[n]=e[t],e[t]=a}function h(e){for(let n=0;n<e.length;n++)p(e,n,Math.floor(Math.random()*(n+1)));return e}function u(e,n){let t=0;for(let a=0;a<e.length;a++)t=(31*t+e.codePointAt(a))%n;return t}},8096:(e,n,t)=>{t.d(n,{Ac:()=>d,CA:()=>o,J6:()=>r,TK:()=>i,Ti:()=>l,uh:()=>s});var a=t(731);function r(e){return e.reduce(((e,n)=>e+n),0)/e.length}function o(e,n=r(e)){return e.reduce(((e,t)=>e+(t-n)**2),0)/(e.length-1)}function s(e,n,t){if(n>t)throw new Error("the min can be greater than max");return Math.max(n,Math.min(t,e))}function i(e,n){return Math.abs(e-n)}function l(e,n){return Math.round(Math.abs((e.getTime()-n.getTime())/864e5))}function d(e,n){const t=(0,a.ut)(e,n),r=new Date(e);return r.setFullYear(r.getFullYear()+t),Math.round((n.getTime()-r.getTime())/1e3/60/60/24)}},576:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7602),r=t(5210),o=t(7786);const s={endSimOnEvent:r._w,GameState:o.D2,findPlrBy:(e,n)=>Object.values(window.$game.state?.players??{}).filter((t=>t[e]===n)),getImprovabilityRating:e=>e.growthRate/a.jh,getScore(e){const n=window.$game.state,t=n.teams[e].formation?.lineup;return t.reduce(((e,t)=>e+(0,a.F7)(n.players[t.plID],t.sp.pos)),0)}}},5285:(e,n,t)=>{function a(e,n){return e.replace(/\$\{([^}]*)\}/g,((e,t)=>n[t]??""))}function r(e){return e.toISOString().split("T")[0]}function o(e){return location.href===new URL(e,location.origin).href}function s(e,n,t,a,r){return(1-e)**3*n+3*(1-e)**2*e*t+3*(1-e)*e**2*a+e**3*r}function i(e){return e.replace(/([A-Z])/g," $1")}t.d(n,{I2:()=>s,Nj:()=>o,O4:()=>r,dP:()=>i,sX:()=>a})},9837:e=>{e.exports="data:image/svg+xml,%3Csvg version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 512 512%27 fill=%27%232f3237%27 xml:space=%27preserve%27%3E%3Cpath d=%27M464.7,221.5L86.1,7.3C52.5-11.7,25,7.5,25,50v412c0,42.5,27.5,61.7,61.1,42.7l378.6-214.1 C498.2,271.5,498.2,240.5,464.7,221.5z%27%3E%3C/path%3E%3C/svg%3E"},8485:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 height=%2748%27 width=%2748%27 fill=%27%2338363a%27%3E%3Cpath d=%27m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z%27/%3E%3C/svg%3E%0A"},3617:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 height=%2748%27 width=%2748%27 fill=%27%23eee%27%3E%3Cpath d=%27M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z%27/%3E%3C/svg%3E"},9968:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 height=%2748%27 width=%2748%27 fill=%27%23eee%27%3E%3Cpath d=%27m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z%27/%3E%3C/svg%3E%0A"},9588:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 height=%2748%27 width=%2748%27 fill=%27%23eee%27%3E%3Cpath d=%27m19.15 44.3-1.05-6.4q-.85-.3-1.85-.875T14.5 35.85L8.55 38.6 3.6 29.9l5.5-4q-.1-.4-.125-.95-.025-.55-.025-.95 0-.4.025-.95.025-.55.125-.95l-5.5-4 4.95-8.7 6 2.75q.7-.6 1.7-1.15 1-.55 1.85-.85l1.05-6.45h9.7l1.05 6.4q.85.35 1.875.875T33.5 12.15l6-2.75 4.9 8.7-5.5 3.9q.1.45.125 1 .025.55.025 1 0 .45-.025.975-.025.525-.125.975l5.5 3.95-4.95 8.7-6-2.75q-.7.6-1.675 1.2-.975.6-1.875.85l-1.05 6.4ZM24 30.5q2.7 0 4.6-1.9 1.9-1.9 1.9-4.6 0-2.7-1.9-4.6-1.9-1.9-4.6-1.9-2.7 0-4.6 1.9-1.9 1.9-1.9 4.6 0 2.7 1.9 4.6 1.9 1.9 4.6 1.9Z%27/%3E%3C/svg%3E"},9540:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 preserveAspectRatio=%27none%27 viewBox=%270 0 1200 120%27%3E%3Cpath fill=%27%23FFDBFF%27 d=%27M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0Z%27 class=%27shape-fill%27 opacity=%27.25%27/%3E%3Cpath fill=%27%23FFDBFF%27 d=%27M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0Z%27 class=%27shape-fill%27 opacity=%27.5%27/%3E%3Cpath fill=%27%23FFDBFF%27 d=%27M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0Z%27 class=%27shape-fill%27/%3E%3C/svg%3E%0A"},5417:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23eb5d5d%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23eb5d5d%27 stroke=%27none%27/%3e%3c/svg%3e"},4425:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23e6e6e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"},3692:(e,n,t)=>{var a;t.d(n,{Al:()=>z,Jb:()=>S,Ld:()=>C,YP:()=>k,dy:()=>_,sY:()=>T});const r=window,o=r.trustedTypes,s=o?o.createPolicy("lit-html",{createHTML:e=>e}):void 0,i=`lit$${(Math.random()+"").slice(9)}$`,l="?"+i,d=`<${l}>`,c=document,p=(e="")=>c.createComment(e),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,u=Array.isArray,m=e=>u(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,b=/>/g,v=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),y=/'/g,w=/"/g,x=/^(?:script|style|textarea|title)$/i,$=e=>(n,...t)=>({_$litType$:e,strings:n,values:t}),_=$(1),k=$(2),S=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),A=new WeakMap,T=(e,n,t)=>{var a,r;const o=null!==(a=null==t?void 0:t.renderBefore)&&void 0!==a?a:n;let s=o._$litPart$;if(void 0===s){const e=null!==(r=null==t?void 0:t.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new D(n.insertBefore(p(),e),e,void 0,null!=t?t:{})}return s._$AI(e),s},E=c.createTreeWalker(c,129,null,!1),P=(e,n)=>{const t=e.length-1,a=[];let r,o=2===n?"<svg>":"",l=g;for(let n=0;n<t;n++){const t=e[n];let s,c,p=-1,h=0;for(;h<t.length&&(l.lastIndex=h,c=l.exec(t),null!==c);)h=l.lastIndex,l===g?"!--"===c[1]?l=f:void 0!==c[1]?l=b:void 0!==c[2]?(x.test(c[2])&&(r=RegExp("</"+c[2],"g")),l=v):void 0!==c[3]&&(l=v):l===v?">"===c[0]?(l=null!=r?r:g,p=-1):void 0===c[1]?p=-2:(p=l.lastIndex-c[2].length,s=c[1],l=void 0===c[3]?v:'"'===c[3]?w:y):l===w||l===y?l=v:l===f||l===b?l=g:(l=v,r=void 0);const u=l===v&&e[n+1].startsWith("/>")?" ":"";o+=l===g?t+d:p>=0?(a.push(s),t.slice(0,p)+"$lit$"+t.slice(p)+i+u):t+i+(-2===p?(a.push(void 0),n):u)}const c=o+(e[t]||"<?>")+(2===n?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s?s.createHTML(c):c,a]};class j{constructor({strings:e,_$litType$:n},t){let a;this.parts=[];let r=0,s=0;const d=e.length-1,c=this.parts,[h,u]=P(e,n);if(this.el=j.createElement(h,t),E.currentNode=this.el.content,2===n){const e=this.el.content,n=e.firstChild;n.remove(),e.append(...n.childNodes)}for(;null!==(a=E.nextNode())&&c.length<d;){if(1===a.nodeType){if(a.hasAttributes()){const e=[];for(const n of a.getAttributeNames())if(n.endsWith("$lit$")||n.startsWith(i)){const t=u[s++];if(e.push(n),void 0!==t){const e=a.getAttribute(t.toLowerCase()+"$lit$").split(i),n=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:n[2],strings:e,ctor:"."===n[1]?F:"?"===n[1]?N:"@"===n[1]?I:L})}else c.push({type:6,index:r})}for(const n of e)a.removeAttribute(n)}if(x.test(a.tagName)){const e=a.textContent.split(i),n=e.length-1;if(n>0){a.textContent=o?o.emptyScript:"";for(let t=0;t<n;t++)a.append(e[t],p()),E.nextNode(),c.push({type:2,index:++r});a.append(e[n],p())}}}else if(8===a.nodeType)if(a.data===l)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=a.data.indexOf(i,e+1));)c.push({type:7,index:r}),e+=i.length-1}r++}}static createElement(e,n){const t=c.createElement("template");return t.innerHTML=e,t}}function M(e,n,t=e,a){var r,o,s,i;if(n===S)return n;let l=void 0!==a?null===(r=t._$Cl)||void 0===r?void 0:r[a]:t._$Cu;const d=h(n)?void 0:n._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,t,a)),void 0!==a?(null!==(s=(i=t)._$Cl)&&void 0!==s?s:i._$Cl=[])[a]=l:t._$Cu=l),void 0!==l&&(n=M(e,l._$AS(e,n.values),l,a)),n}class O{constructor(e,n){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var n;const{el:{content:t},parts:a}=this._$AD,r=(null!==(n=null==e?void 0:e.creationScope)&&void 0!==n?n:c).importNode(t,!0);E.currentNode=r;let o=E.nextNode(),s=0,i=0,l=a[0];for(;void 0!==l;){if(s===l.index){let n;2===l.type?n=new D(o,o.nextSibling,this,e):1===l.type?n=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(n=new B(o,this,e)),this.v.push(n),l=a[++i]}s!==(null==l?void 0:l.index)&&(o=E.nextNode(),s++)}return r}m(e){let n=0;for(const t of this.v)void 0!==t&&(void 0!==t.strings?(t._$AI(e,t,n),n+=t.strings.length-2):t._$AI(e[n])),n++}}class D{constructor(e,n,t,a){var r;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=t,this.options=a,this._$C_=null===(r=null==a?void 0:a.isConnected)||void 0===r||r}get _$AU(){var e,n;return null!==(n=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==n?n:this._$C_}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return void 0!==n&&11===e.nodeType&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=M(this,e,n),h(e)?e===C||null==e||""===e?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==S&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):m(e)?this.O(e):this.$(e)}S(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}$(e){this._$AH!==C&&h(this._$AH)?this._$AA.nextSibling.data=e:this.k(c.createTextNode(e)),this._$AH=e}T(e){var n;const{values:t,_$litType$:a}=e,r="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=j.createElement(a.h,this.options)),a);if((null===(n=this._$AH)||void 0===n?void 0:n._$AD)===r)this._$AH.m(t);else{const e=new O(r,this),n=e.p(this.options);e.m(t),this.k(n),this._$AH=e}}_$AC(e){let n=A.get(e.strings);return void 0===n&&A.set(e.strings,n=new j(e)),n}O(e){u(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let t,a=0;for(const r of e)a===n.length?n.push(t=new D(this.S(p()),this.S(p()),this,this.options)):t=n[a],t._$AI(r),a++;a<n.length&&(this._$AR(t&&t._$AB.nextSibling,a),n.length=a)}_$AR(e=this._$AA.nextSibling,n){var t;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,n);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var n;void 0===this._$AM&&(this._$C_=e,null===(n=this._$AP)||void 0===n||n.call(this,e))}}class L{constructor(e,n,t,a,r){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=n,this._$AM=a,this.options=r,t.length>2||""!==t[0]||""!==t[1]?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,t,a){const r=this.strings;let o=!1;if(void 0===r)e=M(this,e,n,0),o=!h(e)||e!==this._$AH&&e!==S,o&&(this._$AH=e);else{const a=e;let s,i;for(e=r[0],s=0;s<r.length-1;s++)i=M(this,a[t+s],n,s),i===S&&(i=this._$AH[s]),o||(o=!h(i)||i!==this._$AH[s]),i===C?e=C:e!==C&&(e+=(null!=i?i:"")+r[s+1]),this._$AH[s]=i}o&&!a&&this.P(e)}P(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class F extends L{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===C?void 0:e}}const R=o?o.emptyScript:"";class N extends L{constructor(){super(...arguments),this.type=4}P(e){e&&e!==C?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name)}}class I extends L{constructor(e,n,t,a,r){super(e,n,t,a,r),this.type=5}_$AI(e,n=this){var t;if((e=null!==(t=M(this,e,n,0))&&void 0!==t?t:C)===S)return;const a=this._$AH,r=e===C&&a!==C||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==C&&(a===C||r);r&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,t;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(n=this.options)||void 0===n?void 0:n.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}class B{constructor(e,n,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}const z={A:"$lit$",M:i,C:l,L:1,R:P,D:O,V:m,I:M,H:D,N:L,U:N,B:I,F,W:B},H=r.litHtmlPolyfillSupport;null==H||H(j,D),(null!==(a=r.litHtmlVersions)&&void 0!==a?a:r.litHtmlVersions=[]).push("2.3.1")},63:e=>{e.exports=JSON.parse('{"Moon":{"fanBase":"big","colors":["#dcdcdc","#738276"]},"Earth":{"fanBase":"huge","colors":["#0097d8","#228b22"]},"Mercury":{"fanBase":"very small","colors":["#bde038","#fdfff5"]},"Venus":{"fanBase":"small","colors":["#e1ad21","#faebd7"]},"Mars":{"fanBase":"big","colors":["#C43302","#f2f3f4"]},"Jupiter":{"fanBase":"small","colors":["#d77f57","#f2f3f4"]},"Uranus":{"fanBase":"small","colors":["#008b8b","#0b634e"]},"Neptune":{"fanBase":"small","colors":["#1f8eed","#f2f3f4"]},"Callisto":{"fanBase":"medium","colors":["#ffff40","#080808"]},"Europa":{"fanBase":"big","colors":["#9f00ff","#080808"]},"Pluto":{"fanBase":"small","colors":["#A6874E","#f2f3f4"]},"Ceres":{"fanBase":"medium","colors":["#ffff40","#4E5754"]},"Enceladus":{"fanBase":"big","colors":["#47402E","#eaeef1"]},"Titan":{"fanBase":"small","colors":["#eaeef1","#212121"]},"Triton":{"fanBase":"small","colors":["#dfe6f0","#2F4538"]},"Charon":{"fanBase":"medium","colors":["#e1e5e6","#641C34"]},"Pandora":{"fanBase":"medium","colors":["#1D1E33","#f5f5f5"]},"Oberon":{"fanBase":"very small","colors":["#fef9f3","#642424"]},"Ariel":{"fanBase":"very small","colors":["#E4A010","#317F43"]},"Deimos":{"fanBase":"very small","colors":["#CBD0CC","#1E213D"]}}')}},i={};function l(e){var n=i[e];if(void 0!==n)return n.exports;var t=i[e]={id:e,exports:{}};return s[e](t,t.exports,l),t.exports}l.m=s,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(r,o,s)=>{var i;s&&((i=[]).d=1);var l,d,c,p=new Set,h=r.exports,u=new Promise(((e,n)=>{c=n,d=e}));u[n]=h,u[e]=e=>(i&&e(i),p.forEach(e),u.catch((e=>{}))),r.exports=u,o((r=>{var o;l=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var o=[];o.d=0,r.then((e=>{s[n]=e,a(o)}),(e=>{s[t]=e,a(o)}));var s={};return s[e]=e=>e(o),s}}var i={};return i[e]=e=>{},i[n]=r,i})))(r);var s=()=>l.map((e=>{if(e[t])throw e[t];return e[n]})),d=new Promise((n=>{(o=()=>n(s)).r=0;var t=e=>e!==i&&!p.has(e)&&(p.add(e),e&&!e.d&&(o.r++,e.push(o)));l.map((n=>n[e](t)))}));return o.r?d:s()}),(e=>(e?c(u[t]=e):d(h),a(i)))),i&&(i.d=0)},l.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return l.d(n,{a:n}),n},l.d=(e,n)=>{for(var t in n)l.o(n,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((n,t)=>(l.f[t](e,n),n)),[])),l.u=e=>e+".js",l.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r={},o="space-fantasy-football:",l.l=(e,n,t,a)=>{if(r[e])r[e].push(n);else{var s,i;if(void 0!==t)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var p=d[c];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==o+t){s=p;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.setAttribute("data-webpack",o+t),s.src=e),r[e]=[n];var h=(n,t)=>{s.onerror=s.onload=null,clearTimeout(u);var a=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(t))),n)return n(t)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),i&&document.head.appendChild(s)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/fg/",(()=>{l.b=document.baseURI||self.location.href;var e={179:0};l.f.j=(n,t)=>{var a=l.o(e,n)?e[n]:void 0;if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(((t,r)=>a=e[n]=[t,r]));t.push(a[2]=r);var o=l.p+l.u(n),s=new Error;l.l(o,(t=>{if(l.o(e,n)&&(0!==(a=e[n])&&(e[n]=void 0),a)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+n+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,a[1](s)}}),"chunk-"+n,n)}};var n=(n,t)=>{var a,r,[o,s,i]=t,d=0;if(o.some((n=>0!==e[n]))){for(a in s)l.o(s,a)&&(l.m[a]=s[a]);i&&i(l)}for(n&&n(t);d<o.length;d++)r=o[d],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0},t=self.webpackChunkspace_fantasy_football=self.webpackChunkspace_fantasy_football||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),l(3607)})();