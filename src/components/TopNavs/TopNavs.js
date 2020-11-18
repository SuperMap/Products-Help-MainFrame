
import {colors} from 'theme';
import { Link } from 'gatsby';

class TopNavs extends React.Component{


    getNav(nav,index){
        const {
            directory
        } = this.props;
        return(
            <div css={{
                float:"left"
            }}>
                <Link to={directory +"/" + nav.href}
                    css={{
                    color:colors.subtle,
                    fontSize:16,
                    }}>
                    <button
                        css={{
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                        border: 0,
                        outline: 'none',
                        paddingTop:15,
                        marginLeft:5,
                        ':hover':{
                        textDecoration:"underline"
                          }
                        }}>{nav.title}</button>     
                </Link>
                <span> &nbsp;/</span>
            </div>
        );
    }


    render() {
        const {
            navList,
            directory
        } = this.props;

        return(
            <div css={{height:"50px",
                width:"59%",
                float:"left",
                position: "fixed",
                borderBottom:"1px solid #ececec",
                backgroundColor:colors.white,
                marginLeft:-10,
                zIndex:999
            }}>
               
                {navList && navList.map((nav, index) => (
                     this.getNav(nav,index)
                    ))}
           
            </div>
        )
    }
}
export default TopNavs;