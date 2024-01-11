


	function envoi_mail()
	{
		var contenuMail = get_data();
		
		if(contenuMail != "incomplet"){
			var xhr = null;
	
			if (window.XMLHttpRequest || window.ActiveXObject) {
				if (window.ActiveXObject) {
					try {
						xhr = new ActiveXObject("Msxml2.XMLHTTP");
					} catch(e) {
						xhr = new ActiveXObject("Microsoft.XMLHTTP");
					}
				} else {
					xhr = new XMLHttpRequest(); 
			
				}
			} else {
			
				xhr = null;
		
			}
	
			if(xhr != null){
				xhr.open("POST", "envoi_mail.php", true);
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.send(contenuMail);
			}
		}
	}
	
	function get_data()
	{
		var mail = document.getElementById("inputMail").value;
		var nom = document.getElementById("inputNom").value;
		var texte = document.getElementById("inputTexte").value;
		
		mail = encodeURIComponent(mail);
		nom = encodeURIComponent(nom);
		texte = encodeURIComponent(texte);
		
		if(mail != "" && nom != "" && texte != ""){
			return "mail="+mail+"&nom="+nom+"&texte="+texte;
		}else{
			return "incomplet";
		}	
	}

