import React from 'react';
import {colors, media} from 'theme';
// import html2canvas from 'html2canvas';
// import jsPdf from 'jspdf';

class DownloadPDF extends React.Component {

  constructor(props){
    super(props);
    this.downloadPDF = this.downloadPDF.bind(this);
  }

  downloadPDF(event) {
    // console.log("downloadPDF");
    // const domElement = document.getElementById('article_Content');
    

    // html2canvas(domElement).then((canvas)=>{

    //   const img = canvas.toDataURL('image/jpeg');
    //   console.log(canvas.width+"," +canvas.height);

    //   var HTML_Width = canvas.width;
    //   var HTML_Height = canvas.height;
    //   var top_left_margin = 15;
    //   var PDF_Width = HTML_Width+(top_left_margin*2);
    //   var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
    //   console.log("PDF_Width: "+PDF_Width);
    //   console.log("PDF_Height: "+PDF_Height);
    //   var canvas_image_width = HTML_Width;
    //   var canvas_image_height = HTML_Height;
      
    //   var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
    //   console.log("totalPDFPages: "+totalPDFPages);

    //   var pdf = new jsPdf('p', 'pt',  [PDF_Width, PDF_Height]);

    //   pdf.addImage(img, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
    //   for (var i = 1; i <= totalPDFPages; i++) { 
    //     pdf.addPage(PDF_Width, PDF_Height);
    //     pdf.addImage(img, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
    //     }
    //   pdf.save(this.props.markdownTitle+'.pdf'); 
    // })
  }

  render() {
    return (
      <div css={style} onClick={this.downloadPDF}>
    {this.props.title}
  </div>
    )
  }
  
}

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: colors.dark,
  transition: 'color 0.2s ease-out',
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 300,

  ':focus': {
    outline: 0,
    backgroundColor: colors.dark,
    color: colors.white,
  },

  [media.size('xsmall')]: {
    paddingLeft: 8,
    paddingRight: 8,
  },

  [media.between('small', 'medium')]: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  [media.greaterThan('xlarge')]: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,

    ':hover:not(:focus)': {
      color: colors.brand,
    },
  },
};


export default DownloadPDF;
