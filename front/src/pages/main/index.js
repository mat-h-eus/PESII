import React, { Component } from 'react';
import './styles.css';
import Mapa from '../../components/Map'
import M from "materialize-css"
import imgTeste from "./cascavel.jpg"

export default class Main extends Component{
    state = {
        products : [],
        productInfo: {},
        page : 1
    };

    componentDidMount(){
        M.AutoInit();
    }
    render(){
        const {products, productInfo, page} = this.state;

        return (
            <div>
                
                    <div>
                        <Mapa/>
                    </div>
                <div class="parallax-container">
                    <div class="parallax">
                        <img src={imgTeste}/>
                    </div>
                </div>





                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam id purus interdum egestas. Maecenas velit massa, sodales ac laoreet quis, tincidunt et tellus. Aenean et odio neque. Ut rutrum, lacus ut ornare vehicula, dolor nulla pulvinar nulla, sed dictum nunc nisl ac felis. Aliquam ligula ante, bibendum et mauris in, ornare efficitur mauris. Praesent non ligula ac tellus varius eleifend. Maecenas in risus porta, placerat justo sed, laoreet felis.

Integer finibus varius semper. Pellentesque pharetra accumsan ligula vitae mattis. Sed ac lobortis nibh. Duis porta tortor in libero tristique sodales. Vestibulum cursus sollicitudin velit eget fermentum. Curabitur urna urna, auctor quis diam id, aliquam porta augue. Etiam gravida massa ut ultrices sollicitudin. Sed tempor viverra orci a congue. Integer consequat lacus et faucibus ullamcorper. Sed lacus metus, tristique vel arcu vel, laoreet tristique purus.

Praesent at vulputate leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In et ullamcorper tellus. Mauris diam dolor, ornare a elit a, semper imperdiet velit. Integer vehicula lacus lorem, ut facilisis lacus ullamcorper a. Suspendisse nulla nisi, euismod et elit vel, porttitor tincidunt est. Proin vestibulum vitae tortor vel fermentum. Mauris ex nisl, ultricies id nulla in, pretium tempor turpis.

Phasellus dictum libero enim. Aliquam accumsan arcu vel nulla bibendum viverra. Aenean at urna in lorem varius imperdiet eu sed odio. Nulla posuere, odio non congue hendrerit, felis metus ultrices magna, eget volutpat elit sapien et justo. Proin consectetur neque in auctor dictum. Fusce iaculis pharetra blandit. Aenean a nisi erat. Suspendisse potenti. Duis mattis non ipsum in placerat. Donec ac molestie felis. Vivamus ligula tortor, gravida sed gravida ac, eleifend nec arcu. Nunc eu mauris id elit volutpat efficitur vitae in lacus. Cras lobortis sem lacus.

Etiam vitae laoreet libero. Cras ut porta velit. Nullam et ullamcorper arcu. Sed quis sapien varius, sodales lectus nec, placerat nibh. Aenean et semper quam. Aliquam pulvinar sapien diam, ut facilisis mauris vehicula nec. Donec imperdiet porttitor urna vehicula fermentum. Aliquam eleifend, ipsum non maximus faucibus, velit nisl hendrerit enim, vel aliquet sem orci non mauris. Sed finibus erat at auctor semper. Sed quis ultricies nibh, vitae ullamcorper tellus. Quisque eget ligula dolor. Nulla et lobortis orci. Quisque eu lorem nec mi condimentum malesuada eget id mauris. Nam laoreet, ex sit amet mollis tincidunt, augue tortor vestibulum risus, a eleifend eros velit a ante.

Praesent ut orci diam. Mauris et cursus massa, maximus aliquet sapien. Quisque eleifend bibendum magna eget mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras porta nisl sed dolor malesuada, non luctus augue fermentum. Aliquam placerat cursus lacus, quis semper massa eleifend id. Vestibulum ullamcorper, augue in cursus malesuada, lectus felis aliquam sem, eget sollicitudin tellus tellus sit amet est. Maecenas sapien justo, aliquet ac purus non, congue venenatis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce risus elit, aliquam non dui ac, mattis tempor quam. Quisque tempus tortor velit, at lacinia ipsum aliquet nec. Suspendisse ac varius sem. Nunc et pretium erat. Nam id erat non sem rutrum sagittis.

Nullam posuere neque magna, quis scelerisque nisi rutrum ut. Integer dapibus pellentesque tortor sed cursus. Suspendisse at interdum libero. Aenean nibh ex, hendrerit eget fermentum quis, congue quis tellus. Nulla rhoncus sem nec justo congue, ac convallis ipsum iaculis. Pellentesque tempus sed purus vitae interdum. Morbi pellentesque orci mattis dolor pretium, et accumsan felis aliquet.

Aliquam tempor ipsum non pellentesque vulputate. Vivamus volutpat eros vel nulla viverra, non fringilla augue lacinia. Duis convallis ut arcu non ullamcorper. Aenean vestibulum tortor at dignissim aliquet. Vivamus vitae odio et nunc suscipit vulputate. Nam in faucibus purus. Proin sed enim non leo pulvinar dapibus. In ac leo convallis, ultricies lacus non, bibendum nunc. Proin in enim mauris. Pellentesque vulputate velit eros, auctor vestibulum ex tristique eu. Praesent quis massa ac urna egestas volutpat. Donec turpis est, finibus sit amet ipsum eu, hendrerit varius felis. Curabitur fermentum luctus libero porta auctor. Nunc magna sapien, auctor non imperdiet scelerisque, iaculis in nisi. Maecenas dapibus, orci non laoreet rutrum, tellus sem volutpat ante, sed tempor sapien lectus imperdiet ante.

Morbi mollis, eros nec consectetur vehicula, ante sapien malesuada urna, tristique commodo libero velit eget elit. Integer sodales vel risus at tristique. Nulla vulputate risus vel ex dapibus, ut aliquet sem ultrices. Duis at ligula dignissim, condimentum sem non, finibus justo. In vel magna quis risus commodo volutpat. In hac habitasse platea dictumst. Fusce ac sagittis est. Donec porta consequat dolor, vitae dapibus sem. Proin sit amet elit laoreet, efficitur elit eu, posuere est. In hac habitasse platea dictumst. Morbi sagittis elit elit, at facilisis mauris commodo ac. Mauris vehicula condimentum viverra. Integer vitae tempor ante.

Nam dictum lorem nunc, quis faucibus mi auctor vitae. Integer semper enim non arcu mattis, eu iaculis metus tincidunt. Donec eget gravida enim. Sed egestas nibh feugiat blandit euismod. Pellentesque lacus ligula, porttitor nec iaculis quis, aliquam eget lorem. Vestibulum vel turpis ipsum. Vestibulum tincidunt augue in fringilla congue. Nulla porttitor sagittis commodo. Nullam ut ex dignissim, bibendum risus id, blandit justo. Etiam faucibus ante massa, ac mollis justo scelerisque id. Quisque at semper sem. Curabitur vel viverra ligula. Suspendisse id aliquam nisi, vitae accumsan nisi. Phasellus facilisis nisl et porta iaculis.


                </p>



                <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

                <div id="modal1" class="modal">
                    <div class="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        )
    }
}