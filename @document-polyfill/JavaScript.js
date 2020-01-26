// Check whether loading is complete
// (http://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#Checking_whether_loading_is_already_complete):
if(document.readyState === 'loading'){
	document.addEventListener('DOMContentLoaded', AtDocumentPolyfill);
} else {
	AtDocumentPolyfill();
}

function AtDocumentPolyfill(){

	let Table,Replace,S,Url;
	let DomainWithHyphen='';

// Get the full domain name under which the document is located, in which the script is running
	let DomainString = document.location.hostname;

// Replace all dashes (-) in domain names with "^" - dashes are needed to separate domains from each other
	Replace = DomainString.replace(/-/g, '^');

// Split the string anywhere there is a dot and creating a table from the divided fragments, without dots
	Table = Replace.split('.');
// Separate each domain and put them in reverse order - that's the way to process domains
// Reverse the order of items in the table
	Table.reverse();

// Create a string containing domains in order of the highest hierarchy to the lowest, separated by dashes (-)
	for(S=0;S<Table.length;S++){
		DomainWithHyphen = DomainWithHyphen+Table[S]+'-';
	}

// --------------------- When the page opens, "document.location.hostname" returns an empty string.
// Changing the attributes given to it when it was first loaded
// would destroy the information about the origin of this site and thus
// prevent the use of dedicated selectors for websites based on its address
	if(DomainWithHyphen != "") {

// Add a data attribute to the "html" element (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)
		document.querySelector('html').setAttribute('data-at-document-domain', DomainWithHyphen);

// Read the document URL (this is read-only)
		Url = document.URL;

		document.querySelector('html').setAttribute('data-at-document-url', Url);
	}
}
