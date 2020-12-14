
import {colors} from 'theme';
import { Link } from 'gatsby';
import React from 'react';
import MetaTitle from '../../templates/components/MetaTitle';

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
                    marginTop: 5,
                    }}>
                    <button
                        css={{
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                        border: 0,
                        fontSize: 16,
                        fontWeight: 700,
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
            <div css={{
                height:"50px",
                // width:"100%",
                // marginLeft:-80,
                // paddingLeft:70,
                // backgroundColor:"rgb(247,247,247)",

                width:"30%",              
                float:"left",
                position: "fixed",
                borderBottom:"1px solid #ececec",
                marginLeft:-10,
                backgroundColor:colors.white,
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