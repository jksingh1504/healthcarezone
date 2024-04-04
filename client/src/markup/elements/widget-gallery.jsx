import React, { Component } from 'react';
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox';

// Import Images
import galleryPic1 from "../../images/gallery/pic1.jpg";
import galleryPic2 from "../../images/gallery/pic2.jpg";
import galleryPic3 from "../../images/gallery/pic3.jpg";
import galleryPic4 from "../../images/gallery/pic4.jpg";
import galleryPic5 from "../../images/gallery/pic5.jpg";
import galleryPic6 from "../../images/gallery/pic6.jpg";

const content = [
	{
		thumb: galleryPic1,
	},
	{
		thumb: galleryPic2,
	},
	{
		thumb: galleryPic3,
	},
	{
		thumb: galleryPic4,
	},
	{
		thumb: galleryPic5,
	},
	{
		thumb: galleryPic6,
	},
]

const options = {
	settings: {
		overlayColor: "rgba(0,0,0,0.9)",
		backgroundColor: "#565acf",
		slideAnimationType: 'slide',
	},
	buttons: {
		backgroundColor: "#565acf",
		iconColor: "rgba(255, 255, 255, 1)",
		showDownloadButton: false,
		showAutoplayButton: false,
		showThumbnailsButton: false,
	},
	caption: {
		captionColor: "#565acf",
		captionFontFamily: "Raleway, sans-serif",
		captionFontWeight: "300",
		captionTextTransform: "uppercase",
	}
};

function GalleryImg(){
	return(
		<>
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<ul className="magnific-image">
						{content.map((item) => (
							<li><img src={item.thumb} alt=""/></li>
						))}
					</ul>
				</SRLWrapper>
			</SimpleReactLightbox>	
		</>
	);
}

class WidgetGallery extends Component{
	render(){
		return(
			<>
				
				<div className="widget widget_gallery gallery-grid-3">
					<h4 className="widget-title">Our Gallery</h4>
					
					<GalleryImg />
					
				</div>
				
			</>
		);
	}
}

export default WidgetGallery;