import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-padel-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './padel-detail.component.html',
  styleUrl: './padel-detail.component.scss'
})
export class PadelDetailComponent {
  jugador: any;
  padelId: any;

  jugadores = [
    { id: 1, nombre: 'Arturo Coello', bandera: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#f1c142" d="M1 10H31V22H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z" fill="#a0251e"></path><path d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24.5)" fill="#a0251e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path d="M12.614,13.091c.066-.031,.055-.14-.016-.157,.057-.047,.02-.15-.055-.148,.04-.057-.012-.144-.082-.13,.021-.062-.042-.127-.104-.105,.01-.068-.071-.119-.127-.081,.004-.068-.081-.112-.134-.069-.01-.071-.11-.095-.15-.035-.014-.068-.111-.087-.149-.028-.027-.055-.114-.057-.144-.004-.03-.047-.107-.045-.136,.002-.018-.028-.057-.044-.09-.034,.009-.065-.066-.115-.122-.082,.002-.07-.087-.111-.138-.064-.013-.064-.103-.087-.144-.036-.02-.063-.114-.075-.148-.017-.036-.056-.129-.042-.147,.022-.041-.055-.135-.031-.146,.036-.011-.008-.023-.014-.037-.016,.006-.008,.01-.016,.015-.025h.002c.058-.107,.004-.256-.106-.298v-.098h.099v-.154h-.099v-.101h-.151v.101h-.099v.154h.099v.096c-.113,.04-.169,.191-.11,.299h.002c.004,.008,.009,.017,.014,.024-.015,.002-.029,.008-.04,.017-.011-.067-.106-.091-.146-.036-.018-.064-.111-.078-.147-.022-.034-.057-.128-.046-.148,.017-.041-.052-.131-.028-.144,.036-.051-.047-.139-.006-.138,.064-.056-.033-.131,.017-.122,.082-.034-.01-.072,.006-.091,.034-.029-.047-.106-.049-.136-.002-.03-.054-.117-.051-.143,.004-.037-.059-.135-.04-.149,.028-.039-.06-.14-.037-.15,.035-.053-.043-.138,0-.134,.069-.056-.038-.137,.013-.127,.081-.062-.021-.125,.044-.104,.105-.05-.009-.096,.033-.096,.084h0c0,.017,.005,.033,.014,.047-.075-.002-.111,.101-.055,.148-.071,.017-.082,.125-.016,.157-.061,.035-.047,.138,.022,.154-.013,.015-.021,.034-.021,.055h0c0,.042,.03,.077,.069,.084-.023,.048,.009,.11,.06,.118-.013,.03-.012,.073-.012,.106,.09-.019,.2,.006,.239,.11-.015,.068,.065,.156,.138,.146,.06,.085,.133,.165,.251,.197-.021,.093,.064,.093,.123,.118-.013,.016-.043,.063-.055,.081,.024,.013,.087,.041,.113,.051,.005,.019,.004,.028,.004,.031,.091,.501,2.534,.502,2.616-.001v-.002s.004,.003,.004,.004c0-.003-.001-.011,.004-.031l.118-.042-.062-.09c.056-.028,.145-.025,.123-.119,.119-.032,.193-.112,.253-.198,.073,.01,.153-.078,.138-.146,.039-.104,.15-.129,.239-.11,0-.035,.002-.078-.013-.109,.044-.014,.07-.071,.049-.115,.062-.009,.091-.093,.048-.139,.069-.016,.083-.12,.022-.154Zm-.296-.114c0,.049-.012,.098-.034,.141-.198-.137-.477-.238-.694-.214-.002-.009-.006-.017-.011-.024,0,0,0-.001,0-.002,.064-.021,.074-.12,.015-.153,0,0,0,0,0,0,.048-.032,.045-.113-.005-.141,.328-.039,.728,.09,.728,.393Zm-.956-.275c0,.063-.02,.124-.054,.175-.274-.059-.412-.169-.717-.185-.007-.082-.005-.171-.011-.254,.246-.19,.81-.062,.783,.264Zm-1.191-.164c-.002,.05-.003,.102-.007,.151-.302,.013-.449,.122-.719,.185-.26-.406,.415-.676,.73-.436-.002,.033-.005,.067-.004,.101Zm-1.046,.117c0,.028,.014,.053,.034,.069,0,0,0,0,0,0-.058,.033-.049,.132,.015,.152,0,0,0,.001,0,.002-.005,.007-.008,.015-.011,.024-.219-.024-.495,.067-.698,.206-.155-.377,.323-.576,.698-.525-.023,.015-.039,.041-.039,.072Zm3.065-.115s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Zm-3.113,1.798v.002s-.002,0-.003,.002c0-.001,.002-.003,.003-.003Z" fill="#9b8028"></path><path d="M14.133,16.856c.275-.65,.201-.508-.319-.787v-.873c.149-.099-.094-.121,.05-.235h.072v-.339h-.99v.339h.075c.136,.102-.091,.146,.05,.235v.76c-.524-.007-.771,.066-.679,.576h.039s0,0,0,0l.016,.036c.14-.063,.372-.107,.624-.119v.224c-.384,.029-.42,.608,0,.8v1.291c-.053,.017-.069,.089-.024,.123,.007,.065-.058,.092-.113,.083,0,.026,0,.237,0,.269-.044,.024-.113,.03-.17,.028v.108s0,0,0,0v.107s0,0,0,0v.107s0,0,0,0v.108s0,0,0,0v.186c.459-.068,.895-.068,1.353,0v-.616c-.057,.002-.124-.004-.17-.028,0-.033,0-.241,0-.268-.054,.008-.118-.017-.113-.081,.048-.033,.034-.108-.021-.126v-.932c.038,.017,.073,.035,.105,.053-.105,.119-.092,.326,.031,.429l.057-.053c.222-.329,.396-.743-.193-.896v-.35c.177-.019,.289-.074,.319-.158Z" fill="#9b8028"></path><path d="M8.36,16.058c-.153-.062-.39-.098-.653-.102v-.76c.094-.041,.034-.115-.013-.159,.02-.038,.092-.057,.056-.115h.043v-.261h-.912v.261h.039c-.037,.059,.039,.078,.057,.115-.047,.042-.108,.118-.014,.159v.873c-.644,.133-.611,.748,0,.945v.35c-.59,.154-.415,.567-.193,.896l.057,.053c.123-.103,.136-.31,.031-.429,.032-.018,.067-.036,.105-.053v.932c-.055,.018-.069,.093-.021,.126,.005,.064-.059,.089-.113,.081,0,.026,0,.236,0,.268-.045,.024-.113,.031-.17,.028v.401h0v.215c.459-.068,.895-.068,1.352,0v-.186s0,0,0,0v-.108s0,0,0,0v-.107s0,0,0,0v-.107s0,0,0,0v-.108c-.056,.002-.124-.004-.169-.028,0-.033,0-.241,0-.269-.055,.008-.119-.018-.113-.083,.045-.034,.03-.107-.024-.124v-1.29c.421-.192,.383-.772,0-.8v-.224c.575,.035,.796,.314,.653-.392Z" fill="#9b8028"></path><path d="M12.531,14.533h-4.28l.003,2.572v1.485c0,.432,.226,.822,.591,1.019,.473,.252,1.024,.391,1.552,.391s1.064-.135,1.544-.391c.364-.197,.591-.587,.591-1.019v-4.057Z" fill="#a0251e"></path></svg>'), nacimiento: 'ESP - Valladolid', puntos: 'Puntos | 14258', src: 'https://www.padelfip.com/wp-content/uploads/2023/02/01-COELLO-662x1024.png' },
    { id: 2, nombre: 'Agustín Tapia', bandera: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#81acdc"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#81acdc"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M19.511,15.935c-.02-.007-.04-.007-.041-.007l-1.938-.073c.085-.024,.165-.053,.243-.082,.179-.066,.347-.129,.556-.11,.322,.029,.54-.092,.7-.18,.057-.031,.106-.059,.148-.072,.088-.029,.155-.006,.203,.01,.037,.013,.082,.028,.103-.015,.006-.013,.013-.038-.012-.072-.046-.062-.179-.117-.363-.09-.084,.012-.148,.042-.216,.074-.127,.059-.27,.126-.608,.099-.266-.021-.429,.032-.587,.084-.091,.03-.178,.058-.282,.071l1.814-.833s.02-.008,.036-.022c.026-.023,.035-.052,.023-.08-.007-.016-.019-.028-.034-.035-.034-.014-.075,.002-.079,.004l-1.819,.674c.069-.054,.132-.112,.193-.169,.14-.13,.271-.252,.471-.315,.308-.096,.464-.292,.578-.434,.041-.051,.076-.095,.109-.124,.07-.06,.141-.065,.192-.068,.039-.003,.087-.006,.09-.053,0-.014-.003-.04-.038-.062-.066-.04-.21-.04-.369,.056-.073,.044-.121,.096-.171,.151-.094,.103-.201,.22-.524,.324-.254,.082-.384,.194-.51,.302-.072,.062-.142,.122-.233,.174l1.357-1.463c.032-.032,.05-.082,.016-.117-.012-.012-.028-.019-.045-.019-.037,0-.068,.031-.071,.034l-1.422,1.319c.043-.077,.079-.154,.114-.23,.079-.173,.154-.337,.315-.471,.248-.207,.317-.447,.368-.622,.018-.063,.034-.117,.054-.156,.042-.083,.105-.114,.151-.136,.035-.017,.078-.038,.063-.083-.005-.013-.018-.036-.059-.042-.076-.012-.209,.044-.32,.193-.051,.069-.075,.135-.1,.205-.048,.131-.102,.28-.361,.5-.203,.173-.281,.326-.356,.474-.043,.085-.085,.167-.149,.25l.694-1.871c.017-.042,.015-.095-.03-.114-.016-.007-.033-.007-.049,0-.034,.014-.051,.055-.053,.058l-.809,1.763c.011-.087,.014-.172,.017-.256,.007-.19,.014-.37,.111-.556,.15-.286,.122-.534,.102-.716-.007-.065-.014-.12-.01-.165,.007-.092,.053-.145,.087-.184,.026-.029,.058-.065,.026-.101-.009-.01-.031-.026-.071-.017-.075,.018-.177,.12-.222,.301-.021,.083-.018,.153-.015,.227,.006,.14,.013,.298-.142,.6-.122,.237-.135,.409-.147,.574-.007,.095-.014,.187-.042,.288l-.075-1.994c0-.045-.022-.094-.072-.094h0c-.03,0-.054,.019-.065,.052-.007,.02-.007,.039-.007,.041l-.073,1.938c-.024-.085-.053-.165-.082-.243-.066-.179-.129-.347-.11-.556,.029-.322-.092-.54-.18-.7-.031-.057-.059-.106-.072-.148-.029-.088-.006-.155,.01-.203,.013-.037,.028-.082-.015-.103-.013-.006-.039-.013-.072,.012-.062,.046-.117,.179-.09,.363,.012,.084,.042,.148,.074,.216,.059,.127,.126,.27,.099,.608-.021,.266,.032,.429,.084,.587,.03,.091,.058,.178,.071,.282l-.833-1.814c-.017-.042-.056-.078-.102-.059-.028,.012-.043,.038-.04,.073,.001,.021,.009,.039,.009,.04l.674,1.818c-.054-.069-.112-.132-.169-.193-.13-.14-.252-.271-.315-.471-.096-.308-.292-.464-.434-.578-.051-.041-.095-.076-.124-.109-.06-.07-.065-.141-.068-.192-.003-.039-.006-.087-.053-.09-.014,0-.04,.003-.062,.038-.04,.066-.04,.21,.056,.369,.044,.073,.096,.121,.151,.171,.103,.094,.22,.201,.324,.524,.082,.254,.194,.384,.302,.51,.062,.072,.122,.142,.174,.234l-1.463-1.357c-.032-.032-.082-.05-.117-.015-.021,.021-.025,.052-.009,.083,.009,.019,.023,.033,.024,.033l1.319,1.422c-.077-.043-.154-.079-.23-.114-.173-.079-.337-.154-.471-.315-.207-.248-.447-.317-.623-.368-.062-.018-.116-.034-.156-.054-.083-.042-.114-.105-.136-.151-.017-.035-.038-.078-.083-.062-.013,.005-.036,.018-.042,.059-.012,.076,.044,.209,.193,.32,.069,.051,.135,.075,.205,.1,.131,.048,.28,.102,.5,.361,.173,.203,.326,.281,.474,.356,.085,.043,.167,.085,.25,.149l-1.871-.694c-.042-.017-.095-.015-.114,.03-.007,.016-.007,.033,0,.049,.014,.034,.055,.051,.058,.053l1.763,.809c-.087-.011-.172-.014-.256-.017-.19-.007-.37-.014-.556-.111-.286-.15-.535-.122-.716-.101-.065,.007-.12,.014-.165,.01-.092-.007-.145-.054-.184-.087-.029-.026-.065-.057-.101-.026-.01,.009-.026,.031-.017,.071,.018,.075,.12,.177,.301,.222,.083,.021,.153,.018,.227,.015,.14-.006,.298-.013,.6,.142,.237,.122,.409,.135,.574,.147,.095,.007,.187,.014,.288,.042l-1.994,.075h0c-.045,0-.093,.022-.094,.072,0,.017,.006,.033,.018,.045,.026,.026,.07,.027,.074,.027l1.938,.073c-.085,.023-.165,.053-.243,.082-.179,.066-.347,.129-.556,.11-.322-.029-.54,.092-.7,.18-.057,.031-.106,.059-.148,.072-.088,.029-.155,.006-.203-.01-.037-.013-.082-.028-.103,.015-.006,.013-.013,.038,.012,.072,.046,.062,.179,.117,.363,.09,.084-.012,.148-.042,.216-.074,.127-.059,.27-.126,.608-.099,.266,.021,.429-.032,.587-.084,.091-.03,.178-.058,.282-.071l-1.814,.833c-.042,.017-.078,.056-.059,.102,.011,.026,.034,.04,.065,.04,.002,0,.005,0,.007,0,.021-.001,.039-.009,.04-.009l1.818-.674c-.069,.054-.132,.112-.193,.169-.14,.13-.271,.252-.471,.315-.308,.096-.464,.292-.578,.434-.041,.051-.076,.095-.109,.124-.07,.06-.141,.065-.192,.068-.039,.002-.087,.006-.09,.053,0,.014,.003,.04,.038,.062,.066,.04,.21,.04,.369-.056,.073-.044,.121-.096,.171-.151,.094-.103,.201-.22,.524-.324,.254-.082,.384-.194,.51-.302,.072-.062,.142-.122,.233-.174l-1.357,1.463c-.032,.032-.05,.082-.015,.117,.012,.013,.028,.019,.045,.019,.012,0,.025-.003,.038-.01,.019-.009,.033-.023,.033-.024l1.422-1.319c-.043,.077-.079,.154-.114,.23-.079,.173-.154,.337-.315,.471-.248,.207-.317,.447-.368,.623-.018,.063-.034,.116-.054,.156-.042,.083-.105,.114-.151,.137-.035,.017-.078,.038-.062,.083,.005,.013,.018,.036,.059,.042,.076,.012,.209-.044,.32-.193,.051-.068,.075-.135,.1-.205,.048-.131,.102-.28,.361-.5,.203-.173,.281-.326,.356-.474,.043-.085,.085-.167,.149-.25l-.694,1.871c-.017,.042-.015,.095,.03,.114,.008,.003,.017,.005,.025,.005,.008,0,.016-.002,.024-.005,.034-.014,.051-.055,.053-.058l.809-1.763c-.011,.087-.014,.172-.017,.256-.007,.19-.014,.37-.111,.556-.15,.286-.122,.535-.101,.716,.007,.065,.014,.12,.01,.165-.007,.092-.054,.145-.087,.184-.026,.029-.057,.065-.026,.101,.009,.01,.031,.026,.071,.016,.075-.018,.177-.12,.222-.301,.021-.083,.018-.153,.015-.227-.006-.14-.013-.298,.142-.6,.122-.237,.135-.409,.147-.574,.007-.095,.014-.187,.042-.288l.075,1.994c0,.045,.022,.094,.072,.094,.03,0,.054-.019,.065-.052,.007-.02,.007-.039,.007-.041l.073-1.938c.024,.085,.053,.165,.082,.243,.066,.179,.129,.347,.11,.556-.029,.322,.092,.54,.18,.7,.031,.057,.059,.106,.072,.148,.029,.088,.006,.155-.01,.203-.013,.037-.028,.082,.015,.103,.006,.003,.014,.006,.025,.006,.013,0,.029-.004,.047-.017,.062-.046,.117-.179,.09-.363-.012-.084-.042-.148-.074-.216-.059-.127-.126-.27-.099-.608,.021-.266-.032-.429-.084-.587-.03-.091-.058-.178-.071-.282l.833,1.814s.008,.02,.022,.036c.023,.026,.052,.035,.08,.023,.016-.007,.028-.019,.035-.034,.014-.034-.002-.075-.004-.079l-.674-1.818c.054,.069,.112,.132,.169,.193,.13,.14,.252,.271,.315,.471,.096,.308,.292,.464,.434,.578,.051,.041,.095,.076,.124,.109,.06,.07,.065,.141,.068,.192,.002,.039,.006,.087,.053,.09,0,0,.002,0,.003,0,.014,0,.039-.006,.059-.038,.04-.066,.04-.21-.056-.369-.044-.073-.096-.121-.151-.171-.103-.094-.22-.201-.324-.524-.082-.254-.194-.384-.302-.51-.062-.072-.122-.142-.173-.233l1.463,1.357c.032,.032,.082,.05,.117,.015,.021-.021,.025-.051,.009-.083-.009-.019-.023-.033-.024-.033l-1.319-1.422c.077,.043,.154,.079,.23,.114,.173,.079,.337,.154,.471,.315,.207,.248,.447,.317,.622,.368,.063,.018,.116,.034,.156,.054,.083,.042,.114,.105,.137,.151,.015,.03,.032,.066,.065,.066,.006,0,.012-.001,.018-.003,.013-.005,.036-.018,.042-.059,.012-.076-.044-.209-.193-.32-.068-.051-.135-.075-.205-.1-.131-.048-.28-.102-.5-.361-.173-.203-.326-.281-.474-.356-.085-.043-.167-.085-.25-.149l1.871,.694c.042,.017,.095,.015,.114-.03,.007-.016,.007-.033,0-.049-.014-.034-.055-.051-.058-.053l-1.763-.809c.087,.011,.172,.014,.256,.017,.19,.007,.37,.014,.556,.111,.286,.15,.535,.122,.716,.102,.065-.007,.12-.014,.165-.01,.093,.007,.145,.053,.184,.087,.02,.018,.044,.039,.069,.039,.011,0,.021-.004,.032-.013,.01-.009,.026-.031,.016-.071-.018-.075-.12-.177-.301-.222-.083-.021-.153-.018-.227-.015-.14,.006-.298,.013-.6-.142-.237-.122-.409-.135-.574-.147-.095-.007-.187-.014-.288-.042l1.994-.075h0c.045,0,.093-.022,.093-.072,0-.03-.019-.054-.052-.065Z" fill="#edb840"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>'), nacimiento: 'ARG - Catamarca', puntos: 'Puntos | 12990', src: 'https://www.padelfip.com/wp-content/uploads/2023/02/04-TAPIA-2-662x1024.png' },
    { id: 3, nombre: 'Alejandro Galán', bandera: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#f1c142" d="M1 10H31V22H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z" fill="#a0251e"></path><path d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24.5)" fill="#a0251e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path d="M12.614,13.091c.066-.031,.055-.14-.016-.157,.057-.047,.02-.15-.055-.148,.04-.057-.012-.144-.082-.13,.021-.062-.042-.127-.104-.105,.01-.068-.071-.119-.127-.081,.004-.068-.081-.112-.134-.069-.01-.071-.11-.095-.15-.035-.014-.068-.111-.087-.149-.028-.027-.055-.114-.057-.144-.004-.03-.047-.107-.045-.136,.002-.018-.028-.057-.044-.09-.034,.009-.065-.066-.115-.122-.082,.002-.07-.087-.111-.138-.064-.013-.064-.103-.087-.144-.036-.02-.063-.114-.075-.148-.017-.036-.056-.129-.042-.147,.022-.041-.055-.135-.031-.146,.036-.011-.008-.023-.014-.037-.016,.006-.008,.01-.016,.015-.025h.002c.058-.107,.004-.256-.106-.298v-.098h.099v-.154h-.099v-.101h-.151v.101h-.099v.154h.099v.096c-.113,.04-.169,.191-.11,.299h.002c.004,.008,.009,.017,.014,.024-.015,.002-.029,.008-.04,.017-.011-.067-.106-.091-.146-.036-.018-.064-.111-.078-.147-.022-.034-.057-.128-.046-.148,.017-.041-.052-.131-.028-.144,.036-.051-.047-.139-.006-.138,.064-.056-.033-.131,.017-.122,.082-.034-.01-.072,.006-.091,.034-.029-.047-.106-.049-.136-.002-.03-.054-.117-.051-.143,.004-.037-.059-.135-.04-.149,.028-.039-.06-.14-.037-.15,.035-.053-.043-.138,0-.134,.069-.056-.038-.137,.013-.127,.081-.062-.021-.125,.044-.104,.105-.05-.009-.096,.033-.096,.084h0c0,.017,.005,.033,.014,.047-.075-.002-.111,.101-.055,.148-.071,.017-.082,.125-.016,.157-.061,.035-.047,.138,.022,.154-.013,.015-.021,.034-.021,.055h0c0,.042,.03,.077,.069,.084-.023,.048,.009,.11,.06,.118-.013,.03-.012,.073-.012,.106,.09-.019,.2,.006,.239,.11-.015,.068,.065,.156,.138,.146,.06,.085,.133,.165,.251,.197-.021,.093,.064,.093,.123,.118-.013,.016-.043,.063-.055,.081,.024,.013,.087,.041,.113,.051,.005,.019,.004,.028,.004,.031,.091,.501,2.534,.502,2.616-.001v-.002s.004,.003,.004,.004c0-.003-.001-.011,.004-.031l.118-.042-.062-.09c.056-.028,.145-.025,.123-.119,.119-.032,.193-.112,.253-.198,.073,.01,.153-.078,.138-.146,.039-.104,.15-.129,.239-.11,0-.035,.002-.078-.013-.109,.044-.014,.07-.071,.049-.115,.062-.009,.091-.093,.048-.139,.069-.016,.083-.12,.022-.154Zm-.296-.114c0,.049-.012,.098-.034,.141-.198-.137-.477-.238-.694-.214-.002-.009-.006-.017-.011-.024,0,0,0-.001,0-.002,.064-.021,.074-.12,.015-.153,0,0,0,0,0,0,.048-.032,.045-.113-.005-.141,.328-.039,.728,.09,.728,.393Zm-.956-.275c0,.063-.02,.124-.054,.175-.274-.059-.412-.169-.717-.185-.007-.082-.005-.171-.011-.254,.246-.19,.81-.062,.783,.264Zm-1.191-.164c-.002,.05-.003,.102-.007,.151-.302,.013-.449,.122-.719,.185-.26-.406,.415-.676,.73-.436-.002,.033-.005,.067-.004,.101Zm-1.046,.117c0,.028,.014,.053,.034,.069,0,0,0,0,0,0-.058,.033-.049,.132,.015,.152,0,0,0,.001,0,.002-.005,.007-.008,.015-.011,.024-.219-.024-.495,.067-.698,.206-.155-.377,.323-.576,.698-.525-.023,.015-.039,.041-.039,.072Zm3.065-.115s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Zm-3.113,1.798v.002s-.002,0-.003,.002c0-.001,.002-.003,.003-.003Z" fill="#9b8028"></path><path d="M14.133,16.856c.275-.65,.201-.508-.319-.787v-.873c.149-.099-.094-.121,.05-.235h.072v-.339h-.99v.339h.075c.136,.102-.091,.146,.05,.235v.76c-.524-.007-.771,.066-.679,.576h.039s0,0,0,0l.016,.036c.14-.063,.372-.107,.624-.119v.224c-.384,.029-.42,.608,0,.8v1.291c-.053,.017-.069,.089-.024,.123,.007,.065-.058,.092-.113,.083,0,.026,0,.237,0,.269-.044,.024-.113,.03-.17,.028v.108s0,0,0,0v.107s0,0,0,0v.107s0,0,0,0v.108s0,0,0,0v.186c.459-.068,.895-.068,1.353,0v-.616c-.057,.002-.124-.004-.17-.028,0-.033,0-.241,0-.268-.054,.008-.118-.017-.113-.081,.048-.033,.034-.108-.021-.126v-.932c.038,.017,.073,.035,.105,.053-.105,.119-.092,.326,.031,.429l.057-.053c.222-.329,.396-.743-.193-.896v-.35c.177-.019,.289-.074,.319-.158Z" fill="#9b8028"></path><path d="M8.36,16.058c-.153-.062-.39-.098-.653-.102v-.76c.094-.041,.034-.115-.013-.159,.02-.038,.092-.057,.056-.115h.043v-.261h-.912v.261h.039c-.037,.059,.039,.078,.057,.115-.047,.042-.108,.118-.014,.159v.873c-.644,.133-.611,.748,0,.945v.35c-.59,.154-.415,.567-.193,.896l.057,.053c.123-.103,.136-.31,.031-.429,.032-.018,.067-.036,.105-.053v.932c-.055,.018-.069,.093-.021,.126,.005,.064-.059,.089-.113,.081,0,.026,0,.236,0,.268-.045,.024-.113,.031-.17,.028v.401h0v.215c.459-.068,.895-.068,1.352,0v-.186s0,0,0,0v-.108s0,0,0,0v-.107s0,0,0,0v-.107s0,0,0,0v-.108c-.056,.002-.124-.004-.169-.028,0-.033,0-.241,0-.269-.055,.008-.119-.018-.113-.083,.045-.034,.03-.107-.024-.124v-1.29c.421-.192,.383-.772,0-.8v-.224c.575,.035,.796,.314,.653-.392Z" fill="#9b8028"></path><path d="M12.531,14.533h-4.28l.003,2.572v1.485c0,.432,.226,.822,.591,1.019,.473,.252,1.024,.391,1.552,.391s1.064-.135,1.544-.391c.364-.197,.591-.587,.591-1.019v-4.057Z" fill="#a0251e"></path></svg>'),nacimiento: 'ESP - Madrid', puntos: 'Puntos | 12974', src: 'https://www.padelfip.com/wp-content/uploads/2023/02/02-GALAN-662x1024.png' },
    { id: 4, nombre: 'Federico Chingotto', bandera: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#81acdc"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#81acdc"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M19.511,15.935c-.02-.007-.04-.007-.041-.007l-1.938-.073c.085-.024,.165-.053,.243-.082,.179-.066,.347-.129,.556-.11,.322,.029,.54-.092,.7-.18,.057-.031,.106-.059,.148-.072,.088-.029,.155-.006,.203,.01,.037,.013,.082,.028,.103-.015,.006-.013,.013-.038-.012-.072-.046-.062-.179-.117-.363-.09-.084,.012-.148,.042-.216,.074-.127,.059-.27,.126-.608,.099-.266-.021-.429,.032-.587,.084-.091,.03-.178,.058-.282,.071l1.814-.833s.02-.008,.036-.022c.026-.023,.035-.052,.023-.08-.007-.016-.019-.028-.034-.035-.034-.014-.075,.002-.079,.004l-1.819,.674c.069-.054,.132-.112,.193-.169,.14-.13,.271-.252,.471-.315,.308-.096,.464-.292,.578-.434,.041-.051,.076-.095,.109-.124,.07-.06,.141-.065,.192-.068,.039-.003,.087-.006,.09-.053,0-.014-.003-.04-.038-.062-.066-.04-.21-.04-.369,.056-.073,.044-.121,.096-.171,.151-.094,.103-.201,.22-.524,.324-.254,.082-.384,.194-.51,.302-.072,.062-.142,.122-.233,.174l1.357-1.463c.032-.032,.05-.082,.016-.117-.012-.012-.028-.019-.045-.019-.037,0-.068,.031-.071,.034l-1.422,1.319c.043-.077,.079-.154,.114-.23,.079-.173,.154-.337,.315-.471,.248-.207,.317-.447,.368-.622,.018-.063,.034-.117,.054-.156,.042-.083,.105-.114,.151-.136,.035-.017,.078-.038,.063-.083-.005-.013-.018-.036-.059-.042-.076-.012-.209,.044-.32,.193-.051,.069-.075,.135-.1,.205-.048,.131-.102,.28-.361,.5-.203,.173-.281,.326-.356,.474-.043,.085-.085,.167-.149,.25l.694-1.871c.017-.042,.015-.095-.03-.114-.016-.007-.033-.007-.049,0-.034,.014-.051,.055-.053,.058l-.809,1.763c.011-.087,.014-.172,.017-.256,.007-.19,.014-.37,.111-.556,.15-.286,.122-.534,.102-.716-.007-.065-.014-.12-.01-.165,.007-.092,.053-.145,.087-.184,.026-.029,.058-.065,.026-.101-.009-.01-.031-.026-.071-.017-.075,.018-.177,.12-.222,.301-.021,.083-.018,.153-.015,.227,.006,.14,.013,.298-.142,.6-.122,.237-.135,.409-.147,.574-.007,.095-.014,.187-.042,.288l-.075-1.994c0-.045-.022-.094-.072-.094h0c-.03,0-.054,.019-.065,.052-.007,.02-.007,.039-.007,.041l-.073,1.938c-.024-.085-.053-.165-.082-.243-.066-.179-.129-.347-.11-.556,.029-.322-.092-.54-.18-.7-.031-.057-.059-.106-.072-.148-.029-.088-.006-.155,.01-.203,.013-.037,.028-.082-.015-.103-.013-.006-.039-.013-.072,.012-.062,.046-.117,.179-.09,.363,.012,.084,.042,.148,.074,.216,.059,.127,.126,.27,.099,.608-.021,.266,.032,.429,.084,.587,.03,.091,.058,.178,.071,.282l-.833-1.814c-.017-.042-.056-.078-.102-.059-.028,.012-.043,.038-.04,.073,.001,.021,.009,.039,.009,.04l.674,1.818c-.054-.069-.112-.132-.169-.193-.13-.14-.252-.271-.315-.471-.096-.308-.292-.464-.434-.578-.051-.041-.095-.076-.124-.109-.06-.07-.065-.141-.068-.192-.003-.039-.006-.087-.053-.09-.014,0-.04,.003-.062,.038-.04,.066-.04,.21,.056,.369,.044,.073,.096,.121,.151,.171,.103,.094,.22,.201,.324,.524,.082,.254,.194,.384,.302,.51,.062,.072,.122,.142,.174,.234l-1.463-1.357c-.032-.032-.082-.05-.117-.015-.021,.021-.025,.052-.009,.083,.009,.019,.023,.033,.024,.033l1.319,1.422c-.077-.043-.154-.079-.23-.114-.173-.079-.337-.154-.471-.315-.207-.248-.447-.317-.623-.368-.062-.018-.116-.034-.156-.054-.083-.042-.114-.105-.136-.151-.017-.035-.038-.078-.083-.062-.013,.005-.036,.018-.042,.059-.012,.076,.044,.209,.193,.32,.069,.051,.135,.075,.205,.1,.131,.048,.28,.102,.5,.361,.173,.203,.326,.281,.474,.356,.085,.043,.167,.085,.25,.149l-1.871-.694c-.042-.017-.095-.015-.114,.03-.007,.016-.007,.033,0,.049,.014,.034,.055,.051,.058,.053l1.763,.809c-.087-.011-.172-.014-.256-.017-.19-.007-.37-.014-.556-.111-.286-.15-.535-.122-.716-.101-.065,.007-.12,.014-.165,.01-.092-.007-.145-.054-.184-.087-.029-.026-.065-.057-.101-.026-.01,.009-.026,.031-.017,.071,.018,.075,.12,.177,.301,.222,.083,.021,.153,.018,.227,.015,.14-.006,.298-.013,.6,.142,.237,.122,.409,.135,.574,.147,.095,.007,.187,.014,.288,.042l-1.994,.075h0c-.045,0-.093,.022-.094,.072,0,.017,.006,.033,.018,.045,.026,.026,.07,.027,.074,.027l1.938,.073c-.085,.023-.165,.053-.243,.082-.179,.066-.347,.129-.556,.11-.322-.029-.54,.092-.7,.18-.057,.031-.106,.059-.148,.072-.088,.029-.155,.006-.203-.01-.037-.013-.082-.028-.103,.015-.006,.013-.013,.038,.012,.072,.046,.062,.179,.117,.363,.09,.084-.012,.148-.042,.216-.074,.127-.059,.27-.126,.608-.099,.266,.021,.429-.032,.587-.084,.091-.03,.178-.058,.282-.071l-1.814,.833c-.042,.017-.078,.056-.059,.102,.011,.026,.034,.04,.065,.04,.002,0,.005,0,.007,0,.021-.001,.039-.009,.04-.009l1.818-.674c-.069,.054-.132,.112-.193,.169-.14,.13-.271,.252-.471,.315-.308,.096-.464,.292-.578,.434-.041,.051-.076,.095-.109,.124-.07,.06-.141,.065-.192,.068-.039,.002-.087,.006-.09,.053,0,.014,.003,.04,.038,.062,.066,.04,.21,.04,.369-.056,.073-.044,.121-.096,.171-.151,.094-.103,.201-.22,.524-.324,.254-.082,.384-.194,.51-.302,.072-.062,.142-.122,.233-.174l-1.357,1.463c-.032,.032-.05,.082-.015,.117,.012,.013,.028,.019,.045,.019,.012,0,.025-.003,.038-.01,.019-.009,.033-.023,.033-.024l1.422-1.319c-.043,.077-.079,.154-.114,.23-.079,.173-.154,.337-.315,.471-.248,.207-.317,.447-.368,.623-.018,.063-.034,.116-.054,.156-.042,.083-.105,.114-.151,.137-.035,.017-.078,.038-.062,.083,.005,.013,.018,.036,.059,.042,.076,.012,.209-.044,.32-.193,.051-.068,.075-.135,.1-.205,.048-.131,.102-.28,.361-.5,.203-.173,.281-.326,.356-.474,.043-.085,.085-.167,.149-.25l-.694,1.871c-.017,.042-.015,.095,.03,.114,.008,.003,.017,.005,.025,.005,.008,0,.016-.002,.024-.005,.034-.014,.051-.055,.053-.058l.809-1.763c-.011,.087-.014,.172-.017,.256-.007,.19-.014,.37-.111,.556-.15,.286-.122,.535-.101,.716,.007,.065,.014,.12,.01,.165-.007,.092-.054,.145-.087,.184-.026,.029-.057,.065-.026,.101,.009,.01,.031,.026,.071,.016,.075-.018,.177-.12,.222-.301,.021-.083,.018-.153,.015-.227-.006-.14-.013-.298,.142-.6,.122-.237,.135-.409,.147-.574,.007-.095,.014-.187,.042-.288l.075,1.994c0,.045,.022,.094,.072,.094,.03,0,.054-.019,.065-.052,.007-.02,.007-.039,.007-.041l.073-1.938c.024,.085,.053,.165,.082,.243,.066,.179,.129,.347,.11,.556-.029,.322,.092,.54,.18,.7,.031,.057,.059,.106,.072,.148,.029,.088,.006,.155-.01,.203-.013,.037-.028,.082,.015,.103,.006,.003,.014,.006,.025,.006,.013,0,.029-.004,.047-.017,.062-.046,.117-.179,.09-.363-.012-.084-.042-.148-.074-.216-.059-.127-.126-.27-.099-.608,.021-.266-.032-.429-.084-.587-.03-.091-.058-.178-.071-.282l.833,1.814s.008,.02,.022,.036c.023,.026,.052,.035,.08,.023,.016-.007,.028-.019,.035-.034,.014-.034-.002-.075-.004-.079l-.674-1.818c.054,.069,.112,.132,.169,.193,.13,.14,.252,.271,.315,.471,.096,.308,.292,.464,.434,.578,.051,.041,.095,.076,.124,.109,.06,.07,.065,.141,.068,.192,.002,.039,.006,.087,.053,.09,0,0,.002,0,.003,0,.014,0,.039-.006,.059-.038,.04-.066,.04-.21-.056-.369-.044-.073-.096-.121-.151-.171-.103-.094-.22-.201-.324-.524-.082-.254-.194-.384-.302-.51-.062-.072-.122-.142-.173-.233l1.463,1.357c.032,.032,.082,.05,.117,.015,.021-.021,.025-.051,.009-.083-.009-.019-.023-.033-.024-.033l-1.319-1.422c.077,.043,.154,.079,.23,.114,.173,.079,.337,.154,.471,.315,.207,.248,.447,.317,.622,.368,.063,.018,.116,.034,.156,.054,.083,.042,.114,.105,.137,.151,.015,.03,.032,.066,.065,.066,.006,0,.012-.001,.018-.003,.013-.005,.036-.018,.042-.059,.012-.076-.044-.209-.193-.32-.068-.051-.135-.075-.205-.1-.131-.048-.28-.102-.5-.361-.173-.203-.326-.281-.474-.356-.085-.043-.167-.085-.25-.149l1.871,.694c.042,.017,.095,.015,.114-.03,.007-.016,.007-.033,0-.049-.014-.034-.055-.051-.058-.053l-1.763-.809c.087,.011,.172,.014,.256,.017,.19,.007,.37,.014,.556,.111,.286,.15,.535,.122,.716,.102,.065-.007,.12-.014,.165-.01,.093,.007,.145,.053,.184,.087,.02,.018,.044,.039,.069,.039,.011,0,.021-.004,.032-.013,.01-.009,.026-.031,.016-.071-.018-.075-.12-.177-.301-.222-.083-.021-.153-.018-.227-.015-.14,.006-.298,.013-.6-.142-.237-.122-.409-.135-.574-.147-.095-.007-.187-.014-.288-.042l1.994-.075h0c.045,0,.093-.022,.093-.072,0-.03-.019-.054-.052-.065Z" fill="#edb840"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>'), nacimiento: 'ARG - Olavarría', puntos: 'Puntos | 10352', src: 'https://www.padelfip.com/wp-content/uploads/2023/02/08-CHINGOTTO-662x1024.png' }
  ];

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.padelId = +params['id'];
      console.log(`ID recibido: ${this.padelId}`);

      this.jugador = this.jugadores.find(r => r.id === this.padelId);
      console.log('Registro encontrado:', this.jugador);
    });
  }
}
