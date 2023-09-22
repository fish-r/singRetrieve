// simulate getting list of retrievable info from Singpass API
const getPersonParams = (uinfin) => {
    return {
        // 'Education': {
        'Education Level': 'edulevel',
        'Academic Qualifications': 'academicqualifications',
        'School Name': 'schoolname',
        'Graduation Year': 'graduationyear',

        // 'Basic Personal Information': {
        'Name': 'name',
        'UINFIN': 'uinfin',
        'Sex': 'sex',
        'Partial UINFIN': 'partialuinfin',
        'Email': 'email',
        'Dialect': 'dialect',
        'Race': 'race',
        'Mobile Number': 'mobileno',
        'Mail Address': 'mailadd',
        'Pass Expiry Date': 'passexpirydate',
        'Home Number': 'homenumber',
        'Residential Status': 'residentialstatus',
        'Passport Number': 'passportnumber',
        'HanYuPinYin Alias Name': 'hanyupinyinaliasname',
        'Alias Name': 'aliasname',
        'Pass Status': 'passstatus',
        'Nationality': 'nationality',
        'Date of Birth': 'dob',
        'Pioneer Generation': 'pioneergen',
        'Pass Type': 'passtype',
        'Registered Address': 'regadd',
        'Billing Address': 'billadd',
        'HanYuPinYin Name': 'hanyupinyinname',
        'Passport Expiry Date': 'passportexpirydate',
        'Merdeka Generation': 'merdekagen',
        'Birth Country': 'birthcountry',
        'Secondary Race': 'secondaryrace',


        // 'Career': {
        'Employment': 'employment',
        'Occupation': 'occupation',
        'LTA Vocational Licenses': 'ltavocationallicenses',
        'Employment Sector': 'employmentsector',


        // 'Family': {
        'Married Name': 'marriedname',
        'Sponsored Children Records': 'sponsoredchildrenrecords',
        'Divorced Date': 'divorceddate',
        'Marriage Certificate Number': 'marriagecerticiationnumber',
        'Country of Marriage': 'countryofmarriage',
        'Date of Marriage': 'marriagedate',
        'Marital': 'marital',
        'Child Birth Records': 'childbirthrecords',

        // 'Finance': {
        'NOA History': 'noahistory',
        'NOA': 'noa',
        'NOA History Basic': 'noahistorybasic',
        'NOA Basic': 'noabasic',
        'CPF Dependant Protection Scheme': 'cpfdependantprotectionscheme',
        'CPF MediShield Life': 'cpfmedishieldlife',
        'CPF Employers': 'cpfemployers',
        'CPF Balances': 'cpfbalances',
        'CPF Housing Withdrawal': 'cpfhousingwithdrawal',
        'CPF Investment Scheme': 'cpfinvestmentscheme',
        'CPF Self Top Up Amount': 'cpfstuselftopupamount',
        'CPF Current Year Tax Relief': 'cpfstucurrentyeartaxrelief',
        'Household Income': 'householdincome',
        'CPF Monthly Payouts': 'cpfmonthlypayouts',
        'CPF Contributions': 'cpfcontributions',
        'GST Vouchers': 'gstvouchers',
        'CPF Life': 'cpflife',
        'Silver Support': 'silversupport',
        'CPF Home Protection Scheme': 'cpfhomeprotectionscheme',


        // 'Properties and Vehicles': {
        'Owner Private': 'ownerprivate',
        'Housing Type': 'housingtype',
        'Vehicles': 'vehicles',
        'Vocational Licenses': 'vocationallicenses',
        'HDB Type': 'hdbtype',
        'HDB Ownership': 'hdbownership',
        'Driving License': 'drivinglicense',



    }
}

module.exports = getPersonParams;