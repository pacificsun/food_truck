import { SEARCH_START, SEARCH_SUCESS, SEARCH_FAIL } from './search.types';
const INITIAL_STATE = {
  copyData: [
    {
      objectid: '1334734',
      applicant: "Rita's Catering",
      facilitytype: 'Truck',
      cnn: '9100000',
      locationdescription: 'MISSION ST: 06TH ST to 07TH ST (1000 - 1099)',
      address: '1028 MISSION ST',
      blocklot: '3703033',
      block: '3703',
      lot: '033',
      permit: '19MFF-00047',
      status: 'APPROVED',
      fooditems: 'Filipino Food',
      x: '6009812.085',
      y: '2112361.07',
      latitude: '37.7806943774082',
      longitude: '-122.409668813219',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00047&ExportPDF=1&Filename=19MFF-00047_schedule.pdf',
      approved: '2019-07-03T00:00:00.000',
      received: '2019-07-03',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.409668813219, 37.7806943774082]
      }
    },
    {
      objectid: '1334819',
      applicant: 'tacos y pupusas los trinos',
      cnn: '9158000',
      locationdescription: 'MISSION ST: AVALON AVE to COTTER ST (4368 - 4439)',
      address: '4384 MISSION ST',
      blocklot: '6798004',
      block: '6798',
      lot: '004',
      permit: '19MFF-00048',
      status: 'REQUESTED',
      x: '6002680.03',
      y: '2093158.531',
      latitude: '37.7275665375917',
      longitude: '-122.432969701989',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00048&ExportPDF=1&Filename=19MFF-00048_schedule.pdf',
      received: '2019-07-03',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.432969701989, 37.7275665375917]
      }
    },
    {
      objectid: '1353225',
      applicant: 'Treats by the Bay LLC',
      facilitytype: 'Truck',
      cnn: '7034000',
      locationdescription: 'HOWARD ST: MALDEN ALY to 02ND ST (574 - 599)',
      address: '201 02ND ST',
      blocklot: '3736097',
      block: '3736',
      lot: '097',
      permit: '19MFF-00111',
      status: 'REQUESTED',
      fooditems: 'Prepackaged Kettlecorn',
      x: '6013265.85',
      y: '2114515.053',
      latitude: '37.7868016505971',
      longitude: '-122.397871635003',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00111&ExportPDF=1&Filename=19MFF-00111_schedule.pdf',
      received: '2019-07-31',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397871635003, 37.7868016505971]
      }
    },
    {
      objectid: '1380423',
      applicant: 'MOMO INNOVATION LLC',
      facilitytype: 'Truck',
      cnn: '9090000',
      locationdescription: 'MISSION ST: SHAW ALY to ANTHONY ST (543 - 586)',
      address: '555 MISSION ST',
      blocklot: '3721120',
      block: '3721',
      lot: '120',
      permit: '19MFF-00131',
      status: 'REQUESTED',
      fooditems: 'Noodles',
      x: '6013055.64573',
      y: '2115118.24153',
      latitude: '37.7884461569013',
      longitude: '-122.398641242039',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00131&ExportPDF=1&Filename=19MFF-00131_schedule.pdf',
      received: '2019-12-04',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.398641242039, 37.7884461569013]
      }
    },
    {
      objectid: '1400796',
      applicant: 'El Calamar Perubian Food Truck',
      facilitytype: 'Truck',
      cnn: '1329000',
      locationdescription: '24TH ST: UTAH ST to POTRERO AVE (2600 - 2699)',
      address: '2615 24TH ST',
      blocklot: '4264019A',
      block: '4264',
      lot: '019A',
      permit: '20MFF-00002',
      status: 'REQUESTED',
      fooditems:
        'Lomo Saltado: Jalea: Ceviche: Calamari Tilapia Plates: Chicken: Soda: Water.',
      x: '6010762.925',
      y: '2102188.055',
      latitude: '37.7528148292211',
      longitude: '-122.405662641918',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=20MFF-00002&ExportPDF=1&Filename=20MFF-00002_schedule.pdf',
      received: '2020-01-27',
      priorpermit: '0',
      expirationdate: '2021-01-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.405662641918, 37.7528148292211]
      }
    },
    {
      objectid: '1336685',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '7200000',
      locationdescription:
        'INDIANA ST: 26TH ST to CESAR CHAVEZ ST (1500 - 1599)',
      address: '1575 INDIANA ST',
      blocklot: '4317017',
      block: '4317',
      lot: '017',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      x: '6015267.752',
      y: '2101380.964',
      latitude: '37.7508496068125',
      longitude: '-122.390027615501',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390027615501, 37.7508496068125]
      }
    },
    {
      objectid: '1380421',
      applicant: 'MOMO INNOVATION LLC',
      facilitytype: 'Truck',
      cnn: '3529000',
      locationdescription:
        'CALIFORNIA ST: LEIDESDORFF ST to MONTGOMERY ST (449 - 499)',
      address: '330 PINE ST',
      blocklot: '0260006',
      block: '0260',
      lot: '006',
      permit: '19MFF-00131',
      status: 'REQUESTED',
      fooditems: 'Noodles',
      x: '6012259.225',
      y: '2116546.642',
      latitude: '37.7923238035351',
      longitude: '-122.401497177566',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00131&ExportPDF=1&Filename=19MFF-00131_schedule.pdf',
      received: '2019-12-04',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.401497177566, 37.7923238035351]
      }
    },
    {
      objectid: '1339625',
      applicant: 'El Calamar Perubian Food Truck',
      facilitytype: 'Truck',
      cnn: '9091000',
      locationdescription: 'MISSION ST: ANTHONY ST to 02ND ST (573 - 599)',
      address: '85 02ND ST',
      blocklot: '3708019',
      block: '3708',
      lot: '019',
      permit: '19MFF-00099',
      status: 'APPROVED',
      fooditems:
        'Lomo Saltado: Jalea: Ceviche: Calamar: Tilapia plate: chicken special. Soda: Water.',
      x: '6012696.635',
      y: '2115129.488',
      latitude: '37.7884570288289',
      longitude: '-122.399884160566',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00099&ExportPDF=1&Filename=19MFF-00099_schedule.pdf',
      approved: '2019-07-22T00:00:00.000',
      received: '2019-07-22',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399884160566, 37.7884570288289]
      }
    },
    {
      objectid: '1334953',
      applicant: 'DO UC US Mobile Catering',
      facilitytype: 'Truck',
      cnn: '8700000',
      locationdescription:
        'MARIN ST: KANSAS ST to HWY 101 N ON RAMP (2500 - 2599)',
      address: '2590 MARIN ST',
      blocklot: '4339008',
      block: '4339',
      lot: '008',
      permit: '19MFF-00050',
      status: 'APPROVED',
      fooditems:
        'Cold truck: sandwiches: salads: beverages: chips: candy: cookies: coffee: tea: drinks',
      x: '6011441.697',
      y: '2100557.577',
      latitude: '37.7483758257779',
      longitude: '-122.403200626496',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00050&ExportPDF=1&Filename=19MFF-00050_schedule.pdf',
      approved: '2019-07-05T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.403200626496, 37.7483758257779]
      }
    },
    {
      objectid: '1366269',
      applicant: 'Golden Gate Halal Food',
      facilitytype: 'Push Cart',
      cnn: '8751101',
      locationdescription:
        'MARKET ST: 07TH ST \\ CHARLES J BRENHAM PL to 08TH ST \\ GROVE ST \\ HYDE ST (1101 - 1199) -- SOUTH --',
      address: '1169 MARKET ST',
      blocklot: '3702051',
      block: '3702',
      lot: '051',
      permit: '19MFF-00126',
      status: 'REQUESTED',
      fooditems: 'Pulao Plates & Sandwiches: Various Drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00126&ExportPDF=1&Filename=19MFF-00126_schedule.pdf',
      received: '2019-10-07',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1367765',
      applicant: 'Authentic India',
      facilitytype: 'Push Cart',
      cnn: '8753101',
      locationdescription:
        'MARKET ST: 09TH ST \\ LARKIN ST to 10TH ST \\ FELL ST \\ POLK ST (1301 - 1399) -- SOUTH --',
      address: '1355 MARKET ST',
      blocklot: '3508001',
      block: '3508',
      lot: '001',
      permit: '19MFF-00093',
      status: 'APPROVED',
      fooditems: 'Indian Street Food',
      x: '6007839.137',
      y: '2110959.852',
      latitude: '37.7767362127501',
      longitude: '-122.416394930077',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00093&ExportPDF=1&Filename=19MFF-00093_schedule.pdf',
      approved: '2020-02-14T00:00:00.000',
      received: '2019-07-18',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.416394930077, 37.7767362127501]
      }
    },
    {
      objectid: '1301554',
      applicant: "San Francisco's Hometown Creamery",
      facilitytype: 'Truck',
      cnn: '10624001',
      locationdescription: 'POST ST: MONTGOMERY ST to LICK PL (1 - 40)',
      address: '1 MONTGOMERY ST',
      blocklot: '0292002',
      block: '0292',
      lot: '002',
      permit: '19MFF-00008',
      status: 'APPROVED',
      fooditems: 'Ice Cream: Waffle Cones',
      x: '6011970.278',
      y: '2115432.874',
      latitude: '37.7892495340751',
      longitude: '-122.402418597294',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00008&ExportPDF=1&Filename=19MFF-00008_schedule.pdf',
      approved: '2019-09-06T00:00:00.000',
      received: '2019-03-05',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402418597294, 37.7892495340751]
      }
    },
    {
      objectid: '1332519',
      applicant: 'Flavors of Africa',
      facilitytype: 'Truck',
      cnn: '9090000',
      locationdescription: 'MISSION ST: SHAW ALY to ANTHONY ST (543 - 586)',
      address: '555 MISSION ST',
      blocklot: '3721120',
      block: '3721',
      lot: '120',
      permit: '19MFF-00020',
      status: 'APPROVED',
      fooditems:
        'Organic Jamaican Chicken Pattie: Organic Vegan - Spinach & Onion Pattie: Chicken Lamba Rice: Organic Sheba Stewed Blackeye Peas with Plantains',
      x: '6013055.64573',
      y: '2115118.24153',
      latitude: '37.7884461569013',
      longitude: '-122.398641242039',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00020&ExportPDF=1&Filename=19MFF-00020_schedule.pdf',
      approved: '2020-02-21T00:00:00.000',
      received: '2019-06-06',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398641242039, 37.7884461569013]
      }
    },
    {
      objectid: '1339634',
      applicant: 'Plaza Garibaldy',
      facilitytype: 'Truck',
      cnn: '9297000',
      locationdescription: 'MONTGOMERY ST: POST ST to SUTTER ST (1 - 99)',
      address: '1 MONTGOMERY ST',
      blocklot: '0292002',
      block: '0292',
      lot: '002',
      permit: '19MFF-00100',
      status: 'APPROVED',
      fooditems: 'Tacos: burritos: quesadillas',
      x: '6011970.278',
      y: '2115432.874',
      latitude: '37.7892495340751',
      longitude: '-122.402418597294',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00100&ExportPDF=1&Filename=19MFF-00100_schedule.pdf',
      approved: '2019-07-22T00:00:00.000',
      received: '2019-07-22',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402418597294, 37.7892495340751]
      }
    },
    {
      objectid: '1337731',
      applicant: "Eva's Catering",
      facilitytype: 'Truck',
      cnn: '10006000',
      locationdescription: 'ORTEGA ST: 18TH AVE to 19TH AVE (1100 - 1199)',
      address: '1900 19TH AVE',
      blocklot: '2116028',
      block: '2116',
      lot: '028',
      permit: '19MFF-00085',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages',
      x: '5990463.819',
      y: '2102357.539',
      latitude: '37.7521241631187',
      longitude: '-122.475872322222',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00085&ExportPDF=1&Filename=19MFF-00085_schedule.pdf',
      approved: '2019-07-17T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.475872322222, 37.7521241631187]
      }
    },
    {
      objectid: '1337732',
      applicant: "Eva's Catering",
      facilitytype: 'Truck',
      cnn: '10006000',
      locationdescription: 'ORTEGA ST: 18TH AVE to 19TH AVE (1100 - 1199)',
      address: '1199 ORTEGA ST',
      blocklot: '1404045',
      block: '1404',
      lot: '045',
      permit: '19MFF-00085',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages',
      x: '5986602.689',
      y: '2113869.846',
      latitude: '37.7835091222127',
      longitude: '-122.4900712081',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00085&ExportPDF=1&Filename=19MFF-00085_schedule.pdf',
      approved: '2019-07-17T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.4900712081, 37.7835091222127]
      }
    },
    {
      objectid: '1337735',
      applicant: "Eva's Catering",
      facilitytype: 'Truck',
      cnn: '3081000',
      locationdescription:
        'BRANNAN ST: 05TH ST to 06TH ST \\ I-280 NORTHBOUND \\ I-280 SOUTHBOUND (600 - 699)',
      address: '630 BRANNAN ST',
      blocklot: '3778004',
      block: '3778',
      lot: '004',
      permit: '19MFF-00085',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages',
      x: '6012488.815',
      y: '2110632.864',
      latitude: '37.7760987531573',
      longitude: '-122.400287239868',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00085&ExportPDF=1&Filename=19MFF-00085_schedule.pdf',
      approved: '2019-07-17T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400287239868, 37.7760987531573]
      }
    },
    {
      objectid: '1367290',
      applicant: 'Star Taco',
      cnn: '7034000',
      locationdescription: 'HOWARD ST: MALDEN ALY to 02ND ST (574 - 599)',
      address: '580 HOWARD ST',
      blocklot: '3721092',
      block: '3721',
      lot: '092',
      permit: '19MFF-00128',
      status: 'REQUESTED',
      fooditems: 'Mexican Food',
      x: '6013221.712',
      y: '2114698.993',
      latitude: '37.7873042488646',
      longitude: '-122.398037251912',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00128&ExportPDF=1&Filename=19MFF-00128_schedule.pdf',
      received: '2019-10-09',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398037251912, 37.7873042488646]
      }
    },
    {
      objectid: '1332943',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '5864000',
      locationdescription:
        'FREMONT ST: FOLSOM ST to HARRISON ST \\ I-80 W OFF RAMP (300 - 399)',
      address: '350 FREMONT ST',
      blocklot: '3748007',
      block: '3748',
      lot: '007',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      x: '6014680.389',
      y: '2114586.51',
      latitude: '37.7870765303843',
      longitude: '-122.392982624228',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392982624228, 37.7870765303843]
      }
    },
    {
      objectid: '1380422',
      applicant: 'MOMO INNOVATION LLC',
      facilitytype: 'Truck',
      cnn: '3420000',
      locationdescription: 'BUSH ST: BATTERY ST to SANSOME ST (100 - 199)',
      address: '1 BUSH ST',
      blocklot: '0290011',
      block: '0290',
      lot: '011',
      permit: '19MFF-00131',
      status: 'REQUESTED',
      fooditems: 'Noodles',
      x: '6012652.373',
      y: '2116027.943',
      latitude: '37.7909215072692',
      longitude: '-122.400100423738',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00131&ExportPDF=1&Filename=19MFF-00131_schedule.pdf',
      received: '2019-12-04',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.400100423738, 37.7909215072692]
      }
    },
    {
      objectid: '1377260',
      applicant: 'Cochinita',
      facilitytype: 'Truck',
      cnn: '2868000',
      locationdescription:
        'BEALE ST: BRYANT ST \\ DELANCEY ST to END (500 - 599)',
      address: '501 BEALE ST',
      blocklot: '3771004',
      block: '3771',
      lot: '004',
      permit: '19MFF-00130',
      status: 'APPROVED',
      fooditems: 'Mexican Food: Yucatan Food: Street Food',
      x: '6015805.73102',
      y: '2114257.93168',
      latitude: '37.7862367744654',
      longitude: '-122.389066205605',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00130&ExportPDF=1&Filename=19MFF-00130_schedule.pdf',
      approved: '2020-01-07T00:00:00.000',
      received: '2019-11-18',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389066205605, 37.7862367744654]
      }
    },
    {
      objectid: '1377261',
      applicant: 'Cochinita',
      facilitytype: 'Truck',
      cnn: '3285000',
      locationdescription:
        'BRYANT ST: 04TH ST \\ I-80 E OFF RAMP to 05TH ST \\ I-80 E ON RAMP (600 - 699)',
      address: '617 BRYANT ST',
      blocklot: '3777055',
      block: '3777',
      lot: '055',
      permit: '19MFF-00130',
      status: 'APPROVED',
      fooditems: 'Mexican Food: Yucatan Food: Street Food',
      x: '6013083.726',
      y: '2111696.027',
      latitude: '37.7790511115731',
      longitude: '-122.398303881334',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00130&ExportPDF=1&Filename=19MFF-00130_schedule.pdf',
      approved: '2020-01-07T00:00:00.000',
      received: '2019-11-18',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398303881334, 37.7790511115731]
      }
    },
    {
      objectid: '1332520',
      applicant: 'Flavors of Africa',
      facilitytype: 'Truck',
      cnn: '9090000',
      locationdescription: 'MISSION ST: SHAW ALY to ANTHONY ST (543 - 586)',
      address: '560 MISSION ST',
      blocklot: '3708095',
      block: '3708',
      lot: '095',
      permit: '19MFF-00020',
      status: 'APPROVED',
      fooditems:
        'Organic Jamaican Chicken Pattie: Organic Vegan - Spinach & Onion Pattie: Chicken Lamba Rice: Organic Sheba Stewed Blackeye Peas with Plantains',
      x: '6012851.27',
      y: '2115274.827',
      latitude: '37.788864715343',
      longitude: '-122.399359351363',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00020&ExportPDF=1&Filename=19MFF-00020_schedule.pdf',
      approved: '2020-02-21T00:00:00.000',
      received: '2019-06-06',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399359351363, 37.788864715343]
      }
    },
    {
      objectid: '1332937',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '2955000',
      locationdescription: 'BERRY ST: 05TH ST to 06TH ST (300 - 399)',
      address: '355 BERRY ST',
      blocklot: '8707003',
      block: '8707',
      lot: '003',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      x: '6013399.28445',
      y: '2109254.17608',
      latitude: '37.7723639147673',
      longitude: '-122.397040970363',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397040970363, 37.7723639147673]
      }
    },
    {
      objectid: '1332939',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '414000',
      locationdescription: '08TH ST: HERON ST to HARRISON ST (350 - 399)',
      address: '350 08TH ST',
      blocklot: '3756003',
      block: '3756',
      lot: '003',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      x: '6009763.073',
      y: '2109812.608',
      latitude: '37.7736941524749',
      longitude: '-122.409658441356',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.409658441356, 37.7736941524749]
      }
    },
    {
      objectid: '1337734',
      applicant: "Eva's Catering",
      facilitytype: 'Truck',
      cnn: '305000',
      locationdescription: '05TH ST: WELSH ST to BRANNAN ST (530 - 599)',
      address: '530 05TH ST',
      blocklot: '3778001B',
      block: '3778',
      lot: '001B',
      permit: '19MFF-00085',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages',
      x: '6012502.558',
      y: '2110915.797',
      latitude: '37.7768763887765',
      longitude: '-122.400259575202',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00085&ExportPDF=1&Filename=19MFF-00085_schedule.pdf',
      approved: '2019-07-17T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400259575202, 37.7768763887765]
      }
    },
    {
      objectid: '1332944',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '6710000',
      locationdescription:
        'HARRISON ST: BEALE ST to FREMONT ST \\ I-80 W OFF RAMP (300 - 399)',
      address: '355 FREMONT ST',
      blocklot: '3747 320',
      block: '3747',
      lot: '320',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      x: '6014901.46219',
      y: '2114671.59044',
      latitude: '37.7873224193199',
      longitude: '-122.392223706383',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392223706383, 37.7873224193199]
      }
    },
    {
      objectid: '1332941',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '5685000',
      locationdescription: 'FOLSOM ST: 12TH ST to 13TH ST (1600 - 1699)',
      address: '1690 FOLSOM ST',
      blocklot: '3515040',
      block: '3515',
      lot: '040',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      x: '6007908.862',
      y: '2108555.219',
      latitude: '37.7701375805015',
      longitude: '-122.415983402804',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.415983402804, 37.7701375805015]
      }
    },
    {
      objectid: '1332935',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '110000',
      locationdescription: '01ST ST: CLEMENTINA ST to FOLSOM ST (245 - 299)',
      address: '245 01ST ST',
      blocklot: '3737012',
      block: '3737',
      lot: '012',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      x: '6014220.898',
      y: '2114895.75',
      latitude: '37.7879000978181',
      longitude: '-122.394594036205',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394594036205, 37.7879000978181]
      }
    },
    {
      objectid: '1332946',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '699001',
      locationdescription:
        '16TH ST: OWENS ST to 07TH ST \\ MISSISSIPPI ST (700 - 899)',
      address: '701 16TH ST',
      blocklot: '8723001',
      block: '8723',
      lot: '001',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1330246',
      applicant: "BOWL'D ACAI, LLC.",
      facilitytype: 'Truck',
      cnn: '8122000',
      locationdescription: 'LARKIN ST: FULTON ST to MCALLISTER ST (200 - 299)',
      address: '200 LARKIN ST',
      blocklot: '0353001',
      block: '0353',
      lot: '001',
      permit: '19MFF-00025',
      status: 'APPROVED',
      fooditems: 'Acai Bowls: Smoothies: Juices',
      x: '6007971.743',
      y: '2112224.278',
      latitude: '37.7802154802881',
      longitude: '-122.416025770151',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00025&ExportPDF=1&Filename=19MFF-00025_schedule.pdf',
      approved: '2019-06-17T00:00:00.000',
      received: '2019-06-17',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.416025770151, 37.7802154802881]
      }
    },
    {
      objectid: '1330245',
      applicant: "BOWL'D ACAI, LLC.",
      facilitytype: 'Truck',
      cnn: '2753000',
      locationdescription: 'BATTERY ST: PINE ST to CALIFORNIA ST (100 - 199)',
      address: '111 BATTERY ST',
      blocklot: '0261005',
      block: '0261',
      lot: '005',
      permit: '19MFF-00025',
      status: 'APPROVED',
      fooditems: 'Acai Bowls: Smoothies: Juices',
      x: '6012649.224',
      y: '2116554.374',
      latitude: '37.7923667868831',
      longitude: '-122.400148306767',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00025&ExportPDF=1&Filename=19MFF-00025_schedule.pdf',
      approved: '2019-06-17T00:00:00.000',
      received: '2019-06-17',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400148306767, 37.7923667868831]
      }
    },
    {
      objectid: '1353436',
      applicant: 'Alfaro Truck',
      facilitytype: 'Truck',
      cnn: '13057001',
      locationdescription: 'VALENCIA ST: 14TH ST to ROSA PARKS LN (300 - 337)',
      address: '306 VALENCIA ST',
      blocklot: '3546001',
      block: '3546',
      lot: '001',
      permit: '19MFF-00122',
      status: 'APPROVED',
      fooditems: 'Burritos: Tacos: Tortas: Quesadillas & Various Drinks.',
      x: '6006013.135',
      y: '2107762.89',
      latitude: '37.7678552693543',
      longitude: '-122.422484404162',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00122&ExportPDF=1&Filename=19MFF-00122_schedule.pdf',
      approved: '2019-09-06T00:00:00.000',
      received: '2019-09-06',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.422484404162, 37.7678552693543]
      }
    },
    {
      objectid: '1330244',
      applicant: "BOWL'D ACAI, LLC.",
      facilitytype: 'Truck',
      cnn: '9301000',
      locationdescription:
        'MONTGOMERY ST: CALIFORNIA ST to SACRAMENTO ST (400 - 499)',
      address: '451 MONTGOMERY ST',
      blocklot: '0240001',
      block: '0240',
      lot: '001',
      permit: '19MFF-00024',
      status: 'APPROVED',
      fooditems: 'Acai Bowls: Smoothies: Juices',
      x: '6011767.937',
      y: '2117013.017',
      latitude: '37.7935769332618',
      longitude: '-122.403229876701',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00024&ExportPDF=1&Filename=19MFF-00024_schedule.pdf',
      approved: '2019-06-17T00:00:00.000',
      received: '2019-06-17',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.403229876701, 37.7935769332618]
      }
    },
    {
      objectid: '1331430',
      applicant: 'Plaza Garibaldy',
      facilitytype: 'Truck',
      cnn: '3529000',
      locationdescription:
        'CALIFORNIA ST: LEIDESDORFF ST to MONTGOMERY ST (449 - 499)',
      address: '475 CALIFORNIA ST',
      blocklot: '0260010',
      block: '0260',
      lot: '010',
      permit: '19MFF-00026',
      status: 'APPROVED',
      fooditems: 'Tacos: burritos: quesadillas',
      x: '6012002.812',
      y: '2116560.078',
      latitude: '37.792346385148',
      longitude: '-122.402385322794',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00026&ExportPDF=1&Filename=19MFF-00026_schedule.pdf',
      approved: '2019-06-18T00:00:00.000',
      received: '2019-06-18',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402385322794, 37.792346385148]
      }
    },
    {
      objectid: '1331556',
      applicant: 'San Francisco Street Foods, Inc.',
      facilitytype: 'Push Cart',
      cnn: '10625000',
      locationdescription: 'POST ST: KEARNY ST to ROBERT KIRK LN (100 - 140)',
      address: '100 POST ST',
      blocklot: '0294004',
      block: '0294',
      lot: '004',
      permit: '19MFF-00031',
      status: 'APPROVED',
      fooditems:
        'Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.',
      x: '6011057.082',
      y: '2115445.537',
      latitude: '37.7892332828961',
      longitude: '-122.40557905421',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00031&ExportPDF=1&Filename=19MFF-00031_schedule.pdf',
      approved: '2019-06-19T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40557905421, 37.7892332828961]
      }
    },
    {
      objectid: '1331554',
      applicant: 'San Francisco Street Foods, Inc.',
      facilitytype: 'Push Cart',
      cnn: '7038000',
      locationdescription: 'HOWARD ST: 03RD ST to 04TH ST (700 - 799)',
      address: '701 HOWARD ST',
      blocklot: '3734091',
      block: '3734',
      lot: '091',
      permit: '19MFF-00029',
      status: 'APPROVED',
      fooditems:
        'Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.',
      x: '6012391.612',
      y: '2113335.21',
      latitude: '37.7835133512454',
      longitude: '-122.400813391105',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00029&ExportPDF=1&Filename=19MFF-00029_schedule.pdf',
      approved: '2019-06-19T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400813391105, 37.7835133512454]
      }
    },
    {
      objectid: '1332936',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '2138000',
      locationdescription:
        'ALAMEDA ST: HAMPSHIRE ST to BRYANT ST (2400 - 2599)',
      address: 'Assessors Block 3905/Lot011',
      blocklot: '3905011',
      block: '3905',
      lot: '011',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      x: '6009738.83721',
      y: '2107942.1941',
      latitude: '37.7685570713121',
      longitude: '-122.409610236298',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.409610236298, 37.7685570713121]
      }
    },
    {
      objectid: '1332940',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '515000',
      locationdescription: '11TH ST: FOLSOM ST to HARRISON ST (300 - 399)',
      address: '355 11TH ST',
      blocklot: '3520027',
      block: '3520',
      lot: '027',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      x: '6008817.805',
      y: '2109020.872',
      latitude: '37.771467215901',
      longitude: '-122.41287229421',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.41287229421, 37.771467215901]
      }
    },
    {
      objectid: '1332949',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '8958000',
      locationdescription: 'MENDELL ST: GALVEZ AVE to HUDSON AVE (600 - 699)',
      address: '620 MENDELL ST',
      blocklot: '5254002',
      block: '5254',
      lot: '002',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      x: '6016250.092',
      y: '2097183.501',
      latitude: '37.7393786694373',
      longitude: '-122.386337945153',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.386337945153, 37.7393786694373]
      }
    },
    {
      objectid: '1332938',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '2956003',
      locationdescription: 'BERRY ST: 06TH ST to KING ST (400 - 431)',
      address: '420 BERRY ST',
      blocklot: '8703006',
      block: '8703',
      lot: '006',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      x: '6012806.32546',
      y: '2109136.8203',
      latitude: '37.7720086564688',
      longitude: '-122.399083845473',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399083845473, 37.7720086564688]
      }
    },
    {
      objectid: '1332947',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '7740000',
      locationdescription:
        'KANSAS ST: CESAR CHAVEZ ST to MARIN ST (1600 - 1699)',
      address: 'Assessors Block 4341/Lot001',
      blocklot: '4341001',
      block: '4341',
      lot: '001',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      x: '6011939.508',
      y: '2100756.7',
      latitude: '37.7489503634271',
      longitude: '-122.401493189708',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401493189708, 37.7489503634271]
      }
    },
    {
      objectid: '1332942',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '5861002',
      locationdescription: 'FREMONT ST: END to NATOMA ST (116 - 169)',
      address: '147 FREMONT ST',
      blocklot: '3719003',
      block: '3719',
      lot: '003',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      x: '6013984.177',
      y: '2115732.906',
      latitude: '37.7901855706334',
      longitude: '-122.395471725809',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395471725809, 37.7901855706334]
      }
    },
    {
      objectid: '1332948',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '8485000',
      locationdescription: 'LOOMIS ST: FLOWER ST to WATERLOO ST (120 - 255)',
      address: '491 BAY SHORE BLVD',
      blocklot: '5598008',
      block: '5598',
      lot: '008',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1377262',
      applicant: 'Cochinita',
      facilitytype: 'Truck',
      cnn: '358000',
      locationdescription: '07TH AVE: LINCOLN WAY to HUGO ST (1200 - 1246)',
      address: '1219 07TH AVE',
      blocklot: '1743003',
      block: '1743',
      lot: '003',
      permit: '19MFF-00130',
      status: 'APPROVED',
      fooditems: 'Mexican Food: Yucatan Food: Street Food',
      x: '5993824.943',
      y: '2107157.162',
      latitude: '37.7654969876192',
      longitude: '-122.464597619571',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00130&ExportPDF=1&Filename=19MFF-00130_schedule.pdf',
      approved: '2020-01-07T00:00:00.000',
      received: '2019-11-18',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.464597619571, 37.7654969876192]
      }
    },
    {
      objectid: '1332945',
      applicant: 'Mini Mobile Food Catering',
      facilitytype: 'Truck',
      cnn: '6711000',
      locationdescription:
        'HARRISON ST: FREMONT ST \\ I-80 W OFF RAMP to 01ST ST \\ I-80 E ON RAMP (400 - 499)',
      address: '401 HARRISON ST',
      blocklot: '3765001',
      block: '3765',
      lot: '001',
      permit: '19MFF-00041',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00041&ExportPDF=1&Filename=19MFF-00041_schedule.pdf',
      approved: '2019-06-26T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1337729',
      applicant: "Eva's Catering",
      facilitytype: 'Truck',
      cnn: '7236000',
      locationdescription:
        'INGALLS ST: CARROLL AVE to DONNER AVE (2600 - 2699)',
      address: '2600 INGALLS ST',
      blocklot: '4882001',
      block: '4882',
      lot: '001',
      permit: '19MFF-00084',
      status: 'APPROVED',
      fooditems:
        'Corndogs: fried burrito: rice placet: soda: water: sandwiches: soup: noodle plates',
      x: '6015050.344',
      y: '2091107.684',
      latitude: '37.7226292175983',
      longitude: '-122.390061846327',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00084&ExportPDF=1&Filename=19MFF-00084_schedule.pdf',
      approved: '2019-07-17T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390061846327, 37.7226292175983]
      }
    },
    {
      objectid: '1337733',
      applicant: "Eva's Catering",
      facilitytype: 'Truck',
      cnn: '1009000',
      locationdescription: '20TH AVE: LAWTON ST to MORAGA ST (1600 - 1699)',
      address: '1650 20TH AVE',
      blocklot: '3602 103',
      block: '3602',
      lot: '103',
      permit: '19MFF-00085',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages',
      x: '6002765.39824',
      y: '2104234.78252',
      latitude: '37.7579841905286',
      longitude: '-122.433465780407',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00085&ExportPDF=1&Filename=19MFF-00085_schedule.pdf',
      approved: '2019-07-17T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.433465780407, 37.7579841905286]
      }
    },
    {
      objectid: '1331548',
      applicant: 'San Francisco Street Foods, Inc.',
      cnn: '30735000',
      locationdescription:
        'NEW MONTGOMERY ST: MARKET ST \\ MONTGOMERY ST intersection',
      address: '2 MONTGOMERY ST',
      blocklot: '0291007',
      block: '0291',
      lot: '007',
      permit: '19MFF-00027',
      status: 'APPROVED',
      fooditems:
        'Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.',
      x: '6012142.899',
      y: '2115481.242',
      latitude: '37.7893919761027',
      longitude: '-122.401824747121',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00027&ExportPDF=1&Filename=19MFF-00027_schedule.pdf',
      approved: '2019-06-19T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401824747121, 37.7893919761027]
      }
    },
    {
      objectid: '1337730',
      applicant: "Eva's Catering",
      facilitytype: 'Truck',
      cnn: '10006000',
      locationdescription: 'ORTEGA ST: 18TH AVE to 19TH AVE (1100 - 1199)',
      address: '1100 ORTEGA ST',
      blocklot: '2055019',
      block: '2055',
      lot: '019',
      permit: '19MFF-00085',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages',
      x: '5990583.21',
      y: '2102550.36',
      latitude: '37.7526605204123',
      longitude: '-122.475473531781',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00085&ExportPDF=1&Filename=19MFF-00085_schedule.pdf',
      approved: '2019-07-17T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.475473531781, 37.7526605204123]
      }
    },
    {
      objectid: '1337736',
      applicant: "Eva's Catering",
      facilitytype: 'Truck',
      cnn: '5340000',
      locationdescription:
        'EVANS AVE: NAPOLEON ST \\ TOLAND ST to MARIN ST (2000 - 2099)',
      address: '2045 EVANS AVE',
      blocklot: '4343002',
      block: '4343',
      lot: '002',
      permit: '19MFF-00085',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Burrito: Corn Dog: Salads: Sandwiches: Quesadilla: Tacos: Fried Rice: Cow Mein: Chinese Rice: Noodle Plates: Soup: Bacon: Eggs: Ham: Avacado: Sausages: Beverages',
      x: '6013220.459',
      y: '2100301.58',
      latitude: '37.7477720916075',
      longitude: '-122.397031718978',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00085&ExportPDF=1&Filename=19MFF-00085_schedule.pdf',
      approved: '2019-07-17T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397031718978, 37.7477720916075]
      }
    },
    {
      objectid: '1339633',
      applicant: 'Plaza Garibaldy',
      facilitytype: 'Truck',
      cnn: '7033000',
      locationdescription: 'HOWARD ST: 01ST ST to MALDEN ALY (500 - 589)',
      address: '540 HOWARD ST',
      blocklot: '3721015',
      block: '3721',
      lot: '015',
      permit: '19MFF-00100',
      status: 'APPROVED',
      fooditems: 'Tacos: burritos: quesadillas',
      x: '6013457.851',
      y: '2114931.191',
      latitude: '37.7879549596858',
      longitude: '-122.397236543731',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00100&ExportPDF=1&Filename=19MFF-00100_schedule.pdf',
      approved: '2019-07-22T00:00:00.000',
      received: '2019-07-22',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397236543731, 37.7879549596858]
      }
    },
    {
      objectid: '1366268',
      applicant: 'Golden Gate Halal Food',
      facilitytype: 'Push Cart',
      cnn: '8749101',
      locationdescription:
        'MARKET ST: MASON ST \\ TURK ST to 06TH ST \\ GOLDEN GATE AVE \\ TAYLOR ST (943 - 999) -- SOUTH --',
      address: '979 MARKET ST',
      blocklot: '3704068',
      block: '3704',
      lot: '068',
      permit: '19MFF-00126',
      status: 'REQUESTED',
      fooditems: 'Pulao Plates & Sandwiches: Various Drinks',
      x: '6009863.636',
      y: '2112937.779',
      latitude: '37.7822807724186',
      longitude: '-122.40953118732',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00126&ExportPDF=1&Filename=19MFF-00126_schedule.pdf',
      received: '2019-10-07',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40953118732, 37.7822807724186]
      }
    },
    {
      objectid: '1301557',
      applicant: "San Francisco's Hometown Creamery",
      facilitytype: 'Truck',
      cnn: '3528000',
      locationdescription:
        'CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)',
      address: '425 CALIFORNIA ST',
      blocklot: '0260001',
      block: '0260',
      lot: '001',
      permit: '19MFF-00008',
      status: 'APPROVED',
      fooditems: 'Ice Cream: Waffle Cones',
      x: '6012304.287',
      y: '2116717.605',
      latitude: '37.7927957415787',
      longitude: '-122.401353280931',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00008&ExportPDF=1&Filename=19MFF-00008_schedule.pdf',
      approved: '2019-09-06T00:00:00.000',
      received: '2019-03-05',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401353280931, 37.7927957415787]
      }
    },
    {
      objectid: '1331549',
      applicant: 'San Francisco Street Foods, Inc.',
      facilitytype: 'Push Cart',
      cnn: '11222000',
      locationdescription: 'SACRAMENTO ST: FRONT ST to BATTERY ST (300 - 399)',
      address: '1 THE EMBARCADERO',
      blocklot: '0230028',
      block: '0230',
      lot: '028',
      permit: '19MFF-00028',
      status: 'APPROVED',
      fooditems:
        'Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.',
      x: '6012811.658',
      y: '2117380.371',
      latitude: '37.7946438346195',
      longitude: '-122.399644298529',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00028&ExportPDF=1&Filename=19MFF-00028_schedule.pdf',
      approved: '2019-06-19T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399644298529, 37.7946438346195]
      }
    },
    {
      objectid: '1331555',
      applicant: 'San Francisco Street Foods, Inc.',
      facilitytype: 'Push Cart',
      cnn: '30049000',
      locationdescription: 'DRUMM ST: CALIFORNIA ST intersection',
      address: '5 THE EMBARCADERO',
      blocklot: '0234 017',
      block: '0234',
      lot: '017',
      permit: '19MFF-00030',
      status: 'APPROVED',
      fooditems:
        'Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.',
      x: '6013916.72',
      y: '2117244.027',
      latitude: '37.7943310032468',
      longitude: '-122.395811053023',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00030&ExportPDF=1&Filename=19MFF-00030_schedule.pdf',
      approved: '2019-06-19T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395811053023, 37.7943310032468]
      }
    },
    {
      objectid: '1344203',
      applicant: 'Bay Area Dots, LLC',
      facilitytype: 'Push Cart',
      cnn: '25524000',
      locationdescription: 'TAYLOR ST: BAY ST intersection',
      address: '567 BAY ST',
      blocklot: '0043001',
      block: '0043',
      lot: '001',
      permit: '19MFF-00117',
      status: 'REQUESTED',
      fooditems:
        'Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00117&ExportPDF=1&Filename=19MFF-00117_schedule.pdf',
      received: '2019-08-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1344202',
      applicant: 'Bay Area Dots, LLC',
      facilitytype: 'Push Cart',
      cnn: '2846000',
      locationdescription: 'BEACH ST: HYDE ST to LARKIN ST (700 - 799)',
      address: '900 BEACH ST',
      blocklot: '0405007',
      block: '0405',
      lot: '007',
      permit: '19MFF-00116',
      status: 'REQUESTED',
      fooditems:
        'Hot dogs: condiments: soft pretzels: soft drinks: coffee:cold beverages: pastries: bakery goods: cookies: icecream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.',
      x: '6005830.41439',
      y: '2122293.82162',
      latitude: '37.8077432884455',
      longitude: '-122.42414994487',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00116&ExportPDF=1&Filename=19MFF-00116_schedule.pdf',
      received: '2019-08-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.42414994487, 37.8077432884455]
      }
    },
    {
      objectid: '1334950',
      applicant: 'DO UC US Mobile Catering',
      facilitytype: 'Truck',
      cnn: '10293000',
      locationdescription: 'PARNASSUS AVE: HILLWAY AVE to 03RD AVE (400 - 599)',
      address: '400 PARNASSUS AVE',
      blocklot: '1756001',
      block: '1756',
      lot: '001',
      permit: '19MFF-00050',
      status: 'APPROVED',
      fooditems:
        'Cold truck: sandwiches: salads: beverages: chips: candy: cookies: coffee: tea: drinks',
      x: '5995605.966',
      y: '2106525.104',
      latitude: '37.7638640323832',
      longitude: '-122.458391749844',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00050&ExportPDF=1&Filename=19MFF-00050_schedule.pdf',
      approved: '2019-07-05T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.458391749844, 37.7638640323832]
      }
    },
    {
      objectid: '1377263',
      applicant: 'Cochinita',
      facilitytype: 'Truck',
      cnn: '4806101',
      locationdescription:
        'DIVISADERO ST: MCALLISTER ST to GOLDEN GATE AVE (901 - 999) -- WEST --',
      address: '999 DIVISADERO ST',
      blocklot: '1156034',
      block: '1156',
      lot: '034',
      permit: '19MFF-00130',
      status: 'APPROVED',
      fooditems: 'Mexican Food: Yucatan Food: Street Food',
      x: '6001382.637',
      y: '2111693.088',
      latitude: '37.778384300969',
      longitude: '-122.438782388567',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00130&ExportPDF=1&Filename=19MFF-00130_schedule.pdf',
      approved: '2020-01-07T00:00:00.000',
      received: '2019-11-18',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.438782388567, 37.778384300969]
      }
    },
    {
      objectid: '1338128',
      applicant: 'Street Meet',
      facilitytype: 'Truck',
      cnn: '9053000',
      locationdescription:
        'MINNESOTA ST: 04TH ST \\ MARIPOSA ST to 18TH ST (500 - 599)',
      address: '777 MARIPOSA ST',
      blocklot: '3997004',
      block: '3997',
      lot: '004',
      permit: '19MFF-00013',
      status: 'APPROVED',
      fooditems: 'Tacos: burritos: quesadillas: tortas: asada fries: nachos',
      x: '6015005.349',
      y: '2106106.834',
      latitude: '37.7638112772906',
      longitude: '-122.391265350599',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00013&ExportPDF=1&Filename=19MFF-00013_schedule.pdf',
      approved: '2019-12-09T00:00:00.000',
      received: '2019-04-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391265350599, 37.7638112772906]
      }
    },
    {
      objectid: '1337774',
      applicant: 'Papalote Inc.',
      facilitytype: 'Truck',
      cnn: '12044000',
      locationdescription: 'SPEAR ST: MARKET ST to MISSION ST (1 - 99)',
      address: '60 SPEAR ST',
      blocklot: '3712023',
      block: '3712',
      lot: '023',
      permit: '19MFF-00087',
      status: 'APPROVED',
      fooditems: 'Mexican; Burritos: Burrito Bowls: Salads',
      x: '6014255.311',
      y: '2116583.43',
      latitude: '37.7925359884311',
      longitude: '-122.394593199235',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00087&ExportPDF=1&Filename=19MFF-00087_schedule.pdf',
      approved: '2019-07-15T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394593199235, 37.7925359884311]
      }
    },
    {
      objectid: '1334952',
      applicant: 'DO UC US Mobile Catering',
      facilitytype: 'Truck',
      cnn: '19986000',
      locationdescription:
        '04TH ST: MISSION BAY BLVD to NELSON RISING LN (1400 - 1499)',
      address: '1420 04TH ST',
      blocklot: '8716001',
      block: '8716',
      lot: '001',
      permit: '19MFF-00050',
      status: 'APPROVED',
      fooditems:
        'Cold truck: sandwiches: salads: beverages: chips: candy: cookies: coffee: tea: drinks',
      x: '6015098.414',
      y: '2108321.616',
      latitude: '37.7698977488961',
      longitude: '-122.391098279635',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00050&ExportPDF=1&Filename=19MFF-00050_schedule.pdf',
      approved: '2019-07-05T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391098279635, 37.7698977488961]
      }
    },
    {
      objectid: '1336106',
      applicant: 'Treats by the Bay LLC',
      facilitytype: 'Truck',
      cnn: '5170000',
      locationdescription: 'ELLIS ST: POWELL ST to CYRIL MAGNIN ST (100 - 148)',
      address: '120 ELLIS ST',
      blocklot: '0326005',
      block: '0326',
      lot: '005',
      permit: '19MFF-00040',
      status: 'APPROVED',
      fooditems: 'Prepackaged Kettlecorn',
      x: '6010286.046',
      y: '2114141.69',
      latitude: '37.7856100863691',
      longitude: '-122.408154764345',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00040&ExportPDF=1&Filename=19MFF-00040_schedule.pdf',
      approved: '2019-09-10T00:00:00.000',
      received: '2019-06-26',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.408154764345, 37.7856100863691]
      }
    },
    {
      objectid: '1330588',
      applicant: 'Lerso',
      facilitytype: 'Truck',
      cnn: '9108000',
      locationdescription: 'MISSION ST: 10TH ST to 11TH ST (1400 - 1499)',
      address: '1450 MISSION ST',
      blocklot: '3507040',
      block: '3507',
      lot: '040',
      permit: '19MFF-00019',
      status: 'APPROVED',
      fooditems:
        'Pernil Asado: Ropa Vieja: Arroz con Pollo: Cuban Sandwich: Croquetas Fritas: Tostones: Platanos Maduros: Yuca Frita',
      x: '6007518.36',
      y: '2110417.248',
      latitude: '37.775228307834',
      longitude: '-122.41746613187',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00019&ExportPDF=1&Filename=19MFF-00019_schedule.pdf',
      approved: '2019-10-25T00:00:00.000',
      received: '2019-05-31',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.41746613187, 37.775228307834]
      }
    },
    {
      objectid: '1337904',
      applicant: 'Treats by the Bay LLC',
      facilitytype: 'Truck',
      cnn: '19987000',
      locationdescription:
        '04TH ST: NELSON RISING LN to GENE FRIEND WAY (1500 - 1599)',
      address: '1550 04TH ST',
      blocklot: '8711007',
      block: '8711',
      lot: '007',
      permit: '19MFF-00042',
      status: 'APPROVED',
      fooditems: 'Prepackaged Kettle Corn',
      x: '6014983.88328',
      y: '2108042.28534',
      latitude: '37.7691244121681',
      longitude: '-122.391474911246',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00042&ExportPDF=1&Filename=19MFF-00042_schedule.pdf',
      approved: '2019-12-09T00:00:00.000',
      received: '2019-06-28',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391474911246, 37.7691244121681]
      }
    },
    {
      objectid: '1331663',
      applicant: 'Senor Sisig',
      facilitytype: 'Truck',
      cnn: '5170000',
      locationdescription: 'ELLIS ST: POWELL ST to CYRIL MAGNIN ST (100 - 148)',
      address: '120 ELLIS ST',
      blocklot: '0326005',
      block: '0326',
      lot: '005',
      permit: '19MFF-00033',
      status: 'APPROVED',
      fooditems: 'Filipino fusion food: taco: burrito: nachos: rice plates',
      x: '6010286.046',
      y: '2114141.69',
      latitude: '37.7856100863691',
      longitude: '-122.408154764345',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00033&ExportPDF=1&Filename=19MFF-00033_schedule.pdf',
      approved: '2019-06-28T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.408154764345, 37.7856100863691]
      }
    },
    {
      objectid: '1331664',
      applicant: 'Senor Sisig',
      facilitytype: 'Truck',
      cnn: '10456000',
      locationdescription: 'PINE ST: SANSOME ST to CENTURY PL (300 - 340)',
      address: '300 PINE ST',
      blocklot: '0260005',
      block: '0260',
      lot: '005',
      permit: '19MFF-00034',
      status: 'APPROVED',
      fooditems:
        'Filipino fusion food: tacos: burritos: nachos: rice plates. Various beverages.',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00034&ExportPDF=1&Filename=19MFF-00034_schedule.pdf',
      approved: '2019-06-28T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1357612',
      applicant: 'FRUITYMANIA',
      facilitytype: 'Push Cart',
      cnn: '8747202',
      locationdescription:
        'MARKET ST: 04TH ST \\ ELLIS ST \\ STOCKTON ST to POWELL ST (800 - 890) -- NORTH --',
      address: '870 MARKET ST',
      blocklot: '0329005',
      block: '0329',
      lot: '005',
      permit: '19MFF-00123',
      status: 'APPROVED',
      fooditems: 'Fruit Salads: Fruit Drinks: Can Soda: Water',
      x: '6010493.859',
      y: '2113955.658',
      latitude: '37.7851109204478',
      longitude: '-122.407422668277',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00123&ExportPDF=1&Filename=19MFF-00123_schedule.pdf',
      approved: '2019-09-12T00:00:00.000',
      received: '2019-09-12',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.407422668277, 37.7851109204478]
      }
    },
    {
      objectid: '1331880',
      applicant: "Bay Area Mobile Catering, Inc. dba. Taqueria Angelica's",
      facilitytype: 'Truck',
      cnn: '2471000',
      locationdescription:
        'CESAR CHAVEZ ST: INDIANA ST to IOWA ST (1300 - 1399)',
      address: '1301 CESAR CHAVEZ ST',
      blocklot: '4352007',
      block: '4352',
      lot: '007',
      permit: '19MFF-00037',
      status: 'APPROVED',
      fooditems: 'Tacos: Burritos: Tortas: Quesadillas: Sodas: Chips: Candy',
      x: '6014982.06972',
      y: '2100806.30269',
      latitude: '37.7492558595291',
      longitude: '-122.390975379577',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00037&ExportPDF=1&Filename=19MFF-00037_schedule.pdf',
      approved: '2019-06-21T00:00:00.000',
      received: '2019-06-20',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390975379577, 37.7492558595291]
      }
    },
    {
      objectid: '1331884',
      applicant: "Bay Area Mobile Catering, Inc. dba. Taqueria Angelica's",
      facilitytype: 'Truck',
      cnn: '5683000',
      locationdescription: 'FOLSOM ST: 11TH ST to NORFOLK ST (1500 - 1548)',
      address: '1501 FOLSOM ST',
      blocklot: '3521058',
      block: '3521',
      lot: '058',
      permit: '19MFF-00038',
      status: 'APPROVED',
      fooditems: 'Tacos: burritos: soda & juice',
      x: '6008490.781',
      y: '2109071.076',
      latitude: '37.7715867026703',
      longitude: '-122.414007043024',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00038&ExportPDF=1&Filename=19MFF-00038_schedule.pdf',
      approved: '2019-06-21T00:00:00.000',
      received: '2019-06-20',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.414007043024, 37.7715867026703]
      }
    },
    {
      objectid: '1331883',
      applicant: "Bay Area Mobile Catering, Inc. dba. Taqueria Angelica's",
      facilitytype: 'Truck',
      cnn: '1428000',
      locationdescription: '25TH ST: ALABAMA ST to HARRISON ST (3042 - 3099)',
      address: '3065 25TH ST',
      blocklot: '4271038',
      block: '4271',
      lot: '038',
      permit: '19MFF-00038',
      status: 'APPROVED',
      fooditems: 'Tacos: burritos: soda & juice',
      x: '6009084.78',
      y: '2101536.437',
      latitude: '37.7509316476402',
      longitude: '-122.411419966206',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00038&ExportPDF=1&Filename=19MFF-00038_schedule.pdf',
      approved: '2019-06-21T00:00:00.000',
      received: '2019-06-20',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.411419966206, 37.7509316476402]
      }
    },
    {
      objectid: '1331885',
      applicant: "Bay Area Mobile Catering, Inc. dba. Taqueria Angelica's",
      facilitytype: 'Truck',
      cnn: '9108000',
      locationdescription: 'MISSION ST: 10TH ST to 11TH ST (1400 - 1499)',
      address: '1455 MARKET ST',
      blocklot: '3507040',
      block: '3507',
      lot: '040',
      permit: '19MFF-00038',
      status: 'APPROVED',
      fooditems: 'Tacos: burritos: soda & juice',
      x: '6007518.36',
      y: '2110417.248',
      latitude: '37.775228307834',
      longitude: '-122.41746613187',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00038&ExportPDF=1&Filename=19MFF-00038_schedule.pdf',
      approved: '2019-06-21T00:00:00.000',
      received: '2019-06-20',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.41746613187, 37.775228307834]
      }
    },
    {
      objectid: '1331668',
      applicant: 'Senor Sisig',
      facilitytype: 'Truck',
      cnn: '480000',
      locationdescription:
        '10TH ST: FELL ST \\ MARKET ST \\ POLK ST to END (1 - 18)',
      address: '8 10TH ST',
      blocklot: '3507041',
      block: '3507',
      lot: '041',
      permit: '19MFF-00036',
      status: 'APPROVED',
      fooditems:
        'Senor Sisig: Filipino fusion food: tacos: burritos: nachos: rice plates. Various beverages.Chairman Bao: Vegetable and meat sandwiches filled with Asian-flavored meats and vegetables.',
      x: '6007585.376',
      y: '2110633.378',
      latitude: '37.7758255197583',
      longitude: '-122.417249626643',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00036&ExportPDF=1&Filename=19MFF-00036_schedule.pdf',
      approved: '2019-06-28T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.417249626643, 37.7758255197583]
      }
    },
    {
      objectid: '1331658',
      applicant: 'Senor Sisig',
      facilitytype: 'Truck',
      cnn: '9097000',
      locationdescription: 'MISSION ST: 05TH ST to MINT ST (900 - 930)',
      address: '901 MISSION ST',
      blocklot: '3725093',
      block: '3725',
      lot: '093',
      permit: '19MFF-00032',
      status: 'APPROVED',
      fooditems:
        'Senor Sisig: Filipino fusion food: tacos: burritos: nachos: rice plates. Various beverages.',
      x: '6010709.29',
      y: '2112874.234',
      latitude: '37.7821536409986',
      longitude: '-122.406601106839',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00032&ExportPDF=1&Filename=19MFF-00032_schedule.pdf',
      approved: '2019-06-28T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.406601106839, 37.7821536409986]
      }
    },
    {
      objectid: '1331667',
      applicant: 'Senor Sisig',
      facilitytype: 'Truck',
      cnn: '3143000',
      locationdescription: 'BROADWAY: DAVIS ST to FRONT ST (50 - 99)',
      address: '90 BROADWAY',
      blocklot: '0140007',
      block: '0140',
      lot: '007',
      permit: '19MFF-00036',
      status: 'APPROVED',
      fooditems:
        'Senor Sisig: Filipino fusion food: tacos: burritos: nachos: rice plates. Various beverages.Chairman Bao: Vegetable and meat sandwiches filled with Asian-flavored meats and vegetables.',
      x: '6012853.387',
      y: '2119060.762',
      latitude: '37.7992601135023',
      longitude: '-122.399617948655',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00036&ExportPDF=1&Filename=19MFF-00036_schedule.pdf',
      approved: '2019-06-28T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399617948655, 37.7992601135023]
      }
    },
    {
      objectid: '1336776',
      applicant: 'Golden Catering',
      facilitytype: 'Truck',
      cnn: '5372202',
      locationdescription:
        'EXECUTIVE PARK BLVD: EMERALD COVE WAY to CANDLESTICK COVE WAY (101 - 137)',
      address: '101 EXECUTIVE PARK BLVD',
      blocklot: '4991241',
      block: '4991',
      lot: '241',
      permit: '19MFF-00057',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged Sandwiches: Various Beverages: Salads: Snacks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00057&ExportPDF=1&Filename=19MFF-00057_schedule.pdf',
      approved: '2019-07-15T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1337775',
      applicant: 'Papalote Inc.',
      facilitytype: 'Truck',
      cnn: '7032000',
      locationdescription: 'HOWARD ST: FREMONT ST to 01ST ST (400 - 499)',
      address: '400 HOWARD ST',
      blocklot: '3720008',
      block: '3720',
      lot: '008',
      permit: '19MFF-00087',
      status: 'APPROVED',
      fooditems: 'Mexican; Burritos: Burrito Bowls: Salads',
      x: '6013858.05956',
      y: '2115347.09492',
      latitude: '37.7891192076677',
      longitude: '-122.395881039335',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00087&ExportPDF=1&Filename=19MFF-00087_schedule.pdf',
      approved: '2019-07-15T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395881039335, 37.7891192076677]
      }
    },
    {
      objectid: '1331662',
      applicant: 'Senor Sisig',
      facilitytype: 'Truck',
      cnn: '132000',
      locationdescription: '02ND ST: MISSION ST to MINNA ST (100 - 130)',
      address: '120 02ND ST',
      blocklot: '3722002',
      block: '3722',
      lot: '002',
      permit: '19MFF-00033',
      status: 'APPROVED',
      fooditems: 'Filipino fusion food: taco: burrito: nachos: rice plates',
      x: '6012781.49',
      y: '2114784.339',
      latitude: '37.7875140607381',
      longitude: '-122.399566331429',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00033&ExportPDF=1&Filename=19MFF-00033_schedule.pdf',
      approved: '2019-06-28T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399566331429, 37.7875140607381]
      }
    },
    {
      objectid: '1331657',
      applicant: 'Senor Sisig',
      facilitytype: 'Truck',
      cnn: '3525000',
      locationdescription: 'CALIFORNIA ST: DAVIS ST to FRONT ST (100 - 199)',
      address: '101 CALIFORNIA ST',
      blocklot: '0263011',
      block: '0263',
      lot: '011',
      permit: '19MFF-00032',
      status: 'APPROVED',
      fooditems:
        'Senor Sisig: Filipino fusion food: tacos: burritos: nachos: rice plates. Various beverages.',
      x: '6013245.668',
      y: '2116754.292',
      latitude: '37.7929489528347',
      longitude: '-122.398098613167',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00032&ExportPDF=1&Filename=19MFF-00032_schedule.pdf',
      approved: '2019-06-28T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398098613167, 37.7929489528347]
      }
    },
    {
      objectid: '1331665',
      applicant: 'Senor Sisig',
      facilitytype: 'Truck',
      cnn: '5874000',
      locationdescription: 'FRONT ST: BROADWAY to VALLEJO ST (800 - 899)',
      address: '90 BROADWAY',
      blocklot: '0140007',
      block: '0140',
      lot: '007',
      permit: '19MFF-00035',
      status: 'APPROVED',
      fooditems: 'Various menu items & drinks',
      x: '6012853.387',
      y: '2119060.762',
      latitude: '37.7992601135023',
      longitude: '-122.399617948655',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00035&ExportPDF=1&Filename=19MFF-00035_schedule.pdf',
      approved: '2019-06-28T00:00:00.000',
      received: '2019-06-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399617948655, 37.7992601135023]
      }
    },
    {
      objectid: '1334475',
      applicant: 'Treats by the Bay LLC',
      facilitytype: 'Push Cart',
      cnn: '8737101',
      locationdescription:
        'MARKET ST: STEUART ST to SPEAR ST (1 - 99) -- SOUTH --',
      address: '1 MARKET ST',
      blocklot: '3713006',
      block: '3713',
      lot: '006',
      permit: '19MFF-00023',
      status: 'APPROVED',
      fooditems: 'Ice Cream: Donuts',
      x: '6014186.566',
      y: '2117071.214',
      latitude: '37.7938715071506',
      longitude: '-122.394865238621',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00023&ExportPDF=1&Filename=19MFF-00023_schedule.pdf',
      approved: '2019-09-12T00:00:00.000',
      received: '2019-06-14',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394865238621, 37.7938715071506]
      }
    },
    {
      objectid: '1337607',
      applicant:
        "The New York Frankfurter Co. of CA, Inc. DBA: Annie's Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '24892000',
      locationdescription:
        'STOCKTON ST: 04TH ST \\ ELLIS ST \\ MARKET ST intersection',
      address: '800 MARKET ST',
      blocklot: '0329001',
      block: '0329',
      lot: '001',
      permit: '19MFF-00081',
      status: 'APPROVED',
      fooditems:
        'Soft pretzels: hot dogs: sausages: chips: popcorn: sodea: coffee: espresso: cappucino: pastries: ice cream: Italian sausages: shish-ka-bob: churros: juice: water: various drinks.',
      x: '6010729.654',
      y: '2114081.536',
      latitude: '37.7854697464899',
      longitude: '-122.406615761073',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00081&ExportPDF=1&Filename=19MFF-00081_schedule.pdf',
      approved: '2019-07-15T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.406615761073, 37.7854697464899]
      }
    },
    {
      objectid: '1337055',
      applicant: "San Francisco's Hometown Creamery",
      facilitytype: 'Truck',
      cnn: '6109000',
      locationdescription: 'GEARY ST: STOCKTON ST to POWELL ST (200 - 299)',
      address: '281 GEARY ST',
      blocklot: '0314013',
      block: '0314',
      lot: '013',
      permit: '19MFF-00067',
      status: 'APPROVED',
      fooditems: 'Ice cream',
      x: '6010423.418',
      y: '2114694.802',
      latitude: '37.7871364910861',
      longitude: '-122.407718509001',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00067&ExportPDF=1&Filename=19MFF-00067_schedule.pdf',
      approved: '2019-07-15T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.407718509001, 37.7871364910861]
      }
    },
    {
      objectid: '1336775',
      applicant: 'Golden Catering',
      facilitytype: 'Truck',
      cnn: '4494000',
      locationdescription:
        'CRESCENT AVE: ANDERSON ST to ELLSWORTH ST (600 - 699)',
      address: '601 CRESCENT AVE',
      blocklot: '5741016',
      block: '5741',
      lot: '016',
      permit: '19MFF-00057',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged Sandwiches: Various Beverages: Salads: Snacks',
      x: '6007810.618',
      y: '2095762.19',
      latitude: '37.7350052991284',
      longitude: '-122.415417409745',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00057&ExportPDF=1&Filename=19MFF-00057_schedule.pdf',
      approved: '2019-07-15T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.415417409745, 37.7350052991284]
      }
    },
    {
      objectid: '1357615',
      applicant: 'FRUITYMANIA',
      facilitytype: 'Push Cart',
      cnn: '8747102',
      locationdescription:
        'MARKET ST: 04TH ST \\ ELLIS ST \\ STOCKTON ST to POWELL ST (801 - 863) -- SOUTH --',
      address: '801 MARKET ST',
      blocklot: '3705Z001',
      block: '3705Z',
      lot: '001',
      permit: '19MFF-00124',
      status: 'APPROVED',
      fooditems: 'Fruit Salads: Fruit Drinks: Can Soda: Water',
      x: '6010997.43389',
      y: '2113901.46037',
      latitude: '37.7849902793065',
      longitude: '-122.405676629072',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00124&ExportPDF=1&Filename=19MFF-00124_schedule.pdf',
      approved: '2019-09-12T00:00:00.000',
      received: '2019-09-12',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.405676629072, 37.7849902793065]
      }
    },
    {
      objectid: '1337614',
      applicant:
        "The New York Frankfurter Co. of CA, Inc. DBA: Annie's Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '8747202',
      locationdescription:
        'MARKET ST: 04TH ST \\ ELLIS ST \\ STOCKTON ST to POWELL ST (800 - 890) -- NORTH --',
      address: '870 MARKET ST',
      blocklot: '0329005',
      block: '0329',
      lot: '005',
      permit: '19MFF-00082',
      status: 'APPROVED',
      fooditems:
        'Soft pretzels: hot dogs: sausages: chips: popcorn: soda: espresso: cappucino: pastry: ica cream: ices: italian sausage: shish-ka-bob: churros: juice: water: various drinks',
      x: '6010493.859',
      y: '2113955.658',
      latitude: '37.7851109204478',
      longitude: '-122.407422668277',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00082&ExportPDF=1&Filename=19MFF-00082_schedule.pdf',
      approved: '2019-07-15T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.407422668277, 37.7851109204478]
      }
    },
    {
      objectid: '1337787',
      applicant: 'Giant Burrito',
      facilitytype: 'Truck',
      cnn: '6148201',
      locationdescription:
        'GENEVA AVE: PRAGUE ST to LINDA VISTA STPS (1500 - 1598) -- SOUTH --',
      address: '1500 GENEVA AVE',
      blocklot: '6418065',
      block: '6418',
      lot: '065',
      permit: '19MFF-00088',
      status: 'REQUESTED',
      fooditems:
        'Tacos: Burritos: Tostadas: Flautas: Tostadas: Tortas: Pozole Menudo',
      x: '6002948.585',
      y: '2087593.93',
      latitude: '37.7123026047444',
      longitude: '-122.431644190373',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00088&ExportPDF=1&Filename=19MFF-00088_schedule.pdf',
      received: '2019-07-15',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.431644190373, 37.7123026047444]
      }
    },
    {
      objectid: '1344846',
      applicant: 'Faith Sandwich',
      facilitytype: 'Push Cart',
      cnn: '9090000',
      locationdescription: 'MISSION ST: SHAW ALY to ANTHONY ST (543 - 586)',
      address: '560 MISSION ST',
      blocklot: '3708095',
      block: '3708',
      lot: '095',
      permit: '19MFF-00118',
      status: 'APPROVED',
      fooditems:
        'BBQ PORK SANDWICHGRILL CHICKEN SANDWICHSHIRMP SPRING ROLLSBBQ PORK OVER RICEGRILL CHICKEN OVER RICEBBQ PORK VERMICELLIGRILL CHICKEN VERMICELLIBBQ PORK GARLIC NOODLEGRILL CHICKEN GARLIC NOODLENEW ITEMS:MASALA DOSAPANNER DOSACHICKEN CURRY & RICECHICKEN STEWRICE OR DOSAADD CHEESEADD GHEE',
      x: '6012851.27',
      y: '2115274.827',
      latitude: '37.788864715343',
      longitude: '-122.399359351363',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00118&ExportPDF=1&Filename=19MFF-00118_schedule.pdf',
      approved: '2019-08-05T00:00:00.000',
      received: '2019-08-05',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399359351363, 37.788864715343]
      }
    },
    {
      objectid: '1339667',
      applicant: 'Curry Up Now',
      facilitytype: 'Truck',
      cnn: '3422000',
      address: '225 BUSH ST',
      blocklot: '0289001',
      block: '0289',
      lot: '001',
      permit: '19MFF-00101',
      status: 'APPROVED',
      fooditems:
        'Chicken Tiki Masala Burritos: Paneer Tiki Masala Burritos: Samosas: Mango Lassi',
      x: '6012345.54',
      y: '2116003.915',
      latitude: '37.7908384194517',
      longitude: '-122.401160370299',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00101&ExportPDF=1&Filename=19MFF-00101_schedule.pdf',
      approved: '2019-07-23T00:00:00.000',
      received: '2019-07-22',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401160370299, 37.7908384194517]
      }
    },
    {
      objectid: '1334951',
      applicant: 'DO UC US Mobile Catering',
      facilitytype: 'Truck',
      cnn: '185104',
      locationdescription:
        '03RD ST: MISSION BAY BLVD to WARRIORS WAY (1401 - 1599) -- EAST --',
      address: '1501 03RD ST',
      blocklot: '8720013',
      block: '8720',
      lot: '013',
      permit: '19MFF-00050',
      status: 'APPROVED',
      fooditems:
        'Cold truck: sandwiches: salads: beverages: chips: candy: cookies: coffee: tea: drinks',
      x: '6015663.18414',
      y: '2108672.39344',
      latitude: '37.7708922310318',
      longitude: '-122.389169231483',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00050&ExportPDF=1&Filename=19MFF-00050_schedule.pdf',
      approved: '2019-07-05T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389169231483, 37.7708922310318]
      }
    },
    {
      objectid: '1332510',
      applicant: 'Flavors of Africa',
      facilitytype: 'Truck',
      cnn: '7032000',
      locationdescription: 'HOWARD ST: FREMONT ST to 01ST ST (400 - 499)',
      address: '405 HOWARD ST',
      blocklot: '3737030',
      block: '3737',
      lot: '030',
      permit: '19MFF-00020',
      status: 'APPROVED',
      fooditems:
        'Organic Jamaican Chicken Pattie: Organic Vegan - Spinach & Onion Pattie: Chicken Lamba Rice: Organic Sheba Stewed Blackeye Peas with Plantains',
      x: '6014066.5664',
      y: '2115128.28746',
      latitude: '37.7885300106325',
      longitude: '-122.395144293874',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00020&ExportPDF=1&Filename=19MFF-00020_schedule.pdf',
      approved: '2020-02-21T00:00:00.000',
      received: '2019-06-06',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395144293874, 37.7885300106325]
      }
    },
    {
      objectid: '1336774',
      applicant: 'Golden Catering',
      facilitytype: 'Truck',
      cnn: '2825101',
      locationdescription:
        'BAY SHORE BLVD: LELAND AVE to VISITACION AVE (2401 - 2499) -- EAST --',
      address: '2401 BAY SHORE BLVD',
      blocklot: '5087003A',
      block: '5087',
      lot: '003A',
      permit: '19MFF-00057',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged Sandwiches: Various Beverages: Salads: Snacks',
      x: '6011284.798',
      y: '2086924.615',
      latitude: '37.710933792981',
      longitude: '-122.40278453801',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00057&ExportPDF=1&Filename=19MFF-00057_schedule.pdf',
      approved: '2019-07-15T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40278453801, 37.710933792981]
      }
    },
    {
      objectid: '1372486',
      applicant: 'Los 2 Cuates',
      facilitytype: 'Truck',
      cnn: '8722000',
      locationdescription:
        'MARIPOSA ST: ARKANSAS ST to CAROLINA ST (1500 - 1699)',
      address: '1601 MARIPOSA ST',
      blocklot: '4006005',
      block: '4006',
      lot: '005',
      permit: '19MFF-00129',
      status: 'REQUESTED',
      fooditems: 'Peruvian Food',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00129&ExportPDF=1&Filename=19MFF-00129_schedule.pdf',
      received: '2019-10-28',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1336777',
      applicant: 'Golden Catering',
      facilitytype: 'Truck',
      cnn: '5374000',
      locationdescription:
        'EXECUTIVE PARK BLVD: CRESCENT WAY to HARNEY WAY (300 - 399)',
      address: '301 EXECUTIVE PARK BLVD',
      blocklot: '4991240',
      block: '4991',
      lot: '240',
      permit: '19MFF-00057',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged Sandwiches: Various Beverages: Salads: Snacks',
      x: '6014982.64302',
      y: '2087104.0558',
      latitude: '37.7116322811949',
      longitude: '-122.390016333636',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00057&ExportPDF=1&Filename=19MFF-00057_schedule.pdf',
      approved: '2019-07-15T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390016333636, 37.7116322811949]
      }
    },
    {
      objectid: '1337770',
      applicant: 'Buenafe',
      facilitytype: 'Truck',
      cnn: '9199000',
      locationdescription:
        'MISSISSIPPI ST: 07TH ST \\ 16TH ST to 17TH ST (1 - 99)',
      address: '901 16TH ST',
      blocklot: '3949001',
      block: '3949',
      lot: '001',
      permit: '19MFF-00086',
      status: 'APPROVED',
      fooditems: 'Tacos burritos quesadillas tortas pupusas flautas tamales',
      x: '6013806.356',
      y: '2106973.63',
      latitude: '37.766124694427',
      longitude: '-122.39547306227',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00086&ExportPDF=1&Filename=19MFF-00086_schedule.pdf',
      approved: '2019-07-15T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.39547306227, 37.766124694427]
      }
    },
    {
      objectid: '1336778',
      applicant: 'Golden Catering',
      facilitytype: 'Truck',
      cnn: '7428000',
      locationdescription:
        'JAMESTOWN AVE: GRIFFITH ST to CORONADO ST (800 - 850)',
      address: '835 JAMESTOWN AVE',
      blocklot: '4991277',
      block: '4991',
      lot: '277',
      permit: '19MFF-00057',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged Sandwiches: Various Beverages: Salads: Snacks',
      x: '6014385.405',
      y: '2089134.434',
      latitude: '37.7171741618036',
      longitude: '-122.392222474624',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00057&ExportPDF=1&Filename=19MFF-00057_schedule.pdf',
      approved: '2019-07-15T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392222474624, 37.7171741618036]
      }
    },
    {
      objectid: '1359707',
      applicant: 'Union Square Business Improvement District',
      facilitytype: 'Truck',
      cnn: '8626000',
      locationdescription: 'MAIDEN LN: GRANT AVE to STOCKTON ST (100 - 199)',
      address: 'Assessors Block /Lot',
      permit: '19MFF-00125',
      status: 'REQUESTED',
      fooditems:
        "All types of food except for BBQ on site per fire safety. Partnership with Off the Grid and their fleet of MFF's",
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00125&ExportPDF=1&Filename=19MFF-00125_schedule.pdf',
      received: '2019-09-20',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1372485',
      applicant: 'Los 2 Cuates',
      facilitytype: 'Truck',
      cnn: '12045000',
      locationdescription: 'SPEAR ST: MISSION ST to HOWARD ST (100 - 199)',
      address: '100 SPEAR ST',
      blocklot: '3717001',
      block: '3717',
      lot: '001',
      permit: '19MFF-00129',
      status: 'REQUESTED',
      fooditems: 'Peruvian Food',
      x: '6014423.85',
      y: '2116439.642',
      latitude: '37.7921505484817',
      longitude: '-122.393999974059',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00129&ExportPDF=1&Filename=19MFF-00129_schedule.pdf',
      received: '2019-10-28',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393999974059, 37.7921505484817]
      }
    },
    {
      objectid: '1339842',
      applicant: 'JapaCurry',
      facilitytype: 'Truck',
      cnn: '9092000',
      locationdescription:
        'MISSION ST: 02ND ST to NEW MONTGOMERY ST (600 - 634)',
      address: '602 MISSION ST',
      blocklot: '3707013',
      block: '3707',
      lot: '013',
      permit: '19MFF-00102',
      status: 'APPROVED',
      fooditems:
        'Katsu Curry: KUROBUTA Sausage Curry: Vegetable Curry: Veggie Croquette Curry: Chicken NANBAN Bento: Nori Bento: water: soda: green tea',
      x: '6012606.129',
      y: '2114955.147',
      latitude: '37.787973283216',
      longitude: '-122.400185049889',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00102&ExportPDF=1&Filename=19MFF-00102_schedule.pdf',
      approved: '2019-07-23T00:00:00.000',
      received: '2019-07-23',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400185049889, 37.787973283216]
      }
    },
    {
      objectid: '1337786',
      applicant: 'Giant Burrito',
      facilitytype: 'Truck',
      cnn: '2800102',
      locationdescription:
        'BAY SHORE BLVD: FLOWER ST to CORTLAND AVE (341 - 489) -- EAST --',
      address: '353 BAY SHORE BLVD',
      blocklot: '5598030',
      block: '5598',
      lot: '030',
      permit: '19MFF-00088',
      status: 'REQUESTED',
      fooditems:
        'Tacos: Burritos: Tostadas: Flautas: Tostadas: Tortas: Pozole Menudo',
      x: '6010751.382',
      y: '2098146.819',
      latitude: '37.7417178307439',
      longitude: '-122.405417977448',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00088&ExportPDF=1&Filename=19MFF-00088_schedule.pdf',
      received: '2019-07-15',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.405417977448, 37.7417178307439]
      }
    },
    {
      objectid: '1337620',
      applicant:
        "The New York Frankfurter Co. of CA, Inc. DBA: Annie's Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '12195000',
      locationdescription: 'STOCKTON ST: OFARRELL ST to GEARY ST (100 - 199)',
      address: '101 STOCKTON ST',
      blocklot: '0314002',
      block: '0314',
      lot: '002',
      permit: '19MFF-00083',
      status: 'APPROVED',
      fooditems:
        'Soft Pretzels: hot dogs: sausage: chips: popcorn: soda: espresso: cappucino: pastries: ice cream: italian sausages: shish-ka-bob: churros: juice: water: various drinks',
      x: '6010660.159',
      y: '2114587.863',
      latitude: '37.7868561118831',
      longitude: '-122.406891892997',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00083&ExportPDF=1&Filename=19MFF-00083_schedule.pdf',
      approved: '2019-07-15T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.406891892997, 37.7868561118831]
      }
    },
    {
      objectid: '1377259',
      applicant: 'Cochinita',
      facilitytype: 'Truck',
      cnn: '142000',
      locationdescription: '02ND ST: BRYANT ST to TABER PL (500 - 518)',
      address: '501 02ND ST',
      blocklot: '3774067',
      block: '3774',
      lot: '067',
      permit: '19MFF-00130',
      status: 'APPROVED',
      fooditems: 'Mexican Food: Yucatan Food: Street Food',
      x: '6014675.196',
      y: '2113164.273',
      latitude: '37.7831711043434',
      longitude: '-122.392901049479',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00130&ExportPDF=1&Filename=19MFF-00130_schedule.pdf',
      approved: '2020-01-07T00:00:00.000',
      received: '2019-11-18',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392901049479, 37.7831711043434]
      }
    },
    {
      objectid: '1339840',
      applicant: 'JapaCurry',
      facilitytype: 'Truck',
      cnn: '11544000',
      locationdescription: 'SANSOME ST: PINE ST to CALIFORNIA ST (200 - 299)',
      address: '217 SANSOME ST',
      blocklot: '0260004',
      block: '0260',
      lot: '004',
      permit: '19MFF-00102',
      status: 'APPROVED',
      fooditems:
        'Katsu Curry: KUROBUTA Sausage Curry: Vegetable Curry: Veggie Croquette Curry: Chicken NANBAN Bento: Nori Bento: water: soda: green tea',
      x: '6012325.432',
      y: '2116569.355',
      latitude: '37.7923898619832',
      longitude: '-122.401269695236',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00102&ExportPDF=1&Filename=19MFF-00102_schedule.pdf',
      approved: '2019-07-23T00:00:00.000',
      received: '2019-07-23',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401269695236, 37.7923898619832]
      }
    },
    {
      objectid: '1339841',
      applicant: 'JapaCurry',
      facilitytype: 'Truck',
      cnn: '7032000',
      locationdescription: 'HOWARD ST: FREMONT ST to 01ST ST (400 - 499)',
      address: '400 HOWARD ST',
      blocklot: '3720008',
      block: '3720',
      lot: '008',
      permit: '19MFF-00102',
      status: 'APPROVED',
      fooditems:
        'Katsu Curry: KUROBUTA Sausage Curry: Vegetable Curry: Veggie Croquette Curry: Chicken NANBAN Bento: Nori Bento: water: soda: green tea',
      x: '6013858.05956',
      y: '2115347.09492',
      latitude: '37.7891192076677',
      longitude: '-122.395881039335',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00102&ExportPDF=1&Filename=19MFF-00102_schedule.pdf',
      approved: '2019-07-23T00:00:00.000',
      received: '2019-07-23',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395881039335, 37.7891192076677]
      }
    },
    {
      objectid: '1339666',
      applicant: 'Curry Up Now',
      facilitytype: 'Truck',
      cnn: '24571000',
      locationdescription: 'WASHINGTON ST: DRUMM ST intersection',
      address: '370 DRUMM ST',
      blocklot: '0201012',
      block: '0201',
      lot: '012',
      permit: '19MFF-00101',
      status: 'APPROVED',
      fooditems:
        'Chicken Tiki Masala Burritos: Paneer Tiki Masala Burritos: Samosas: Mango Lassi',
      x: '6013693.222',
      y: '2118189.172',
      latitude: '37.7969137124835',
      longitude: '-122.396650675264',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00101&ExportPDF=1&Filename=19MFF-00101_schedule.pdf',
      approved: '2019-07-23T00:00:00.000',
      received: '2019-07-22',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.396650675264, 37.7969137124835]
      }
    },
    {
      objectid: '1351263',
      applicant: 'Isidoro Serrano',
      facilitytype: 'Push Cart',
      cnn: '1108000',
      locationdescription: '21ST ST: CAPP ST to MISSION ST (3150 - 3199)',
      address: '2501 MISSION ST',
      blocklot: '3615070',
      block: '3615',
      lot: '070',
      permit: '19MFF-00075',
      status: 'APPROVED',
      x: '6007059.55277',
      y: '2103743.32313',
      latitude: '37.7568774515357',
      longitude: '-122.418579889476',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00075&ExportPDF=1&Filename=19MFF-00075_schedule.pdf',
      approved: '2019-11-04T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.418579889476, 37.7568774515357]
      }
    },
    {
      objectid: '1344178',
      applicant: 'Expresso Subito, LLC.',
      facilitytype: 'Truck',
      cnn: '5869000',
      locationdescription: 'FRONT ST: CALIFORNIA ST to HALLECK ST (200 - 234)',
      address: '150 CALIFORNIA ST',
      blocklot: '0236019',
      block: '0236',
      lot: '019',
      permit: '19MFF-00115',
      status: 'APPROVED',
      fooditems:
        'Expresso drinks: assorted beverages (canned: bottled: home made): scones: croissants: bagels: soup: chili: parfaits: smoothies: frappes: milk shakes.',
      x: '6013145.603',
      y: '2117020.157',
      latitude: '37.7936733815047',
      longitude: '-122.398463509486',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00115&ExportPDF=1&Filename=19MFF-00115_schedule.pdf',
      approved: '2019-08-06T00:00:00.000',
      received: '2019-08-02',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398463509486, 37.7936733815047]
      }
    },
    {
      objectid: '1344173',
      applicant: 'Expresso Subito, LLC.',
      facilitytype: 'Truck',
      cnn: '9091000',
      locationdescription: 'MISSION ST: ANTHONY ST to 02ND ST (573 - 599)',
      address: '85 02ND ST',
      blocklot: '3708019',
      block: '3708',
      lot: '019',
      permit: '19MFF-00114',
      status: 'APPROVED',
      fooditems:
        'Expresso drinks: assorted beverages (canned: bottled: home made): scones: croissants: bagels: soup: chili: parfaits: smoothies: frappes: milk shakes.',
      x: '6012696.635',
      y: '2115129.488',
      latitude: '37.7884570288289',
      longitude: '-122.399884160566',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00114&ExportPDF=1&Filename=19MFF-00114_schedule.pdf',
      approved: '2019-08-06T00:00:00.000',
      received: '2019-08-02',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399884160566, 37.7884570288289]
      }
    },
    {
      objectid: '1345312',
      applicant: "Shah's Halal Food",
      facilitytype: 'Push Cart',
      cnn: '8742202',
      locationdescription:
        'MARKET ST: BATTERY ST to SUTTER ST (540 - 558) -- NORTH --',
      address: '532 MARKET ST',
      blocklot: '0290012',
      block: '0290',
      lot: '012',
      permit: '19MFF-00120',
      status: 'APPROVED',
      fooditems:
        'Chicken Gyro: Lamb Gyro: Chiken Gyro Plate: Lamb Gyro Plate: Combination Gyro Plate.',
      x: '6012582.228',
      y: '2115893.453',
      latitude: '37.7905483181832',
      longitude: '-122.400333673679',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00120&ExportPDF=1&Filename=19MFF-00120_schedule.pdf',
      approved: '2019-08-06T00:00:00.000',
      received: '2019-08-06',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400333673679, 37.7905483181832]
      }
    },
    {
      objectid: '1337426',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '10215000',
      locationdescription: 'PALOU AVE: END to GRIFFITH ST (904 - 999)',
      address: 'Assessors Block /Lot',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1344172',
      applicant: 'Expresso Subito, LLC.',
      facilitytype: 'Truck',
      cnn: '3525000',
      locationdescription: 'CALIFORNIA ST: DAVIS ST to FRONT ST (100 - 199)',
      address: '150 CALIFORNIA ST',
      blocklot: '0236019',
      block: '0236',
      lot: '019',
      permit: '19MFF-00114',
      status: 'APPROVED',
      fooditems:
        'Expresso drinks: assorted beverages (canned: bottled: home made): scones: croissants: bagels: soup: chili: parfaits: smoothies: frappes: milk shakes.',
      x: '6013145.603',
      y: '2117020.157',
      latitude: '37.7936733815047',
      longitude: '-122.398463509486',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00114&ExportPDF=1&Filename=19MFF-00114_schedule.pdf',
      approved: '2019-08-06T00:00:00.000',
      received: '2019-08-02',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398463509486, 37.7936733815047]
      }
    },
    {
      objectid: '1382718',
      applicant: 'Treats by the Bay LLC',
      facilitytype: 'Truck',
      cnn: '10624001',
      locationdescription: 'POST ST: MONTGOMERY ST to LICK PL (1 - 40)',
      address: '1 MONTGOMERY ST',
      blocklot: '0292002',
      block: '0292',
      lot: '002',
      permit: '19MFF-00127',
      status: 'REQUESTED',
      fooditems: 'Prepackaged Kettlecorn',
      x: '6011970.278',
      y: '2115432.874',
      latitude: '37.7892495340751',
      longitude: '-122.402418597294',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00127&ExportPDF=1&Filename=19MFF-00127_schedule.pdf',
      received: '2019-10-08',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402418597294, 37.7892495340751]
      }
    },
    {
      objectid: '1389608',
      applicant: 'Cochinita',
      facilitytype: 'Truck',
      cnn: '3079000',
      locationdescription: 'BRANNAN ST: ZOE ST to 04TH ST (440 - 499)',
      address: '490 BRANNAN ST',
      blocklot: '3776025',
      block: '3776',
      lot: '025',
      permit: '19MFF-00130',
      status: 'APPROVED',
      fooditems: 'Mexican Food: Yucatan Food: Street Food',
      x: '6013619.641',
      y: '2111616.7',
      latitude: '37.7788631355002',
      longitude: '-122.396444359358',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00130&ExportPDF=1&Filename=19MFF-00130_schedule.pdf',
      approved: '2020-01-07T00:00:00.000',
      received: '2019-11-18',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.396444359358, 37.7788631355002]
      }
    },
    {
      objectid: '1338993',
      applicant: 'Off the Grid Services, LLC',
      facilitytype: 'Truck',
      cnn: '3075000',
      locationdescription:
        'BRANNAN ST: STANFORD ST to JACK LONDON ALY (324 - 353)',
      address: '340 BRANNAN ST',
      blocklot: '3775015',
      block: '3775',
      lot: '015',
      permit: '19MFF-00098',
      status: 'APPROVED',
      fooditems: 'Everything',
      x: '6014566.387',
      y: '2112472.164',
      latitude: '37.7812646860228',
      longitude: '-122.393229041538',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00098&ExportPDF=1&Filename=19MFF-00098_schedule.pdf',
      approved: '2019-12-19T00:00:00.000',
      received: '2019-07-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393229041538, 37.7812646860228]
      }
    },
    {
      objectid: '1377257',
      applicant: 'Cochinita',
      facilitytype: 'Truck',
      cnn: '12662000',
      locationdescription: 'TOWNSEND ST: LUSK ST to 04TH ST (252 - 299)',
      address: '290 TOWNSEND ST',
      blocklot: '3787028',
      block: '3787',
      lot: '028',
      permit: '19MFF-00130',
      status: 'APPROVED',
      fooditems: 'Mexican Food: Yucatan Food: Street Food',
      x: '6014084.346',
      y: '2111203.786',
      latitude: '37.7777552165686',
      longitude: '-122.394807823179',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00130&ExportPDF=1&Filename=19MFF-00130_schedule.pdf',
      approved: '2020-01-07T00:00:00.000',
      received: '2019-11-18',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394807823179, 37.7777552165686]
      }
    },
    {
      objectid: '1334493',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block 8722/Lot003',
      blocklot: '8722003',
      block: '8722',
      lot: '003',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6014776.59744',
      y: '2107430.47828',
      latitude: '37.7674330173312',
      longitude: '-122.392149114172',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392149114172, 37.7674330173312]
      }
    },
    {
      objectid: '1334505',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '1232000',
      locationdescription: '23RD ST: END to ILLINOIS ST (100 - 699)',
      address: '435 23RD ST',
      blocklot: '4232010',
      block: '4232',
      lot: '010',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6016887.317',
      y: '2102871.037',
      latitude: '37.7550307267667',
      longitude: '-122.384530734223',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.384530734223, 37.7550307267667]
      }
    },
    {
      objectid: '1385047',
      applicant: 'Off the Grid Services, LLC',
      facilitytype: 'Truck',
      cnn: '3080000',
      locationdescription: 'BRANNAN ST: 04TH ST to 05TH ST (500 - 599)',
      address: '525 BRANNAN ST',
      blocklot: '3786028',
      block: '3786',
      lot: '028',
      permit: '19MFF-00098',
      status: 'APPROVED',
      fooditems: 'Everything',
      x: '6013436.375',
      y: '2111128.797',
      latitude: '37.7775132646755',
      longitude: '-122.397044134482',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00098&ExportPDF=1&Filename=19MFF-00098_schedule.pdf',
      approved: '2019-12-19T00:00:00.000',
      received: '2019-07-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397044134482, 37.7775132646755]
      }
    },
    {
      objectid: '1332561',
      applicant: 'Think is Good Inc.',
      facilitytype: 'Truck',
      cnn: '10454000',
      locationdescription: 'PINE ST: FRONT ST to BATTERY ST (100 - 199)',
      address: '100 PINE ST',
      blocklot: '0262020',
      block: '0262',
      lot: '020',
      permit: '19MFF-00039',
      status: 'APPROVED',
      fooditems:
        'Lobster rolls: crab rolls: lobster burritos: crab burritos: chicken burritos: fish burritos: chicken burritos: poke bowls: soups: chips & soda.',
      x: '6012991.558',
      y: '2116647.189',
      latitude: '37.7926407167337',
      longitude: '-122.398970332111',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00039&ExportPDF=1&Filename=19MFF-00039_schedule.pdf',
      approved: '2019-06-25T00:00:00.000',
      received: '2019-06-25',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398970332111, 37.7926407167337]
      }
    },
    {
      objectid: '1332563',
      applicant: 'Think is Good Inc.',
      facilitytype: 'Truck',
      cnn: '9090000',
      locationdescription: 'MISSION ST: SHAW ALY to ANTHONY ST (543 - 586)',
      address: '560 MISSION ST',
      blocklot: '3708095',
      block: '3708',
      lot: '095',
      permit: '19MFF-00039',
      status: 'APPROVED',
      fooditems:
        'Lobster rolls: crab rolls: lobster burritos: crab burritos: chicken burritos: fish burritos: chicken burritos: poke bowls: soups: chips & soda.',
      x: '6012851.27',
      y: '2115274.827',
      latitude: '37.788864715343',
      longitude: '-122.399359351363',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00039&ExportPDF=1&Filename=19MFF-00039_schedule.pdf',
      approved: '2019-06-25T00:00:00.000',
      received: '2019-06-25',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399359351363, 37.788864715343]
      }
    },
    {
      objectid: '1332562',
      applicant: 'Think is Good Inc.',
      facilitytype: 'Truck',
      cnn: '3528000',
      locationdescription:
        'CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)',
      address: '430 CALIFORNIA ST',
      blocklot: '0239029',
      block: '0239',
      lot: '029',
      permit: '19MFF-00039',
      status: 'APPROVED',
      fooditems:
        'Lobster rolls: crab rolls: lobster burritos: crab burritos: chicken burritos: fish burritos: chicken burritos: poke bowls: soups: chips & soda.',
      x: '6012181.836',
      y: '2116889.979',
      latitude: '37.7932622069231',
      longitude: '-122.401789091363',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00039&ExportPDF=1&Filename=19MFF-00039_schedule.pdf',
      approved: '2019-06-25T00:00:00.000',
      received: '2019-06-25',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401789091363, 37.7932622069231]
      }
    },
    {
      objectid: '1334496',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block 4172/Lot010',
      blocklot: '4172010',
      block: '4172',
      lot: '010',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6015746.892',
      y: '2103656.591',
      latitude: '37.7571245603861',
      longitude: '-122.388529515257',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388529515257, 37.7571245603861]
      }
    },
    {
      objectid: '1334509',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '185205',
      address: '1650 03RD ST',
      blocklot: '8711007',
      block: '8711',
      lot: '007',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6014983.88328',
      y: '2108042.28534',
      latitude: '37.7691244121681',
      longitude: '-122.391474911246',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391474911246, 37.7691244121681]
      }
    },
    {
      objectid: '1334502',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block 4103/Lot023A',
      blocklot: '4103023A',
      block: '4103',
      lot: '023A',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6014314.885',
      y: '2104114.856',
      latitude: '37.7583033956425',
      longitude: '-122.393514054817',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393514054817, 37.7583033956425]
      }
    },
    {
      objectid: '1334599',
      applicant: 'Tacos El Ojo De Agua',
      facilitytype: 'Truck',
      cnn: '177000',
      locationdescription: '03RD ST: SOUTH PARK to VARNEY PL (548 - 586)',
      address: '551 03RD ST',
      blocklot: '3775025',
      block: '3775',
      lot: '025',
      permit: '19MFF-00046',
      status: 'APPROVED',
      fooditems:
        'Tacos: Burritos: Tortas: Quesadillas: Salads: Soup: Fruits: Juices: Soda: Water',
      x: '6014157.282',
      y: '2112255.562',
      latitude: '37.7806472100484',
      longitude: '-122.394629181662',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00046&ExportPDF=1&Filename=19MFF-00046_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394629181662, 37.7806472100484]
      }
    },
    {
      objectid: '1334504',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '10827000',
      locationdescription: 'QUINT ST: ARTHUR AVE to CUSTER AVE (1 - 199)',
      address: '50 QUINT ST',
      blocklot: '5201001',
      block: '5201',
      lot: '001',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6015535.265',
      y: '2099780.721',
      latitude: '37.7464705066471',
      longitude: '-122.388990808654',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388990808654, 37.7464705066471]
      }
    },
    {
      objectid: '1334524',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '7174000',
      locationdescription: 'ILLINOIS ST: 25TH ST to END (1500 - 1599)',
      address: 'Assessors Block 4296/Lot010',
      blocklot: '4296010',
      block: '4296',
      lot: '010',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6016154.266',
      y: '2101929.534',
      latitude: '37.7524049924783',
      longitude: '-122.387000196298',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387000196298, 37.7524049924783]
      }
    },
    {
      objectid: '1334512',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '2157202',
      locationdescription:
        'ALEMANY BLVD: FOLSOM ST to ELLSWORTH ST \\ I-280 S OFF RAMP \\ I-280 S ON RAMP (400 - 498) -- NORTH --',
      address: '400 ALEMANY BLVD',
      blocklot: '5843024',
      block: '5843',
      lot: '024',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6008042.13742',
      y: '2095078.99168',
      latitude: '37.7331423951426',
      longitude: '-122.414568632419',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.414568632419, 37.7331423951426]
      }
    },
    {
      objectid: '1334511',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '197101',
      locationdescription:
        '03RD ST: MARIN ST to ARTHUR AVE \\ CARGO WAY (3201 - 3399) -- EAST --',
      address: '3201 03RD ST',
      blocklot: '4377001',
      block: '4377',
      lot: '001',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6016160.221',
      y: '2100487.333',
      latitude: '37.7484453388377',
      longitude: '-122.38687903198',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.38687903198, 37.7484453388377]
      }
    },
    {
      objectid: '1334494',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block 5598/Lot031',
      blocklot: '5598031',
      block: '5598',
      lot: '031',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6010555.36796',
      y: '2097635.85527',
      latitude: '37.740303872806',
      longitude: '-122.406059743494',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.406059743494, 37.740303872806]
      }
    },
    {
      objectid: '1334506',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '1400001',
      locationdescription: '25TH ST: MARYLAND ST to MICHIGAN ST (400 - 699)',
      address: 'Assessors Block 4241/Lot002',
      blocklot: '4241002',
      block: '4241',
      lot: '002',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6016991.219',
      y: '2102253.193',
      latitude: '37.7533400011811',
      longitude: '-122.384128384237',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.384128384237, 37.7533400011811]
      }
    },
    {
      objectid: '1334515',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '381000',
      locationdescription: '07TH ST: HOOPER ST to IRWIN ST (1100 - 1199)',
      address: '1140 07TH ST',
      blocklot: '3820002',
      block: '3820',
      lot: '002',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6012967.316',
      y: '2107764.443',
      latitude: '37.7682493867935',
      longitude: '-122.398430650214',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398430650214, 37.7682493867935]
      }
    },
    {
      objectid: '1334521',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '698000',
      locationdescription: '16TH ST: 04TH ST to OWENS ST (600 - 699)',
      address: '600 16TH ST',
      blocklot: '8718001',
      block: '8718',
      lot: '001',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6015149.302',
      y: '2107435.061',
      latitude: '37.7674662871448',
      longitude: '-122.390860289431',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390860289431, 37.7674662871448]
      }
    },
    {
      objectid: '1334518',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '5340000',
      locationdescription:
        'EVANS AVE: NAPOLEON ST \\ TOLAND ST to MARIN ST (2000 - 2099)',
      address: '2045 EVANS AVE',
      blocklot: '4343002',
      block: '4343',
      lot: '002',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6013220.459',
      y: '2100301.58',
      latitude: '37.7477720916075',
      longitude: '-122.397031718978',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397031718978, 37.7477720916075]
      }
    },
    {
      objectid: '1334514',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '3376000',
      locationdescription: 'BURKE AVE: END to 03RD ST (1500 - 1599)',
      address: '1580 BURKE AVE',
      blocklot: '5203066',
      block: '5203',
      lot: '066',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6016479.94361',
      y: '2099135.86798',
      latitude: '37.7447521916164',
      longitude: '-122.385679248721',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.385679248721, 37.7447521916164]
      }
    },
    {
      objectid: '1334513',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '2468000',
      locationdescription:
        'CESAR CHAVEZ ST: 03RD ST to TENNESSEE ST (1000 - 1099)',
      address: 'Assessors Block 4315/Lot03008',
      blocklot: '431503008',
      block: '4315',
      lot: '03008',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1334500',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block 4046/Lot001',
      blocklot: '4046001',
      block: '4046',
      lot: '001',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6016675.163',
      y: '2105416.559',
      latitude: '37.7620084580302',
      longitude: '-122.385441811568',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.385441811568, 37.7620084580302]
      }
    },
    {
      objectid: '1334497',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block 4058/Lot010',
      blocklot: '4058010',
      block: '4058',
      lot: '010',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6015895.442',
      y: '2105131.652',
      latitude: '37.7611829945051',
      longitude: '-122.388118704077',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388118704077, 37.7611829945051]
      }
    },
    {
      objectid: '1334519',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '6721000',
      locationdescription: 'HARRISON ST: MERLIN ST to OAK GROVE ST (924 - 950)',
      address: '950 HARRISON ST',
      blocklot: '3753241',
      block: '3753',
      lot: '241',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6011666.48064',
      y: '2111483.53704',
      latitude: '37.7783886157866',
      longitude: '-122.403191783229',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.403191783229, 37.7783886157866]
      }
    },
    {
      objectid: '1334528',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '8954000',
      locationdescription: 'MENDELL ST: CARGO WAY to NEWHALL ST (1 - 199)',
      address: '151 MENDELL ST',
      blocklot: '4570019',
      block: '4570',
      lot: '019',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6017284.43664',
      y: '2098416.06259',
      latitude: '37.7428202346759',
      longitude: '-122.382847355518',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.382847355518, 37.7428202346759]
      }
    },
    {
      objectid: '1334495',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block 7295/Lot022',
      blocklot: '7295022',
      block: '7295',
      lot: '022',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '5989624.724',
      y: '2094318.981',
      latitude: '37.7300036831892',
      longitude: '-122.478186325415',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.478186325415, 37.7300036831892]
      }
    },
    {
      objectid: '1334510',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '188101',
      locationdescription:
        '03RD ST: 18TH ST to 19TH ST (2101 - 2199) -- EAST --',
      address: '2101 03RD ST',
      blocklot: '4045004',
      block: '4045',
      lot: '004',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1334503',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '10658000',
      locationdescription:
        'POTRERO AVE: 10TH ST \\ BRANNAN ST \\ DIVISION ST to ALAMEDA ST (1 - 99)',
      address: '66 POTRERO AVE',
      blocklot: '3906004',
      block: '3906',
      lot: '004',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6010061.632',
      y: '2107930.589',
      latitude: '37.7685432890242',
      longitude: '-122.408492892439',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.408492892439, 37.7685432890242]
      }
    },
    {
      objectid: '1334508',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '1507000',
      locationdescription:
        '26TH ST: RHODE ISLAND ST to KANSAS ST (2200 - 2299)',
      address: 'Assessors Block 4281a/Lot012A',
      blocklot: '4281a012A',
      block: '4281a',
      lot: '012A',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6011939.286',
      y: '2101416.045',
      latitude: '37.7507607694601',
      longitude: '-122.401540291357',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401540291357, 37.7507607694601]
      }
    },
    {
      objectid: '1334516',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '4345000',
      locationdescription: 'CONNECTICUT ST: 17TH ST to MARIPOSA ST (100 - 199)',
      address: '146 CONNECTICUT ST',
      blocklot: '3983037',
      block: '3983',
      lot: '037',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6013067.343',
      y: '2106377.709',
      latitude: '37.7644472955619',
      longitude: '-122.397987371508',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397987371508, 37.7644472955619]
      }
    },
    {
      objectid: '1334498',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block 4227/Lot012',
      blocklot: '4227012',
      block: '4227',
      lot: '012',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6014953.292',
      y: '2102226.967',
      latitude: '37.7531551067155',
      longitude: '-122.391174184456',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391174184456, 37.7531551067155]
      }
    },
    {
      objectid: '1334501',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block 5216/Lot030',
      blocklot: '5216030',
      block: '5216',
      lot: '030',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6015212.23',
      y: '2099399.714',
      latitude: '37.7454064294164',
      longitude: '-122.390081224847',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390081224847, 37.7454064294164]
      }
    },
    {
      objectid: '1334517',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '5337000',
      locationdescription: 'EVANS AVE: RANKIN ST to SELBY ST (1800 - 1890)',
      address: '1801 EVANS AVE',
      blocklot: '5232005',
      block: '5232',
      lot: '005',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6014340.249',
      y: '2099120.438',
      latitude: '37.7445911950917',
      longitude: '-122.393076880858',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393076880858, 37.7445911950917]
      }
    },
    {
      objectid: '1334499',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block 5369/Lot003',
      blocklot: '5369003',
      block: '5369',
      lot: '003',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6011013.658',
      y: '2096830.358',
      latitude: '37.7381177715919',
      longitude: '-122.404418467212',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.404418467212, 37.7381177715919]
      }
    },
    {
      objectid: '1334529',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '9212000',
      locationdescription: 'MISSOURI ST: 20TH ST to SIERRA ST (500 - 630)',
      address: '555 MISSOURI ST',
      blocklot: '4101031',
      block: '4101',
      lot: '031',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6013632.016',
      y: '2104493.013',
      latitude: '37.7593037663834',
      longitude: '-122.395902231236',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395902231236, 37.7593037663834]
      }
    },
    {
      objectid: '1334520',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '6759001',
      locationdescription: 'HARRISON ST: 26TH ST to KAMILLE CT (3000 - 3048)',
      address: '3040 HARRISON ST',
      blocklot: '6573001',
      block: '6573',
      lot: '001',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6008722.691',
      y: '2100785.001',
      latitude: '37.7488480565663',
      longitude: '-122.412618994655',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.412618994655, 37.7488480565663]
      }
    },
    {
      objectid: '1334507',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '15019101',
      locationdescription:
        'MISSION BAY BLVD SOUTH: 03RD ST \\ MISSION BAY BLVD to 04TH ST \\ MISSION BAY BLVD (501 - 599)',
      address: 'Assessors Block 8732/Lot001',
      blocklot: '8732001',
      block: '8732',
      lot: '001',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6015193.322',
      y: '2108612.958',
      latitude: '37.7707029760975',
      longitude: '-122.390790355566',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390790355566, 37.7707029760975]
      }
    },
    {
      objectid: '1334526',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '797000',
      locationdescription: '17TH ST: MISSION ST to HOFF ST (3300 - 3343)',
      address: '3335 17TH ST',
      blocklot: '3576086',
      block: '3576',
      lot: '086',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6006602.872',
      y: '2106039.462',
      latitude: '37.7631563932265',
      longitude: '-122.420322231526',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.420322231526, 37.7631563932265]
      }
    },
    {
      objectid: '1334527',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '8694000',
      locationdescription: 'MARIN ST: END to MICHIGAN ST (800 - 899)',
      address: '888 MARIN ST',
      blocklot: '4358007',
      block: '4358',
      lot: '007',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6016687.302',
      y: '2100845.634',
      latitude: '37.749458329027',
      longitude: '-122.385081339678',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.385081339678, 37.749458329027]
      }
    },
    {
      objectid: '1334523',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '7166000',
      locationdescription:
        'ILLINOIS ST: MARIPOSA ST \\ TERRY A FRANCOIS BLVD to 18TH ST (600 - 699)',
      address: 'Assessors Block 3941/Lot001',
      blocklot: '3941001',
      block: '3941',
      lot: '001',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6016208.818',
      y: '2106421.254',
      latitude: '37.764741322675',
      longitude: '-122.387124812179',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387124812179, 37.764741322675]
      }
    },
    {
      objectid: '1334525',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '7727000',
      locationdescription: 'KANSAS ST: 16TH ST to 17TH ST (300 - 399)',
      address: '350 KANSAS ST',
      blocklot: '3958001D',
      block: '3958',
      lot: '001D',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6011363.148',
      y: '2106748.619',
      latitude: '37.7653706693171',
      longitude: '-122.403907848212',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.403907848212, 37.7653706693171]
      }
    },
    {
      objectid: '1334522',
      applicant: "Natan's Catering",
      facilitytype: 'Truck',
      cnn: '7164000',
      address: 'Assessors Block 8722/Lot001',
      blocklot: '8722001',
      block: '8722',
      lot: '001',
      permit: '19MFF-00045',
      status: 'APPROVED',
      fooditems:
        'Burgers: melts: hot dogs: burritos:sandwiches: fries: onion rings: drinks',
      x: '6016110.001',
      y: '2107608.418',
      latitude: '37.7679955456856',
      longitude: '-122.387549426547',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00045&ExportPDF=1&Filename=19MFF-00045_schedule.pdf',
      approved: '2019-07-02T00:00:00.000',
      received: '2019-07-02',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387549426547, 37.7679955456856]
      }
    },
    {
      objectid: '1336036',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '7051000',
      locationdescription: 'HOWARD ST: 08TH ST to 09TH ST (1200 - 1299)',
      address: '1252 HOWARD ST',
      blocklot: '3728018',
      block: '3728',
      lot: '018',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6008911.96',
      y: '2110569.797',
      latitude: '37.7757254849348',
      longitude: '-122.412656122589',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.412656122589, 37.7757254849348]
      }
    },
    {
      objectid: '1336023',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '459000',
      locationdescription:
        '09TH ST: BRYANT ST \\ HWY 101 N OFF RAMP to BRANNAN ST (500 - 599)',
      address: '555 09TH ST',
      blocklot: '3781003',
      block: '3781',
      lot: '003',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6010420.694',
      y: '2108828.117',
      latitude: '37.771027796614',
      longitude: '-122.407314201313',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.407314201313, 37.771027796614]
      }
    },
    {
      objectid: '1336039',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '9100000',
      locationdescription: 'MISSION ST: 06TH ST to 07TH ST (1000 - 1099)',
      address: '1023 MISSION ST',
      blocklot: '3726110',
      block: '3726',
      lot: '110',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6009985.168',
      y: '2112183.292',
      latitude: '37.7802159385025',
      longitude: '-122.409057485501',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.409057485501, 37.7802159385025]
      }
    },
    {
      objectid: '1336026',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '5666000',
      locationdescription: 'FOLSOM ST: FALMOUTH ST to 06TH ST (947 - 999)',
      address: '965 FOLSOM ST',
      blocklot: '3753225',
      block: '3753',
      lot: '225',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6011297.321',
      y: '2111714.174',
      latitude: '37.7790012679178',
      longitude: '-122.404485090358',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.404485090358, 37.7790012679178]
      }
    },
    {
      objectid: '1336042',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '9101000',
      locationdescription:
        'MISSION ST: 07TH ST to ANGELOS ALY \\ JULIA ST (1100 - 1165)',
      address: '1131 MISSION ST',
      blocklot: '3727094',
      block: '3727',
      lot: '094',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6009299.752',
      y: '2111530.592',
      latitude: '37.7783853586477',
      longitude: '-122.4113825395',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.4113825395, 37.7783853586477]
      }
    },
    {
      objectid: '1336024',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '488000',
      locationdescription: '10TH ST: FOLSOM ST to SHERIDAN ST (300 - 353)',
      address: '340 10TH ST',
      blocklot: '3520004',
      block: '3520',
      lot: '004',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6008940.177',
      y: '2109215.993',
      latitude: '37.7720098406711',
      longitude: '-122.412462796214',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.412462796214, 37.7720098406711]
      }
    },
    {
      objectid: '1336034',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '6713000',
      locationdescription:
        'HARRISON ST: ESSEX ST \\ I-80 E ON RAMP to 02ND ST (550 - 599)',
      address: '575 HARRISON ST',
      blocklot: '3764198',
      block: '3764',
      lot: '198',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6014256.90568',
      y: '2113627.76045',
      latitude: '37.7844204919929',
      longitude: '-122.394380639101',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394380639101, 37.7844204919929]
      }
    },
    {
      objectid: '1336027',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '5671000',
      locationdescription: 'FOLSOM ST: SHERMAN ST to MOSS ST (1061 - 1078)',
      address: '1069 FOLSOM ST',
      blocklot: '3754040',
      block: '3754',
      lot: '040',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6010546.015',
      y: '2111018.056',
      latitude: '37.7770478751493',
      longitude: '-122.407035093451',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.407035093451, 37.7770478751493]
      }
    },
    {
      objectid: '1336021',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '4194000',
      locationdescription: 'CLEMENTINA ST: 01ST ST to ECKER ST (1 - 37)',
      address: '19 CLEMENTINA ST',
      blocklot: '3736124',
      block: '3736',
      lot: '124',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6013968.81734',
      y: '2114630.49237',
      latitude: '37.787157744174',
      longitude: '-122.395447605152',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395447605152, 37.787157744174]
      }
    },
    {
      objectid: '1336037',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '9047000',
      locationdescription: 'MINNA ST: 07TH ST to JULIA ST (600 - 666)',
      address: '621 MINNA ST',
      blocklot: '3727083',
      block: '3727',
      lot: '083',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6009460.299',
      y: '2111471.766',
      latitude: '37.7782328396736',
      longitude: '-122.410822989507',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.410822989507, 37.7782328396736]
      }
    },
    {
      objectid: '1336031',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '6116000',
      locationdescription: 'GEARY ST: HYDE ST to LARKIN ST (800 - 899)',
      address: '855 GEARY ST',
      blocklot: '0320019',
      block: '0320',
      lot: '019',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6007645.426',
      y: '2114306.967',
      latitude: '37.7859156878693',
      longitude: '-122.417302284685',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.417302284685, 37.7859156878693]
      }
    },
    {
      objectid: '1336029',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '5802000',
      locationdescription: 'FRANKLIN ST: HAYES ST to IVY ST (300 - 348)',
      address: '300 FRANKLIN ST',
      blocklot: '0810001',
      block: '0810',
      lot: '001',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6006615.831',
      y: '2111320.587',
      latitude: '37.7776578362104',
      longitude: '-122.420652330833',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.420652330833, 37.7776578362104]
      }
    },
    {
      objectid: '1336030',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '5805000',
      locationdescription:
        'FRANKLIN ST: FULTON ST to MCALLISTER ST (466 - 599)',
      address: '301 VAN NESS AVE',
      blocklot: '0786A001',
      block: '0786A',
      lot: '001',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6006544.542',
      y: '2111831.056',
      latitude: '37.7790554424684',
      longitude: '-122.420935196036',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.420935196036, 37.7790554424684]
      }
    },
    {
      objectid: '1336019',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '373000',
      locationdescription: '07TH ST: CLEVELAND ST to HARRISON ST (314 - 399)',
      address: '370 07TH ST',
      blocklot: '3755207',
      block: '3755',
      lot: '207',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6010560.58877',
      y: '2110531.5502',
      latitude: '37.7757128589746',
      longitude: '-122.406950379686',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.406950379686, 37.7757128589746]
      }
    },
    {
      objectid: '1336032',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '6354000',
      locationdescription: 'GRACE ST: MISSION ST to HOWARD ST (1 - 99)',
      address: '65 GRACE ST',
      blocklot: '3509029',
      block: '3509',
      lot: '029',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6008391.618',
      y: '2110296.018',
      latitude: '37.7749445348205',
      longitude: '-122.414436744752',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.414436744752, 37.7749445348205]
      }
    },
    {
      objectid: '1336040',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '9100000',
      locationdescription: 'MISSION ST: 06TH ST to 07TH ST (1000 - 1099)',
      address: '1045 MISSION ST',
      blocklot: '3726109',
      block: '3726',
      lot: '109',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6009810.943',
      y: '2112015.177',
      latitude: '37.7797445729388',
      longitude: '-122.409648343061',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.409648343061, 37.7797445729388]
      }
    },
    {
      objectid: '1336033',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '6699000',
      locationdescription: 'HARRIET ST: HOWARD ST to FOLSOM ST (1 - 99)',
      address: '15 HARRIET ST',
      blocklot: '3731116',
      block: '3731',
      lot: '116',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6010507.87',
      y: '2111793.967',
      latitude: '37.7791762107668',
      longitude: '-122.407221758472',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.407221758472, 37.7791762107668]
      }
    },
    {
      objectid: '1336038',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '9049000',
      locationdescription: 'MINNA ST: 08TH ST to 09TH ST (700 - 799)',
      address: '786 MINNA ST',
      blocklot: '3728 105',
      block: '3728',
      lot: '105',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6008554.116',
      y: '2110758.22',
      latitude: '37.7762227595142',
      longitude: '-122.413907330441',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.413907330441, 37.7762227595142]
      }
    },
    {
      objectid: '1336041',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '9101000',
      locationdescription:
        'MISSION ST: 07TH ST to ANGELOS ALY \\ JULIA ST (1100 - 1165)',
      address: '1119 MISSION ST',
      blocklot: '3727130',
      block: '3727',
      lot: '130',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6009345.932',
      y: '2111626.582',
      latitude: '37.7786515145076',
      longitude: '-122.411229567525',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.411229567525, 37.7786515145076]
      }
    },
    {
      objectid: '1336016',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '11184000',
      locationdescription: 'RUSS ST: TULIP ALY to NATOMA ST (20 - 39)',
      address: '25 RUSS ST',
      blocklot: '3726067',
      block: '3726',
      lot: '067',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6010034.346',
      y: '2111908.337',
      latitude: '37.7794637316225',
      longitude: '-122.408867951023',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.408867951023, 37.7794637316225]
      }
    },
    {
      objectid: '1336022',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '4285000',
      locationdescription:
        'COLUMBIA SQUARE ST: FOLSOM ST to HARRISON ST (1 - 99)',
      address: '57 COLUMBIA SQUARE ST',
      blocklot: '3754049',
      block: '3754',
      lot: '049',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6011004.159',
      y: '2111130.827',
      latitude: '37.7773831451062',
      longitude: '-122.405458166501',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.405458166501, 37.7773831451062]
      }
    },
    {
      objectid: '1336028',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '5680000',
      locationdescription: 'FOLSOM ST: DORE ST to 10TH ST (1345 - 1399)',
      address: '1398 FOLSOM ST',
      blocklot: '3518015',
      block: '3518',
      lot: '015',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6008866.694',
      y: '2109613.352',
      latitude: '37.7730967713109',
      longitude: '-122.412745077205',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.412745077205, 37.7730967713109]
      }
    },
    {
      objectid: '1336020',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '4086000',
      locationdescription: 'CLAY ST: MONTGOMERY ST to KEARNY ST (600 - 699)',
      address: '634 CLAY ST',
      blocklot: '0208008',
      block: '0208',
      lot: '008',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6011593.786',
      y: '2117459.449',
      latitude: '37.7947930010178',
      longitude: '-122.403863885865',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.403863885865, 37.7947930010178]
      }
    },
    {
      objectid: '1336018',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '3083000',
      locationdescription: 'BRANNAN ST: HARRIET ST to LUCERNE ST (715 - 743)',
      address: '732 BRANNAN ST',
      blocklot: '3779018',
      block: '3779',
      lot: '018',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6011950.537',
      y: '2109963.291',
      latitude: '37.7742302291309',
      longitude: '-122.402102214519',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402102214519, 37.7742302291309]
      }
    },
    {
      objectid: '1336035',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '6721000',
      locationdescription: 'HARRISON ST: MERLIN ST to OAK GROVE ST (924 - 950)',
      address: '938 HARRISON ST',
      blocklot: '3753046',
      block: '3753',
      lot: '046',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1336017',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '185104',
      locationdescription:
        '03RD ST: MISSION BAY BLVD to WARRIORS WAY (1401 - 1599) -- EAST --',
      address: '1455 03RD ST',
      blocklot: '8720012',
      block: '8720',
      lot: '012',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6015658.77098',
      y: '2108751.77089',
      latitude: '37.7711099394372',
      longitude: '-122.389190040328',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389190040328, 37.7711099394372]
      }
    },
    {
      objectid: '1336025',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '4929000',
      locationdescription: 'DORE ST: HOWARD ST to FOLSOM ST (1 - 99)',
      address: '45 DORE ST',
      blocklot: '3518033',
      block: '3518',
      lot: '033',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      x: '6008828.024',
      y: '2109968.928',
      latitude: '37.7740709289616',
      longitude: '-122.412903986908',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.412903986908, 37.7740709289616]
      }
    },
    {
      objectid: '1336015',
      applicant: 'Paradise Catering',
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block /Lot',
      permit: '19MFF-00051',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: snacks: prepackaged items: beverages:',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00051&ExportPDF=1&Filename=19MFF-00051_schedule.pdf',
      approved: '2019-07-08T00:00:00.000',
      received: '2019-07-08',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1336682',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '3157000',
      locationdescription:
        'BROADWAY: POWELL ST \\ ROBERT C LEVY TUNL to MASON ST (800 - 898) -- NORTH --',
      address: '860 BROADWAY',
      blocklot: '0148009',
      block: '0148',
      lot: '009',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      x: '6009425.916',
      y: '2118518.297',
      latitude: '37.7975789880604',
      longitude: '-122.411439886089',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.411439886089, 37.7975789880604]
      }
    },
    {
      objectid: '934627',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '19984000',
      locationdescription:
        '04TH ST: CHINA BASIN ST to MISSION BAY BLVD (1300 - 1399)',
      address: '1322 04TH ST',
      blocklot: '1758 035',
      block: '1758',
      lot: '035',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '5994967.667',
      y: '2106540.921',
      latitude: '37.7638707601661',
      longitude: '-122.460600563879',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.460600563879, 37.7638707601661]
      }
    },
    {
      objectid: '1336745',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '10397000',
      locationdescription:
        'PHELPS ST: FAIRFAX AVE to SAM JORDANS WAY (500 - 599)',
      address: '525 PHELPS ST',
      blocklot: '5242015',
      block: '5242',
      lot: '015',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6015469.672',
      y: '2098066.746',
      latitude: '37.7417606496655',
      longitude: '-122.389097970195',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389097970195, 37.7417606496655]
      }
    },
    {
      objectid: '1336746',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '10927000',
      locationdescription: 'RANKIN ST: DAVIDSON AVE to EVANS AVE (200 - 299)',
      address: '220 RANKIN ST',
      blocklot: '5215016',
      block: '5215',
      lot: '016',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6014805.514',
      y: '2099795.201',
      latitude: '37.7464697881148',
      longitude: '-122.391515238772',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391515238772, 37.7464697881148]
      }
    },
    {
      objectid: '1336683',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '7165000',
      locationdescription:
        'ILLINOIS ST: 16TH ST to MARIPOSA ST \\ TERRY A FRANCOIS BLVD (400 - 599)',
      address: '409 ILLINOIS ST',
      blocklot: '3940001',
      block: '3940',
      lot: '001',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1336754',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '5329000',
      locationdescription:
        'EVANS AVE: HUNTERS POINT BLVD to JENNINGS ST \\ MIDDLE POINT RD (1031 - 1099)',
      address: '1000 EVANS AVE',
      blocklot: '4580002',
      block: '4580',
      lot: '002',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6019061.11822',
      y: '2096525.4056',
      latitude: '37.7377268665958',
      longitude: '-122.376572914573',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.376572914573, 37.7377268665958]
      }
    },
    {
      objectid: '1336681',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '3145000',
      locationdescription: 'BROADWAY: BATTERY ST to SANSOME ST (200 - 299)',
      address: '250 BROADWAY',
      blocklot: '0142002',
      block: '0142',
      lot: '002',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      x: '6012219.674',
      y: '2118889.65',
      latitude: '37.7987549364009',
      longitude: '-122.401798793854',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401798793854, 37.7987549364009]
      }
    },
    {
      objectid: '1336684',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '7198000',
      locationdescription:
        'INDIANA ST: 23RD ST to 25TH ST \\ I-280 N ON RAMP (1200 - 1399)',
      address: 'Assessors Block 4228/Lot080',
      blocklot: '4228080',
      block: '4228',
      lot: '080',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      x: '6015176.72777',
      y: '2102413.60751',
      latitude: '37.7536799789675',
      longitude: '-122.390414532294',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390414532294, 37.7536799789675]
      }
    },
    {
      objectid: '1336732',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '194201',
      locationdescription:
        '03RD ST: 25TH ST to 26TH ST (2900 - 2998) -- WEST --',
      address: '2920 03RD ST',
      blocklot: '4295014',
      block: '4295',
      lot: '014',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6015872.066',
      y: '2101777.398',
      latitude: '37.7519716288769',
      longitude: '-122.387965483801',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387965483801, 37.7519716288769]
      }
    },
    {
      objectid: '1336752',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '3376000',
      locationdescription: 'BURKE AVE: END to 03RD ST (1500 - 1599)',
      address: '1575 BURKE AVE',
      blocklot: '5203043',
      block: '5203',
      lot: '043',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6016176.048',
      y: '2098933.04',
      latitude: '37.7441784473757',
      longitude: '-122.386715929759',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.386715929759, 37.7441784473757]
      }
    },
    {
      objectid: '1336674',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '12068000',
      locationdescription: 'STANFORD ST: BRANNAN ST to TOWNSEND ST (1 - 100)',
      address: 'Assessors Block 3788/Lot002',
      blocklot: '3788002',
      block: '3788',
      lot: '002',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      x: '6015005.151',
      y: '2112394.09',
      latitude: '37.7810746780754',
      longitude: '-122.391705661167',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391705661167, 37.7810746780754]
      }
    },
    {
      objectid: '1336766',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '9563000',
      locationdescription: 'NEWHALL ST: MENDELL ST to EVANS AVE (200 - 399)',
      address: '220 NEWHALL ST',
      blocklot: '5203040',
      block: '5203',
      lot: '040',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6016819.592',
      y: '2098496.079',
      latitude: '37.7430142496315',
      longitude: '-122.384460244935',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.384460244935, 37.7430142496315]
      }
    },
    {
      objectid: '1336740',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '3285000',
      locationdescription:
        'BRYANT ST: 04TH ST \\ I-80 E OFF RAMP to 05TH ST \\ I-80 E ON RAMP (600 - 699)',
      address: '645 BRYANT ST',
      blocklot: '3777051',
      block: '3777',
      lot: '051',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6012924.199',
      y: '2111413.539',
      latitude: '37.7782665766946',
      longitude: '-122.398835922445',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398835922445, 37.7782665766946]
      }
    },
    {
      objectid: '1336679',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '2477000',
      locationdescription:
        'CESAR CHAVEZ ST: EVANS AVE to KANSAS ST (2100 - 2550)',
      address: '2323 CESAR CHAVEZ ST',
      blocklot: '4342001',
      block: '4342',
      lot: '001',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      x: '6012210.337',
      y: '2100696.938',
      latitude: '37.7488013777145',
      longitude: '-122.400552458785',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400552458785, 37.7488013777145]
      }
    },
    {
      objectid: '934585',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '13767000',
      locationdescription: 'YORK ST: 18TH ST to 19TH ST (600 - 699)',
      address: '620 YORK ST',
      blocklot: '4023012',
      block: '4023',
      lot: '012',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6009734.778',
      y: '2105398.284',
      latitude: '37.7615718487197',
      longitude: '-122.409444718958',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.409444718958, 37.7615718487197]
      }
    },
    {
      objectid: '1336743',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '51657000',
      locationdescription: 'ALANA WAY: COUNTY LINE intersection',
      address: '151 EXECUTIVE PARK BLVD',
      blocklot: '4991089',
      block: '4991',
      lot: '089',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1336759',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '7254000',
      locationdescription:
        'INNES AVE: ARELIOUS WALKER DR to GRIFFITH ST (800 - 899)',
      address: 'Assessors Block 4645/Lot015',
      blocklot: '4645015',
      block: '4645',
      lot: '015',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6019359.973',
      y: '2094482.884',
      latitude: '37.7321349519222',
      longitude: '-122.375398078567',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.375398078567, 37.7321349519222]
      }
    },
    {
      objectid: '1336734',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '2107000',
      locationdescription: 'ALABAMA ST: TREAT AVE to 15TH ST (201 - 212)',
      address: '201 ALABAMA ST',
      blocklot: '3924 006',
      block: '3924',
      lot: '006',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6009014.74562',
      y: '2107680.47269',
      latitude: '37.767797843619',
      longitude: '-122.412096318861',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.412096318861, 37.767797843619]
      }
    },
    {
      objectid: '1336744',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '8095000',
      locationdescription: 'LANE ST: VAN DYKE AVE to 03RD ST (2100 - 2199)',
      address: '2111 LANE ST',
      blocklot: '5387022',
      block: '5387',
      lot: '022',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6014449.984',
      y: '2093362.785',
      latitude: '37.7287879577264',
      longitude: '-122.392294820702',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392294820702, 37.7287879577264]
      }
    },
    {
      objectid: '1336748',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '202101',
      locationdescription:
        '03RD ST: EVANS AVE to FAIRFAX AVE (3801 - 3899) -- EAST --',
      address: '3801 03RD ST',
      blocklot: '5242002',
      block: '5242',
      lot: '002',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6015841.555',
      y: '2097791.762',
      latitude: '37.7410262077887',
      longitude: '-122.387792927994',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387792927994, 37.7410262077887]
      }
    },
    {
      objectid: '1336761',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '8700000',
      locationdescription:
        'MARIN ST: KANSAS ST to HWY 101 N ON RAMP (2500 - 2599)',
      address: '2525 MARIN ST',
      blocklot: '4343001D',
      block: '4343',
      lot: '001D',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6011789.79',
      y: '2100273.801',
      latitude: '37.7476160722331',
      longitude: '-122.401976975724',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401976975724, 37.7476160722331]
      }
    },
    {
      objectid: '1336677',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '15024000',
      locationdescription:
        'CHINA BASIN ST: TERRY A FRANCOIS BLVD to 03RD ST (300 - 499)',
      address: '435 CHINA BASIN ST',
      blocklot: '8720001',
      block: '8720',
      lot: '001',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1336762',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '9206000',
      locationdescription:
        'MISSISSIPPI ST: END to CESAR CHAVEZ ST (1200 - 1299)',
      address: '1200 MISSISSIPPI ST',
      blocklot: '4288003',
      block: '4288',
      lot: '003',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6014017.542',
      y: '2101712.689',
      latitude: '37.7516910357229',
      longitude: '-122.394374213263',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394374213263, 37.7516910357229]
      }
    },
    {
      objectid: '1336678',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '15024000',
      locationdescription:
        'CHINA BASIN ST: TERRY A FRANCOIS BLVD to 03RD ST (300 - 499)',
      address: 'Assessors Block 8720/Lot009',
      blocklot: '8720009',
      block: '8720',
      lot: '009',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      x: '6016084.593',
      y: '2109122.779',
      latitude: '37.7721522432444',
      longitude: '-122.387742984116',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387742984116, 37.7721522432444]
      }
    },
    {
      objectid: '1336192',
      applicant: "CARDONA'S FOOD TRUCK",
      facilitytype: 'Truck',
      cnn: '9114000',
      locationdescription: 'MISSION ST: 14TH ST to 15TH ST (1800 - 1899)',
      address: '1800 MISSION ST',
      blocklot: '3547001',
      block: '3547',
      lot: '001',
      permit: '19MFF-00053',
      status: 'APPROVED',
      fooditems: 'Tacos: Burritos: Quesadillas: Various Drinks',
      x: '6006564.549',
      y: '2107737.695',
      latitude: '37.7678171814141',
      longitude: '-122.420575335142',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00053&ExportPDF=1&Filename=19MFF-00053_schedule.pdf',
      approved: '2019-07-09T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.420575335142, 37.7678171814141]
      }
    },
    {
      objectid: '1340313',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '2954000',
      locationdescription: 'BERRY ST: 04TH ST to 05TH ST (200 - 299)',
      address: '201 BERRY ST',
      blocklot: '8708003',
      block: '8708',
      lot: '003',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6014509.734',
      y: '2110397.928',
      latitude: '37.7755661544145',
      longitude: '-122.393279842341',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393279842341, 37.7755661544145]
      }
    },
    {
      objectid: '1340319',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '7165000',
      locationdescription:
        'ILLINOIS ST: 16TH ST to MARIPOSA ST \\ TERRY A FRANCOIS BLVD (400 - 599)',
      address: '409 ILLINOIS ST',
      blocklot: '3940001',
      block: '3940',
      lot: '001',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1340305',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '12665000',
      locationdescription: 'TOWNSEND ST: 06TH ST to 07TH ST (500 - 599)',
      address: '516 TOWNSEND ST',
      blocklot: '3784007',
      block: '3784',
      lot: '007',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6012412.751',
      y: '2109668',
      latitude: '37.7734452149215',
      longitude: '-122.400482576546',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400482576546, 37.7734452149215]
      }
    },
    {
      objectid: '1340306',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '13653000',
      locationdescription: 'WILLIAMS AVE: CERES ST to MENDELL ST (65 - 99)',
      address: '71 WILLIAMS AVE',
      blocklot: '5414022',
      block: '5414',
      lot: '022',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6013782.892',
      y: '2093534.846',
      latitude: '37.7292233375937',
      longitude: '-122.394613062664',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394613062664, 37.7292233375937]
      }
    },
    {
      objectid: '1340310',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '185105',
      locationdescription:
        '03RD ST: WARRIORS WAY to 16TH ST (1601 - 1799) -- EAST --',
      address: '1799 03RD ST',
      blocklot: '8722001',
      block: '8722',
      lot: '001',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6016110.001',
      y: '2107608.418',
      latitude: '37.7679955456856',
      longitude: '-122.387549426547',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387549426547, 37.7679955456856]
      }
    },
    {
      objectid: '1340320',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '7195000',
      locationdescription: 'INDIANA ST: 20TH ST to 22ND ST (800 - 999)',
      address: '975 INDIANA ST',
      blocklot: '4106023',
      block: '4106',
      lot: '023',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6015069.268',
      y: '2104050.997',
      latitude: '37.7581699396153',
      longitude: '-122.390900582667',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390900582667, 37.7581699396153]
      }
    },
    {
      objectid: '1340318',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '416000',
      locationdescription: '08TH ST: BRYANT ST to BRANNAN ST (500 - 599)',
      address: '599 08TH ST',
      blocklot: '3780007A',
      block: '3780',
      lot: '007A',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6010905.634',
      y: '2109124.318',
      latitude: '37.7718682257671',
      longitude: '-122.405657636251',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.405657636251, 37.7718682257671]
      }
    },
    {
      objectid: '1340304',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '12532003',
      locationdescription:
        'TERRY A FRANCOIS BLVD: MISSION BAY BLVD to MISSION BAY BLVD (0 - 0)',
      address: 'Assessors Block 8720/Lot008',
      blocklot: '8720008',
      block: '8720',
      lot: '008',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6016311.862',
      y: '2108756.11',
      latitude: '37.7711580369615',
      longitude: '-122.386931257562',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.386931257562, 37.7711580369615]
      }
    },
    {
      objectid: '1340317',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '3295000',
      locationdescription: 'BRYANT ST: KATE ST to DECATUR ST (940 - 983)',
      address: '950 BRYANT ST',
      blocklot: '3758127',
      block: '3758',
      lot: '127',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6010831.642',
      y: '2109760.53',
      latitude: '37.773610979516',
      longitude: '-122.405958407112',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.405958407112, 37.773610979516]
      }
    },
    {
      objectid: '1340312',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '2863000',
      locationdescription:
        'BEALE ST: DAVIS ST \\ MARKET ST \\ PINE ST to MISSION ST (1 - 99)',
      address: '30 BEALE ST',
      blocklot: '3710002',
      block: '3710',
      lot: '002',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6013516.114',
      y: '2116322.014',
      latitude: '37.7917770783642',
      longitude: '-122.397132524462',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397132524462, 37.7917770783642]
      }
    },
    {
      objectid: '1340307',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '1407000',
      locationdescription:
        '25TH ST: MINNESOTA ST to I-280 N ON RAMP \\ INDIANA ST (1100 - 1199)',
      address: '1150 25TH ST',
      blocklot: '4228017',
      block: '4228',
      lot: '017',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6015221.227',
      y: '2102215.701',
      latitude: '37.7531390379784',
      longitude: '-122.390246816981',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390246816981, 37.7531390379784]
      }
    },
    {
      objectid: '1336193',
      applicant: "CARDONA'S FOOD TRUCK",
      facilitytype: 'Truck',
      cnn: '9114000',
      locationdescription: 'MISSION ST: 14TH ST to 15TH ST (1800 - 1899)',
      address: '1888 MISSION ST',
      blocklot: '3547003',
      block: '3547',
      lot: '003',
      permit: '19MFF-00053',
      status: 'APPROVED',
      fooditems: 'Tacos: Burritos: Quesadillas: Various Drinks',
      x: '6006630.753',
      y: '2107401.428',
      latitude: '37.7668976025592',
      longitude: '-122.420322473068',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00053&ExportPDF=1&Filename=19MFF-00053_schedule.pdf',
      approved: '2019-07-09T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.420322473068, 37.7668976025592]
      }
    },
    {
      objectid: '1340308',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '15024000',
      locationdescription:
        'CHINA BASIN ST: TERRY A FRANCOIS BLVD to 03RD ST (300 - 499)',
      address: '435 CHINA BASIN ST',
      blocklot: '8720001',
      block: '8720',
      lot: '001',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1338989',
      applicant: 'Off the Grid Services, LLC',
      facilitytype: 'Truck',
      cnn: '254000',
      locationdescription: '04TH ST: HOWARD ST to CLEMENTINA ST (200 - 267)',
      address: '250 04TH ST',
      blocklot: '3733008',
      block: '3733',
      lot: '008',
      permit: '19MFF-00097',
      status: 'APPROVED',
      fooditems: 'everything except for hot dogs',
      x: '6012012.497',
      y: '2112922.911',
      latitude: '37.7823601210175',
      longitude: '-122.402095994563',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00097&ExportPDF=1&Filename=19MFF-00097_schedule.pdf',
      approved: '2019-07-25T00:00:00.000',
      received: '2019-07-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402095994563, 37.7823601210175]
      }
    },
    {
      objectid: '1338990',
      applicant: 'Off the Grid Services, LLC',
      facilitytype: 'Truck',
      cnn: '2953000',
      locationdescription: 'BERRY ST: 03RD ST to 04TH ST (100 - 199)',
      address: '185 BERRY ST',
      blocklot: '3803005',
      block: '3803',
      lot: '005',
      permit: '19MFF-00097',
      status: 'APPROVED',
      fooditems: 'everything except for hot dogs',
      x: '6014943.869',
      y: '2110666.298',
      latitude: '37.7763271477899',
      longitude: '-122.391796821077',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00097&ExportPDF=1&Filename=19MFF-00097_schedule.pdf',
      approved: '2019-07-25T00:00:00.000',
      received: '2019-07-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391796821077, 37.7763271477899]
      }
    },
    {
      objectid: '1338986',
      applicant: 'Off the Grid Services, LLC',
      facilitytype: 'Truck',
      cnn: '2953000',
      locationdescription: 'BERRY ST: 03RD ST to 04TH ST (100 - 199)',
      address: '185 BERRY ST',
      blocklot: '3803005',
      block: '3803',
      lot: '005',
      permit: '19MFF-00094',
      status: 'APPROVED',
      fooditems: 'everything except for hot dogs',
      x: '6014943.869',
      y: '2110666.298',
      latitude: '37.7763271477899',
      longitude: '-122.391796821077',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00094&ExportPDF=1&Filename=19MFF-00094_schedule.pdf',
      approved: '2019-07-25T00:00:00.000',
      received: '2019-07-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391796821077, 37.7763271477899]
      }
    },
    {
      objectid: '1338991',
      applicant: 'Off the Grid Services, LLC',
      facilitytype: 'Truck',
      cnn: '3143000',
      locationdescription: 'BROADWAY: DAVIS ST to FRONT ST (50 - 99)',
      address: '90 BROADWAY',
      blocklot: '0140007',
      block: '0140',
      lot: '007',
      permit: '19MFF-00097',
      status: 'APPROVED',
      fooditems: 'everything except for hot dogs',
      x: '6012853.387',
      y: '2119060.762',
      latitude: '37.7992601135023',
      longitude: '-122.399617948655',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00097&ExportPDF=1&Filename=19MFF-00097_schedule.pdf',
      approved: '2019-07-25T00:00:00.000',
      received: '2019-07-19',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399617948655, 37.7992601135023]
      }
    },
    {
      objectid: '1340316',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '3294000',
      locationdescription: 'BRYANT ST: LANGTON ST to KATE ST (920 - 977)',
      address: '945 BRYANT ST',
      blocklot: '3780079',
      block: '3780',
      lot: '079',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6011062.611',
      y: '2109567.575',
      latitude: '37.7730940844723',
      longitude: '-122.405145856485',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.405145856485, 37.7730940844723]
      }
    },
    {
      objectid: '1336680',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '2477000',
      locationdescription:
        'CESAR CHAVEZ ST: EVANS AVE to KANSAS ST (2100 - 2550)',
      address: '2200 CESAR CHAVEZ ST',
      blocklot: '4327A007',
      block: '4327A',
      lot: '007',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      x: '6012474.048',
      y: '2101145.897',
      latitude: '37.7500488259704',
      longitude: '-122.399672059709',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399672059709, 37.7500488259704]
      }
    },
    {
      objectid: '1336756',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '5340000',
      locationdescription:
        'EVANS AVE: NAPOLEON ST \\ TOLAND ST to MARIN ST (2000 - 2099)',
      address: '2020 EVANS AVE',
      blocklot: '4347A000',
      block: '4347A',
      lot: '000',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1336739',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '3083000',
      locationdescription: 'BRANNAN ST: HARRIET ST to LUCERNE ST (715 - 743)',
      address: '722 BRANNAN ST',
      blocklot: '3779132',
      block: '3779',
      lot: '132',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6011956.485',
      y: '2110042.886',
      latitude: '37.7744491107754',
      longitude: '-122.402087236063',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402087236063, 37.7744491107754]
      }
    },
    {
      objectid: '1336765',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '9563000',
      locationdescription: 'NEWHALL ST: MENDELL ST to EVANS AVE (200 - 399)',
      address: '330 NEWHALL ST',
      blocklot: '5203035',
      block: '5203',
      lot: '035',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6016150.748',
      y: '2098500.68',
      latitude: '37.7429898747753',
      longitude: '-122.386773267176',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.386773267176, 37.7429898747753]
      }
    },
    {
      objectid: '1336749',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '2477000',
      locationdescription:
        'CESAR CHAVEZ ST: EVANS AVE to KANSAS ST (2100 - 2550)',
      address: '2323 CESAR CHAVEZ ST',
      blocklot: '4342001',
      block: '4342',
      lot: '001',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6012210.337',
      y: '2100696.938',
      latitude: '37.7488013777145',
      longitude: '-122.400552458785',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400552458785, 37.7488013777145]
      }
    },
    {
      objectid: '1336764',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '9504000',
      locationdescription:
        'NAPOLEON ST: EVANS AVE \\ TOLAND ST to JERROLD AVE (25 - 299)',
      address: '190 NAPOLEON ST',
      blocklot: '4343004',
      block: '4343',
      lot: '004',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6012688.941',
      y: '2100244.688',
      latitude: '37.7475862762565',
      longitude: '-122.398865700796',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398865700796, 37.7475862762565]
      }
    },
    {
      objectid: '1336736',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '2476000',
      locationdescription:
        'CESAR CHAVEZ ST: CONNECTICUT ST to EVANS AVE (1900 - 2099)',
      address: '2190 CESAR CHAVEZ ST',
      blocklot: '4324002',
      block: '4324',
      lot: '002',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6013011.36',
      y: '2101203.484',
      latitude: '37.7502368847791',
      longitude: '-122.397818031719',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397818031719, 37.7502368847791]
      }
    },
    {
      objectid: '1336729',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '11741000',
      locationdescription: 'SELBY ST: HUDSON AVE to INNES AVE (500 - 599)',
      address: '500 SELBY ST',
      blocklot: '5264049',
      block: '5264',
      lot: '049',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6013218.357',
      y: '2099109.295',
      latitude: '37.7444982132112',
      longitude: '-122.396955405842',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.396955405842, 37.7444982132112]
      }
    },
    {
      objectid: '1336747',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '198201',
      locationdescription:
        '03RD ST: ARTHUR AVE \\ CARGO WAY to BURKE AVE (3400 - 3498) -- WEST --',
      address: '3450 03RD ST',
      blocklot: '5211029',
      block: '5211',
      lot: '029',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6015874.731',
      y: '2099503.899',
      latitude: '37.7457292216884',
      longitude: '-122.387797650837',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387797650837, 37.7457292216884]
      }
    },
    {
      objectid: '1336757',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '5582000',
      locationdescription:
        'ARELIOUS WALKER DR: PALOU AVE to QUESADA AVE (1300 - 1399)',
      address: 'Assessors Block 4755/Lot049',
      blocklot: '4755049',
      block: '4755',
      lot: '049',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6018439.93443',
      y: '2092406.50106',
      latitude: '37.7263829321822',
      longitude: '-122.378434782668',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.378434782668, 37.7263829321822]
      }
    },
    {
      objectid: '1336763',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '9504000',
      locationdescription:
        'NAPOLEON ST: EVANS AVE \\ TOLAND ST to JERROLD AVE (25 - 299)',
      address: '250 NAPOLEON ST',
      blocklot: '4343021',
      block: '4343',
      lot: '021',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6012092.933',
      y: '2099954.245',
      latitude: '37.7467555544775',
      longitude: '-122.400906270359',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400906270359, 37.7467555544775]
      }
    },
    {
      objectid: '1336730',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '135000',
      locationdescription: '02ND ST: HOWARD ST to TEHAMA ST (200 - 227)',
      address: '222 02ND ST',
      blocklot: '3735063',
      block: '3735',
      lot: '063',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6013157.288',
      y: '2114341.766',
      latitude: '37.786319798284',
      longitude: '-122.398235074249',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398235074249, 37.786319798284]
      }
    },
    {
      objectid: '1336738',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '2867000',
      locationdescription:
        'BEALE ST: HARRISON ST to BRYANT ST \\ DELANCEY ST (400 - 499)',
      address: '400 BEALE ST',
      blocklot: '3766012',
      block: '3766',
      lot: '012',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6015274.9744',
      y: '2114511.98791',
      latitude: '37.786904919457',
      longitude: '-122.390920262962',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390920262962, 37.786904919457]
      }
    },
    {
      objectid: '1336758',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '7253000',
      locationdescription:
        'INNES AVE: EARL ST to ARELIOUS WALKER DR (700 - 799)',
      address: 'Assessors Block 4644/Lot008',
      blocklot: '4644008',
      block: '4644',
      lot: '008',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6019956.89',
      y: '2094023.408',
      latitude: '37.7309061503597',
      longitude: '-122.373302577485',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.373302577485, 37.7309061503597]
      }
    },
    {
      objectid: '735318',
      applicant: 'Ziaurehman Amini',
      facilitytype: 'Push Cart',
      cnn: '30727000',
      locationdescription: 'MARKET ST: DRUMM ST intersection',
      address: '5 THE EMBARCADERO',
      blocklot: '0234017',
      block: '0234',
      lot: '017',
      permit: '15MFF-0159',
      status: 'REQUESTED',
      x: '6013916.72',
      y: '2117244.027',
      latitude: '37.7943310032468',
      longitude: '-122.395811053023',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=15MFF-0159&ExportPDF=1&Filename=15MFF-0159_schedule.pdf',
      received: '2015-12-31',
      priorpermit: '0',
      expirationdate: '2016-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395811053023, 37.7943310032468]
      }
    },
    {
      objectid: '1336760',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '8483000',
      locationdescription:
        'LOOMIS ST: BARNEVELD AVE \\ MCKINNON AVE to OAKDALE AVE (1 - 99)',
      address: '10 LOOMIS ST',
      blocklot: '5560100',
      block: '5560',
      lot: '100',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6011237.657',
      y: '2098889.381',
      latitude: '37.7437839233827',
      longitude: '-122.40378882961',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40378882961, 37.7437839233827]
      }
    },
    {
      objectid: '1336742',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '3524000',
      locationdescription: 'CALIFORNIA ST: DRUMM ST to DAVIS ST (1 - 99)',
      address: '50 CALIFORNIA ST',
      blocklot: '0235022',
      block: '0235',
      lot: '022',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6013470.754',
      y: '2117151.885',
      latitude: '37.7940531837329',
      longitude: '-122.397347693326',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397347693326, 37.7940531837329]
      }
    },
    {
      objectid: '1336675',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '1232000',
      locationdescription: '23RD ST: END to ILLINOIS ST (100 - 699)',
      address: '435 23RD ST',
      blocklot: '4232010',
      block: '4232',
      lot: '010',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      x: '6016887.317',
      y: '2102871.037',
      latitude: '37.7550307267667',
      longitude: '-122.384530734223',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.384530734223, 37.7550307267667]
      }
    },
    {
      objectid: '1336731',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '15086000',
      address: '3305 03RD ST',
      blocklot: '4502A002',
      block: '4502A',
      lot: '002',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6018751.714',
      y: '2098754.754',
      latitude: '37.7438311721327',
      longitude: '-122.377797368962',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.377797368962, 37.7438311721327]
      }
    },
    {
      objectid: '1336737',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '2826101',
      locationdescription:
        'BAY SHORE BLVD: VISITACION AVE to SUNNYDALE AVE (2501 - 2599) -- EAST --',
      address: '2555 BAY SHORE BLVD',
      blocklot: '5100002',
      block: '5100',
      lot: '002',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6010877.081',
      y: '2086365.377',
      latitude: '37.7093754640014',
      longitude: '-122.404154378509',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.404154378509, 37.7093754640014]
      }
    },
    {
      objectid: '1336735',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '2471000',
      locationdescription:
        'CESAR CHAVEZ ST: INDIANA ST to IOWA ST (1300 - 1399)',
      address: '1301 CESAR CHAVEZ ST',
      blocklot: '4352007',
      block: '4352',
      lot: '007',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6014982.06972',
      y: '2100806.30269',
      latitude: '37.7492558595291',
      longitude: '-122.390975379577',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390975379577, 37.7492558595291]
      }
    },
    {
      objectid: '1336686',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '9059000',
      locationdescription: 'MINNESOTA ST: 24TH ST to 25TH ST (1300 - 1399)',
      address: '1310 MINNESOTA ST',
      blocklot: '4228129',
      block: '4228',
      lot: '129',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      x: '6015276.93755',
      y: '2102418.83829',
      latitude: '37.7536998999438',
      longitude: '-122.390068346908',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390068346908, 37.7536998999438]
      }
    },
    {
      objectid: '1336676',
      applicant: "Mike's Catering",
      facilitytype: 'Truck',
      cnn: '12532003',
      locationdescription:
        'TERRY A FRANCOIS BLVD: MISSION BAY BLVD to MISSION BAY BLVD (0 - 0)',
      address: 'Assessors Block 8722/Lot005',
      blocklot: '8722005',
      block: '8722',
      lot: '005',
      permit: '19MFF-00054',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks',
      x: '6016501.447',
      y: '2108199.438',
      latitude: '37.7696400322177',
      longitude: '-122.386236654199',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00054&ExportPDF=1&Filename=19MFF-00054_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.386236654199, 37.7696400322177]
      }
    },
    {
      objectid: '1336767',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '9563000',
      locationdescription: 'NEWHALL ST: MENDELL ST to EVANS AVE (200 - 399)',
      address: '300 NEWHALL ST',
      blocklot: '5203041',
      block: '5203',
      lot: '041',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6016565.95',
      y: '2098577.827',
      latitude: '37.7432246838616',
      longitude: '-122.385342973421',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.385342973421, 37.7432246838616]
      }
    },
    {
      objectid: '1336741',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '3376000',
      locationdescription: 'BURKE AVE: END to 03RD ST (1500 - 1599)',
      address: '1575 BURKE AVE',
      blocklot: '5203043',
      block: '5203',
      lot: '043',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      x: '6016176.048',
      y: '2098933.04',
      latitude: '37.7441784473757',
      longitude: '-122.386715929759',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.386715929759, 37.7441784473757]
      }
    },
    {
      objectid: '1336753',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '4615000',
      locationdescription: 'DAVIDSON AVE: RANKIN ST to SELBY ST (1600 - 1699)',
      address: '1650 DAVIDSON AVE',
      blocklot: '5215022',
      block: '5215',
      lot: '022',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6014623.707',
      y: '2099886.835',
      latitude: '37.7467113030403',
      longitude: '-122.392150319453',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392150319453, 37.7467113030403]
      }
    },
    {
      objectid: '1336755',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '5337000',
      locationdescription: 'EVANS AVE: RANKIN ST to SELBY ST (1800 - 1890)',
      address: '1801 EVANS AVE',
      blocklot: '5232005',
      block: '5232',
      lot: '005',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6014340.249',
      y: '2099120.438',
      latitude: '37.7445911950917',
      longitude: '-122.393076880858',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393076880858, 37.7445911950917]
      }
    },
    {
      objectid: '1336733',
      applicant: 'Quan Catering',
      facilitytype: 'Truck',
      cnn: '198101',
      locationdescription:
        '03RD ST: ARTHUR AVE \\ CARGO WAY to BURKE AVE (3401 - 3499) -- EAST --',
      address: '3433 03RD ST',
      blocklot: '5203023',
      block: '5203',
      lot: '023',
      permit: '19MFF-00055',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Soft drinks: cup cakes: potato chips: cookies: gum: sandwiches (hot & cold): peanuts: muffins: coff (hot & cold): water: juice: yoplait: milk: orange juice: sunflower seeds: can foods: burritos: buscuits: chimichangas: rice krispies',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00055&ExportPDF=1&Filename=19MFF-00055_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1336751',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '3376000',
      locationdescription: 'BURKE AVE: END to 03RD ST (1500 - 1599)',
      address: '1555 BURKE AVE',
      blocklot: '5203067',
      block: '5203',
      lot: '067',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6016389.77775',
      y: '2098759.39172',
      latitude: '37.743713475368',
      longitude: '-122.385964790036',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.385964790036, 37.743713475368]
      }
    },
    {
      objectid: '1336750',
      applicant: "Park's Catering",
      facilitytype: 'Truck',
      cnn: '3376000',
      locationdescription: 'BURKE AVE: END to 03RD ST (1500 - 1599)',
      address: '1570 BURKE AVE',
      blocklot: '5203066',
      block: '5203',
      lot: '066',
      permit: '19MFF-00056',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hamburger: cheeseburgers: hot dogs: hot sandwiches: cold sandwiches: egg muffins: cup of noodles: corn dogs: canned soup: coffee: hot cocoa: hot tea: gatorade: juice: milk: soda: water: fruits: fruit salad: rice pudding: yogurt: candy bars: chips: cookies: donuts: granola bars: muffins',
      x: '6016479.94361',
      y: '2099135.86798',
      latitude: '37.7447521916164',
      longitude: '-122.385679248721',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00056&ExportPDF=1&Filename=19MFF-00056_schedule.pdf',
      approved: '2019-07-10T00:00:00.000',
      received: '2019-07-10',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.385679248721, 37.7447521916164]
      }
    },
    {
      objectid: '1334930',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '13451000',
      locationdescription: 'WASHINGTON ST: MAPLE ST to CHERRY ST (3800 - 3899)',
      address: '3839 WASHINGTON ST',
      blocklot: '0992034',
      block: '0992',
      lot: '034',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '5996467.99447',
      y: '2115509.98326',
      latitude: '37.788583655156',
      longitude: '-122.456059894366',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.456059894366, 37.788583655156]
      }
    },
    {
      objectid: '1337425',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '10215000',
      locationdescription: 'PALOU AVE: END to GRIFFITH ST (904 - 999)',
      address: '931 PALOU AVE',
      blocklot: '4755042',
      block: '4755',
      lot: '042',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6018287.161',
      y: '2092537.392',
      latitude: '37.7267339112416',
      longitude: '-122.378972005236',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.378972005236, 37.7267339112416]
      }
    },
    {
      objectid: '1337456',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '8630000',
      locationdescription: 'MAIN ST: FOLSOM ST to HARRISON ST (300 - 399)',
      address: '201 FOLSOM ST',
      blocklot: '3746002',
      block: '3746',
      lot: '002',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015208.50366',
      y: '2114965.06729',
      latitude: '37.7881452832928',
      longitude: '-122.391181920263',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391181920263, 37.7881452832928]
      }
    },
    {
      objectid: '1337271',
      applicant: 'Chairman SF, LLC',
      facilitytype: 'Truck',
      cnn: '147000',
      locationdescription: '02ND ST: BRANNAN ST to TOWNSEND ST (600 - 699)',
      address: '625 02ND ST',
      blocklot: '3789007',
      block: '3789',
      lot: '007',
      permit: '19MFF-00069',
      status: 'APPROVED',
      fooditems: 'Baos: bowls & drinks',
      x: '6015195.702',
      y: '2112613.963',
      latitude: '37.7816889753451',
      longitude: '-122.391061817287',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00069&ExportPDF=1&Filename=19MFF-00069_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391061817287, 37.7816889753451]
      }
    },
    {
      objectid: '1337454',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '6792000',
      locationdescription: 'HAWES ST: SHAFTER AVE to THOMAS AVE (1500 - 1599)',
      address: '1153 SHAFTER AVE',
      blocklot: '4793006',
      block: '4793',
      lot: '006',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6017053.425',
      y: '2092471.602',
      latitude: '37.7264851632165',
      longitude: '-122.383232458707',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.383232458707, 37.7264851632165]
      }
    },
    {
      objectid: '1337428',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '10972000',
      locationdescription: 'REVERE AVE: GRIFFITH ST to CRISP RD (1100 - 1188)',
      address: '1145 REVERE AVE',
      blocklot: '4786077',
      block: '4786',
      lot: '077',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6017482.212',
      y: '2092501.331',
      latitude: '37.7265904795194',
      longitude: '-122.381752211406',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.381752211406, 37.7265904795194]
      }
    },
    {
      objectid: '1336889',
      applicant: 'Philz Coffee Truck',
      facilitytype: 'Truck',
      cnn: '8701000',
      locationdescription:
        'MARINA BLVD: LAGUNA ST to BEACH ST \\ BUCHANAN ST \\ LOWER FORT MASON ST (1 - 99)',
      address: '15 MARINA BLVD',
      blocklot: '0446002',
      block: '0446',
      lot: '002',
      permit: '19MFF-00058',
      status: 'APPROVED',
      fooditems: 'Hot coffee: iced coffee: hot chocolate: tea: pastries',
      x: '6003247.31181',
      y: '2121194.21345',
      latitude: '37.8045778690901',
      longitude: '-122.433010774343',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00058&ExportPDF=1&Filename=19MFF-00058_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.433010774343, 37.8045778690901]
      }
    },
    {
      objectid: '1336964',
      applicant: 'BH & MT LLC',
      facilitytype: 'Truck',
      cnn: '736000',
      locationdescription: '16TH ST: SPENCER ST to DOLORES ST (3220 - 3299)',
      address: '3253 16TH ST',
      blocklot: '3567039',
      block: '3567',
      lot: '039',
      permit: '19MFF-00061',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages',
      x: '6005214.088',
      y: '2106542.595',
      latitude: '37.7644595214424',
      longitude: '-122.425161376358',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00061&ExportPDF=1&Filename=19MFF-00061_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.425161376358, 37.7644595214424]
      }
    },
    {
      objectid: '1336886',
      applicant: 'Philz Coffee Truck',
      facilitytype: 'Truck',
      cnn: '10455000',
      locationdescription: 'PINE ST: BATTERY ST to SANSOME ST (200 - 299)',
      address: '250 PINE ST',
      blocklot: '0261007',
      block: '0261',
      lot: '007',
      permit: '19MFF-00058',
      status: 'APPROVED',
      fooditems: 'Hot coffee: iced coffee: hot chocolate: tea: pastries',
      x: '6012487.324',
      y: '2116531.736',
      latitude: '37.7922955998187',
      longitude: '-122.400706897233',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00058&ExportPDF=1&Filename=19MFF-00058_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400706897233, 37.7922955998187]
      }
    },
    {
      objectid: '1336962',
      applicant: 'BH & MT LLC',
      facilitytype: 'Truck',
      cnn: '6563000',
      locationdescription: 'GROVE ST: SCOTT ST to DIVISADERO ST (1200 - 1299)',
      address: '1265 GROVE ST',
      blocklot: '1202002D',
      block: '1202',
      lot: '002D',
      permit: '19MFF-00061',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages',
      x: '6001782.163',
      y: '2110734.277',
      latitude: '37.7757743684103',
      longitude: '-122.437331607841',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00061&ExportPDF=1&Filename=19MFF-00061_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.437331607841, 37.7757743684103]
      }
    },
    {
      objectid: '1336955',
      applicant: 'MOMO INNOVATION LLC',
      facilitytype: 'Truck',
      cnn: '3527000',
      locationdescription:
        'CALIFORNIA ST: BATTERY ST to SANSOME ST (300 - 399)',
      address: '351 CALIFORNIA ST',
      blocklot: '0261010A',
      block: '0261',
      lot: '010A',
      permit: '19MFF-00060',
      status: 'APPROVED',
      fooditems: 'Noodles: Meat & Drinks',
      x: '6012479.849',
      y: '2116741.356',
      latitude: '37.7928707497415',
      longitude: '-122.400747494077',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00060&ExportPDF=1&Filename=19MFF-00060_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400747494077, 37.7928707497415]
      }
    },
    {
      objectid: '1336890',
      applicant: 'Philz Coffee Truck',
      facilitytype: 'Truck',
      cnn: '9306000',
      locationdescription:
        'MONTGOMERY ST: COLUMBUS AVE \\ WASHINGTON ST to JACKSON ST (700 - 799)',
      address: '735 MONTGOMERY ST',
      blocklot: '0195001',
      block: '0195',
      lot: '001',
      permit: '19MFF-00058',
      status: 'APPROVED',
      fooditems: 'Hot coffee: iced coffee: hot chocolate: tea: pastries',
      x: '6011635.905',
      y: '2117976.662',
      latitude: '37.7962154965941',
      longitude: '-122.403754558245',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00058&ExportPDF=1&Filename=19MFF-00058_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.403754558245, 37.7962154965941]
      }
    },
    {
      objectid: '1336888',
      applicant: 'Philz Coffee Truck',
      facilitytype: 'Truck',
      cnn: '3528000',
      locationdescription:
        'CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)',
      address: '401 CALIFORNIA ST',
      blocklot: '0260001',
      block: '0260',
      lot: '001',
      permit: '19MFF-00058',
      status: 'APPROVED',
      fooditems: 'Hot coffee: iced coffee: hot chocolate: tea: pastries',
      x: '6012304.287',
      y: '2116717.605',
      latitude: '37.7927957415787',
      longitude: '-122.401353280931',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00058&ExportPDF=1&Filename=19MFF-00058_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401353280931, 37.7927957415787]
      }
    },
    {
      objectid: '1336958',
      applicant: 'BH & MT LLC',
      facilitytype: 'Truck',
      cnn: '10048000',
      locationdescription:
        'OTIS ST: GOUGH ST \\ MCCOPPIN ST to 13TH ST \\ DUBOCE AVE \\ HWY 101 NORTHBOUND RAMP \\ MISSION ST (100 - 199)',
      address: '170 OTIS ST',
      blocklot: '3513007',
      block: '3513',
      lot: '007',
      permit: '19MFF-00061',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00061&ExportPDF=1&Filename=19MFF-00061_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1336959',
      applicant: 'BH & MT LLC',
      facilitytype: 'Truck',
      cnn: '10770000',
      locationdescription: 'PRESIDIO AVE: POST ST to GEARY BLVD (900 - 999)',
      address: '949 PRESIDIO AVE',
      blocklot: '1072001',
      block: '1072',
      lot: '001',
      permit: '19MFF-00061',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages',
      x: '5999130.566',
      y: '2113756.702',
      latitude: '37.7839220701115',
      longitude: '-122.446721633172',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00061&ExportPDF=1&Filename=19MFF-00061_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.446721633172, 37.7839220701115]
      }
    },
    {
      objectid: '1336887',
      applicant: 'Philz Coffee Truck',
      facilitytype: 'Truck',
      cnn: '12323000',
      locationdescription: 'SUTTER ST: POWELL ST to MASON ST (500 - 599)',
      address: '556 SUTTER ST',
      blocklot: '0284009',
      block: '0284',
      lot: '009',
      permit: '19MFF-00058',
      status: 'APPROVED',
      fooditems: 'Hot coffee: iced coffee: hot chocolate: tea: pastries',
      x: '6009899.062',
      y: '2115524.564',
      latitude: '37.7893854510391',
      longitude: '-122.409591260467',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00058&ExportPDF=1&Filename=19MFF-00058_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.409591260467, 37.7893854510391]
      }
    },
    {
      objectid: '1336963',
      applicant: 'BH & MT LLC',
      facilitytype: 'Truck',
      cnn: '6565000',
      locationdescription: 'GROVE ST: BRODERICK ST to BAKER ST (1400 - 1499)',
      address: '1477 GROVE ST',
      blocklot: '1200015',
      block: '1200',
      lot: '015',
      permit: '19MFF-00061',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages',
      x: '6000796.184',
      y: '2110578.354',
      latitude: '37.7752901423195',
      longitude: '-122.440731162111',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00061&ExportPDF=1&Filename=19MFF-00061_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.440731162111, 37.7752901423195]
      }
    },
    {
      objectid: '1336960',
      applicant: 'BH & MT LLC',
      facilitytype: 'Truck',
      cnn: '1232000',
      locationdescription: '23RD ST: END to ILLINOIS ST (100 - 699)',
      address: '401 23RD ST',
      blocklot: '4232010',
      block: '4232',
      lot: '010',
      permit: '19MFF-00061',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages',
      x: '6016887.317',
      y: '2102871.037',
      latitude: '37.7550307267667',
      longitude: '-122.384530734223',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00061&ExportPDF=1&Filename=19MFF-00061_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.384530734223, 37.7550307267667]
      }
    },
    {
      objectid: '1336921',
      applicant: 'Kettle Corn Star',
      facilitytype: 'Push Cart',
      cnn: '8747103',
      locationdescription:
        'MARKET ST: POWELL ST to 05TH ST \\ CYRIL MAGNIN ST (865 - 899) -- SOUTH --',
      address: '865 MARKET ST',
      blocklot: '3705 042',
      block: '3705',
      lot: '042',
      permit: '19MFF-00059',
      status: 'APPROVED',
      fooditems: 'Kettle Corn: Funnel Cakes: Waffles: Lemonade',
      x: '6010561.591',
      y: '2113530.347',
      latitude: '37.7839469079742',
      longitude: '-122.407158344984',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00059&ExportPDF=1&Filename=19MFF-00059_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.407158344984, 37.7839469079742]
      }
    },
    {
      objectid: '1181500',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '10460000',
      locationdescription: 'PINE ST: MONTGOMERY ST to BELDEN ST (400 - 489)',
      address: '555 CALIFORNIA ST',
      blocklot: '0259026',
      block: '0259',
      lot: '026',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6011684.218',
      y: '2116535.691',
      latitude: '37.7922616341775',
      longitude: '-122.403485955391',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-8AM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.403485955391, 37.7922616341775]
      }
    },
    {
      objectid: '1336965',
      applicant: 'BH & MT LLC',
      facilitytype: 'Truck',
      cnn: '8764101',
      locationdescription:
        'MARKET ST: CHURCH ST to 15TH ST (2101 - 2195) -- SOUTH --',
      address: '2145 MARKET ST',
      blocklot: '3543003B',
      block: '3543',
      lot: '003B',
      permit: '19MFF-00061',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages',
      x: '6003973.245',
      y: '2107356.733',
      latitude: '37.7666247727157',
      longitude: '-122.429511176347',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00061&ExportPDF=1&Filename=19MFF-00061_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.429511176347, 37.7666247727157]
      }
    },
    {
      objectid: '1336956',
      applicant: 'MOMO INNOVATION LLC',
      facilitytype: 'Truck',
      cnn: '9094000',
      locationdescription: 'MISSION ST: ANNIE ST to 03RD ST (663 - 699)',
      address: '667 MISSION ST',
      blocklot: '3722067',
      block: '3722',
      lot: '067',
      permit: '19MFF-00060',
      status: 'APPROVED',
      fooditems: 'Noodles: Meat & Drinks',
      x: '6012350.571',
      y: '2114444.914',
      latitude: '37.7865580501799',
      longitude: '-122.40103337535',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00060&ExportPDF=1&Filename=19MFF-00060_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40103337535, 37.7865580501799]
      }
    },
    {
      objectid: '1336961',
      applicant: 'BH & MT LLC',
      facilitytype: 'Truck',
      cnn: '25871000',
      locationdescription: 'DOLORES ST: 14TH ST intersection',
      address: '2001 MARKET ST',
      blocklot: '3535001',
      block: '3535',
      lot: '001',
      permit: '19MFF-00061',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages',
      x: '6004679.693',
      y: '2107959.664',
      latitude: '37.7683202495106',
      longitude: '-122.427110643955',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00061&ExportPDF=1&Filename=19MFF-00061_schedule.pdf',
      approved: '2019-07-11T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.427110643955, 37.7683202495106]
      }
    },
    {
      objectid: '1337451',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '5862000',
      locationdescription: 'FREMONT ST: NATOMA ST to HOWARD ST (170 - 199)',
      address: 'Assessors Block 3720/Lot001',
      blocklot: '3720001',
      block: '3720',
      lot: '001',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6013655.829',
      y: '2115559.572',
      latitude: '37.789691367587',
      longitude: '-122.396595637084',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.396595637084, 37.789691367587]
      }
    },
    {
      objectid: '1337448',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '4908000',
      locationdescription:
        'DONNER AVE: INGALLS ST to JENNINGS ST (1400 - 1499)',
      address: '1475 CARROLL AVE',
      blocklot: '4882026',
      block: '4882',
      lot: '026',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6014733.709',
      y: '2091343.759',
      latitude: '37.7232598663241',
      longitude: '-122.391172885969',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391172885969, 37.7232598663241]
      }
    },
    {
      objectid: '1337427',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '10808000',
      locationdescription:
        'QUESADA AVE: ARELIOUS WALKER DR to GRIFFITH ST (1000 - 1099)',
      address: '1031 QUESADA AVE',
      blocklot: '4764 001',
      block: '4764',
      lot: '001',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6018280.048',
      y: '2092193.457',
      latitude: '37.7257891398124',
      longitude: '-122.378972719624',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.378972719624, 37.7257891398124]
      }
    },
    {
      objectid: '1337453',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '6542000',
      locationdescription:
        'GRIFFITH ST: SHAFTER AVE to THOMAS AVE (1500 - 1599)',
      address: '1515 GRIFFITH ST',
      blocklot: '4794009',
      block: '4794',
      lot: '009',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6017577.871',
      y: '2092036.503',
      latitude: '37.7253194336755',
      longitude: '-122.381389209427',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.381389209427, 37.7253194336755]
      }
    },
    {
      objectid: '1337445',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '2709000',
      locationdescription:
        'BANCROFT AVE: INGALLS ST to JENNINGS ST (1400 - 1499)',
      address: '1460 BANCROFT AVE',
      blocklot: '4850038',
      block: '4850',
      lot: '038',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015035.87862',
      y: '2091757.70466',
      latitude: '37.7244132432963',
      longitude: '-122.390157239611',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390157239611, 37.7244132432963]
      }
    },
    {
      objectid: '1337435',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '12827000',
      locationdescription:
        'UNDERWOOD AVE: INGALLS ST to JENNINGS ST (1300 - 1399)',
      address: '1389 UNDERWOOD AVE',
      blocklot: '4811014',
      block: '4811',
      lot: '014',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015603.925',
      y: '2092728.532',
      latitude: '37.7271104333828',
      longitude: '-122.388261288144',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388261288144, 37.7271104333828]
      }
    },
    {
      objectid: '1337450',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '5452000',
      locationdescription: 'FELL ST: BRODERICK ST to BAKER ST (1300 - 1399)',
      address: '1377 FELL ST',
      blocklot: '1214017',
      block: '1214',
      lot: '017',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6000983.009',
      y: '2109845.279',
      latitude: '37.7732879404704',
      longitude: '-122.440032316635',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.440032316635, 37.7732879404704]
      }
    },
    {
      objectid: '1337267',
      applicant: 'Chairman SF, LLC',
      facilitytype: 'Truck',
      cnn: '5169000',
      locationdescription:
        'ELLIS ST: 04TH ST \\ MARKET ST \\ STOCKTON ST to POWELL ST (1 - 99)',
      address: '34 ELLIS ST',
      blocklot: '0307008',
      block: '0307',
      lot: '008',
      permit: '19MFF-00068',
      status: 'APPROVED',
      fooditems: 'Baos: bowls & drinks',
      x: '6009885.084',
      y: '2114861.905',
      latitude: '37.7875651653788',
      longitude: '-122.40959283348',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00068&ExportPDF=1&Filename=19MFF-00068_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40959283348, 37.7875651653788]
      }
    },
    {
      objectid: '934602',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '6747000',
      locationdescription: 'HARRISON ST: MARIPOSA ST to 18TH ST (2150 - 2198)',
      address: '2150 HARRISON ST',
      blocklot: '3573025',
      block: '3573',
      lot: '025',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:12PM-1PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1337432',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '12569000',
      locationdescription: 'THOMAS AVE: GRIFFITH ST to HAWES ST (1100 - 1199)',
      address: '1180 THOMAS AVE',
      blocklot: '4793029',
      block: '4793',
      lot: '029',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6017060.368',
      y: '2092340.381',
      latitude: '37.726125239645',
      longitude: '-122.383199327239',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.383199327239, 37.726125239645]
      }
    },
    {
      objectid: '1337440',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '13356000',
      locationdescription: 'WALLACE AVE: JENNINGS ST to KEITH ST (1500 - 1599)',
      address: '1500 WALLACE AVE',
      blocklot: '4829002',
      block: '4829',
      lot: '002',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015315.254',
      y: '2092594.276',
      latitude: '37.7267257938118',
      longitude: '-122.389249858027',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389249858027, 37.7267257938118]
      }
    },
    {
      objectid: '1337291',
      applicant:
        "San Francisco Carts & Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '6109000',
      locationdescription: 'GEARY ST: STOCKTON ST to POWELL ST (200 - 299)',
      address: '251 GEARY ST',
      blocklot: '0314014',
      block: '0314',
      lot: '014',
      permit: '19MFF-00071',
      status: 'APPROVED',
      fooditems:
        'Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.',
      x: '6010516.291',
      y: '2114707.404',
      latitude: '37.7871762917416',
      longitude: '-122.407398075958',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00071&ExportPDF=1&Filename=19MFF-00071_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.407398075958, 37.7871762917416]
      }
    },
    {
      objectid: '1337455',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '7479000',
      locationdescription:
        'JENNINGS ST: VAN DYKE AVE to WALLACE AVE (2100 - 2199)',
      address: '2115 JENNINGS ST',
      blocklot: '4828021',
      block: '4828',
      lot: '021',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015486.282',
      y: '2092591.619',
      latitude: '37.7267279782571',
      longitude: '-122.388658428832',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388658428832, 37.7267279782571]
      }
    },
    {
      objectid: '1337443',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '13780000',
      locationdescription:
        'YOSEMITE AVE: INGALLS ST to JENNINGS ST (1400 - 1499)',
      address: '1430 YOSEMITE AVE',
      blocklot: '4831008',
      block: '4831',
      lot: '008',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015560.891',
      y: '2092142.182',
      latitude: '37.7254980479505',
      longitude: '-122.388369150442',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388369150442, 37.7254980479505]
      }
    },
    {
      objectid: '1337430',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '10972000',
      locationdescription: 'REVERE AVE: GRIFFITH ST to CRISP RD (1100 - 1188)',
      address: '1135 REVERE AVE',
      blocklot: '4786051',
      block: '4786',
      lot: '051',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6017542.344',
      y: '2092456.505',
      latitude: '37.726470716246',
      longitude: '-122.381541219158',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.381541219158, 37.726470716246]
      }
    },
    {
      objectid: '1334923',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '10161000',
      locationdescription:
        'PACIFIC AVE: BRODERICK ST to BAKER ST (2900 - 2999)',
      address: '2940 PACIFIC AVE',
      blocklot: '0963040',
      block: '0963',
      lot: '040',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '5999983.37491',
      y: '2116821.33955',
      latitude: '37.792385444513',
      longitude: '-122.443991509437',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.443991509437, 37.792385444513]
      }
    },
    {
      objectid: '1337442',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '13780000',
      locationdescription:
        'YOSEMITE AVE: INGALLS ST to JENNINGS ST (1400 - 1499)',
      address: '1420 YOSEMITE AVE',
      blocklot: '4831012',
      block: '4831',
      lot: '012',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015609.592',
      y: '2092025.988',
      latitude: '37.7251817007288',
      longitude: '-122.388192688444',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388192688444, 37.7251817007288]
      }
    },
    {
      objectid: '1337290',
      applicant:
        "San Francisco Carts & Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '6109000',
      locationdescription: 'GEARY ST: STOCKTON ST to POWELL ST (200 - 299)',
      address: '233 GEARY ST',
      blocklot: '0314001',
      block: '0314',
      lot: '001',
      permit: '19MFF-00070',
      status: 'APPROVED',
      fooditems:
        'Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.',
      x: '6010666.538',
      y: '2114728.492',
      latitude: '37.7872426025967',
      longitude: '-122.406879738213',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00070&ExportPDF=1&Filename=19MFF-00070_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.406879738213, 37.7872426025967]
      }
    },
    {
      objectid: '1082044',
      applicant: 'Fresh Made Cafe',
      facilitytype: 'Push Cart',
      cnn: '9097000',
      locationdescription: 'MISSION ST: 05TH ST to MINT ST (900 - 930)',
      address: '901 MISSION ST',
      blocklot: '3725093',
      block: '3725',
      lot: '093',
      permit: '18MFF-0002',
      status: 'REQUESTED',
      fooditems: 'Pre-packaged food: brew coffee: bottled drinks',
      x: '6010709.29',
      y: '2112874.234',
      latitude: '37.7821536409986',
      longitude: '-122.406601106839',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0002&ExportPDF=1&Filename=18MFF-0002_schedule.pdf',
      dayshours: 'Mo/We/Fr:6AM-5PM',
      received: '2018-01-30',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.406601106839, 37.7821536409986]
      }
    },
    {
      objectid: '1337439',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '13355000',
      locationdescription:
        'WALLACE AVE: INGALLS ST to JENNINGS ST (1400 - 1499)',
      address: '1450 WALLACE AVE',
      blocklot: '4828024',
      block: '4828',
      lot: '024',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015606.538',
      y: '2092377.128',
      latitude: '37.7261456924729',
      longitude: '-122.388227740903',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388227740903, 37.7261456924729]
      }
    },
    {
      objectid: '1337447',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '2866000',
      locationdescription: 'BEALE ST: FOLSOM ST to HARRISON ST (300 - 399)',
      address: '300 BEALE ST',
      blocklot: '3747022',
      block: '3747',
      lot: '022',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6014804.68',
      y: '2114971.118',
      latitude: '37.7881394788716',
      longitude: '-122.392579515374',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392579515374, 37.7881394788716]
      }
    },
    {
      objectid: '1334925',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '11708000',
      locationdescription: 'SCOTT ST: PACIFIC AVE to BROADWAY (2500 - 2599)',
      address: '2521 SCOTT ST',
      blocklot: '0961002',
      block: '0961',
      lot: '002',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '6001109.10398',
      y: '2117139.25499',
      latitude: '37.7933225090245',
      longitude: '-122.440119274474',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.440119274474, 37.7933225090245]
      }
    },
    {
      objectid: '1337446',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '2710000',
      locationdescription:
        'BANCROFT AVE: JENNINGS ST to KEITH ST (1500 - 1599)',
      address: '1555 BANCROFT AVE',
      blocklot: '4880001',
      block: '4880',
      lot: '001',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6014646.012',
      y: '2091759.86',
      latitude: '37.7243975297434',
      longitude: '-122.391505116383',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391505116383, 37.7243975297434]
      }
    },
    {
      objectid: '1337433',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '12570000',
      locationdescription: 'THOMAS AVE: HAWES ST to INGALLS ST (1200 - 1299)',
      address: '1212 THOMAS AVE',
      blocklot: '4792029',
      block: '4792',
      lot: '029',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6016791.103',
      y: '2092542.294',
      latitude: '37.7266647697066',
      longitude: '-122.384144224606',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.384144224606, 37.7266647697066]
      }
    },
    {
      objectid: '1334938',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '6481000',
      locationdescription: 'GREEN ST: BAKER ST to LYON ST (2800 - 2899)',
      address: '2854 GREEN ST',
      blocklot: '0949009A',
      block: '0949',
      lot: '009A',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '5999384.49131',
      y: '2117804.74367',
      latitude: '37.795051430826',
      longitude: '-122.446134422674',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.446134422674, 37.795051430826]
      }
    },
    {
      objectid: '1334926',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '11710000',
      locationdescription: 'SCOTT ST: VALLEJO ST to GREEN ST (2700 - 2799)',
      address: '2750 SCOTT ST',
      blocklot: '0560034',
      block: '0560',
      lot: '034',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '6001185.2071',
      y: '2117863.66916',
      latitude: '37.7953158932065',
      longitude: '-122.4399079176',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.4399079176, 37.7953158932065]
      }
    },
    {
      objectid: '1337347',
      applicant: 'La Jefa',
      facilitytype: 'Truck',
      cnn: '2801102',
      locationdescription:
        'BAY SHORE BLVD: WATERLOO ST to MARENGO ST (501 - 559) -- EAST --',
      address: '531 BAY SHORE BLVD',
      blocklot: '5607038',
      block: '5607',
      lot: '038',
      permit: '19MFF-00076',
      status: 'APPROVED',
      fooditems:
        'Tacos: burritos: quesadillas: tortas: nachos (refried beans: cheese sauce: salsa fresca): carnes (beef: chicken: marinated pork: fried pork): canned beans: rice: sodas: horchata drinks.',
      x: '6010348.157',
      y: '2097065.717',
      latitude: '37.7387268039871',
      longitude: '-122.406736029905',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00076&ExportPDF=1&Filename=19MFF-00076_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.406736029905, 37.7387268039871]
      }
    },
    {
      objectid: '1334936',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '6478000',
      locationdescription: 'GREEN ST: SCOTT ST to DIVISADERO ST (2500 - 2599)',
      address: '2590 GREEN ST',
      blocklot: '0952016',
      block: '0952',
      lot: '016',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '6000664.27732',
      y: '2117972.71962',
      latitude: '37.7955856498634',
      longitude: '-122.441718244288',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.441718244288, 37.7955856498634]
      }
    },
    {
      objectid: '1334928',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '13115000',
      locationdescription:
        'VALLEJO ST: WEBSTER ST to FILLMORE ST (2200 - 2299)',
      address: '2201 VALLEJO ST',
      blocklot: '0564001',
      block: '0564',
      lot: '001',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1337431',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '11782000',
      locationdescription: 'SHAFTER AVE: GRIFFITH ST to HAWES ST (1100 - 1199)',
      address: '1127 SHAFTER AVE',
      blocklot: '4793017',
      block: '4793',
      lot: '017',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6017324.545',
      y: '2092269.627',
      latitude: '37.7259455580465',
      longitude: '-122.382281153253',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.382281153253, 37.7259455580465]
      }
    },
    {
      objectid: '1337356',
      applicant: 'Tacos Rodriguez',
      facilitytype: 'Truck',
      cnn: '9794000',
      locationdescription:
        'OAKDALE AVE: INDUSTRIAL ST \\ SELBY ST to TOLAND ST (2100 - 2199)',
      address: '2198 OAKDALE AVE',
      blocklot: '5590A008',
      block: '5590A',
      lot: '008',
      permit: '19MFF-00077',
      status: 'APPROVED',
      fooditems: 'Tacos: burritos: quesadillas: soda & water',
      x: '6011973.411',
      y: '2097858.615',
      latitude: '37.7409947350024',
      longitude: '-122.401172335386',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00077&ExportPDF=1&Filename=19MFF-00077_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401172335386, 37.7409947350024]
      }
    },
    {
      objectid: '1337438',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '13139000',
      locationdescription:
        'VAN DYKE AVE: INGALLS ST to JENNINGS ST (1300 - 1399)',
      address: '1337 VAN DYKE AVE',
      blocklot: '4828029',
      block: '4828',
      lot: '029',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015726.539',
      y: '2092412.506',
      latitude: '37.7262494817986',
      longitude: '-122.387815368014',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387815368014, 37.7262494817986]
      }
    },
    {
      objectid: '1337268',
      applicant: 'Chairman SF, LLC',
      facilitytype: 'Truck',
      cnn: '9089000',
      locationdescription: 'MISSION ST: ECKER ST to SHAW ALY (521 - 548)',
      address: '536 MISSION ST',
      blocklot: '3708098',
      block: '3708',
      lot: '098',
      permit: '19MFF-00068',
      status: 'APPROVED',
      fooditems: 'Baos: bowls & drinks',
      x: '6012988.85269',
      y: '2115411.95666',
      latitude: '37.7892489084137',
      longitude: '-122.398892959346',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00068&ExportPDF=1&Filename=19MFF-00068_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398892959346, 37.7892489084137]
      }
    },
    {
      objectid: '1334924',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '10163000',
      locationdescription:
        'PACIFIC AVE: LYON ST to PRESIDIO AVE \\ PRESIDIO BLVD (3100 - 3199)',
      address: '3100 PACIFIC AVE',
      blocklot: '0965006',
      block: '0965',
      lot: '006',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '5999233.78178',
      y: '2116707.12673',
      latitude: '37.7920290580811',
      longitude: '-122.446576890144',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.446576890144, 37.7920290580811]
      }
    },
    {
      objectid: '1337457',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '9743000',
      locationdescription:
        'OFARRELL ST: BRODERICK ST to SAINT JOSEPHS AVE (2200 - 2299)',
      address: '2200 OFARRELL ST',
      blocklot: '1098044',
      block: '1098',
      lot: '044',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1337434',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '12570000',
      locationdescription: 'THOMAS AVE: HAWES ST to INGALLS ST (1200 - 1299)',
      address: '1265 THOMAS AVE',
      blocklot: '4807012',
      block: '4807',
      lot: '012',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6016458.774',
      y: '2092565.342',
      latitude: '37.7267096753687',
      longitude: '-122.385294691187',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.385294691187, 37.7267096753687]
      }
    },
    {
      objectid: '1337357',
      applicant: 'Tacos El Flaco',
      facilitytype: 'Truck',
      cnn: '194101',
      locationdescription:
        '03RD ST: 25TH ST to 26TH ST (2901 - 2999) -- EAST --',
      address: '2901 03RD ST',
      blocklot: '4296010',
      block: '4296',
      lot: '010',
      permit: '19MFF-00078',
      status: 'APPROVED',
      fooditems:
        'Tacos: Burritos: Tortas: Quesadillas: Chips & Salsa & Various Beverages',
      x: '6016154.266',
      y: '2101929.534',
      latitude: '37.7524049924783',
      longitude: '-122.387000196298',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00078&ExportPDF=1&Filename=19MFF-00078_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387000196298, 37.7524049924783]
      }
    },
    {
      objectid: '1334939',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '7417000',
      locationdescription: 'JACKSON ST: MAPLE ST to CHERRY ST (3700 - 3799)',
      address: '3756 JACKSON ST',
      blocklot: '0968007',
      block: '0968',
      lot: '007',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '5996275.08188',
      y: '2115996.43038',
      latitude: '37.7899082332987',
      longitude: '-122.456762533982',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.456762533982, 37.7899082332987]
      }
    },
    {
      objectid: '1337441',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '13779000',
      locationdescription: 'YOSEMITE AVE: HAWES ST to INGALLS ST (1300 - 1399)',
      address: '1335 YOSEMITE AVE',
      blocklot: '4846013',
      block: '4846',
      lot: '013',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015941.755',
      y: '2091544.796',
      latitude: '37.7238788408325',
      longitude: '-122.387010878785',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387010878785, 37.7238788408325]
      }
    },
    {
      objectid: '1334931',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '3183000',
      locationdescription:
        'BROADWAY: DIVISADERO ST to BRODERICK ST (2700 - 2799)',
      address: '2710 BROADWAY',
      blocklot: '0959007',
      block: '0959',
      lot: '007',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '6000567.88932',
      y: '2117281.17063',
      latitude: '37.7936813457741',
      longitude: '-122.442002100568',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.442002100568, 37.7936813457741]
      }
    },
    {
      objectid: '1337354',
      applicant: 'Tacos Rodriguez',
      facilitytype: 'Truck',
      cnn: '5331101',
      locationdescription:
        'EVANS AVE: KEITH ST to MENDELL ST (1201 - 1399) -- SOUTH --',
      address: '1275 EVANS AVE',
      blocklot: '5237033',
      block: '5237',
      lot: '033',
      permit: '19MFF-00077',
      status: 'APPROVED',
      fooditems: 'Tacos: burritos: quesadillas: soda & water',
      x: '6017367.817',
      y: '2097063.665',
      latitude: '37.739111429745',
      longitude: '-122.382464971136',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00077&ExportPDF=1&Filename=19MFF-00077_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.382464971136, 37.739111429745]
      }
    },
    {
      objectid: '1334934',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '3185000',
      locationdescription: 'BROADWAY: BAKER ST to LYON ST (2900 - 2999)',
      address: '2970 BROADWAY',
      blocklot: '0957007',
      block: '0957',
      lot: '007',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '5999391.25746',
      y: '2117121.80133',
      latitude: '37.7931766386244',
      longitude: '-122.446061864659',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.446061864659, 37.7931766386244]
      }
    },
    {
      objectid: '1337429',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '10972000',
      locationdescription: 'REVERE AVE: GRIFFITH ST to CRISP RD (1100 - 1188)',
      address: '1160 REVERE AVE',
      blocklot: '4763050',
      block: '4763',
      lot: '050',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6017468.62',
      y: '2092735.972',
      latitude: '37.7272340074959',
      longitude: '-122.38181551187',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.38181551187, 37.7272340074959]
      }
    },
    {
      objectid: '1337444',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '2709000',
      locationdescription:
        'BANCROFT AVE: INGALLS ST to JENNINGS ST (1400 - 1499)',
      address: '1440 BANCROFT AVE',
      blocklot: '4850019',
      block: '4850',
      lot: '019',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015156.082',
      y: '2091667.743',
      latitude: '37.7241728927613',
      longitude: '-122.389735429011',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389735429011, 37.7241728927613]
      }
    },
    {
      objectid: '1337449',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '4908000',
      locationdescription:
        'DONNER AVE: INGALLS ST to JENNINGS ST (1400 - 1499)',
      address: '1450 DONNER AVE',
      blocklot: '4882025',
      block: '4882',
      lot: '025',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6014749.836',
      y: '2091269.372',
      latitude: '37.7230565093389',
      longitude: '-122.391111940642',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391111940642, 37.7230565093389]
      }
    },
    {
      objectid: '1337266',
      applicant: 'Chairman SF, LLC',
      facilitytype: 'Truck',
      cnn: '3528000',
      locationdescription:
        'CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)',
      address: '400 CALIFORNIA ST',
      blocklot: '0238003',
      block: '0238',
      lot: '003',
      permit: '19MFF-00068',
      status: 'APPROVED',
      fooditems: 'Baos: bowls & drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00068&ExportPDF=1&Filename=19MFF-00068_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1337293',
      applicant:
        "San Francisco Carts & Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '6108000',
      locationdescription: 'GEARY ST: GRANT AVE to STOCKTON ST (100 - 199)',
      address: '100 GEARY ST',
      blocklot: '0309003',
      block: '0309',
      lot: '003',
      permit: '19MFF-00073',
      status: 'APPROVED',
      fooditems:
        'Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.',
      x: '6011136.441',
      y: '2114963.525',
      latitude: '37.7879142297241',
      longitude: '-122.405270523095',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00073&ExportPDF=1&Filename=19MFF-00073_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.405270523095, 37.7879142297241]
      }
    },
    {
      objectid: '1337355',
      applicant: 'Tacos Rodriguez',
      facilitytype: 'Truck',
      cnn: '8958000',
      locationdescription: 'MENDELL ST: GALVEZ AVE to HUDSON AVE (600 - 699)',
      address: '600 MENDELL ST',
      blocklot: '5254037',
      block: '5254',
      lot: '037',
      permit: '19MFF-00077',
      status: 'APPROVED',
      fooditems: 'Tacos: burritos: quesadillas: soda & water',
      x: '6016207.357',
      y: '2097293.665',
      latitude: '37.7396787918079',
      longitude: '-122.386493384555',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00077&ExportPDF=1&Filename=19MFF-00077_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.386493384555, 37.7396787918079]
      }
    },
    {
      objectid: '1334933',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '3185000',
      locationdescription: 'BROADWAY: BAKER ST to LYON ST (2900 - 2999)',
      address: '2960 BROADWAY',
      blocklot: '0957006',
      block: '0957',
      lot: '006',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '5999441.14688',
      y: '2117124.21814',
      latitude: '37.793186123336',
      longitude: '-122.445889418675',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.445889418675, 37.793186123336]
      }
    },
    {
      objectid: '1337292',
      applicant:
        "San Francisco Carts & Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '10628000',
      locationdescription: 'POST ST: STOCKTON ST to POWELL ST (300 - 399)',
      address: '345 STOCKTON ST',
      blocklot: '0295016',
      block: '0295',
      lot: '016',
      permit: '19MFF-00072',
      status: 'APPROVED',
      fooditems:
        'Hot dogs: condiments: soft pretzels: soft drinks: coffee: cold beverages: pastries: bakery goods: cookies: ice cream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.',
      x: '6010587.529',
      y: '2115337.419',
      latitude: '37.7889101495704',
      longitude: '-122.407196034122',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00072&ExportPDF=1&Filename=19MFF-00072_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.407196034122, 37.7889101495704]
      }
    },
    {
      objectid: '1337452',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '6540000',
      locationdescription:
        'GRIFFITH ST: QUESADA AVE to REVERE AVE (1300 - 1399)',
      address: '1300 GRIFFITH ST',
      blocklot: '4763047',
      block: '4763',
      lot: '047',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6017681.819',
      y: '2092678.013',
      latitude: '37.7270866339514',
      longitude: '-122.381074448749',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.381074448749, 37.7270866339514]
      }
    },
    {
      objectid: '1334929',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '13448000',
      locationdescription:
        'WASHINGTON ST: LAUREL ST to LOCUST ST (3500 - 3599)',
      address: '3550 WASHINGTON ST',
      blocklot: '0986009',
      block: '0986',
      lot: '009',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '5997756.66527',
      y: '2115877.56765',
      latitude: '37.7896668269621',
      longitude: '-122.451627836117',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.451627836117, 37.7896668269621]
      }
    },
    {
      objectid: '1334932',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '3184000',
      locationdescription: 'BROADWAY: BRODERICK ST to BAKER ST (2800 - 2899)',
      address: '2840 BROADWAY',
      blocklot: '0958004',
      block: '0958',
      lot: '004',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '6000020.33568',
      y: '2117205.16393',
      latitude: '37.7934414335598',
      longitude: '-122.443891213784',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.443891213784, 37.7934414335598]
      }
    },
    {
      objectid: '1334937',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '6480000',
      locationdescription: 'GREEN ST: BRODERICK ST to BAKER ST (2700 - 2799)',
      address: '2701 GREEN ST',
      blocklot: '0955001',
      block: '0955',
      lot: '001',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '6000048.40849',
      y: '2117746.38862',
      latitude: '37.7949290950499',
      longitude: '-122.443832982483',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.443832982483, 37.7949290950499]
      }
    },
    {
      objectid: '1337437',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '13139000',
      locationdescription:
        'VAN DYKE AVE: INGALLS ST to JENNINGS ST (1300 - 1399)',
      address: '1370 VAN DYKE AVE',
      blocklot: '4811013',
      block: '4811',
      lot: '013',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015684.099',
      y: '2092668.764',
      latitude: '37.7269507643782',
      longitude: '-122.387979956262',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387979956262, 37.7269507643782]
      }
    },
    {
      objectid: '1334935',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '5770000',
      locationdescription:
        'FRANCISCO ST: POLK ST to VAN NESS AVE (1100 - 1199)',
      address: '1150 FRANCISCO ST',
      blocklot: '0475001',
      block: '0475',
      lot: '001',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '6005802.19965',
      y: '2120854.70207',
      latitude: '37.8037902440403',
      longitude: '-122.424145174983',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.424145174983, 37.8037902440403]
      }
    },
    {
      objectid: '1337353',
      applicant: 'Tacos Rodriguez',
      facilitytype: 'Truck',
      cnn: '11542000',
      locationdescription: 'SANSOME ST: SUTTER ST to BUSH ST (1 - 99)',
      address: '1 SANSOME ST',
      blocklot: '0289003',
      block: '0289',
      lot: '003',
      permit: '19MFF-00077',
      status: 'APPROVED',
      fooditems: 'Tacos: burritos: quesadillas: soda & water',
      x: '6012406.465',
      y: '2115874.016',
      latitude: '37.790485146128',
      longitude: '-122.40094044069',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00077&ExportPDF=1&Filename=19MFF-00077_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40094044069, 37.790485146128]
      }
    },
    {
      objectid: '1337436',
      applicant: 'Liang Bai Ping',
      facilitytype: 'Truck',
      cnn: '12827000',
      locationdescription:
        'UNDERWOOD AVE: INGALLS ST to JENNINGS ST (1300 - 1399)',
      address: '1351 UNDERWOOD AVE',
      blocklot: '4811005',
      block: '4811',
      lot: '005',
      permit: '19MFF-00079',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
      x: '6015824.111',
      y: '2092689.211',
      latitude: '37.7270146636245',
      longitude: '-122.387497359022',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00079&ExportPDF=1&Filename=19MFF-00079_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-12',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387497359022, 37.7270146636245]
      }
    },
    {
      objectid: '1334927',
      applicant: 'D & T Catering',
      facilitytype: 'Truck',
      cnn: '12876000',
      locationdescription:
        'UNION ST: DIVISADERO ST to BRODERICK ST (2600 - 2699)',
      address: '2616 UNION ST',
      blocklot: '0946006',
      block: '0946',
      lot: '006',
      permit: '19MFF-00049',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks',
      x: '6000436.52993',
      y: '2118303.16871',
      latitude: '37.7964799968164',
      longitude: '-122.442530024725',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00049&ExportPDF=1&Filename=19MFF-00049_schedule.pdf',
      approved: '2019-07-12T00:00:00.000',
      received: '2019-07-05',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.442530024725, 37.7964799968164]
      }
    },
    {
      objectid: '1037694',
      applicant: 'Munch A Bunch',
      facilitytype: 'Truck',
      cnn: '13547000',
      locationdescription: 'WEBSTER ST: CLAY ST to WASHINGTON ST (2200 - 2299)',
      address: '2200 WEBSTER ST',
      blocklot: '0613003',
      block: '0613',
      lot: '003',
      permit: '17MFF-0197',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: packaged sandwiches: pitas: breakfast: cold and hot drinks: snacks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0197&ExportPDF=1&Filename=17MFF-0197_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-2PM',
      approved: '2017-11-21T00:00:00.000',
      received: '2017-11-16',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1313015',
      applicant: 'Off the Grid Services, LLC',
      facilitytype: 'Truck',
      cnn: '3143000',
      locationdescription: 'BROADWAY: DAVIS ST to FRONT ST (50 - 99)',
      address: '90 BROADWAY',
      blocklot: '0140007',
      block: '0140',
      lot: '007',
      permit: '19MFF-00015',
      status: 'APPROVED',
      fooditems: 'everything except for hot dogs',
      x: '6012853.387',
      y: '2119060.762',
      latitude: '37.7992601135023',
      longitude: '-122.399617948655',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00015&ExportPDF=1&Filename=19MFF-00015_schedule.pdf',
      approved: '2019-07-25T00:00:00.000',
      received: '2019-04-30',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399617948655, 37.7992601135023]
      }
    },
    {
      objectid: '1340309',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '15028000',
      locationdescription: 'MISSION ROCK ST: 03RD ST to 04TH ST (500 - 599)',
      address: '555 MISSION ROCK ST',
      blocklot: '8711028',
      block: '8711',
      lot: '028',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1340311',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '2734000',
      locationdescription:
        'BARNEVELD AVE: JERROLD AVE to LOOMIS ST \\ MCKINNON AVE (100 - 299)',
      address: '175 BARNEVELD AVE',
      blocklot: '5286A018',
      block: '5286A',
      lot: '018',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6011606.148',
      y: '2099252.817',
      latitude: '37.7448024193644',
      longitude: '-122.402540218927',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402540218927, 37.7448024193644]
      }
    },
    {
      objectid: '1340315',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '3088000',
      address: '840 BRANNAN ST',
      blocklot: '3780078',
      block: '3780',
      lot: '078',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6011252.805',
      y: '2109369.807',
      latitude: '37.772561689774',
      longitude: '-122.404474024011',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.404474024011, 37.772561689774]
      }
    },
    {
      objectid: '1340314',
      applicant: "Two G's Catering",
      facilitytype: 'Truck',
      cnn: '2954000',
      locationdescription: 'BERRY ST: 04TH ST to 05TH ST (200 - 299)',
      address: '235 BERRY ST',
      blocklot: '8708 111',
      block: '8708',
      lot: '111',
      permit: '19MFF-00103',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot & Cold Sandwiches: Bagels: Burritos: Soups: Hot Dogs: Tacos: Pork Buns: BBQ Meat: Fruit: Various Beverages: Pasties: Pre-Packaged Snacks: Candy: Salads: Muffins: Scones: Brownies: Croissants: Energy Bars: Noodle Bowls',
      x: '6014269.44491',
      y: '2110088.45097',
      latitude: '37.7747030474687',
      longitude: '-122.39408939657',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00103&ExportPDF=1&Filename=19MFF-00103_schedule.pdf',
      approved: '2019-08-13T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.39408939657, 37.7747030474687]
      }
    },
    {
      objectid: '1340417',
      applicant: "Let's Be Frank",
      facilitytype: 'Push Cart',
      cnn: '6816000',
      locationdescription: 'HAYES ST: GOUGH ST to OCTAVIA ST (400 - 499)',
      address: '425 HAYES ST',
      blocklot: '0817025',
      block: '0817',
      lot: '025',
      permit: '19MFF-00104',
      status: 'APPROVED',
      fooditems: 'Hot dogs and chili',
      x: '6005815.064',
      y: '2110939.717',
      latitude: '37.7765668965195',
      longitude: '-122.423395376727',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00104&ExportPDF=1&Filename=19MFF-00104_schedule.pdf',
      approved: '2019-07-26T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.423395376727, 37.7765668965195]
      }
    },
    {
      objectid: '1340418',
      applicant: "Let's Be Frank",
      facilitytype: 'Push Cart',
      cnn: '8393001',
      locationdescription: 'LINDEN ST: GOUGH ST to OCTAVIA ST (300 - 399)',
      address: '404 OCTAVIA ST',
      blocklot: '0817033',
      block: '0817',
      lot: '033',
      permit: '19MFF-00104',
      status: 'APPROVED',
      fooditems: 'Hot dogs and chili',
      x: '6005585.672',
      y: '2110752.197',
      latitude: '37.7760390626659',
      longitude: '-122.424175571492',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00104&ExportPDF=1&Filename=19MFF-00104_schedule.pdf',
      approved: '2019-07-26T00:00:00.000',
      received: '2019-07-25',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.424175571492, 37.7760390626659]
      }
    },
    {
      objectid: '1337540',
      applicant: 'Bonito Poke',
      facilitytype: 'Truck',
      cnn: '7165000',
      locationdescription:
        'ILLINOIS ST: 16TH ST to MARIPOSA ST \\ TERRY A FRANCOIS BLVD (400 - 599)',
      address: '409 ILLINOIS ST',
      blocklot: '3940003',
      block: '3940',
      lot: '003',
      permit: '19MFF-00080',
      status: 'APPROVED',
      fooditems: 'Bonito Poke Bowls & Various Drinks',
      x: '6016152.96291',
      y: '2106970.02895',
      latitude: '37.7662450471029',
      longitude: '-122.387356286511',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00080&ExportPDF=1&Filename=19MFF-00080_schedule.pdf',
      approved: '2019-08-14T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387356286511, 37.7662450471029]
      }
    },
    {
      objectid: '1341056',
      applicant: 'Kettle Corn Star',
      facilitytype: 'Push Cart',
      cnn: '8746103',
      locationdescription:
        'MARKET ST: YERBA BUENA LN to 04TH ST \\ ELLIS ST \\ STOCKTON ST (767 - 799) -- SOUTH --',
      address: '773 MARKET ST',
      blocklot: '3706096',
      block: '3706',
      lot: '096',
      permit: '19MFF-00105',
      status: 'APPROVED',
      fooditems:
        'Kettle Corn: Funnel Cakes: Lemonade: Beverages: Flan: Hot Dogs: Falafel: Hot and Cold Sandwiches: French Fries: Baklava and Pastries',
      x: '6011371.87227',
      y: '2114041.46827',
      latitude: '37.7853956394405',
      longitude: '-122.40439104283',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00105&ExportPDF=1&Filename=19MFF-00105_schedule.pdf',
      approved: '2019-07-29T00:00:00.000',
      received: '2019-07-29',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40439104283, 37.7853956394405]
      }
    },
    {
      objectid: '1337538',
      applicant: 'Bonito Poke',
      facilitytype: 'Truck',
      cnn: '107000',
      locationdescription: '01ST ST: HOWARD ST to TEHAMA ST (200 - 231)',
      address: '505 HOWARD ST',
      blocklot: '3736183',
      block: '3736',
      lot: '183',
      permit: '19MFF-00080',
      status: 'APPROVED',
      fooditems: 'Bonito Poke Bowls & Various Drinks',
      x: '6013786.26714',
      y: '2114936.80369',
      latitude: '37.7879886489953',
      longitude: '-122.396100668472',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00080&ExportPDF=1&Filename=19MFF-00080_schedule.pdf',
      approved: '2019-08-14T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.396100668472, 37.7879886489953]
      }
    },
    {
      objectid: '1337539',
      applicant: 'Bonito Poke',
      facilitytype: 'Truck',
      cnn: '7032000',
      locationdescription: 'HOWARD ST: FREMONT ST to 01ST ST (400 - 499)',
      address: '400 HOWARD ST',
      blocklot: '3720008',
      block: '3720',
      lot: '008',
      permit: '19MFF-00080',
      status: 'APPROVED',
      fooditems: 'Bonito Poke Bowls & Various Drinks',
      x: '6013858.05956',
      y: '2115347.09492',
      latitude: '37.7891192076677',
      longitude: '-122.395881039335',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00080&ExportPDF=1&Filename=19MFF-00080_schedule.pdf',
      approved: '2019-08-14T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395881039335, 37.7891192076677]
      }
    },
    {
      objectid: '1341234',
      applicant: 'Halal Cart, LLC',
      facilitytype: 'Push Cart',
      cnn: '8741101',
      locationdescription:
        'MARKET ST: FREMONT ST \\ FRONT ST to 01ST ST \\ BUSH ST (401 - 499) -- SOUTH --',
      address: '455 MARKET ST',
      blocklot: '3709012',
      block: '3709',
      lot: '012',
      permit: '19MFF-00108',
      status: 'APPROVED',
      fooditems: 'Gyros: Kebabs: soft drinks: and water',
      x: '6013076.33',
      y: '2116028.637',
      latitude: '37.7909470419234',
      longitude: '-122.398633589404',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00108&ExportPDF=1&Filename=19MFF-00108_schedule.pdf',
      approved: '2019-07-30T00:00:00.000',
      received: '2019-07-30',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398633589404, 37.7909470419234]
      }
    },
    {
      objectid: '1347242',
      applicant: 'El Alambre',
      facilitytype: 'Truck',
      cnn: '3033000',
      locationdescription:
        'BOUTWELL ST: INDUSTRIAL ST \\ LOOMIS ST to END (1 - 95)',
      address: '1 BOUTWELL ST',
      blocklot: '5370061',
      block: '5370',
      lot: '061',
      permit: '19MFF-00121',
      status: 'APPROVED',
      fooditems:
        'Tacos: burritos: quesadillas: nachos alambres: choice of meat: carne asada: carnitas: pollo: al pastor: camarones',
      x: '6010684.746',
      y: '2096706.829',
      latitude: '37.7377602011598',
      longitude: '-122.405546988394',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00121&ExportPDF=1&Filename=19MFF-00121_schedule.pdf',
      approved: '2019-08-16T00:00:00.000',
      received: '2019-08-15',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.405546988394, 37.7377602011598]
      }
    },
    {
      objectid: '1341233',
      applicant: 'Halal Cart, LLC',
      facilitytype: 'Push Cart',
      cnn: '9301000',
      locationdescription:
        'MONTGOMERY ST: CALIFORNIA ST to SACRAMENTO ST (400 - 499)',
      address: '400 MONTGOMERY ST',
      blocklot: '0239009',
      block: '0239',
      lot: '009',
      permit: '19MFF-00107',
      status: 'APPROVED',
      fooditems: 'kebabs: halal gyro: grilled halal meat: refreshments',
      x: '6011956.214',
      y: '2116853.2',
      latitude: '37.7931486269835',
      longitude: '-122.402567175578',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00107&ExportPDF=1&Filename=19MFF-00107_schedule.pdf',
      approved: '2019-07-30T00:00:00.000',
      received: '2019-07-30',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402567175578, 37.7931486269835]
      }
    },
    {
      objectid: '1338490',
      applicant: 'Wu Wei LLC dba MoBowl',
      facilitytype: 'Truck',
      cnn: '13403000',
      locationdescription:
        'WASHINGTON ST: THE EMBARCADERO to DRUMM ST (1 - 99)',
      address: '370 DRUMM ST',
      blocklot: '0201012',
      block: '0201',
      lot: '012',
      permit: '19MFF-00092',
      status: 'APPROVED',
      fooditems: 'Various types of meat: veggie: and seafood bowls.',
      x: '6013693.222',
      y: '2118189.172',
      latitude: '37.7969137124835',
      longitude: '-122.396650675264',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00092&ExportPDF=1&Filename=19MFF-00092_schedule.pdf',
      approved: '2019-07-19T00:00:00.000',
      received: '2019-07-18',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.396650675264, 37.7969137124835]
      }
    },
    {
      objectid: '1307613',
      applicant: 'El Alambre',
      facilitytype: 'Truck',
      cnn: '5817000',
      locationdescription: 'FRANKLIN ST: MYRTLE ST to GEARY BLVD (1150 - 1199)',
      address: '1188 FRANKLIN ST',
      blocklot: '0714017',
      block: '0714',
      lot: '017',
      permit: '19MFF-00012',
      status: 'APPROVED',
      fooditems:
        'Tacos: Burritos: Quesadillas: Nachos Alambres: Choice of Meat: Carne Asada: Carnitas: Pollo: Al Pastor Camarones',
      x: '6006108.969',
      y: '2114104.044',
      latitude: '37.7852719490668',
      longitude: '-122.422603585164',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00012&ExportPDF=1&Filename=19MFF-00012_schedule.pdf',
      approved: '2019-08-16T00:00:00.000',
      received: '2019-04-04',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.422603585164, 37.7852719490668]
      }
    },
    {
      objectid: '1347397',
      applicant: 'El Alambre',
      facilitytype: 'Truck',
      cnn: '5816000',
      locationdescription:
        'FRANKLIN ST: OFARRELL ST \\ STARR KING WAY to MYRTLE ST (1100 - 1149)',
      address: '1100 FRANKLIN ST',
      blocklot: '0714015',
      block: '0714',
      lot: '015',
      permit: '19MFF-00012',
      status: 'APPROVED',
      fooditems:
        'Tacos: Burritos: Quesadillas: Nachos Alambres: Choice of Meat: Carne Asada: Carnitas: Pollo: Al Pastor Camarones',
      x: '6006116.026',
      y: '2113948.779',
      latitude: '37.7848460277555',
      longitude: '-122.422568133137',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00012&ExportPDF=1&Filename=19MFF-00012_schedule.pdf',
      approved: '2019-08-16T00:00:00.000',
      received: '2019-04-04',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.422568133137, 37.7848460277555]
      }
    },
    {
      objectid: '1338493',
      applicant: 'Wu Wei LLC dba MoBowl',
      facilitytype: 'Truck',
      cnn: '7033000',
      locationdescription: 'HOWARD ST: 01ST ST to MALDEN ALY (500 - 589)',
      address: '500 HOWARD ST',
      blocklot: '3721011',
      block: '3721',
      lot: '011',
      permit: '19MFF-00092',
      status: 'APPROVED',
      fooditems: 'Various types of meat: veggie: and seafood bowls.',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00092&ExportPDF=1&Filename=19MFF-00092_schedule.pdf',
      approved: '2019-07-19T00:00:00.000',
      received: '2019-07-18',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1338492',
      applicant: 'Wu Wei LLC dba MoBowl',
      facilitytype: 'Truck',
      cnn: '5875000',
      locationdescription: 'FRONT ST: VALLEJO ST to GREEN ST (900 - 999)',
      address: '900 FRONT ST',
      blocklot: '0137001',
      block: '0137',
      lot: '001',
      permit: '19MFF-00092',
      status: 'APPROVED',
      fooditems: 'Various types of meat: veggie: and seafood bowls.',
      x: '6012874.622',
      y: '2119410.253',
      latitude: '37.8002209155922',
      longitude: '-122.399569018577',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00092&ExportPDF=1&Filename=19MFF-00092_schedule.pdf',
      approved: '2019-07-19T00:00:00.000',
      received: '2019-07-18',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399569018577, 37.8002209155922]
      }
    },
    {
      objectid: '1338489',
      applicant: 'Wu Wei LLC dba MoBowl',
      facilitytype: 'Truck',
      cnn: '12160001',
      locationdescription: 'STEUART ST: HOWARD ST to END (200 - 299)',
      address: '75 HOWARD ST',
      blocklot: '3741031',
      block: '3741',
      lot: '031',
      permit: '19MFF-00092',
      status: 'APPROVED',
      fooditems: 'Various types of meat: veggie: and seafood bowls.',
      x: '6015092.174',
      y: '2116210.269',
      latitude: '37.7915578641549',
      longitude: '-122.391671499786',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00092&ExportPDF=1&Filename=19MFF-00092_schedule.pdf',
      approved: '2019-07-19T00:00:00.000',
      received: '2019-07-18',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391671499786, 37.7915578641549]
      }
    },
    {
      objectid: '1338491',
      applicant: 'Wu Wei LLC dba MoBowl',
      facilitytype: 'Truck',
      cnn: '4972000',
      locationdescription: 'DRUMM ST: CLAY ST to WASHINGTON ST (200 - 299)',
      address: '253 DRUMM ST',
      blocklot: '0203013',
      block: '0203',
      lot: '013',
      permit: '19MFF-00092',
      status: 'APPROVED',
      fooditems: 'Various types of meat: veggie: and seafood bowls.',
      x: '6013507.554',
      y: '2117905.099',
      latitude: '37.7961233802521',
      longitude: '-122.397273204338',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00092&ExportPDF=1&Filename=19MFF-00092_schedule.pdf',
      approved: '2019-07-19T00:00:00.000',
      received: '2019-07-18',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397273204338, 37.7961233802521]
      }
    },
    {
      objectid: '1341232',
      applicant: 'Halal Cart, LLC',
      facilitytype: 'Push Cart',
      cnn: '8737101',
      locationdescription:
        'MARKET ST: STEUART ST to SPEAR ST (1 - 99) -- SOUTH --',
      address: '1 MARKET ST',
      blocklot: '3713006',
      block: '3713',
      lot: '006',
      permit: '19MFF-00107',
      status: 'APPROVED',
      fooditems: 'kebabs: halal gyro: grilled halal meat: refreshments',
      x: '6014186.566',
      y: '2117071.214',
      latitude: '37.7938715071506',
      longitude: '-122.394865238621',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00107&ExportPDF=1&Filename=19MFF-00107_schedule.pdf',
      approved: '2019-07-30T00:00:00.000',
      received: '2019-07-30',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394865238621, 37.7938715071506]
      }
    },
    {
      objectid: '1341238',
      applicant: 'Halal Cart of San Francisco',
      facilitytype: 'Push Cart',
      cnn: '3529000',
      locationdescription:
        'CALIFORNIA ST: LEIDESDORFF ST to MONTGOMERY ST (449 - 499)',
      address: '400 MONTGOMERY ST',
      blocklot: '0239009',
      block: '0239',
      lot: '009',
      permit: '19MFF-00109',
      status: 'APPROVED',
      fooditems:
        'Halal Gyro over Rice: Halal Chicken over Rice: Halal Gyro: and Chicken Sandwich',
      x: '6011956.214',
      y: '2116853.2',
      latitude: '37.7931486269835',
      longitude: '-122.402567175578',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00109&ExportPDF=1&Filename=19MFF-00109_schedule.pdf',
      approved: '2019-07-30T00:00:00.000',
      received: '2019-07-30',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402567175578, 37.7931486269835]
      }
    },
    {
      objectid: '1341239',
      applicant: 'Halal Cart of San Francisco',
      facilitytype: 'Push Cart',
      cnn: '8737101',
      locationdescription:
        'MARKET ST: STEUART ST to SPEAR ST (1 - 99) -- SOUTH --',
      address: '1 MARKET ST',
      blocklot: '3713006',
      block: '3713',
      lot: '006',
      permit: '19MFF-00109',
      status: 'APPROVED',
      fooditems:
        'Halal Gyro over Rice: Halal Chicken over Rice: Halal Gyro: and Chicken Sandwich',
      x: '6014186.566',
      y: '2117071.214',
      latitude: '37.7938715071506',
      longitude: '-122.394865238621',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00109&ExportPDF=1&Filename=19MFF-00109_schedule.pdf',
      approved: '2019-07-30T00:00:00.000',
      received: '2019-07-30',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394865238621, 37.7938715071506]
      }
    },
    {
      objectid: '1344140',
      applicant: 'Cochinita',
      facilitytype: 'Truck',
      cnn: '1329000',
      locationdescription: '24TH ST: UTAH ST to POTRERO AVE (2600 - 2699)',
      address: '2601 24TH ST',
      blocklot: '4264001',
      block: '4264',
      lot: '001',
      permit: '19MFF-00113',
      status: 'APPROVED',
      fooditems: 'Panushos: Salbutes: Salad: Rice: Beans: Cochinita: etc.',
      x: '6010800.766',
      y: '2102190.03',
      latitude: '37.7528223681215',
      longitude: '-122.405531919216',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00113&ExportPDF=1&Filename=19MFF-00113_schedule.pdf',
      approved: '2019-08-20T00:00:00.000',
      received: '2019-08-02',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.405531919216, 37.7528223681215]
      }
    },
    {
      objectid: '1343454',
      applicant: 'Esmeli Catering',
      facilitytype: 'Truck',
      cnn: '7022000',
      locationdescription: 'HOOPER ST: 07TH ST to 08TH ST (100 - 199)',
      address: 'Assessors Block /Lot',
      permit: '19MFF-00110',
      status: 'REQUESTED',
      fooditems: 'tacos: burritos: quesadilla: tortas sodas',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00110&ExportPDF=1&Filename=19MFF-00110_schedule.pdf',
      received: '2019-07-31',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1343831',
      applicant: 'Got Snacks',
      facilitytype: 'Push Cart',
      cnn: '184001',
      locationdescription:
        '03RD ST: TERRY A FRANCOIS BLVD to CHANNEL ST (1000 - 1099)',
      address: '1020 03RD ST',
      blocklot: '8714002',
      block: '8714',
      lot: '002',
      permit: '19MFF-00112',
      status: 'REQUESTED',
      fooditems: 'sunflower seeds: crackerjacks: bottled water: peanuts: candy',
      x: '6015168.306',
      y: '2110364.21',
      latitude: '37.7755101380495',
      longitude: '-122.390999306002',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00112&ExportPDF=1&Filename=19MFF-00112_schedule.pdf',
      received: '2019-08-01',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390999306002, 37.7755101380495]
      }
    },
    {
      objectid: '963985',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '2710000',
      locationdescription:
        'BANCROFT AVE: JENNINGS ST to KEITH ST (1500 - 1599)',
      address: '1562 BANCROFT AVE',
      blocklot: '4849006',
      block: '4849',
      lot: '006',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6014513.081',
      y: '2092146.105',
      latitude: '37.7254507021723',
      longitude: '-122.391991641418',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:1PM-2PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391991641418, 37.7254507021723]
      }
    },
    {
      objectid: '1337051',
      applicant: 'Roadside Rotisserie Corporation / Country Grill',
      facilitytype: 'Truck',
      cnn: '3419000',
      locationdescription:
        'BUSH ST: 01ST ST \\ MARKET ST to BATTERY ST (1 - 99)',
      address: '1 BUSH ST',
      blocklot: '0290011',
      block: '0290',
      lot: '011',
      permit: '19MFF-00064',
      status: 'APPROVED',
      fooditems:
        'Rotisserie Chicken: Ribs: Kickass Salad: Potatos w/fat dripping: chicken wrap.',
      x: '6012652.373',
      y: '2116027.943',
      latitude: '37.7909215072692',
      longitude: '-122.400100423738',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00064&ExportPDF=1&Filename=19MFF-00064_schedule.pdf',
      approved: '2019-07-16T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400100423738, 37.7909215072692]
      }
    },
    {
      objectid: '1337053',
      applicant: 'Roadside Rotisserie Corporation / Country Grill',
      facilitytype: 'Truck',
      cnn: '2754000',
      locationdescription:
        'BATTERY ST: CALIFORNIA ST to HALLECK ST (200 - 230)',
      address: '225 BATTERY ST',
      blocklot: '0238002',
      block: '0238',
      lot: '002',
      permit: '19MFF-00066',
      status: 'APPROVED',
      fooditems:
        'Rotisserie Chicken; Ribs; Pork Loin; Roasted Potatoes; Chicken Wrap; Kale Salad; Drinks',
      x: '6012600.766',
      y: '2116948.597',
      latitude: '37.7934465278161',
      longitude: '-122.400343675592',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00066&ExportPDF=1&Filename=19MFF-00066_schedule.pdf',
      approved: '2019-07-16T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400343675592, 37.7934465278161]
      }
    },
    {
      objectid: '1200178',
      applicant: 'SF Cart Project',
      facilitytype: 'Truck',
      cnn: '15019101',
      locationdescription:
        'MISSION BAY BLVD SOUTH: 03RD ST \\ MISSION BAY BLVD to 04TH ST \\ MISSION BAY BLVD (501 - 599)',
      address: '535 MISSION BAY BLVD SOUTH',
      blocklot: '8711007',
      block: '8711',
      lot: '007',
      permit: '18MFF-0094',
      status: 'EXPIRED',
      fooditems:
        '7 Multiple Trucks on rotation (1 on Mission Bay Blvd South & 6 on 4th St).   Serving everything but hot dogs',
      x: '6014983.88328',
      y: '2108042.28534',
      latitude: '37.7691244121681',
      longitude: '-122.391474911246',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0094&ExportPDF=1&Filename=18MFF-0094_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-3PM',
      approved: '2018-08-07T00:00:00.000',
      received: '2018-08-06',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391474911246, 37.7691244121681]
      }
    },
    {
      objectid: '1037692',
      applicant: 'Munch A Bunch',
      facilitytype: 'Truck',
      cnn: '5882000',
      locationdescription: 'FULTON ST: FRANKLIN ST to GOUGH ST (300 - 399)',
      address: '365 FULTON ST',
      blocklot: '0792 028',
      block: '0792',
      lot: '028',
      permit: '17MFF-0197',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: packaged sandwiches: pitas: breakfast: cold and hot drinks: snacks',
      x: '6005956.8',
      y: '2111638.505',
      latitude: '37.7784935971852',
      longitude: '-122.422954747396',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0197&ExportPDF=1&Filename=17MFF-0197_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2017-11-21T00:00:00.000',
      received: '2017-11-16',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.422954747396, 37.7784935971852]
      }
    },
    {
      objectid: '1181510',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '12726000',
      locationdescription: 'TURK ST: GOUGH ST to LAGUNA ST (900 - 1099)',
      address: '1003 TURK ST',
      blocklot: '0759001',
      block: '0759',
      lot: '001',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6005248.473',
      y: '2112517.984',
      latitude: '37.7808684365681',
      longitude: '-122.425467726618',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:8AM-9AM/11AM-12PM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.425467726618, 37.7808684365681]
      }
    },
    {
      objectid: '1042438',
      applicant: 'Ruru Juice LLC',
      facilitytype: 'Truck',
      cnn: '12316000',
      locationdescription: 'SUTTER ST: SANSOME ST to MONTGOMERY ST (50 - 99)',
      address: '80 SUTTER ST',
      blocklot: '0289005',
      block: '0289',
      lot: '005',
      permit: '17MFF-0198',
      status: 'REQUESTED',
      fooditems: 'Smoothies: Juice: Salads: Fruit Bowls: Soup',
      x: '6012142.609',
      y: '2115828.791',
      latitude: '37.7903462473414',
      longitude: '-122.401850190989',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0198&ExportPDF=1&Filename=17MFF-0198_schedule.pdf',
      dayshours: 'Mo/We/Fr:9AM-1PM',
      received: '2017-11-29',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.401850190989, 37.7903462473414]
      }
    },
    {
      objectid: '1089698',
      applicant: 'El Tonayense #60',
      facilitytype: 'Truck',
      cnn: '6752000',
      locationdescription: 'HARRISON ST: MISTRAL ST to 20TH ST (2345 - 2399)',
      address: '2355 FOLSOM ST',
      blocklot: '3593035',
      block: '3593',
      lot: '035',
      permit: '18MFF-0004',
      status: 'REQUESTED',
      fooditems: 'Tacos: Burritos: Tortas: Quesadillas: Drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0004&ExportPDF=1&Filename=18MFF-0004_schedule.pdf',
      dayshours: 'Mo-Su:4PM-10PM',
      received: '2018-02-05',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1037689',
      applicant: 'Munch A Bunch',
      facilitytype: 'Truck',
      cnn: '373000',
      locationdescription: '07TH ST: CLEVELAND ST to HARRISON ST (314 - 399)',
      address: '355 07TH ST',
      blocklot: '3754 018',
      block: '3754',
      lot: '018',
      permit: '17MFF-0197',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: packaged sandwiches: pitas: breakfast: cold and hot drinks: snacks',
      x: '6010570.267',
      y: '2110774.843',
      latitude: '37.7763814259936',
      longitude: '-122.406934051626',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0197&ExportPDF=1&Filename=17MFF-0197_schedule.pdf',
      dayshours: 'Mo-Fr:8AM-9AM',
      approved: '2017-11-21T00:00:00.000',
      received: '2017-11-16',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.406934051626, 37.7763814259936]
      }
    },
    {
      objectid: '916855',
      applicant: 'Los 2 Cuates',
      facilitytype: 'Truck',
      cnn: '141000',
      locationdescription: '02ND ST: STILLMAN ST to BRYANT ST (454 - 499)',
      address: '490 02ND ST',
      blocklot: '3763007',
      block: '3763',
      lot: '007',
      permit: '16MFF-0137',
      status: 'EXPIRED',
      fooditems:
        'south American-Peruvian food: hot wok dishes: hot pastas: rice dishes.',
      x: '6014337.512',
      y: '2113125.58',
      latitude: '37.78304609975',
      longitude: '-122.39406659923',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0137&ExportPDF=1&Filename=16MFF-0137_schedule.pdf',
      dayshours: 'Tu/We/Th:7AM-8PM',
      approved: '2018-06-08T00:00:00.000',
      received: '2016-08-12',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.39406659923, 37.78304609975]
      }
    },
    {
      objectid: '934630',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '5329000',
      locationdescription:
        'EVANS AVE: HUNTERS POINT BLVD to JENNINGS ST \\ MIDDLE POINT RD (1031 - 1099)',
      address: '1059 EVANS AVE',
      blocklot: '4603A005',
      block: '4603A',
      lot: '005',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6018579.482',
      y: '2096114.542',
      latitude: '37.7365721824187',
      longitude: '-122.378209667202',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.378209667202, 37.7365721824187]
      }
    },
    {
      objectid: '1163797',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '3376000',
      locationdescription: 'BURKE AVE: END to 03RD ST (1500 - 1599)',
      address: '1570 BURKE AVE',
      blocklot: '5203066',
      block: '5203',
      lot: '066',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6016479.94361',
      y: '2099135.86798',
      latitude: '37.7447521916164',
      longitude: '-122.385679248721',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:2PM-3PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.385679248721, 37.7447521916164]
      }
    },
    {
      objectid: '1398711',
      applicant: 'Buenafe',
      facilitytype: 'Truck',
      cnn: '10927000',
      locationdescription: 'RANKIN ST: DAVIDSON AVE to EVANS AVE (200 - 299)',
      address: '220 RANKIN ST',
      blocklot: '5228001',
      block: '5228',
      lot: '001',
      permit: '20MFF-00001',
      status: 'REQUESTED',
      x: '6014520.892',
      y: '2099538.537',
      latitude: '37.7457492406203',
      longitude: '-122.392481487678',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=20MFF-00001&ExportPDF=1&Filename=20MFF-00001_schedule.pdf',
      received: '2020-01-22',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392481487678, 37.7457492406203]
      }
    },
    {
      objectid: '963978',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '6961000',
      locationdescription:
        'HOLLISTER AVE: HAWES ST to INGALLS ST (1000 - 1099)',
      address: '1000 HOLLISTER AVE',
      blocklot: '4943002',
      block: '4943',
      lot: '002',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6014891.341',
      y: '2089767.246',
      latitude: '37.7189398190959',
      longitude: '-122.390517872066',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:12PM-1PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390517872066, 37.7189398190959]
      }
    },
    {
      objectid: '1163787',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '8848000',
      locationdescription:
        'MASONIC AVE: MCALLISTER ST to FULTON ST (500 - 599)',
      address: '500 MASONIC AVE',
      blocklot: '1175018',
      block: '1175',
      lot: '018',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '5999194.35773',
      y: '2111070.4801',
      latitude: '37.7765500428191',
      longitude: '-122.446307635558',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:6AM-7AM/11AM-12PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.446307635558, 37.7765500428191]
      }
    },
    {
      objectid: '1163800',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '1177000',
      locationdescription: '22ND ST: SAN BRUNO AVE to UTAH ST (2400 - 2449)',
      address: '2401 22ND ST',
      blocklot: '4154001',
      block: '4154',
      lot: '001',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6010945.915',
      y: '2103212.154',
      latitude: '37.7556370098323',
      longitude: '-122.405101930379',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.405101930379, 37.7556370098323]
      }
    },
    {
      objectid: '946047',
      applicant: 'The Huge Hotdog Concession',
      facilitytype: 'Truck',
      cnn: '10567000',
      locationdescription:
        'POLK ST: BUSH ST to AUSTIN ST \\ FRANK NORRIS ST (1300 - 1329)',
      address: '1300 POLK ST',
      blocklot: '0668004A',
      block: '0668',
      lot: '004A',
      permit: '17MFF-0139',
      status: 'EXPIRED',
      fooditems: 'Hotdogs: chips: soda: nuts: crackers',
      x: '6006861.832',
      y: '2115401.583',
      latitude: '37.7888771172666',
      longitude: '-122.420091020038',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0139&ExportPDF=1&Filename=17MFF-0139_schedule.pdf',
      dayshours: 'Su/Fr/Sa:8PM-2AM',
      approved: '2017-03-09T00:00:00.000',
      received: '2017-03-09',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.420091020038, 37.7888771172666]
      }
    },
    {
      objectid: '963988',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '10218000',
      locationdescription: 'PALOU AVE: HAWES ST to INGALLS ST (1100 - 1199)',
      address: '1101 PALOU AVE',
      blocklot: '4757024',
      block: '4757',
      lot: '024',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6017464.809',
      y: '2093259.551',
      latitude: '37.7286714428179',
      longitude: '-122.381865088641',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:2PM-3PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.381865088641, 37.7286714428179]
      }
    },
    {
      objectid: '1174530',
      applicant: 'CC Acquisition LLC',
      facilitytype: 'Push Cart',
      cnn: '13060000',
      locationdescription: 'VALENCIA ST: 16TH ST to 17TH ST (500 - 599)',
      address: '560 VALENCIA ST',
      blocklot: '3568009',
      block: '3568',
      lot: '009',
      permit: '18MFF-0034',
      status: 'REQUESTED',
      fooditems: 'Chai Tea',
      x: '6006099.355',
      y: '2106305.353',
      latitude: '37.7638580813603',
      longitude: '-122.422082620993',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0034&ExportPDF=1&Filename=18MFF-0034_schedule.pdf',
      dayshours: 'Sa-Su:9AM-4PM',
      received: '2018-06-12',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.422082620993, 37.7638580813603]
      }
    },
    {
      objectid: '1337052',
      applicant: 'Roadside Rotisserie Corporation / Country Grill',
      facilitytype: 'Truck',
      cnn: '5874000',
      locationdescription: 'FRONT ST: BROADWAY to VALLEJO ST (800 - 899)',
      address: '90 BROADWAY',
      blocklot: '0140007',
      block: '0140',
      lot: '007',
      permit: '19MFF-00065',
      status: 'APPROVED',
      fooditems:
        'Rotisserie Chicken: Ribs: Kickass Salad: Potatos w/fat dripping: chicken wrap.',
      x: '6012853.387',
      y: '2119060.762',
      latitude: '37.7992601135023',
      longitude: '-122.399617948655',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00065&ExportPDF=1&Filename=19MFF-00065_schedule.pdf',
      approved: '2019-07-16T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399617948655, 37.7992601135023]
      }
    },
    {
      objectid: '1009768',
      applicant: 'Akuranvyka USA Inc',
      facilitytype: 'Truck',
      cnn: '11553000',
      locationdescription: 'SANSOME ST: GOLD ST to PACIFIC AVE (705 - 799)',
      address: '727 SANSOME ST',
      blocklot: '0175003',
      block: '0175',
      lot: '003',
      permit: '17MFF-0185',
      status: 'ISSUED',
      fooditems:
        'Indian Street Food: Tikka Masala Burritos; Samosas; Sexy Fries (Indian-inspired poutine); Naughty Naans; Deconstructed Samosas; Kathi Rolls; Lassis and Lemonades',
      x: '6012095.199',
      y: '2118234.464',
      latitude: '37.7969490060212',
      longitude: '-122.402183431894',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0185&ExportPDF=1&Filename=17MFF-0185_schedule.pdf',
      dayshours: 'Mo/Tu/Th:12PM-1PM',
      approved: '2018-03-01T00:00:00.000',
      received: '2017-05-10',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402183431894, 37.7969490060212]
      }
    },
    {
      objectid: '1181503',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '186201',
      locationdescription:
        '03RD ST: 16TH ST to MARIPOSA ST (1800 - 1998) -- WEST --',
      address: '1900 03RD ST',
      blocklot: '3992003',
      block: '3992',
      lot: '003',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6015473.195',
      y: '2106569.082',
      latitude: '37.7651064631908',
      longitude: '-122.38967948729',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.38967948729, 37.7651064631908]
      }
    },
    {
      objectid: '963994',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '7223000',
      locationdescription: 'INGALLS ST: GEORGE CT to OAKDALE AVE (1300 - 1399)',
      address: '1309 INGALLS ST',
      blocklot: '4714002',
      block: '4714',
      lot: '002',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6017478.204',
      y: '2093879.426',
      latitude: '37.7303742378628',
      longitude: '-122.381861878657',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:4PM-5PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.381861878657, 37.7303742378628]
      }
    },
    {
      objectid: '1199164',
      applicant: 'Street Meet',
      facilitytype: 'Truck',
      cnn: '6552000',
      locationdescription:
        'GROVE ST: 08TH ST \\ HYDE ST \\ MARKET ST to LARKIN ST (1 - 55)',
      address: '30 GROVE ST',
      blocklot: '0354001',
      block: '0354',
      lot: '001',
      permit: '18MFF-0039',
      status: 'APPROVED',
      fooditems:
        'Burritos: Tacos: Quesadillas: Tortas: Carne Asada Fries and various drinks',
      x: '6008026.826',
      y: '2111838.426',
      latitude: '37.779159119969',
      longitude: '-122.415807882427',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0039&ExportPDF=1&Filename=18MFF-0039_schedule.pdf',
      dayshours: 'Su/Fr/Sa:12AM-2AM;Th/Fr/Sa:6PM-12AM',
      approved: '2019-02-19T00:00:00.000',
      received: '2018-07-02',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.415807882427, 37.779159119969]
      }
    },
    {
      objectid: '931094',
      applicant: 'Swell Cream & Coffee',
      facilitytype: 'Truck',
      cnn: '12410000',
      locationdescription: 'TARAVAL ST: 34TH AVE to 35TH AVE (2400 - 2499)',
      address: '2450 TARAVAL ST',
      blocklot: '2363022',
      block: '2363',
      lot: '022',
      permit: '17MFF-0002',
      status: 'REQUESTED',
      fooditems: 'Ice cream: coffee: pastries',
      x: '5985532.259',
      y: '2098975.331',
      latitude: '37.7425503735592',
      longitude: '-122.492677082215',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0002&ExportPDF=1&Filename=17MFF-0002_schedule.pdf',
      received: '2017-01-30',
      priorpermit: '0',
      expirationdate: '2018-01-30T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.492677082215, 37.7425503735592]
      }
    },
    {
      objectid: '1184866',
      applicant: 'Subs on Hubs',
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block 8711/Lot021',
      blocklot: '8711021',
      block: '8711',
      lot: '021',
      permit: '18MFF-0059',
      status: 'EXPIRED',
      fooditems: 'Italian subs: Cuban sandwich: Gyro',
      x: '6014914.89374',
      y: '2108873.14738',
      latitude: '37.7714019465879',
      longitude: '-122.391771646847',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0059&ExportPDF=1&Filename=18MFF-0059_schedule.pdf',
      dayshours: 'Sa-Su:11AM-10PM;Mo-Fr:6PM-8PM',
      approved: '2018-07-11T00:00:00.000',
      received: '2018-07-11',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391771646847, 37.7714019465879]
      }
    },
    {
      objectid: '1037688',
      applicant: 'Munch A Bunch',
      facilitytype: 'Truck',
      cnn: '10293000',
      locationdescription: 'PARNASSUS AVE: HILLWAY AVE to 03RD AVE (400 - 599)',
      address: '400 PARNASSUS AVE',
      blocklot: '1756001',
      block: '1756',
      lot: '001',
      permit: '17MFF-0197',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: packaged sandwiches: pitas: breakfast: cold and hot drinks: snacks',
      x: '5995605.966',
      y: '2106525.104',
      latitude: '37.7638640323832',
      longitude: '-122.458391749844',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0197&ExportPDF=1&Filename=17MFF-0197_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-8AM',
      approved: '2017-11-21T00:00:00.000',
      received: '2017-11-16',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.458391749844, 37.7638640323832]
      }
    },
    {
      objectid: '934628',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '8715000',
      locationdescription:
        'MARIPOSA ST: 04TH ST \\ MINNESOTA ST to INDIANA ST (700 - 799)',
      address: '777 MARIPOSA ST',
      blocklot: '3997004',
      block: '3997',
      lot: '004',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6015005.349',
      y: '2106106.834',
      latitude: '37.7638112772906',
      longitude: '-122.391265350599',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391265350599, 37.7638112772906]
      }
    },
    {
      objectid: '963996',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '7895000',
      locationdescription:
        'KIRKWOOD AVE: NEWHALL ST to PHELPS ST (1600 - 1699)',
      address: '1698 KIRKWOOD AVE',
      blocklot: '5279027',
      block: '5279',
      lot: '027',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6014750.983',
      y: '2097205.93',
      latitude: '37.7393571608675',
      longitude: '-122.391522811759',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:4PM-5PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391522811759, 37.7393571608675]
      }
    },
    {
      objectid: '1058991',
      applicant: 'Ruru Juice LLC',
      facilitytype: 'Truck',
      cnn: '9092000',
      locationdescription:
        'MISSION ST: 02ND ST to NEW MONTGOMERY ST (600 - 634)',
      address: '601 MISSION ST',
      blocklot: '3722001',
      block: '3722',
      lot: '001',
      permit: '17MFF-0198',
      status: 'REQUESTED',
      fooditems: 'Smoothies: Juice: Salads: Fruit Bowls: Soup',
      x: '6012725.856',
      y: '2114842.86',
      latitude: '37.7876716444879',
      longitude: '-122.399762925839',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0198&ExportPDF=1&Filename=17MFF-0198_schedule.pdf',
      dayshours: 'Tu/Th/Fr:9AM-1PM',
      received: '2017-11-29',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.399762925839, 37.7876716444879]
      }
    },
    {
      objectid: '1174531',
      applicant: 'CC Acquisition LLC',
      facilitytype: 'Push Cart',
      cnn: '8742101',
      locationdescription:
        'MARKET ST: 01ST ST \\ BUSH ST to 02ND ST (501 - 599) -- SOUTH --',
      address: '525 MARKET ST',
      blocklot: '3708056',
      block: '3708',
      lot: '056',
      permit: '18MFF-0034',
      status: 'REQUESTED',
      fooditems: 'Chai Tea',
      x: '6012886.778',
      y: '2115835.7',
      latitude: '37.7904067199405',
      longitude: '-122.399275886086',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0034&ExportPDF=1&Filename=18MFF-0034_schedule.pdf',
      dayshours: 'Mo-Fr:8AM-4PM',
      received: '2018-06-12',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399275886086, 37.7904067199405]
      }
    },
    {
      objectid: '1181513',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '3309000',
      locationdescription: 'BRYANT ST: 19TH ST to 20TH ST (2100 - 2199)',
      address: '2157 BRYANT ST',
      blocklot: '4080065',
      block: '4080',
      lot: '065',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6009684.39',
      y: '2104752.654',
      latitude: '37.7597962717227',
      longitude: '-122.409573421624',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:12PM-1PM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.409573421624, 37.7597962717227]
      }
    },
    {
      objectid: '1186399',
      applicant:
        'Tres Agaves Mexican Kitchen & Tequila Lounge LLC. dba Tres Truck',
      facilitytype: 'Truck',
      cnn: '10995000',
      locationdescription: 'RHODE ISLAND ST: 16TH ST to 17TH ST (300 - 399)',
      address: '301 RHODE ISLAND ST',
      blocklot: '3956025',
      block: '3956',
      lot: '025',
      permit: '18MFF-0065',
      status: 'EXPIRED',
      fooditems: 'Multiple Truck - Everything',
      x: '6011875.761',
      y: '2106770.632',
      latitude: '37.7654597374682',
      longitude: '-122.402136376179',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0065&ExportPDF=1&Filename=18MFF-0065_schedule.pdf',
      dayshours: 'Mo-We:8AM-3PM',
      approved: '2018-07-12T00:00:00.000',
      received: '2018-07-12',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402136376179, 37.7654597374682]
      }
    },
    {
      objectid: '1163788',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '9094000',
      locationdescription: 'MISSION ST: ANNIE ST to 03RD ST (663 - 699)',
      address: '690 MISSION ST',
      blocklot: '3707024',
      block: '3707',
      lot: '024',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-8AM/10AM-11AM/12PM-1PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1337050',
      applicant: 'Roadside Rotisserie Corporation / Country Grill',
      facilitytype: 'Truck',
      cnn: '3075000',
      locationdescription:
        'BRANNAN ST: STANFORD ST to JACK LONDON ALY (324 - 353)',
      address: '333 BRANNAN ST',
      blocklot: '3788042',
      block: '3788',
      lot: '042',
      permit: '19MFF-00063',
      status: 'APPROVED',
      fooditems:
        'Rotisserie Chicken; Ribs; Pork Loin; Roasted Potatoes; Chicken Wrap; Kale Salad; Drinks',
      x: '6014798.469',
      y: '2112341.208',
      latitude: '37.780918000993',
      longitude: '-122.392416983133',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00063&ExportPDF=1&Filename=19MFF-00063_schedule.pdf',
      approved: '2019-07-16T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392416983133, 37.780918000993]
      }
    },
    {
      objectid: '1181514',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '7031000',
      locationdescription: 'HOWARD ST: BEALE ST to FREMONT ST (300 - 399)',
      address: '300 HOWARD ST',
      blocklot: '3719009',
      block: '3719',
      lot: '009',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6014078.535',
      y: '2115506.556',
      latitude: '37.7895693138966',
      longitude: '-122.395129390521',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:6AM-7AM/12PM-1PM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395129390521, 37.7895693138966]
      }
    },
    {
      objectid: '1163790',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '12678000',
      locationdescription:
        'TREAT AVE: DIVISION ST \\ FLORIDA ST to ALAMEDA ST (1 - 99)',
      address: 'Assessors Block 3902/Lot002',
      blocklot: '3902002',
      block: '3902',
      lot: '002',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6009046.271',
      y: '2107865.259',
      latitude: '37.7683069928',
      longitude: '-122.412000336092',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-8AM/10AM-11AM/12PM-1PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.412000336092, 37.7683069928]
      }
    },
    {
      objectid: '934719',
      applicant: 'Santana ESG, Inc.',
      facilitytype: 'Truck',
      cnn: '11542000',
      locationdescription: 'SANSOME ST: SUTTER ST to BUSH ST (1 - 99)',
      address: '1 SANSOME ST',
      blocklot: '0289003',
      block: '0289',
      lot: '003',
      permit: '17MFF-0122',
      status: 'EXPIRED',
      fooditems:
        'Tacos: Burritos: Tortas: Quesadillas: Mexican Drinks: Aguas Frescas',
      x: '6012406.465',
      y: '2115874.016',
      latitude: '37.790485146128',
      longitude: '-122.40094044069',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0122&ExportPDF=1&Filename=17MFF-0122_schedule.pdf',
      dayshours: 'Mo-Fr:11AM-3PM',
      approved: '2017-03-21T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40094044069, 37.790485146128]
      }
    },
    {
      objectid: '963991',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '6671000',
      locationdescription: 'HARBOR RD: NORTHRIDGE RD to INGALLS ST (1 - 299)',
      address: '297 HARBOR RD',
      blocklot: '4712008',
      block: '4712',
      lot: '008',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6017903.776',
      y: '2094986.964',
      latitude: '37.7334388116408',
      longitude: '-122.380467549518',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:3PM-4PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.380467549518, 37.7334388116408]
      }
    },
    {
      objectid: '1337923',
      applicant: 'La Jefa',
      cnn: '11543000',
      locationdescription: 'SANSOME ST: BUSH ST to PINE ST (100 - 199)',
      address: '155 SANSOME ST',
      blocklot: '0268001',
      block: '0268',
      lot: '001',
      permit: '19MFF-00018',
      status: 'REQUESTED',
      fooditems:
        'Tacos: burritos: quesadillas: tortas: nachos (refried beans: cheese sauce: salsa fresca): carnes (beef: chicken: marinated pork: fried pork): canned beans: rice: sodas: horchata drinks.',
      x: '6012318.456',
      y: '2116367.149',
      latitude: '37.7918342630555',
      longitude: '-122.401279616596',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00018&ExportPDF=1&Filename=19MFF-00018_schedule.pdf',
      received: '2019-05-22',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.401279616596, 37.7918342630555]
      }
    },
    {
      objectid: '963979',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '7252000',
      locationdescription: 'INGERSON AVE: JENNINGS ST to 03RD ST (1100 - 1199)',
      address: '1173 INGERSON AVE',
      blocklot: '4968035',
      block: '4968',
      lot: '035',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6013341.728',
      y: '2090348.363',
      latitude: '37.7204493626594',
      longitude: '-122.395915014237',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:12PM-1PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395915014237, 37.7204493626594]
      }
    },
    {
      objectid: '1163796',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '4614000',
      locationdescription: 'DAVIDSON AVE: QUINT ST to RANKIN ST (1500 - 1599)',
      address: '1580 DAVIDSON AVE',
      blocklot: '5216029',
      block: '5216',
      lot: '029',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6015031.248',
      y: '2099507.747',
      latitude: '37.7456930261204',
      longitude: '-122.390714584821',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:2PM-3PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390714584821, 37.7456930261204]
      }
    },
    {
      objectid: '934629',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '8234000',
      locationdescription: 'LE CONTE AVE: 03RD ST to KEITH ST (1039 - 1099)',
      address: '1075 LE CONTE AVE',
      blocklot: '5476009',
      block: '5476',
      lot: '009',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6012695.887',
      y: '2089756.429',
      latitude: '37.7187880790201',
      longitude: '-122.39810598775',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.39810598775, 37.7187880790201]
      }
    },
    {
      objectid: '1181499',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '9090000',
      locationdescription: 'MISSION ST: SHAW ALY to ANTHONY ST (543 - 586)',
      address: '560 MISSION ST',
      blocklot: '3708095',
      block: '3708',
      lot: '095',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6012851.27',
      y: '2115274.827',
      latitude: '37.788864715343',
      longitude: '-122.399359351363',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:6AM-7AM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399359351363, 37.788864715343]
      }
    },
    {
      objectid: '963984',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '4908000',
      locationdescription:
        'DONNER AVE: INGALLS ST to JENNINGS ST (1400 - 1499)',
      address: '1475 DONNER AVE',
      blocklot: '4910023',
      block: '4910',
      lot: '023',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6014572.169',
      y: '2091177.246',
      latitude: '37.7227936887593',
      longitude: '-122.391719666472',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:1PM-2PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391719666472, 37.7227936887593]
      }
    },
    {
      objectid: '963980',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '6548000',
      locationdescription:
        'GRIFFITH ST: INGERSON AVE to JAMESTOWN AVE (2900 - 2999)',
      address: '2900 GRIFFITH ST',
      blocklot: '4973001',
      block: '4973',
      lot: '001',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6015142.712',
      y: '2089052.53',
      latitude: '37.716991290324',
      longitude: '-122.38959908417',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:12PM-1PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.38959908417, 37.716991290324]
      }
    },
    {
      objectid: '963998',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '10327000',
      locationdescription:
        'PENINSULA AVE: BLANKEN AVE to LATHROP AVE (300 - 399)',
      address: '360 PENINSULA AVE',
      blocklot: '5083009',
      block: '5083',
      lot: '009',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6012192.793',
      y: '2086872.475',
      latitude: '37.7108412835853',
      longitude: '-122.399642614963',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:5PM-6PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399642614963, 37.7108412835853]
      }
    },
    {
      objectid: '1089697',
      applicant: 'El Tonayense #60',
      facilitytype: 'Truck',
      cnn: '6746000',
      locationdescription: 'HARRISON ST: 17TH ST to MARIPOSA ST (2050 - 2149)',
      address: '401 TREAT AVE',
      blocklot: '3573023',
      block: '3573',
      lot: '023',
      permit: '18MFF-0004',
      status: 'REQUESTED',
      fooditems: 'Tacos: Burritos: Tortas: Quesadillas: Drinks',
      x: '6008587.223',
      y: '2105981.305',
      latitude: '37.7631083253767',
      longitude: '-122.413454890022',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0004&ExportPDF=1&Filename=18MFF-0004_schedule.pdf',
      dayshours: 'Mo-Su:10AM-4PM',
      received: '2018-02-05',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.413454890022, 37.7631083253767]
      }
    },
    {
      objectid: '1184864',
      applicant: 'Subs on Hubs',
      facilitytype: 'Truck',
      cnn: '3089000',
      locationdescription: 'BRANNAN ST: 08TH ST to 09TH ST (900 - 999)',
      address: '934 BRANNAN ST',
      blocklot: '3781008',
      block: '3781',
      lot: '008',
      permit: '18MFF-0059',
      status: 'EXPIRED',
      fooditems: 'Italian subs: Cuban sandwich: Gyro',
      x: '6010635.811',
      y: '2108878.801',
      latitude: '37.7711790005481',
      longitude: '-122.406573673429',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0059&ExportPDF=1&Filename=18MFF-0059_schedule.pdf',
      dayshours: 'Mo/Tu/We/Th:11AM-6PM',
      approved: '2018-07-11T00:00:00.000',
      received: '2018-07-11',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.406573673429, 37.7711790005481]
      }
    },
    {
      objectid: '953198',
      applicant: 'Santana ESG, Inc.',
      facilitytype: 'Truck',
      cnn: '11834000',
      locationdescription: 'SHOTWELL ST: 16TH ST to 17TH ST (200 - 299)',
      address: '200 SHOTWELL ST',
      blocklot: '3571014',
      block: '3571',
      lot: '014',
      permit: '17MFF-0169',
      status: 'EXPIRED',
      fooditems:
        'Tacos: Burritos: Tortas: Quesadillas: Mexican Drinks: Aguas Frescas',
      x: '6007701.412',
      y: '2106595.633',
      latitude: '37.7647453507195',
      longitude: '-122.41656213947',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0169&ExportPDF=1&Filename=17MFF-0169_schedule.pdf',
      dayshours: 'Sa-Su:10AM-6PM;Mo-Fr:10AM-10PM',
      approved: '2017-03-21T00:00:00.000',
      received: '2017-03-21',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.41656213947, 37.7647453507195]
      }
    },
    {
      objectid: '1163786',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '144000',
      locationdescription: '02ND ST: FEDERAL ST to SOUTH PARK (519 - 548)',
      address: '544 02ND ST',
      blocklot: '3775005',
      block: '3775',
      lot: '005',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6014572.797',
      y: '2112894.093',
      latitude: '37.7824235632947',
      longitude: '-122.393236399398',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-8AM/10AM-11AM/11AM-12PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393236399398, 37.7824235632947]
      }
    },
    {
      objectid: '963995',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '4938000',
      locationdescription:
        'KISKA RD: DORMITORY RD \\ KIRKWOOD AVE to REARDON RD (141 - 199)',
      address: '195 KISKA RD',
      blocklot: '4700052',
      block: '4700',
      lot: '052',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6018976.06063',
      y: '2093508.4787',
      latitude: '37.729438288454',
      longitude: '-122.376657800723',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:4PM-5PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.376657800723, 37.729438288454]
      }
    },
    {
      objectid: '975273',
      applicant: 'Akuranvyka USA Inc',
      facilitytype: 'Truck',
      cnn: '179000',
      locationdescription: '03RD ST: BRANNAN ST to TOWNSEND ST (600 - 699)',
      address: '601 03RD ST',
      blocklot: '3788020',
      block: '3788',
      lot: '020',
      permit: '17MFF-0185',
      status: 'ISSUED',
      fooditems:
        'Indian Street Food: Tikka Masala Burritos; Samosas; Sexy Fries (Indian-inspired poutine); Naughty Naans; Deconstructed Samosas; Kathi Rolls; Lassis and Lemonades',
      x: '6014402.116',
      y: '2112043.001',
      latitude: '37.7800771744392',
      longitude: '-122.393767294483',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0185&ExportPDF=1&Filename=17MFF-0185_schedule.pdf',
      dayshours: 'Tu/Th/Fr:12PM-1PM',
      approved: '2018-03-01T00:00:00.000',
      received: '2017-05-10',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393767294483, 37.7800771744392]
      }
    },
    {
      objectid: '1337914',
      applicant: 'El Gallo Jiro',
      facilitytype: 'Truck',
      cnn: '1260000',
      locationdescription: '23RD ST: TREAT AVE to FOLSOM ST (3052 - 3099)',
      address: '3055 23RD ST',
      blocklot: '3640039',
      block: '3640',
      lot: '039',
      permit: '19MFF-00090',
      status: 'APPROVED',
      fooditems:
        'Burritos: Giros: Tortas: Quesadillas: Tacos & Various Beverages',
      x: '6008556.964',
      y: '2102638.387',
      latitude: '37.7539277357265',
      longitude: '-122.413323129618',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00090&ExportPDF=1&Filename=19MFF-00090_schedule.pdf',
      approved: '2019-07-16T00:00:00.000',
      received: '2019-07-16',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.413323129618, 37.7539277357265]
      }
    },
    {
      objectid: '963982',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '7819000',
      locationdescription: 'KEY AVE: JENNINGS ST to 03RD ST (1000 - 1068)',
      address: '1060 KEY AVE',
      blocklot: '4994002',
      block: '4994',
      lot: '002',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6013314.667',
      y: '2089893.982',
      latitude: '37.7192002177133',
      longitude: '-122.395976731096',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:1PM-2PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395976731096, 37.7192002177133]
      }
    },
    {
      objectid: '1181505',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '10955000',
      locationdescription: 'REDWOOD ST: POLK ST to VAN NESS AVE (100 - 199)',
      address: '180 REDWOOD ST',
      blocklot: '0766013',
      block: '0766',
      lot: '013',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6006844.538',
      y: '2112471.764',
      latitude: '37.7808315769119',
      longitude: '-122.419942864682',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.419942864682, 37.7808315769119]
      }
    },
    {
      objectid: '1090089',
      applicant: 'Tacos El Primo',
      facilitytype: 'Truck',
      cnn: '10829000',
      locationdescription: 'QUINT ST: DAVIDSON AVE to EVANS AVE (300 - 399)',
      address: '1700 EVANS AVE',
      blocklot: '5227001',
      block: '5227',
      lot: '001',
      permit: '18MFF-0006',
      status: 'REQUESTED',
      fooditems:
        'Mexican food: tacos: burritos: tortas: various meat and chicken and fish plate: chile relleno plate: fish plate: bread: flan: rice pudding: bread: fruit juice: vegetable juice: coffee: tea',
      x: '6014950.929',
      y: '2099216.653',
      latitude: '37.744889286143',
      longitude: '-122.390971976935',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0006&ExportPDF=1&Filename=18MFF-0006_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-4PM',
      received: '2018-02-05',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390971976935, 37.744889286143]
      }
    },
    {
      objectid: '1090081',
      applicant: 'El Tonayanse #4 / #36',
      facilitytype: 'Truck',
      cnn: '6740000',
      locationdescription: 'HARRISON ST: 13TH ST to 14TH ST (1700 - 1799)',
      address: '1717 HARRISON ST',
      blocklot: '3901001',
      block: '3901',
      lot: '001',
      permit: '18MFF-0005',
      status: 'REQUESTED',
      fooditems: 'Tacos: Burritos: Tortas: Quesadillas',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0005&ExportPDF=1&Filename=18MFF-0005_schedule.pdf',
      dayshours: 'Mo-Su:10AM-7PM',
      received: '2018-02-05',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1186400',
      applicant:
        'Tres Agaves Mexican Kitchen & Tequila Lounge LLC. dba Tres Truck',
      facilitytype: 'Truck',
      cnn: '711000',
      locationdescription: '16TH ST: KANSAS ST to VERMONT ST (1700 - 1799)',
      address: '1700 16TH ST',
      blocklot: '3935005',
      block: '3935',
      lot: '005',
      permit: '18MFF-0065',
      status: 'EXPIRED',
      fooditems: 'Multiple Truck - Everything',
      x: '6011356.434',
      y: '2107057.15',
      latitude: '37.76621745068',
      longitude: '-122.403952784121',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0065&ExportPDF=1&Filename=18MFF-0065_schedule.pdf',
      dayshours: 'We/Th/Fr:8AM-3PM',
      approved: '2018-07-12T00:00:00.000',
      received: '2018-07-12',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.403952784121, 37.76621745068]
      }
    },
    {
      objectid: '1163957',
      applicant: 'Los 2 Cuates',
      facilitytype: 'Truck',
      cnn: '3529000',
      locationdescription:
        'CALIFORNIA ST: LEIDESDORFF ST to MONTGOMERY ST (449 - 499)',
      address: '475 CALIFORNIA ST',
      blocklot: '0260010',
      block: '0260',
      lot: '010',
      permit: '18MFF-0029',
      status: 'EXPIRED',
      fooditems: 'Peruvian & Asian Food',
      x: '6012002.812',
      y: '2116560.078',
      latitude: '37.792346385148',
      longitude: '-122.402385322794',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0029&ExportPDF=1&Filename=18MFF-0029_schedule.pdf',
      dayshours: 'Mo/We/Fr:11AM-3PM',
      approved: '2018-06-08T00:00:00.000',
      received: '2018-05-21',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402385322794, 37.792346385148]
      }
    },
    {
      objectid: '1337926',
      applicant: 'La Jefa',
      cnn: '12316000',
      locationdescription: 'SUTTER ST: SANSOME ST to MONTGOMERY ST (50 - 99)',
      address: '80 SUTTER ST',
      blocklot: '0289005',
      block: '0289',
      lot: '005',
      permit: '19MFF-00018',
      status: 'REQUESTED',
      fooditems:
        'Tacos: burritos: quesadillas: tortas: nachos (refried beans: cheese sauce: salsa fresca): carnes (beef: chicken: marinated pork: fried pork): canned beans: rice: sodas: horchata drinks.',
      x: '6012142.609',
      y: '2115828.791',
      latitude: '37.7903462473414',
      longitude: '-122.401850190989',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00018&ExportPDF=1&Filename=19MFF-00018_schedule.pdf',
      received: '2019-05-22',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.401850190989, 37.7903462473414]
      }
    },
    {
      objectid: '1090091',
      applicant: 'Tacos El Primo',
      facilitytype: 'Truck',
      cnn: '7480000',
      locationdescription:
        'JENNINGS ST: WALLACE AVE to YOSEMITE AVE (2200 - 2299)',
      address: '1495 WALLACE AVE',
      blocklot: '4831003',
      block: '4831',
      lot: '003',
      permit: '18MFF-0006',
      status: 'REQUESTED',
      fooditems:
        'Mexican food: tacos: burritos: tortas: various meat and chicken and fish plate: chile relleno plate: fish plate: bread: flan: rice pudding: bread: fruit juice: vegetable juice: coffee: tea',
      x: '6015319.326',
      y: '2092304.552',
      latitude: '37.7259304950399',
      longitude: '-122.389215559421',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0006&ExportPDF=1&Filename=18MFF-0006_schedule.pdf',
      dayshours: 'Tu/Sa:8AM-3PM;Mo/Tu/We/Th/Fr:10AM-2PM',
      received: '2018-02-05',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389215559421, 37.7259304950399]
      }
    },
    {
      objectid: '1163791',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '4083000',
      locationdescription: 'CLAY ST: BATTERY ST to SANSOME ST (400 - 499)',
      address: '432 CLAY ST',
      blocklot: '0206006',
      block: '0206',
      lot: '006',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6012459.069',
      y: '2117555.691',
      latitude: '37.7951055609814',
      longitude: '-122.400876633726',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-8AM/10AM-11AM/12PM-1PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400876633726, 37.7951055609814]
      }
    },
    {
      objectid: '1213203',
      applicant: 'Marengo',
      facilitytype: 'Truck',
      cnn: '13456000',
      locationdescription:
        'WATERLOO ST: MARENGO ST to BAY SHORE BLVD (40 - 99)',
      address: '75 WATERLOO ST',
      blocklot: '5582001',
      block: '5582',
      lot: '001',
      permit: '18MFF-0100',
      status: 'REQUESTED',
      fooditems:
        'Breakfast - egg: cheese: bacon: tomato: english muffin w/ butter: jam: or nutella: hard boiled eggs: fruit medley: water: coffee: milk: carrot juice: orange juice',
      x: '6010506.569',
      y: '2097034.497',
      latitude: '37.7386499426562',
      longitude: '-122.406186114295',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0100&ExportPDF=1&Filename=18MFF-0100_schedule.pdf',
      dayshours: 'Mo-We:7AM-7PM',
      received: '2018-08-17',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.406186114295, 37.7386499426562]
      }
    },
    {
      objectid: '1337834',
      applicant: "San Pancho's Tacos",
      facilitytype: 'Truck',
      cnn: '2178101',
      locationdescription:
        'ALEMANY BLVD: SICKLES AVE to I-280 N ON RAMP \\ REGENT ST \\ SAN JOSE AVE (3101 - 3155) -- SOUTH --',
      address: '3119 ALEMANY BLVD',
      blocklot: '7146002',
      block: '7146',
      lot: '002',
      permit: '19MFF-00089',
      status: 'APPROVED',
      fooditems:
        'Tacos: Burritos: Quesadillas: Tortas: Nachos: Hot Dogs:Soda: Water: Fruit Drinks',
      x: '5996113.792',
      y: '2086967.583',
      latitude: '37.7101930199757',
      longitude: '-122.455221906126',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00089&ExportPDF=1&Filename=19MFF-00089_schedule.pdf',
      approved: '2019-07-16T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.455221906126, 37.7101930199757]
      }
    },
    {
      objectid: '1184867',
      applicant: 'Subs on Hubs',
      facilitytype: 'Truck',
      cnn: '412000',
      locationdescription: '08TH ST: FOLSOM ST to RINGOLD ST (300 - 341)',
      address: '333 08TH ST',
      blocklot: '3755056',
      block: '3755',
      lot: '056',
      permit: '18MFF-0059',
      status: 'EXPIRED',
      fooditems: 'Italian subs: Cuban sandwich: Gyro',
      x: '6009851.369',
      y: '2110277.469',
      latitude: '37.7749754998217',
      longitude: '-122.409385823194',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0059&ExportPDF=1&Filename=18MFF-0059_schedule.pdf',
      dayshours: 'Th/Fr:12AM-2AM;We/Th:11PM-12AM',
      approved: '2018-07-11T00:00:00.000',
      received: '2018-07-11',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.409385823194, 37.7749754998217]
      }
    },
    {
      objectid: '963993',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '11783000',
      locationdescription: 'SHAFTER AVE: HAWES ST to INGALLS ST (1200 - 1299)',
      address: '1207 SHAFTER AVE',
      blocklot: '4792001A',
      block: '4792',
      lot: '001A',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6016941.58',
      y: '2092555.108',
      latitude: '37.7267082729622',
      longitude: '-122.3836249172',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:3PM-4PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.3836249172, 37.7267082729622]
      }
    },
    {
      objectid: '1163799',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '8848000',
      locationdescription:
        'MASONIC AVE: MCALLISTER ST to FULTON ST (500 - 599)',
      address: '599 MASONIC AVE',
      blocklot: '1108 012',
      block: '1108',
      lot: '012',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '5998797.75168',
      y: '2112598.57865',
      latitude: '37.7807231475444',
      longitude: '-122.447789640478',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.447789640478, 37.7807231475444]
      }
    },
    {
      objectid: '1337836',
      applicant: "San Pancho's Tacos",
      facilitytype: 'Truck',
      cnn: '3670000',
      locationdescription:
        'CAPITOL AVE: DE MONTFORT AVE to OCEAN AVE (1200 - 1299)',
      address: '1271 CAPITOL AVE',
      blocklot: '6935001',
      block: '6935',
      lot: '001',
      permit: '19MFF-00089',
      status: 'APPROVED',
      fooditems:
        'Tacos: Burritos: Quesadillas: Tortas: Nachos: Hot Dogs:Soda: Water: Fruit Drinks',
      x: '5995019.526',
      y: '2092127.388',
      latitude: '37.7242977785276',
      longitude: '-122.459377309548',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00089&ExportPDF=1&Filename=19MFF-00089_schedule.pdf',
      approved: '2019-07-16T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.459377309548, 37.7242977785276]
      }
    },
    {
      objectid: '1181515',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '6742000',
      locationdescription: 'HARRISON ST: ALAMEDA ST to 15TH ST (1830 - 1899)',
      address: '1830 HARRISON ST',
      blocklot: '3550020',
      block: '3550',
      lot: '020',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6008479.338',
      y: '2107759.433',
      latitude: '37.7679845948645',
      longitude: '-122.413953822522',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:2PM-3PM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.413953822522, 37.7679845948645]
      }
    },
    {
      objectid: '1037691',
      applicant: 'Munch A Bunch',
      facilitytype: 'Truck',
      cnn: '8137000',
      locationdescription: 'LARKIN ST: FERN ST to BUSH ST (1127 - 1199)',
      address: '1144 LARKIN ST',
      blocklot: '0279012',
      block: '0279',
      lot: '012',
      permit: '17MFF-0197',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: packaged sandwiches: pitas: breakfast: cold and hot drinks: snacks',
      x: '6007372.707',
      y: '2115263.802',
      latitude: '37.7885275753132',
      longitude: '-122.418313685721',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0197&ExportPDF=1&Filename=17MFF-0197_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2017-11-21T00:00:00.000',
      received: '2017-11-16',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.418313685721, 37.7885275753132]
      }
    },
    {
      objectid: '1337920',
      applicant: 'La Jefa',
      cnn: '19987000',
      locationdescription:
        '04TH ST: NELSON RISING LN to GENE FRIEND WAY (1500 - 1599)',
      address: '1550 04TH ST',
      blocklot: '8711007',
      block: '8711',
      lot: '007',
      permit: '19MFF-00018',
      status: 'REQUESTED',
      fooditems:
        'Tacos: burritos: quesadillas: tortas: nachos (refried beans: cheese sauce: salsa fresca): carnes (beef: chicken: marinated pork: fried pork): canned beans: rice: sodas: horchata drinks.',
      x: '6014983.88328',
      y: '2108042.28534',
      latitude: '37.7691244121681',
      longitude: '-122.391474911246',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00018&ExportPDF=1&Filename=19MFF-00018_schedule.pdf',
      received: '2019-05-22',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.391474911246, 37.7691244121681]
      }
    },
    {
      objectid: '1181507',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '581000',
      locationdescription:
        '14TH ST: SHOTWELL ST to SOUTH VAN NESS AVE (139 - 199)',
      address: '164 14TH ST',
      blocklot: '3530048',
      block: '3530',
      lot: '048',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6007633.112',
      y: '2108061.068',
      latitude: '37.7687652509586',
      longitude: '-122.416902205953',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.416902205953, 37.7687652509586]
      }
    },
    {
      objectid: '1336145',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '11833000',
      locationdescription: 'SHOTWELL ST: 15TH ST to 16TH ST (100 - 199)',
      address: '131 SHOTWELL ST',
      blocklot: '5501 003',
      block: '5501',
      lot: '003',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6007971.764',
      y: '2100466.349',
      latitude: '37.7479309361129',
      longitude: '-122.415193153909',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.415193153909, 37.7479309361129]
      }
    },
    {
      objectid: '1181501',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '8731000',
      locationdescription: 'MARIPOSA ST: HAMPSHIRE ST to YORK ST (2500 - 2599)',
      address: '2500 MARIPOSA ST',
      blocklot: '3971001',
      block: '3971',
      lot: '001',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6009782.745',
      y: '2106182.281',
      latitude: '37.7637272136329',
      longitude: '-122.40933414879',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:8AM-9AM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40933414879, 37.7637272136329]
      }
    },
    {
      objectid: '1199051',
      applicant: 'Munch India',
      facilitytype: 'Truck',
      cnn: '3528000',
      locationdescription:
        'CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)',
      address: '400 CALIFORNIA ST',
      blocklot: '0239003',
      block: '0239',
      lot: '003',
      permit: '18MFF-0088',
      status: 'REQUESTED',
      fooditems:
        'Daily rotating menus consisting of various local & organic vegetable: poultry: meat: seafood : rice & bread dishes.',
      x: '6012277.508',
      y: '2116903.356',
      latitude: '37.793304275561',
      longitude: '-122.401458998413',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0088&ExportPDF=1&Filename=18MFF-0088_schedule.pdf',
      dayshours: 'Mo/Fr:9AM-3PM',
      received: '2018-08-02',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401458998413, 37.793304275561]
      }
    },
    {
      objectid: '1181506',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '9506000',
      locationdescription: 'NATOMA ST: FREMONT ST to 01ST ST (1 - 19)',
      address: '400 HOWARD ST',
      blocklot: '3720008',
      block: '3720',
      lot: '008',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6013858.05956',
      y: '2115347.09492',
      latitude: '37.7891192076677',
      longitude: '-122.395881039335',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:6AM-7AM/10AM-11AM/12PM-1PM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395881039335, 37.7891192076677]
      }
    },
    {
      objectid: '1163783',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '10477000',
      locationdescription: 'PINE ST: POLK ST to VAN NESS AVE (1500 - 1599)',
      address: '1540 PINE ST',
      blocklot: '0646005',
      block: '0646',
      lot: '005',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6006569.835',
      y: '2115753.493',
      latitude: '37.7898269187633',
      longitude: '-122.421126289056',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.421126289056, 37.7898269187633]
      }
    },
    {
      objectid: '1163793',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '2488201',
      locationdescription:
        'CESAR CHAVEZ ST: SOUTH VAN NESS AVE to CAPP ST \\ MISSION ST (3300 - 3398) -- NORTH --',
      address: '3300 CESAR CHAVEZ ST',
      blocklot: '6571011',
      block: '6571',
      lot: '011',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6007693.813',
      y: '2100697.425',
      latitude: '37.7485497942591',
      longitude: '-122.416170662008',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:8AM-9AM/11AM-12PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.416170662008, 37.7485497942591]
      }
    },
    {
      objectid: '1181509',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '0',
      address: '50 IVY ST',
      blocklot: '0811001',
      block: '0811',
      lot: '001',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6007197.302',
      y: '2111480.029',
      latitude: '37.7781283797338',
      longitude: '-122.418652129997',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:11AM-12PM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.418652129997, 37.7781283797338]
      }
    },
    {
      objectid: '1297766',
      applicant: 'Tacos Lol-Tun',
      facilitytype: 'Truck',
      cnn: '2461000',
      locationdescription: 'ARMSTRONG AVE: KEITH ST to 03RD ST (1600 - 1699)',
      address: '1610 ARMSTRONG AVE',
      blocklot: '5419014',
      block: '5419',
      lot: '014',
      permit: '18MFF-0101',
      status: 'REQUESTED',
      fooditems: 'Tortas: burritos: tacos: ensaladas: sodas',
      x: '6014416.253',
      y: '2092564.576',
      latitude: '37.7265943633868',
      longitude: '-122.392355625631',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0101&ExportPDF=1&Filename=18MFF-0101_schedule.pdf',
      dayshours: 'Mo/We/Fr:7AM-4PM',
      received: '2018-08-31',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392355625631, 37.7265943633868]
      }
    },
    {
      objectid: '1181498',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '6711000',
      locationdescription:
        'HARRISON ST: FREMONT ST \\ I-80 W OFF RAMP to 01ST ST \\ I-80 E ON RAMP (400 - 499)',
      address: '401 HARRISON ST',
      blocklot: '3765022',
      block: '3765',
      lot: '022',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6014905.83634',
      y: '2114212.65155',
      latitude: '37.7860625210972',
      longitude: '-122.392176463949',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:5AM-6AM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392176463949, 37.7860625210972]
      }
    },
    {
      objectid: '1163405',
      applicant: "Julie's Hot Dogs",
      facilitytype: 'Truck',
      cnn: '9121000',
      locationdescription: 'MISSION ST: 19TH ST to 20TH ST (2300 - 2399)',
      address: '2365 MISSION ST',
      blocklot: '3595024',
      block: '3595',
      lot: '024',
      permit: '17MFF-0190',
      status: 'EXPIRED',
      fooditems:
        'Hot dogs: Bacon wrapped hot dogs: soda: water: sports drinks: energy drinks: chips',
      x: '6007087.513',
      y: '2104603.286',
      latitude: '37.7592402851502',
      longitude: '-122.418544171117',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0190&ExportPDF=1&Filename=17MFF-0190_schedule.pdf',
      dayshours: 'Su/Fr/Sa:12AM-3AM;Th/Fr/Sa:10PM-12AM',
      approved: '2018-05-17T00:00:00.000',
      received: '2017-08-24',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.418544171117, 37.7592402851502]
      }
    },
    {
      objectid: '953001',
      applicant: 'Wonder Philly',
      facilitytype: 'Push Cart',
      cnn: '270002',
      locationdescription: '04TH ST: BERRY ST to CHANNEL ST (900 - 999)',
      address: '960 04TH ST',
      blocklot: '8708002',
      block: '8708',
      lot: '002',
      permit: '17MFF-0166',
      status: 'ISSUED',
      fooditems: 'Hot dogs: sausages: cheesesteaks: chips: drinks',
      x: '6014277.187',
      y: '2109955.224',
      latitude: '37.7743376663696',
      longitude: '-122.394053286313',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0166&ExportPDF=1&Filename=17MFF-0166_schedule.pdf',
      dayshours: 'Mo-We:9AM-5PM',
      approved: '2018-04-09T00:00:00.000',
      received: '2017-03-20',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394053286313, 37.7743376663696]
      }
    },
    {
      objectid: '963986',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '13356000',
      locationdescription: 'WALLACE AVE: JENNINGS ST to KEITH ST (1500 - 1599)',
      address: '1550 WALLACE AVE',
      blocklot: '4829006',
      block: '4829',
      lot: '006',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6015093.174',
      y: '2092759.834',
      latitude: '37.727168068782',
      longitude: '-122.390029148701',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:2PM-3PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390029148701, 37.727168068782]
      }
    },
    {
      objectid: '963989',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '13780000',
      locationdescription:
        'YOSEMITE AVE: INGALLS ST to JENNINGS ST (1400 - 1499)',
      address: '1420 YOSEMITE AVE',
      blocklot: '4831012',
      block: '4831',
      lot: '012',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6015609.592',
      y: '2092025.988',
      latitude: '37.7251817007288',
      longitude: '-122.388192688444',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:2PM-3PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388192688444, 37.7251817007288]
      }
    },
    {
      objectid: '1037687',
      applicant: 'Munch A Bunch',
      facilitytype: 'Truck',
      cnn: '784000',
      locationdescription: '17TH ST: SAN BRUNO AVE to UTAH ST (2200 - 2299)',
      address: '2222 17TH ST',
      blocklot: '3960001',
      block: '3960',
      lot: '001',
      permit: '17MFF-0197',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: packaged sandwiches: pitas: breakfast: cold and hot drinks: snacks',
      x: '6010755.356',
      y: '2106704.644',
      latitude: '37.7652159489938',
      longitude: '-122.406006972029',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0197&ExportPDF=1&Filename=17MFF-0197_schedule.pdf',
      dayshours: 'Mo-Fr:5AM-6AM',
      approved: '2017-11-21T00:00:00.000',
      received: '2017-11-16',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.406006972029, 37.7652159489938]
      }
    },
    {
      objectid: '1153604',
      applicant: 'SPUNBYSS',
      facilitytype: 'Truck',
      cnn: '136000',
      locationdescription: '02ND ST: TEHAMA ST to CLEMENTINA ST (224 - 273)',
      address: '240 02ND ST',
      blocklot: '3735055',
      block: '3735',
      lot: '055',
      permit: '18MFF-0021',
      status: 'REQUESTED',
      fooditems:
        'American classic slider:  fried chicken slider: fried chicken skin: wedge cut fries: regular cut fries: handcrafted sodas: spring salad',
      x: '6013280.206',
      y: '2114201.068',
      latitude: '37.7859403201734',
      longitude: '-122.397799933858',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0021&ExportPDF=1&Filename=18MFF-0021_schedule.pdf',
      dayshours: 'Mo/We/Fr:10AM-2PM',
      received: '2018-04-30',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.397799933858, 37.7859403201734]
      }
    },
    {
      objectid: '1337048',
      applicant: 'Roadside Rotisserie Corporation / Country Grill',
      facilitytype: 'Truck',
      cnn: '10624001',
      locationdescription: 'POST ST: MONTGOMERY ST to LICK PL (1 - 40)',
      address: '1 POST ST',
      blocklot: '0311015',
      block: '0311',
      lot: '015',
      permit: '19MFF-00062',
      status: 'APPROVED',
      fooditems:
        'Rotisserie chicken: pork loin: ribs: chicken salad wrap: potatoes: roasted seasonal vegetables kale salad: beverages.',
      x: '6011921.732',
      y: '2115262.393',
      latitude: '37.788778723378',
      longitude: '-122.402574568411',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00062&ExportPDF=1&Filename=19MFF-00062_schedule.pdf',
      approved: '2019-07-16T00:00:00.000',
      received: '2019-07-11',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402574568411, 37.788778723378]
      }
    },
    {
      objectid: '963987',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '5599000',
      locationdescription:
        'FITZGERALD AVE: HAWES ST to INGALLS ST (1100 - 1199)',
      address: '1104 FITZGERALD AVE',
      blocklot: '4914022',
      block: '4914',
      lot: '022',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6015221.628',
      y: '2090210.317',
      latitude: '37.7201747226493',
      longitude: '-122.389407114342',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:2PM-3PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389407114342, 37.7201747226493]
      }
    },
    {
      objectid: '963992',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '10810000',
      locationdescription: 'QUESADA AVE: CRISP RD to HAWES ST (1170 - 1199)',
      address: '1191 QUESADA AVE',
      blocklot: '4763042',
      block: '4763',
      lot: '042',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6017387.966',
      y: '2092923.508',
      latitude: '37.7277444907011',
      longitude: '-122.382107375242',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:3PM-4PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.382107375242, 37.7277444907011]
      }
    },
    {
      objectid: '1163794',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '9101000',
      locationdescription:
        'MISSION ST: 07TH ST to ANGELOS ALY \\ JULIA ST (1100 - 1165)',
      address: '1118 MISSION ST',
      blocklot: '3702032',
      block: '3702',
      lot: '032',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6009238.199',
      y: '2111812.954',
      latitude: '37.7791572053411',
      longitude: '-122.411615430519',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:12PM-1PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.411615430519, 37.7791572053411]
      }
    },
    {
      objectid: '1199133',
      applicant: 'Street Meet',
      facilitytype: 'Truck',
      cnn: '8121000',
      locationdescription: 'LARKIN ST: GROVE ST to FULTON ST (100 - 199)',
      address: '100 LARKIN ST',
      blocklot: '0354001',
      block: '0354',
      lot: '001',
      permit: '18MFF-0039',
      status: 'APPROVED',
      fooditems:
        'Burritos: Tacos: Quesadillas: Tortas: Carne Asada Fries and various drinks',
      x: '6008026.826',
      y: '2111838.426',
      latitude: '37.779159119969',
      longitude: '-122.415807882427',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0039&ExportPDF=1&Filename=18MFF-0039_schedule.pdf',
      dayshours: 'Tu/We/Th:12AM-2AM;Mo-We:6PM-12AM',
      approved: '2019-02-19T00:00:00.000',
      received: '2018-07-02',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.415807882427, 37.779159119969]
      }
    },
    {
      objectid: '1037695',
      applicant: 'Munch A Bunch',
      facilitytype: 'Truck',
      cnn: '12728000',
      locationdescription: 'TURK ST: WEBSTER ST to FILLMORE ST (1300 - 1399)',
      address: '1345 TURK ST',
      blocklot: '0756001',
      block: '0756',
      lot: '001',
      permit: '17MFF-0197',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: packaged sandwiches: pitas: breakfast: cold and hot drinks: snacks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0197&ExportPDF=1&Filename=17MFF-0197_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM/12PM-1PM',
      approved: '2017-11-21T00:00:00.000',
      received: '2017-11-16',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1181502',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '3081000',
      locationdescription:
        'BRANNAN ST: 05TH ST to 06TH ST \\ I-280 NORTHBOUND \\ I-280 SOUTHBOUND (600 - 699)',
      address: '610 BRANNAN ST',
      blocklot: '3778047',
      block: '3778',
      lot: '047',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6012704.159',
      y: '2110820.848',
      latitude: '37.7766269199223',
      longitude: '-122.399555503787',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399555503787, 37.7766269199223]
      }
    },
    {
      objectid: '1337835',
      applicant: "San Pancho's Tacos",
      facilitytype: 'Truck',
      cnn: '2801101',
      locationdescription:
        'BAY SHORE BLVD: CORTLAND AVE to WATERLOO ST (491 - 499) -- EAST --',
      address: '491 BAY SHORE BLVD',
      blocklot: '5598008',
      block: '5598',
      lot: '008',
      permit: '19MFF-00089',
      status: 'APPROVED',
      fooditems:
        'Tacos: Burritos: Quesadillas: Tortas: Nachos: Hot Dogs:Soda: Water: Fruit Drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00089&ExportPDF=1&Filename=19MFF-00089_schedule.pdf',
      approved: '2019-07-16T00:00:00.000',
      received: '2019-07-15',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1181512',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '6834000',
      locationdescription: 'HAYES ST: SHRADER ST to STANYAN ST (2200 - 2299)',
      address: '2200 HAYES ST',
      blocklot: '1191039',
      block: '1191',
      lot: '039',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:11AM-2PM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1181504',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '6745000',
      locationdescription:
        'HARRISON ST: 16TH ST \\ TREAT AVE to 17TH ST (2000 - 2099)',
      address: '2010 HARRISON ST',
      blocklot: '3767079',
      block: '3767',
      lot: '079',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6015409.638',
      y: '2114757.862',
      latitude: '37.7875875047281',
      longitude: '-122.390471540332',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390471540332, 37.7875875047281]
      }
    },
    {
      objectid: '963990',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '7479000',
      locationdescription:
        'JENNINGS ST: VAN DYKE AVE to WALLACE AVE (2100 - 2199)',
      address: '2115 JENNINGS ST',
      blocklot: '4828021',
      block: '4828',
      lot: '021',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6015486.282',
      y: '2092591.619',
      latitude: '37.7267279782571',
      longitude: '-122.388658428832',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:3PM-4PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388658428832, 37.7267279782571]
      }
    },
    {
      objectid: '949952',
      applicant: 'Santana ESG, Inc.',
      facilitytype: 'Truck',
      cnn: '6754000',
      locationdescription: 'HARRISON ST: 21ST ST to 22ND ST (2500 - 2599)',
      address: '2598 HARRISON ST',
      blocklot: '3613009',
      block: '3613',
      lot: '009',
      permit: '17MFF-0164',
      status: 'EXPIRED',
      fooditems:
        'Tacos: Burritos: Tortas: Quesadillas: Mexican Drinks: Aguas Frescas',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0164&ExportPDF=1&Filename=17MFF-0164_schedule.pdf',
      dayshours: 'Mo-Su:9AM-10PM',
      approved: '2017-03-21T00:00:00.000',
      received: '2017-03-16',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1184865',
      applicant: 'Subs on Hubs',
      facilitytype: 'Truck',
      cnn: '302000',
      locationdescription:
        '05TH ST: HARRISON ST \\ I-80 W OFF RAMP to PERRY ST (400 - 449)',
      address: '400 05TH ST',
      blocklot: '3760001',
      block: '3760',
      lot: '001',
      permit: '18MFF-0059',
      status: 'EXPIRED',
      fooditems: 'Italian subs: Cuban sandwich: Gyro',
      x: '6012059.645',
      y: '2111592.733',
      latitude: '37.7787103919009',
      longitude: '-122.40183935033',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0059&ExportPDF=1&Filename=18MFF-0059_schedule.pdf',
      dayshours: 'Sa-Su:12AM-2AM;Fr/Sa:11PM-12AM',
      approved: '2018-07-11T00:00:00.000',
      received: '2018-07-11',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40183935033, 37.7787103919009]
      }
    },
    {
      objectid: '963997',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '9602000',
      locationdescription: 'NIBBI CT: GILLETTE AVE to END (1 - 99)',
      address: '35 NIBBI CT',
      blocklot: '5079004',
      block: '5079',
      lot: '004',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6013200.29',
      y: '2086710.154',
      latitude: '37.7104516918675',
      longitude: '-122.396149078996',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:4PM-5PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.396149078996, 37.7104516918675]
      }
    },
    {
      objectid: '1163798',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '7033000',
      locationdescription: 'HOWARD ST: 01ST ST to MALDEN ALY (500 - 589)',
      address: '501 HOWARD ST',
      blocklot: '3736001',
      block: '3736',
      lot: '001',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:6AM-7AM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1301435',
      applicant: "San Francisco's Hometown Creamery",
      facilitytype: 'Truck',
      cnn: '10456000',
      locationdescription: 'PINE ST: SANSOME ST to CENTURY PL (300 - 340)',
      address: '301 PINE ST',
      blocklot: '0268001',
      block: '0268',
      lot: '001',
      permit: '18MFF-0113',
      status: 'APPROVED',
      fooditems: 'Ice cream & Waffle cones',
      x: '6012318.456',
      y: '2116367.149',
      latitude: '37.7918342630555',
      longitude: '-122.401279616596',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0113&ExportPDF=1&Filename=18MFF-0113_schedule.pdf',
      dayshours: 'Mo/We/Fr:11AM-3PM',
      approved: '2019-09-06T00:00:00.000',
      received: '2018-12-28',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401279616596, 37.7918342630555]
      }
    },
    {
      objectid: '963981',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '7428000',
      locationdescription:
        'JAMESTOWN AVE: GRIFFITH ST to CORONADO ST (800 - 850)',
      address: '800 JAMESTOWN AVE',
      blocklot: '4973034',
      block: '4973',
      lot: '034',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6015040.705',
      y: '2088854.908',
      latitude: '37.7164430021474',
      longitude: '-122.389937879321',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:12PM-1PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389937879321, 37.7164430021474]
      }
    },
    {
      objectid: '963983',
      applicant: 'Singh Brothers Ice Cream',
      facilitytype: 'Truck',
      cnn: '7492000',
      locationdescription: 'JENNINGS ST: KEY AVE to LE CONTE AVE (3400 - 3499)',
      address: '3444 JENNINGS ST',
      blocklot: '4995005',
      block: '4995',
      lot: '005',
      permit: '17MFF-0182',
      status: 'REQUESTED',
      fooditems:
        'Ice Cream: Pre-Packaged Chips: Candies: Bottled Water & Canned SODA',
      x: '6013111.658',
      y: '2089651.112',
      latitude: '37.7185220485664',
      longitude: '-122.396661444417',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0182&ExportPDF=1&Filename=17MFF-0182_schedule.pdf',
      dayshours: 'Mo-Fr:1PM-2PM',
      received: '2017-04-18',
      priorpermit: '1',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.396661444417, 37.7185220485664]
      }
    },
    {
      objectid: '1163789',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '131000',
      locationdescription: '02ND ST: JESSIE ST to MISSION ST (69 - 99)',
      address: '85 02ND ST',
      blocklot: '3708019',
      block: '3708',
      lot: '019',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6012696.635',
      y: '2115129.488',
      latitude: '37.7884570288289',
      longitude: '-122.399884160566',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-8AM/10AM-11AM/12PM-1PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399884160566, 37.7884570288289]
      }
    },
    {
      objectid: '1034228',
      applicant: "Julie's Hot Dogs",
      cnn: '9114000',
      locationdescription: 'MISSION ST: 14TH ST to 15TH ST (1800 - 1899)',
      address: '1850 MISSION ST',
      blocklot: '3547261',
      block: '3547',
      lot: '261',
      permit: '17MFF-0196',
      status: 'REQUESTED',
      fooditems:
        'Hot dogs: bacon wrap hot dogs: chicken burgers: energy drinks: water & various drinks',
      x: '6006577.68992',
      y: '2107569.10778',
      latitude: '37.7673550213698',
      longitude: '-122.420517913829',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0196&ExportPDF=1&Filename=17MFF-0196_schedule.pdf',
      dayshours: 'Su/Fr/Sa:7AM-5PM',
      received: '2017-10-27',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.420517913829, 37.7673550213698]
      }
    },
    {
      objectid: '1181511',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '8845101',
      locationdescription:
        'MASONIC AVE: EWING TER to TURK BLVD (200 - 298) -- EAST --',
      address: '270 MASONIC AVE',
      blocklot: '1111002',
      block: '1111',
      lot: '002',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '5999084.822',
      y: '2111935.384',
      latitude: '37.7789185898934',
      longitude: '-122.446748796815',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:11AM-12PM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.446748796815, 37.7789185898934]
      }
    },
    {
      objectid: '1163801',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '5178000',
      locationdescription: 'ELLIS ST: LARKIN ST to POLK ST (700 - 799)',
      address: '730 ELLIS ST',
      blocklot: '0717006',
      block: '0717',
      lot: '006',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6007315.572',
      y: '2113769.269',
      latitude: '37.7844207368995',
      longitude: '-122.418405351782',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.418405351782, 37.7844207368995]
      }
    },
    {
      objectid: '1163784',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '13064000',
      locationdescription: 'VALENCIA ST: 18TH ST to 19TH ST (700 - 799)',
      address: '740 VALENCIA ST',
      blocklot: '3588006',
      block: '3588',
      lot: '006',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6006152.35',
      y: '2105247.76',
      latitude: '37.7609571682785',
      longitude: '-122.421824199358',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:11AM-12PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.421824199358, 37.7609571682785]
      }
    },
    {
      objectid: '1163785',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '5073000',
      locationdescription: 'EDDY ST: STEINER ST to PIERCE ST (1600 - 1699)',
      address: '1652 EDDY ST',
      blocklot: '0730 044',
      block: '0730',
      lot: '044',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6002540.818',
      y: '2112839.086',
      latitude: '37.7815967457602',
      longitude: '-122.43485778844',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:11AM-12PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.43485778844, 37.7815967457602]
      }
    },
    {
      objectid: '1242091',
      applicant: 'Quick Grub',
      facilitytype: 'Push Cart',
      cnn: '11542000',
      locationdescription: 'SANSOME ST: SUTTER ST to BUSH ST (1 - 99)',
      address: '1 BUSH ST',
      blocklot: '0290011',
      block: '0290',
      lot: '011',
      permit: '18MFF-0112',
      status: 'EXPIRED',
      fooditems: 'Pre-packaged cold food and soft drinks',
      x: '6012652.373',
      y: '2116027.943',
      latitude: '37.7909215072692',
      longitude: '-122.400100423738',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0112&ExportPDF=1&Filename=18MFF-0112_schedule.pdf',
      dayshours: 'Tu/We/Th:8AM-5PM',
      approved: '2018-11-27T00:00:00.000',
      received: '2018-11-09',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400100423738, 37.7909215072692]
      }
    },
    {
      objectid: '1171819',
      applicant: 'Faith Sandwich',
      facilitytype: 'Push Cart',
      cnn: '8627000',
      locationdescription: 'MAIN ST: MARKET ST to MISSION ST (1 - 99)',
      address: '58 MAIN ST',
      blocklot: '3711005',
      block: '3711',
      lot: '005',
      permit: '18MFF-0032',
      status: 'REQUESTED',
      fooditems:
        'BBQ PORK SANDWICHGRILL CHICKEN SANDWICHSHIRMP SPRING ROLLSBBQ PORK OVER RICEGRILL CHICKEN OVER RICEBBQ PORK VERMICELLIGRILL CHICKEN VERMICELLIBBQ PORK GARLIC NOODLEGRILL CHICKEN GARLIC NOODLE',
      x: '6013902.41',
      y: '2116435.193',
      latitude: '37.792109338609',
      longitude: '-122.395803865502',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0032&ExportPDF=1&Filename=18MFF-0032_schedule.pdf',
      dayshours: 'Mo-Fr:8AM-5PM',
      noisent: '2018-10-12T00:00:00.000',
      received: '2018-06-06',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395803865502, 37.792109338609]
      }
    },
    {
      objectid: '1022810',
      applicant: 'Serendipity SF',
      facilitytype: 'Truck',
      cnn: '3528000',
      locationdescription:
        'CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)',
      address: '400 CALIFORNIA ST',
      blocklot: '0239003',
      block: '0239',
      lot: '003',
      permit: '17MFF-0181',
      status: 'ISSUED',
      fooditems:
        'Meatloaf: Grilled Cheese: Chicken Sandwich: Caprese Salad: Kale Salad: Fries: Sweet Potato Fries: Mac and Cheese: Mashed Potatoes',
      x: '6012277.508',
      y: '2116903.356',
      latitude: '37.793304275561',
      longitude: '-122.401458998413',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0181&ExportPDF=1&Filename=17MFF-0181_schedule.pdf',
      dayshours: 'Su/We/Sa:11AM-3PM',
      approved: '2018-08-09T00:00:00.000',
      received: '2017-04-14',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401458998413, 37.793304275561]
      }
    },
    {
      objectid: '1219753',
      applicant: 'Kabob Trolley, LLC',
      facilitytype: 'Truck',
      cnn: '9101000',
      locationdescription:
        'MISSION ST: 07TH ST to ANGELOS ALY \\ JULIA ST (1100 - 1165)',
      address: '1133 MISSION ST',
      blocklot: '3727096',
      block: '3727',
      lot: '096',
      permit: '18MFF-0106',
      status: 'REQUESTED',
      fooditems: 'Halal Gyro and Cheesesteaks',
      x: '6009260.818',
      y: '2111511.319',
      latitude: '37.7783302557659',
      longitude: '-122.411515865268',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0106&ExportPDF=1&Filename=18MFF-0106_schedule.pdf',
      dayshours: 'Mo/Tu/Fr:9AM-4PM',
      received: '2018-09-13',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.411515865268, 37.7783302557659]
      }
    },
    {
      objectid: '1090090',
      applicant: 'Tacos El Primo',
      facilitytype: 'Truck',
      cnn: '13660000',
      locationdescription:
        'WILLIAMS AVE: APOLLO ST to PHELPS ST \\ VESTA ST (300 - 399)',
      address: '345 WILLIAMS AVE',
      blocklot: '5423A009',
      block: '5423A',
      lot: '009',
      permit: '18MFF-0006',
      status: 'REQUESTED',
      fooditems:
        'Mexican food: tacos: burritos: tortas: various meat and chicken and fish plate: chile relleno plate: fish plate: bread: flan: rice pudding: bread: fruit juice: vegetable juice: coffee: tea',
      x: '6012447.306',
      y: '2093773.934',
      latitude: '37.7298054805741',
      longitude: '-122.399247104724',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0006&ExportPDF=1&Filename=18MFF-0006_schedule.pdf',
      dayshours: 'Su:8AM-10PM;Mo/Tu/We/Th/Fr:4PM-10PM',
      received: '2018-02-05',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399247104724, 37.7298054805741]
      }
    },
    {
      objectid: '1174517',
      applicant: 'CC Acquisition LLC',
      facilitytype: 'Push Cart',
      cnn: '8739201',
      locationdescription:
        'MARKET ST: MAIN ST to BEALE ST \\ DAVIS ST \\ PINE ST (214 - 298) -- NORTH --',
      address: '298 MARKET ST',
      blocklot: '0264004',
      block: '0264',
      lot: '004',
      permit: '18MFF-0033',
      status: 'REQUESTED',
      fooditems: 'Indian Chai (Tea)',
      x: '6013552.57',
      y: '2116844.5',
      latitude: '37.7932137316634',
      longitude: '-122.397043036718',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0033&ExportPDF=1&Filename=18MFF-0033_schedule.pdf',
      dayshours: 'Mo-Su:7AM-6PM',
      received: '2018-06-12',
      priorpermit: '0',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397043036718, 37.7932137316634]
      }
    },
    {
      objectid: '1181508',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '8756101',
      locationdescription:
        'MARKET ST: 12TH ST \\ PAGE ST to FRANKLIN ST (1591 - 1615) -- SOUTH --',
      address: '1601 MARKET ST',
      blocklot: '3505001',
      block: '3505',
      lot: '001',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6006768.767',
      y: '2109954.339',
      latitude: '37.7739150656798',
      longitude: '-122.420026291504',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.420026291504, 37.7739150656798]
      }
    },
    {
      objectid: '948140',
      applicant: "Eli's Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '7504000',
      locationdescription: 'JERROLD AVE: BARNEVELD AVE to END (2351 - 2369)',
      address: '101 BAY SHORE BLVD',
      blocklot: '5559018',
      block: '5559',
      lot: '018',
      permit: '17MFF-0155',
      status: 'REQUESTED',
      fooditems:
        'various styles of hot dogs & sausages: chips: breakfast sandwiches: chili: soda: water:',
      x: '6011376.107',
      y: '2100039.012',
      latitude: '37.7469482955131',
      longitude: '-122.403390960313',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0155&ExportPDF=1&Filename=17MFF-0155_schedule.pdf',
      dayshours: 'Mo/Tu/We/Th/Fr:9AM-5PM',
      received: '2017-03-14',
      priorpermit: '1',
      expirationdate: '2017-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.403390960313, 37.7469482955131]
      }
    },
    {
      objectid: '1163792',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '12583000',
      locationdescription:
        'THOMAS MORE WAY: BROTHERHOOD WAY \\ CHUMASERO DR to SAN FRANCISCO GOLF CLUB RD (1 - 99)',
      address: '1 THOMAS MORE WAY',
      blocklot: '7380027',
      block: '7380',
      lot: '027',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '5991430.02662',
      y: '2086996.77488',
      latitude: '37.7100033342894',
      longitude: '-122.471411913129',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-8AM/10AM-11AM/12PM-1PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.471411913129, 37.7100033342894]
      }
    },
    {
      objectid: '1037690',
      applicant: 'Munch A Bunch',
      facilitytype: 'Truck',
      cnn: '546000',
      locationdescription: '12TH ST: ISIS ST to BERNICE ST (332 - 365)',
      address: '333 12TH ST',
      blocklot: '3521022',
      block: '3521',
      lot: '022',
      permit: '17MFF-0197',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: packaged sandwiches: pitas: breakfast: cold and hot drinks: snacks',
      x: '6008484.985',
      y: '2108791.319',
      latitude: '37.7708182299993',
      longitude: '-122.414007297597',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0197&ExportPDF=1&Filename=17MFF-0197_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2017-11-21T00:00:00.000',
      received: '2017-11-16',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.414007297597, 37.7708182299993]
      }
    },
    {
      objectid: '959619',
      applicant: 'Kabob Trolley, LLC',
      facilitytype: 'Push Cart',
      cnn: '267001',
      locationdescription: '04TH ST: TOWNSEND ST to KING ST (700 - 799)',
      address: '298 KING ST',
      blocklot: '8702606',
      block: '8702',
      lot: '606',
      permit: '17MFF-0177',
      status: 'REQUESTED',
      fooditems: 'Gyros: Kebobs: refreshments and dessert',
      x: '6014485.06287',
      y: '2111154.51751',
      latitude: '37.77764220851',
      longitude: '-122.393418145932',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0177&ExportPDF=1&Filename=17MFF-0177_schedule.pdf',
      dayshours: 'Mo-Su:10AM-8PM',
      received: '2017-04-07',
      priorpermit: '0',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393418145932, 37.77764220851]
      }
    },
    {
      objectid: '1037696',
      applicant: 'Munch A Bunch',
      facilitytype: 'Truck',
      cnn: '9114000',
      locationdescription: 'MISSION ST: 14TH ST to 15TH ST (1800 - 1899)',
      address: '1850 MISSION ST',
      blocklot: '3547002',
      block: '3547',
      lot: '002',
      permit: '17MFF-0197',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: packaged sandwiches: pitas: breakfast: cold and hot drinks: snacks',
      x: '6006589.563',
      y: '2107566.187',
      latitude: '37.7673476707041',
      longitude: '-122.420476639081',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0197&ExportPDF=1&Filename=17MFF-0197_schedule.pdf',
      dayshours: 'Sa-Su:8AM-4PM',
      approved: '2017-11-21T00:00:00.000',
      received: '2017-11-16',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.420476639081, 37.7673476707041]
      }
    },
    {
      objectid: '1163795',
      applicant: 'SOHOMEI, LLC',
      facilitytype: 'Truck',
      cnn: '9058000',
      locationdescription: 'MINNESOTA ST: 23RD ST to 24TH ST (1200 - 1299)',
      address: '1240 MINNESOTA ST',
      blocklot: '4228015',
      block: '4228',
      lot: '015',
      permit: '18MFF-0028',
      status: 'REQUESTED',
      fooditems:
        'COLD TRUCK. Deli: bbq chicken skewer: Chinese spring roll: Chinese fried rice/noodle: fried chicken leg/wing: bbq chicken sandwich: chicken cheese burger: burrito: lumpia. Snack: sunflower seeds: muffins: chips: snickers: kit-kat: 10 types of chocolate. Drinks: Coke: 7-Up: Dr. Pepper: Pepsi: Redbull: Vitamin Water: Rockstar: Coconut Juice: Water. Hot drinks: coffee: tea.',
      x: '6015191.235',
      y: '2102753.826',
      latitude: '37.7546149514892',
      longitude: '-122.39038813202',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0028&ExportPDF=1&Filename=18MFF-0028_schedule.pdf',
      dayshours: 'Mo-Fr:1PM-2PM',
      received: '2018-05-21',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.39038813202, 37.7546149514892]
      }
    },
    {
      objectid: '934626',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block /Lot',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo/Mo/Mo/Mo/Mo:9AM-10AM/10AM-11AM/12PM-1PM/1PM-2PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1037693',
      applicant: 'Munch A Bunch',
      facilitytype: 'Truck',
      cnn: '24215000',
      locationdescription: 'BRYANT ST: ALAMEDA ST intersection',
      address: '1525 BRYANT ST',
      blocklot: '3922A001A',
      block: '3922A',
      lot: '001A',
      permit: '17MFF-0197',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: packaged sandwiches: pitas: breakfast: cold and hot drinks: snacks',
      x: '6009575.985',
      y: '2107645.792',
      latitude: '37.7677340926708',
      longitude: '-122.410152601942',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0197&ExportPDF=1&Filename=17MFF-0197_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2017-11-21T00:00:00.000',
      received: '2017-11-16',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.410152601942, 37.7677340926708]
      }
    },
    {
      objectid: '934625',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block 8710/Lot003',
      blocklot: '8710003',
      block: '8710',
      lot: '003',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6014416.532',
      y: '2108607.696',
      latitude: '37.7706453983908',
      longitude: '-122.3934769372',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo/Mo/Mo/Mo/Mo:9AM-10AM/10AM-11AM/12PM-1PM/1PM-2PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.3934769372, 37.7706453983908]
      }
    },
    {
      objectid: '1181516',
      applicant: "John's Catering #5",
      facilitytype: 'Truck',
      cnn: '513000',
      locationdescription: '11TH ST: KISSLING ST to BURNS PL (236 - 276)',
      address: '251 11TH ST',
      blocklot: '3517015',
      block: '3517',
      lot: '015',
      permit: '18MFF-0045',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Soda:Chips:Candy: Cold/Hot Sandwiches: Donuts.  (Pitco Wholesale)',
      x: '6008438.954',
      y: '2109403.583',
      latitude: '37.7724967778067',
      longitude: '-122.414209845167',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0045&ExportPDF=1&Filename=18MFF-0045_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM/3PM-4PM',
      approved: '2018-07-06T00:00:00.000',
      received: '2018-07-06',
      priorpermit: '1',
      expirationdate: '2019-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.414209845167, 37.7724967778067]
      }
    },
    {
      objectid: '1302321',
      applicant: "San Francisco's Hometown Creamery",
      facilitytype: 'Truck',
      cnn: '10628000',
      locationdescription: 'POST ST: STOCKTON ST to POWELL ST (300 - 399)',
      address: '340 POST ST',
      blocklot: '0295005',
      block: '0295',
      lot: '005',
      permit: '18MFF-0099',
      status: 'APPROVED',
      fooditems: 'Ice Cream: Waffle Cones',
      x: '6010506.675',
      y: '2115261.438',
      latitude: '37.7886969986403',
      longitude: '-122.40747042037',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0099&ExportPDF=1&Filename=18MFF-0099_schedule.pdf',
      dayshours: 'Tu/We/Th:6PM-11PM',
      approved: '2019-09-06T00:00:00.000',
      received: '2018-08-14',
      priorpermit: '0',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40747042037, 37.7886969986403]
      }
    },
    {
      objectid: '1039786',
      applicant: "Julie's Hot Dogs",
      cnn: '9117000',
      locationdescription: 'MISSION ST: 17TH ST to CLARION ALY (2100 - 2131)',
      address: '2101 MISSION ST',
      blocklot: '3575091',
      block: '3575',
      lot: '091',
      permit: '17MFF-0196',
      status: 'REQUESTED',
      fooditems:
        'Hot dogs: bacon wrap hot dogs: chicken burgers: energy drinks: water & various drinks',
      x: '6006982.392',
      y: '2106038.314',
      latitude: '37.7631746196338',
      longitude: '-122.419009514771',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0196&ExportPDF=1&Filename=17MFF-0196_schedule.pdf',
      dayshours: 'Tu/We/Th:10AM-8PM',
      received: '2017-10-27',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.419009514771, 37.7631746196338]
      }
    },
    {
      objectid: '1292787',
      applicant: 'F & C Catering',
      facilitytype: 'Truck',
      cnn: '12491000',
      locationdescription: 'TENNESSEE ST: END to 26TH ST (1500 - 1599)',
      address: '1500 TENNESSEE ST',
      blocklot: '4294012',
      block: '4294',
      lot: '012',
      permit: '19MFF-00011',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad',
      x: '6015520.523',
      y: '2101882.84',
      latitude: '37.7522416684803',
      longitude: '-122.389188542589',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00011&ExportPDF=1&Filename=19MFF-00011_schedule.pdf',
      approved: '2019-03-27T00:00:00.000',
      received: '2019-03-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389188542589, 37.7522416684803]
      }
    },
    {
      objectid: '934597',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '191101',
      locationdescription:
        '03RD ST: 22ND ST to 23RD ST (2501 - 2699) -- EAST --',
      address: '2565 03RD ST',
      blocklot: '4173001',
      block: '4173',
      lot: '001',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6015998.409',
      y: '2103503.194',
      latitude: '37.7567172998371',
      longitude: '-122.387648962993',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:11AM-12PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387648962993, 37.7567172998371]
      }
    },
    {
      objectid: '1336150',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '12544000',
      locationdescription: 'TEXAS ST: SIERRA ST to 22ND ST (632 - 699)',
      address: '640 TEXAS ST',
      blocklot: '4101065',
      block: '4101',
      lot: '065',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6013745.02319',
      y: '2103985.69098',
      latitude: '37.7579170566901',
      longitude: '-122.39547585249',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.39547585249, 37.7579170566901]
      }
    },
    {
      objectid: '1336166',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '5204000',
      locationdescription: 'ELM ST: FRANKLIN ST to GOUGH ST (300 - 399)',
      address: '368 ELM ST',
      blocklot: '0761033',
      block: '0761',
      lot: '033',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6005923.75714',
      y: '2112690.41751',
      latitude: '37.7813800275549',
      longitude: '-122.423143845506',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.423143845506, 37.7813800275549]
      }
    },
    {
      objectid: '934598',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '1520000',
      locationdescription: '26TH ST: SHOTWELL ST to VIRGIL ST (3251 - 3273)',
      address: '3251 26TH ST',
      blocklot: '6572001',
      block: '6572',
      lot: '001',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6008228.38',
      y: '2100763.823',
      latitude: '37.7487621514792',
      longitude: '-122.414326828755',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:11AM-12PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.414326828755, 37.7487621514792]
      }
    },
    {
      objectid: '1336175',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '9061000',
      locationdescription: 'MINNESOTA ST: END to 26TH ST (1400 - 1499)',
      address: '1400 MINNESOTA ST',
      blocklot: '4293018',
      block: '4293',
      lot: '018',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015242.858',
      y: '2101827.597',
      latitude: '37.7520745862084',
      longitude: '-122.390144900822',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390144900822, 37.7520745862084]
      }
    },
    {
      objectid: '1336146',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '1232000',
      locationdescription: '23RD ST: END to ILLINOIS ST (100 - 699)',
      address: '601 23RD ST',
      blocklot: '4232010',
      block: '4232',
      lot: '010',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6016887.317',
      y: '2102871.037',
      latitude: '37.7550307267667',
      longitude: '-122.384530734223',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.384530734223, 37.7550307267667]
      }
    },
    {
      objectid: '1336151',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '1500000',
      locationdescription: '26TH ST: MINNESOTA ST to INDIANA ST (1000 - 1099)',
      address: '1051 26TH ST',
      blocklot: '4317015',
      block: '4317',
      lot: '015',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015309.355',
      y: '2101533.012',
      latitude: '37.7512694058781',
      longitude: '-122.389894366944',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389894366944, 37.7512694058781]
      }
    },
    {
      objectid: '1336174',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '8754101',
      locationdescription:
        'MARKET ST: 10TH ST \\ FELL ST \\ POLK ST to 11TH ST (1401 - 1455) -- SOUTH --',
      address: '1411 MARKET ST',
      blocklot: '3507041',
      block: '3507',
      lot: '041',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6007585.376',
      y: '2110633.378',
      latitude: '37.7758255197583',
      longitude: '-122.417249626643',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.417249626643, 37.7758255197583]
      }
    },
    {
      objectid: '1336144',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '11826000',
      locationdescription: 'SHIPLEY ST: 04TH ST to 05TH ST (100 - 199)',
      address: '133 SHIPLEY ST',
      blocklot: '3752107',
      block: '3752',
      lot: '107',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6012249.052',
      y: '2112322.269',
      latitude: '37.7807240977697',
      longitude: '-122.401235392658',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401235392658, 37.7807240977697]
      }
    },
    {
      objectid: '1336141',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '10336000',
      locationdescription: 'PENNSYLVANIA AVE: 22ND ST to 23RD ST (700 - 899)',
      address: '700 PENNSYLVANIA AVE',
      blocklot: '4167010',
      block: '4167',
      lot: '010',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6014294.444',
      y: '2103612.775',
      latitude: '37.7569236537341',
      longitude: '-122.393549610536',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393549610536, 37.7569236537341]
      }
    },
    {
      objectid: '1336167',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '5687000',
      locationdescription: 'FOLSOM ST: ERIE ST to 14TH ST (1718 - 1799)',
      address: '1750 FOLSOM ST',
      blocklot: '3530006',
      block: '3530',
      lot: '006',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6007900.307',
      y: '2108105.953',
      latitude: '37.7689035205665',
      longitude: '-122.415981174601',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.415981174601, 37.7689035205665]
      }
    },
    {
      objectid: '1336152',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '1500000',
      locationdescription: '26TH ST: MINNESOTA ST to INDIANA ST (1000 - 1099)',
      address: '1090 26TH ST',
      blocklot: '4293015',
      block: '4293',
      lot: '015',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015191.855',
      y: '2101658.85',
      latitude: '37.7516084135789',
      longitude: '-122.390309489501',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390309489501, 37.7516084135789]
      }
    },
    {
      objectid: '1336160',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '2458000',
      locationdescription:
        'ARMSTRONG AVE: HAWES ST to INGALLS ST (1300 - 1399)',
      address: '1315 ARMSTRONG AVE',
      blocklot: '4851017',
      block: '4851',
      lot: '017',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015787.012',
      y: '2091256.533',
      latitude: '37.723078757516',
      longitude: '-122.387525704017',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387525704017, 37.723078757516]
      }
    },
    {
      objectid: '1336168',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '5762000',
      locationdescription: 'FRANCISCO ST: MASON ST to TAYLOR ST (500 - 599)',
      address: '500 FRANCISCO ST',
      blocklot: '0042022',
      block: '0042',
      lot: '022',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6008645.39687',
      y: '2121255.00971',
      latitude: '37.8050495090589',
      longitude: '-122.41433443694',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.41433443694, 37.8050495090589]
      }
    },
    {
      objectid: '1336171',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '7200000',
      locationdescription:
        'INDIANA ST: 26TH ST to CESAR CHAVEZ ST (1500 - 1599)',
      address: '1575 INDIANA ST',
      blocklot: '4317017',
      block: '4317',
      lot: '017',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015267.752',
      y: '2101380.964',
      latitude: '37.7508496068125',
      longitude: '-122.390027615501',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390027615501, 37.7508496068125]
      }
    },
    {
      objectid: '1336156',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '196000',
      locationdescription: '03RD ST: CESAR CHAVEZ ST to MARIN ST (3100 - 3199)',
      address: '3150 03RD ST',
      blocklot: '4355006',
      block: '4355',
      lot: '006',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015847.697',
      y: '2100856.956',
      latitude: '37.7494429376004',
      longitude: '-122.387985532504',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387985532504, 37.7494429376004]
      }
    },
    {
      objectid: '1336176',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '9582003',
      locationdescription:
        'NEWHALL ST: BITTING AVE to EGBERT AVE (2660 - 2899)',
      address: '2660 NEWHALL ST',
      blocklot: '5434B004',
      block: '5434B',
      lot: '004',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6012315.623',
      y: '2092832.142',
      latitude: '37.7272121739004',
      longitude: '-122.399636251644',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399636251644, 37.7272121739004]
      }
    },
    {
      objectid: '1336153',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '187101',
      locationdescription:
        '03RD ST: MARIPOSA ST to 18TH ST (2001 - 2099) -- EAST --',
      address: '2085 03RD ST',
      blocklot: '3994002',
      block: '3994',
      lot: '002',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015805.902',
      y: '2105904.117',
      latitude: '37.7632990560446',
      longitude: '-122.388482306805',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388482306805, 37.7632990560446]
      }
    },
    {
      objectid: '1336149',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '12484000',
      locationdescription: 'TENNESSEE ST: 19TH ST to 20TH ST (800 - 899)',
      address: '815 TENNESSEE ST',
      blocklot: '4059001B',
      block: '4059',
      lot: '001B',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015563.023',
      y: '2105254.616',
      latitude: '37.7615022039664',
      longitude: '-122.389276996081',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389276996081, 37.7615022039664]
      }
    },
    {
      objectid: '1336154',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '187201',
      locationdescription:
        '03RD ST: MARIPOSA ST to 18TH ST (2000 - 2098) -- WEST --',
      address: '2030 03RD ST',
      blocklot: '3995105',
      block: '3995',
      lot: '105',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015620.25',
      y: '2106039.246',
      latitude: '37.7636598013494',
      longitude: '-122.389133857405',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389133857405, 37.7636598013494]
      }
    },
    {
      objectid: '934563',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '12044000',
      locationdescription: 'SPEAR ST: MARKET ST to MISSION ST (1 - 99)',
      address: '45 SPEAR ST',
      blocklot: '3713006',
      block: '3713',
      lot: '006',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6014186.566',
      y: '2117071.214',
      latitude: '37.7938715071506',
      longitude: '-122.394865238621',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-8AM/9AM-11AM/12PM-1PM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394865238621, 37.7938715071506]
      }
    },
    {
      objectid: '1336140',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '10332000',
      locationdescription:
        'PENNSYLVANIA AVE: MARIPOSA ST to I-280 S OFF RAMP (200 - 256)',
      address: '208 PENNSYLVANIA AVE',
      blocklot: '4000053',
      block: '4000',
      lot: '053',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6014208.71083',
      y: '2105996.09175',
      latitude: '37.7634629599066',
      longitude: '-122.394012947377',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394012947377, 37.7634629599066]
      }
    },
    {
      objectid: '1336142',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '10337002',
      locationdescription:
        'PENNSYLVANIA AVE: I-280 S OFF RAMP to 25TH ST (1050 - 1099)',
      address: '1082 PENNSYLVANIA AVE',
      blocklot: '4224095',
      block: '4224',
      lot: '095',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6014413.78675',
      y: '2102312.79929',
      latitude: '37.7533608294551',
      longitude: '-122.393045920798',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393045920798, 37.7533608294551]
      }
    },
    {
      objectid: '1336170',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '7195000',
      locationdescription: 'INDIANA ST: 20TH ST to 22ND ST (800 - 999)',
      address: '951 INDIANA ST',
      blocklot: '4106024',
      block: '4106',
      lot: '024',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015057.091',
      y: '2104275.668',
      latitude: '37.7587861623056',
      longitude: '-122.390958398693',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390958398693, 37.7587861623056]
      }
    },
    {
      objectid: '934621',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '9053000',
      locationdescription:
        'MINNESOTA ST: 04TH ST \\ MARIPOSA ST to 18TH ST (500 - 599)',
      address: '535 MINNESOTA ST',
      blocklot: '3996016',
      block: '3996',
      lot: '016',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6015237.97',
      y: '2106058.282',
      latitude: '37.763690871096',
      longitude: '-122.390457386016',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:12PM-1PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390457386016, 37.763690871096]
      }
    },
    {
      objectid: '1336164',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '4907000',
      locationdescription: 'DONNER AVE: HAWES ST to INGALLS ST (1300 - 1399)',
      address: '1347 DONNER AVE',
      blocklot: '4909025',
      block: '4909',
      lot: '025',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015246.528',
      y: '2090674.566',
      latitude: '37.7214508397335',
      longitude: '-122.389353445076',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389353445076, 37.7214508397335]
      }
    },
    {
      objectid: '1336172',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '8714000',
      locationdescription:
        'MARIPOSA ST: TENNESSEE ST to 04TH ST \\ MINNESOTA ST (600 - 699)',
      address: '601 MARIPOSA ST',
      blocklot: '3996013',
      block: '3996',
      lot: '013',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015331.083',
      y: '2106187.955',
      latitude: '37.7640520899242',
      longitude: '-122.390144393988',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390144393988, 37.7640520899242]
      }
    },
    {
      objectid: '1336163',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '489000',
      locationdescription: '10TH ST: SHERIDAN ST to HARRISON ST (350 - 399)',
      address: '380 10TH ST',
      blocklot: '3520087',
      block: '3520',
      lot: '087',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6009126.43864',
      y: '2109082.53651',
      latitude: '37.7716538513679',
      longitude: '-122.411809068524',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.411809068524, 37.7716538513679]
      }
    },
    {
      objectid: '1336165',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '5070000',
      locationdescription: 'EDDY ST: BUCHANAN ST to WEBSTER ST (1300 - 1399)',
      address: '1346 EDDY ST',
      blocklot: '0733014',
      block: '0733',
      lot: '014',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6003979.58488',
      y: '2112907.84293',
      latitude: '37.7818671175741',
      longitude: '-122.429885247603',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.429885247603, 37.7818671175741]
      }
    },
    {
      objectid: '1336148',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '12483000',
      locationdescription: 'TENNESSEE ST: 18TH ST to 19TH ST (700 - 799)',
      address: '790 TENNESSEE ST',
      blocklot: '4043011B',
      block: '4043',
      lot: '011B',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015376.265',
      y: '2105385.926',
      latitude: '37.7618523975041',
      longitude: '-122.38993209325',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.38993209325, 37.7618523975041]
      }
    },
    {
      objectid: '1336147',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '12482000',
      locationdescription: 'TENNESSEE ST: MARIPOSA ST to 18TH ST (600 - 699)',
      address: '640 TENNESSEE ST',
      blocklot: '3996012',
      block: '3996',
      lot: '012',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015341.121',
      y: '2106001.428',
      latitude: '37.7635404839296',
      longitude: '-122.390096643663',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390096643663, 37.7635404839296]
      }
    },
    {
      objectid: '1336143',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '1165000',
      locationdescription: '22ND ST: MISSISSIPPI ST to TEXAS ST (1255 - 1399)',
      address: '1255 22ND ST',
      blocklot: '4167009',
      block: '4167',
      lot: '009',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6014146.75',
      y: '2103649.223',
      latitude: '37.7570155244597',
      longitude: '-122.394062947116',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394062947116, 37.7570155244597]
      }
    },
    {
      objectid: '934586',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '12685000',
      locationdescription: 'TREAT AVE: MISTRAL ST to END (630 - 699)',
      address: '630 TREAT AVE',
      blocklot: '3593038',
      block: '3593',
      lot: '038',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6008391.816',
      y: '2104835.571',
      latitude: '37.7599514294279',
      longitude: '-122.414049680224',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM/11AM-12PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.414049680224, 37.7599514294279]
      }
    },
    {
      objectid: '1336155',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '195201',
      locationdescription:
        '03RD ST: 26TH ST to CESAR CHAVEZ ST (3000 - 3098) -- WEST --',
      address: '3000 03RD ST',
      blocklot: '4315008',
      block: '4315',
      lot: '008',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015877.515',
      y: '2101228.261',
      latitude: '37.7504641155225',
      longitude: '-122.387908325902',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387908325902, 37.7504641155225]
      }
    },
    {
      objectid: '1336159',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '226201',
      locationdescription:
        '03RD ST: EGBERT AVE to FITZGERALD AVE (6000 - 6170) -- WEST --',
      address: '6000 03RD ST',
      blocklot: '5431A001U',
      block: '5431A',
      lot: '001U',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6013371.112',
      y: '2091633.565',
      latitude: '37.7239799038929',
      longitude: '-122.395903454913',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395903454913, 37.7239799038929]
      }
    },
    {
      objectid: '1336161',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '2477000',
      locationdescription:
        'CESAR CHAVEZ ST: EVANS AVE to KANSAS ST (2100 - 2550)',
      address: '2150 CESAR CHAVEZ ST',
      blocklot: '4324002',
      block: '4324',
      lot: '002',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6013011.36',
      y: '2101203.484',
      latitude: '37.7502368847791',
      longitude: '-122.397818031719',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397818031719, 37.7502368847791]
      }
    },
    {
      objectid: '1336169',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '7195000',
      locationdescription: 'INDIANA ST: 20TH ST to 22ND ST (800 - 999)',
      address: '998 INDIANA ST',
      blocklot: '4105011',
      block: '4105',
      lot: '011',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6014845.363',
      y: '2104007.25',
      latitude: '37.7580373934881',
      longitude: '-122.391671890682',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391671890682, 37.7580373934881]
      }
    },
    {
      objectid: '1336139',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '10048000',
      locationdescription:
        'OTIS ST: GOUGH ST \\ MCCOPPIN ST to 13TH ST \\ DUBOCE AVE \\ HWY 101 NORTHBOUND RAMP \\ MISSION ST (100 - 199)',
      address: '150 OTIS ST',
      blocklot: '3513008',
      block: '3513',
      lot: '008',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6006498.051',
      y: '2108782.928',
      latitude: '37.7706833950426',
      longitude: '-122.420879561399',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.420879561399, 37.7706833950426]
      }
    },
    {
      objectid: '1336162',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '3736000',
      locationdescription:
        'CARROLL AVE: INGALLS ST to JENNINGS ST (1400 - 1499)',
      address: '1420 CARROLL AVE',
      blocklot: '4879023',
      block: '4879',
      lot: '023',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6015058.106',
      y: '2091452.65',
      latitude: '37.7235768564887',
      longitude: '-122.390059101399',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390059101399, 37.7235768564887]
      }
    },
    {
      objectid: '1336173',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '8717000',
      locationdescription:
        'MARIPOSA ST: PENNSYLVANIA AVE to MISSISSIPPI ST (1000 - 1099)',
      address: '1040 MARIPOSA ST',
      blocklot: '3987012',
      block: '3987',
      lot: '012',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6014135.465',
      y: '2106266.867',
      latitude: '37.7642023783019',
      longitude: '-122.39428524234',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.39428524234, 37.7642023783019]
      }
    },
    {
      objectid: '1336158',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '197101',
      locationdescription:
        '03RD ST: MARIN ST to ARTHUR AVE \\ CARGO WAY (3201 - 3399) -- EAST --',
      address: '3255 03RD ST',
      blocklot: '4377001',
      block: '4377',
      lot: '001',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6016160.221',
      y: '2100487.333',
      latitude: '37.7484453388377',
      longitude: '-122.38687903198',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.38687903198, 37.7484453388377]
      }
    },
    {
      objectid: '1336157',
      applicant: 'Anas Goodies Catering',
      facilitytype: 'Truck',
      cnn: '197101',
      locationdescription:
        '03RD ST: MARIN ST to ARTHUR AVE \\ CARGO WAY (3201 - 3399) -- EAST --',
      address: '3305 03RD ST',
      blocklot: '4502A002',
      block: '4502A',
      lot: '002',
      permit: '19MFF-00052',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages',
      x: '6018751.714',
      y: '2098754.754',
      latitude: '37.7438311721327',
      longitude: '-122.377797368962',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00052&ExportPDF=1&Filename=19MFF-00052_schedule.pdf',
      approved: '2020-01-22T00:00:00.000',
      received: '2019-07-09',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.377797368962, 37.7438311721327]
      }
    },
    {
      objectid: '934612',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '13693000',
      locationdescription: 'WISCONSIN ST: 16TH ST to 17TH ST (100 - 199)',
      address: '166 WISCONSIN ST',
      blocklot: '3954017',
      block: '3954',
      lot: '017',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6012435.699',
      y: '2106749.834',
      latitude: '37.7654338684827',
      longitude: '-122.400198205294',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:2PM-3PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400198205294, 37.7654338684827]
      }
    },
    {
      objectid: '934617',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '2953000',
      locationdescription: 'BERRY ST: 03RD ST to 04TH ST (100 - 199)',
      address: '185 BERRY ST',
      blocklot: '3803005',
      block: '3803',
      lot: '005',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6014943.869',
      y: '2110666.298',
      latitude: '37.7763271477899',
      longitude: '-122.391796821077',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:6PM-7PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391796821077, 37.7763271477899]
      }
    },
    {
      objectid: '934578',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '2109000',
      locationdescription: 'ALABAMA ST: 16TH ST to 17TH ST (300 - 399)',
      address: '380 ALABAMA ST',
      blocklot: '3967049',
      block: '3967',
      lot: '049',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6008823.51685',
      y: '2106465.97879',
      latitude: '37.7644523927651',
      longitude: '-122.412671891645',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.412671891645, 37.7644523927651]
      }
    },
    {
      objectid: '751253',
      applicant: "Pipo's Grill",
      facilitytype: 'Truck',
      cnn: '5688000',
      locationdescription: 'FOLSOM ST: 14TH ST to 15TH ST (1800 - 1899)',
      address: '1800 FOLSOM ST',
      blocklot: '3549083',
      block: '3549',
      lot: '083',
      permit: '16MFF-0010',
      status: 'REQUESTED',
      fooditems: 'Tacos: Burritos: Hot Dogs: and Hamburgers',
      x: '6007856.719',
      y: '2107724.046',
      latitude: '37.7678524427181',
      longitude: '-122.416104892532',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0010&ExportPDF=1&Filename=16MFF-0010_schedule.pdf',
      received: '2016-02-04',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.416104892532, 37.7678524427181]
      }
    },
    {
      objectid: '934565',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '7173000',
      locationdescription: 'ILLINOIS ST: 24TH ST to 25TH ST (1400 - 1499)',
      address: '1499 ILLINOIS ST',
      blocklot: '4244002',
      block: '4244',
      lot: '002',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6016265.425',
      y: '2102158.675',
      latitude: '37.7530403201943',
      longitude: '-122.386631763538',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo-Fr:5PM-6PM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.386631763538, 37.7530403201943]
      }
    },
    {
      objectid: '934562',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '2110000',
      locationdescription: 'ALABAMA ST: 17TH ST to MARIPOSA ST (400 - 499)',
      address: '400 ALABAMA ST',
      blocklot: '3968001',
      block: '3968',
      lot: '001',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6008836.323',
      y: '2106230.541',
      latitude: '37.7638066535277',
      longitude: '-122.412610953897',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-8AM/9AM-10AM/12PM-1PM/8PM-9PM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.412610953897, 37.7638066535277]
      }
    },
    {
      objectid: '934613',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '10659000',
      locationdescription: 'POTRERO AVE: ALAMEDA ST to 15TH ST (100 - 199)',
      address: '100 POTRERO AVE',
      blocklot: '3920001',
      block: '3920',
      lot: '001',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6010116.912',
      y: '2107759.235',
      latitude: '37.7680758859527',
      longitude: '-122.408289595287',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:2PM-3PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.408289595287, 37.7680758859527]
      }
    },
    {
      objectid: '934591',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '13766000',
      locationdescription: 'YORK ST: MARIPOSA ST to 18TH ST (500 - 599)',
      address: '501 YORK ST',
      blocklot: '4015008',
      block: '4015',
      lot: '008',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6009887.393',
      y: '2105884.09',
      latitude: '37.7629143116115',
      longitude: '-122.408951161538',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM/12PM-1PM/2PM-3PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.408951161538, 37.7629143116115]
      }
    },
    {
      objectid: '1280771',
      applicant: "Leo's Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '9121000',
      locationdescription: 'MISSION ST: 19TH ST to 20TH ST (2300 - 2399)',
      address: '2301 MISSION ST',
      blocklot: '3595031',
      block: '3595',
      lot: '031',
      permit: '19MFF-00005',
      status: 'APPROVED',
      fooditems: 'Hot dogs and related toppings: non alcoholic beverages',
      x: '6007018.02',
      y: '2104913.057',
      latitude: '37.760086931987',
      longitude: '-122.418806481101',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00005&ExportPDF=1&Filename=19MFF-00005_schedule.pdf',
      approved: '2019-03-07T00:00:00.000',
      received: '2019-02-28',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.418806481101, 37.760086931987]
      }
    },
    {
      objectid: '848184',
      applicant: 'Reecees Soulicious',
      facilitytype: 'Truck',
      cnn: '2799106',
      locationdescription:
        'BAY SHORE BLVD: END to OAKDALE AVE (185 - 299) -- EAST --',
      address: '201 BAY SHORE BLVD',
      blocklot: '5559021',
      block: '5559',
      lot: '021',
      permit: '16MFF-0139',
      status: 'REQUESTED',
      fooditems:
        'Fried Chicken: Fried Fish: Greens: Mac & Cheese: Peach Cobbler: and String beans',
      x: '6011355.555',
      y: '2099442.374',
      latitude: '37.7453089086563',
      longitude: '-122.403420059999',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0139&ExportPDF=1&Filename=16MFF-0139_schedule.pdf',
      dayshours: 'Mo-We:7AM-7PM',
      received: '2016-09-08',
      priorpermit: '0',
      expirationdate: '2017-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.403420059999, 37.7453089086563]
      }
    },
    {
      objectid: '934568',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '6603000',
      locationdescription: 'HAIGHT ST: GOUGH ST to OCTAVIA ST (20 - 99)',
      address: '20 HAIGHT ST',
      blocklot: '0853023',
      block: '0853',
      lot: '023',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6005961.175',
      y: '2109761.804',
      latitude: '37.7733408773453',
      longitude: '-122.422806203983',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo-Fr:6PM-8PM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.422806203983, 37.7733408773453]
      }
    },
    {
      objectid: '934561',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '9083000',
      locationdescription: 'MISSION ST: STEUART ST to SPEAR ST (35 - 99)',
      address: '98 MISSION ST',
      blocklot: '3713007',
      block: '3713',
      lot: '007',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6014365.441',
      y: '2116885.206',
      latitude: '37.7933707169278',
      longitude: '-122.394233280448',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-9AM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394233280448, 37.7933707169278]
      }
    },
    {
      objectid: '934587',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '699001',
      locationdescription:
        '16TH ST: OWENS ST to 07TH ST \\ MISSISSIPPI ST (700 - 899)',
      address: 'Assessors Block 8727/Lot005',
      blocklot: '8727005',
      block: '8727',
      lot: '005',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6014460.137',
      y: '2106764.375',
      latitude: '37.7655864681473',
      longitude: '-122.393197101166',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo/Mo/Mo/Mo/Mo:9AM-10AM/10AM-11AM/12PM-1PM/1PM-2PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393197101166, 37.7655864681473]
      }
    },
    {
      objectid: '1292790',
      applicant: 'F & C Catering',
      facilitytype: 'Truck',
      cnn: '193201',
      locationdescription:
        '03RD ST: 24TH ST to 25TH ST (2800 - 2898) -- WEST --',
      address: '2800 03RD ST',
      blocklot: '4246001',
      block: '4246',
      lot: '001',
      permit: '19MFF-00011',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad',
      x: '6015771.139',
      y: '2102415.24',
      latitude: '37.7537174169021',
      longitude: '-122.388359021044',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00011&ExportPDF=1&Filename=19MFF-00011_schedule.pdf',
      approved: '2019-03-27T00:00:00.000',
      received: '2019-03-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388359021044, 37.7537174169021]
      }
    },
    {
      objectid: '934599',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '9504000',
      locationdescription:
        'NAPOLEON ST: EVANS AVE \\ TOLAND ST to JERROLD AVE (25 - 299)',
      address: '180 NAPOLEON ST',
      blocklot: '4343004',
      block: '4343',
      lot: '004',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6012688.941',
      y: '2100244.688',
      latitude: '37.7475862762565',
      longitude: '-122.398865700796',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM/11AM-12PM/2PM-3PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398865700796, 37.7475862762565]
      }
    },
    {
      objectid: '934611',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '2477000',
      locationdescription:
        'CESAR CHAVEZ ST: EVANS AVE to KANSAS ST (2100 - 2550)',
      address: '2300 CESAR CHAVEZ ST',
      blocklot: '4328A007',
      block: '4328A',
      lot: '007',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6012256.828',
      y: '2101112.599',
      latitude: '37.7499452857571',
      longitude: '-122.400420884438',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:1PM-2PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400420884438, 37.7499452857571]
      }
    },
    {
      objectid: '934603',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '702000',
      locationdescription:
        '16TH ST: MISSOURI ST to CONNECTICUT ST (1000 - 1099)',
      address: '1006 16TH ST',
      blocklot: '3833002',
      block: '3833',
      lot: '002',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6013316.557',
      y: '2107189.386',
      latitude: '37.7666898573867',
      longitude: '-122.39718232278',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:12PM-1PM/1PM-2PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.39718232278, 37.7666898573867]
      }
    },
    {
      objectid: '934551',
      applicant: "Casey's Pizza, LLC",
      facilitytype: 'Truck',
      cnn: '5442000',
      locationdescription: 'FELL ST: GOUGH ST to OCTAVIA ST (300 - 399)',
      address: '368 FELL ST',
      blocklot: '0817032',
      block: '0817',
      lot: '032',
      permit: '17MFF-0104',
      status: 'EXPIRED',
      fooditems:
        "Artisan Pizzas (Margherita: Yukon Potato: Zoe's Pepperoni: Funghi: Brocolli Rabe: Bacon Kale:  Arugula) and Drinks.",
      x: '6005654.042',
      y: '2110754.304',
      latitude: '37.7760487080922',
      longitude: '-122.423939211172',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0104&ExportPDF=1&Filename=17MFF-0104_schedule.pdf',
      dayshours: 'Su:12PM-8PM;Fr:3PM-8PM;Sa:4PM-8PM',
      approved: '2017-08-29T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.423939211172, 37.7760487080922]
      }
    },
    {
      objectid: '934600',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '193201',
      locationdescription:
        '03RD ST: 24TH ST to 25TH ST (2800 - 2898) -- WEST --',
      address: '2800 03RD ST',
      blocklot: '4246001',
      block: '4246',
      lot: '001',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6015771.139',
      y: '2102415.24',
      latitude: '37.7537174169021',
      longitude: '-122.388359021044',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:11AM-12PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388359021044, 37.7537174169021]
      }
    },
    {
      objectid: '955616',
      applicant: 'Tacos Santo Toribio',
      facilitytype: 'Truck',
      cnn: '12628000',
      locationdescription: 'TOLAND ST: NEWCOMB AVE to OAKDALE AVE (900 - 999)',
      address: '928 TOLAND ST',
      blocklot: '5597A001',
      block: '5597A',
      lot: '001',
      permit: '17MFF-0171',
      status: 'REQUESTED',
      fooditems: 'tacos',
      x: '6011869.691',
      y: '2098089.783',
      latitude: '37.7416236862353',
      longitude: '-122.401547206397',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0171&ExportPDF=1&Filename=17MFF-0171_schedule.pdf',
      received: '2017-03-23',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.401547206397, 37.7416236862353]
      }
    },
    {
      objectid: '934593',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '697000',
      locationdescription: '16TH ST: 03RD ST to 04TH ST (500 - 599)',
      address: '500 16TH ST',
      blocklot: '3810007',
      block: '3810',
      lot: '007',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1141511',
      applicant: 'Khalid M Malik',
      facilitytype: 'Push Cart',
      cnn: '2751000',
      locationdescription: 'BATTERY ST: MARKET ST to BUSH ST (1 - 10)',
      address: 'Assessors Block /Lot',
      permit: '18MFF-0018',
      status: 'REQUESTED',
      fooditems: 'chicken sandwich: chicken gyro: chicken biryani',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0018&ExportPDF=1&Filename=18MFF-0018_schedule.pdf',
      received: '2018-04-12',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1292789',
      applicant: 'F & C Catering',
      facilitytype: 'Truck',
      cnn: '193201',
      locationdescription:
        '03RD ST: 24TH ST to 25TH ST (2800 - 2898) -- WEST --',
      address: '2890 03RD ST',
      blocklot: '4246003',
      block: '4246',
      lot: '003',
      permit: '19MFF-00011',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad',
      x: '6015821.245',
      y: '2102192.556',
      latitude: '37.7531087498713',
      longitude: '-122.388170202066',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00011&ExportPDF=1&Filename=19MFF-00011_schedule.pdf',
      approved: '2019-03-27T00:00:00.000',
      received: '2019-03-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388170202066, 37.7531087498713]
      }
    },
    {
      objectid: '840504',
      applicant: 'Taqueria Lolita',
      facilitytype: 'Truck',
      cnn: '5336000',
      locationdescription: 'EVANS AVE: QUINT ST to RANKIN ST (1700 - 1799)',
      address: '750 PHELPS ST',
      blocklot: '5280001',
      block: '5280',
      lot: '001',
      permit: '16MFF-0128',
      status: 'SUSPEND',
      fooditems:
        'Tacos: burritos: quesadillas: combination plates: tortas: tostadas',
      x: '6014320.244',
      y: '2097246.796',
      latitude: '37.7394454528691',
      longitude: '-122.393014986698',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0128&ExportPDF=1&Filename=16MFF-0128_schedule.pdf',
      dayshours: 'Mo-We:7AM-3PM',
      approved: '2017-08-01T00:00:00.000',
      received: '2016-06-22',
      priorpermit: '0',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393014986698, 37.7394454528691]
      }
    },
    {
      objectid: '453014',
      applicant: 'Tacos Santana',
      cnn: '7501000',
      locationdescription: 'JERROLD AVE: TOLAND ST to UPTON ST (2100 - 2230)',
      address: '2142 JERROLD AVE',
      blocklot: '5230011',
      block: '5230',
      lot: '011',
      permit: '13MFF-0112',
      status: 'EXPIRED',
      x: '6012644.555',
      y: '2099128.352',
      latitude: '37.7445185826649',
      longitude: '-122.398940846628',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=13MFF-0112&ExportPDF=1&Filename=13MFF-0112_schedule.pdf',
      dayshours: 'Mo-Su:5PM-10PM',
      noisent: '2013-07-25T00:00:00.000',
      approved: '2018-02-07T00:00:00.000',
      received: '2013-06-05',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398940846628, 37.7445185826649]
      }
    },
    {
      objectid: '773095',
      applicant: 'Athena SF Gyro',
      facilitytype: 'Push Cart',
      cnn: '30747000',
      locationdescription: 'MARKET ST: 11TH ST intersection',
      address: '10 SOUTH VAN NESS AVE',
      blocklot: '3506004',
      block: '3506',
      lot: '004',
      permit: '15MFF-0145',
      status: 'REQUESTED',
      fooditems:
        'Gyro pita bread (Lamb or chicken): lamb over rice: chicken over rice: chicken biryani rice: soft drinks',
      x: '6006927.466',
      y: '2110076.439',
      latitude: '37.77425926306',
      longitude: '-122.419485988398',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=15MFF-0145&ExportPDF=1&Filename=15MFF-0145_schedule.pdf',
      dayshours: 'We/Th/Fr:6AM-6PM',
      received: '2015-09-01',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.419485988398, 37.77425926306]
      }
    },
    {
      objectid: '1292786',
      applicant: 'F & C Catering',
      facilitytype: 'Truck',
      cnn: '10336000',
      locationdescription: 'PENNSYLVANIA AVE: 22ND ST to 23RD ST (700 - 899)',
      address: '898 PENNSYLVANIA AVE',
      blocklot: '4167003',
      block: '4167',
      lot: '003',
      permit: '19MFF-00011',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad',
      x: '6014175.628',
      y: '2103109.247',
      latitude: '37.7555344716039',
      longitude: '-122.393925277539',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00011&ExportPDF=1&Filename=19MFF-00011_schedule.pdf',
      approved: '2019-03-27T00:00:00.000',
      received: '2019-03-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393925277539, 37.7555344716039]
      }
    },
    {
      objectid: '934554',
      applicant: "Casey's Pizza, LLC",
      facilitytype: 'Truck',
      cnn: '12045000',
      locationdescription: 'SPEAR ST: MISSION ST to HOWARD ST (100 - 199)',
      address: '100 SPEAR ST',
      blocklot: '3717001',
      block: '3717',
      lot: '001',
      permit: '17MFF-0104',
      status: 'EXPIRED',
      fooditems:
        "Artisan Pizzas (Margherita: Yukon Potato: Zoe's Pepperoni: Funghi: Brocolli Rabe: Bacon Kale:  Arugula) and Drinks.",
      x: '6014423.85',
      y: '2116439.642',
      latitude: '37.7921505484817',
      longitude: '-122.393999974059',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0104&ExportPDF=1&Filename=17MFF-0104_schedule.pdf',
      dayshours: 'Tu/Th:9AM-3PM',
      approved: '2017-08-29T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393999974059, 37.7921505484817]
      }
    },
    {
      objectid: '934570',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '7037000',
      locationdescription: 'HOWARD ST: HAWTHORNE ST to 03RD ST (648 - 699)',
      address: '661 HOWARD ST',
      blocklot: '3735040',
      block: '3735',
      lot: '040',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6012797.551',
      y: '2113994.294',
      latitude: '37.7853456766418',
      longitude: '-122.399455276698',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo-Fr:8PM-9PM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399455276698, 37.7853456766418]
      }
    },
    {
      objectid: '934572',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '6729000',
      locationdescription:
        'HARRISON ST: LANGTON ST to CHESLEY ST (1113 - 1144)',
      address: '1140 HARRISON ST',
      blocklot: '3755023',
      block: '3755',
      lot: '023',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6010297.861',
      y: '2110271.569',
      latitude: '37.7749843060688',
      longitude: '-122.40784088806',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo-Fr:9PM-10PM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40784088806, 37.7749843060688]
      }
    },
    {
      objectid: '934580',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '8234000',
      locationdescription: 'LE CONTE AVE: 03RD ST to KEITH ST (1039 - 1099)',
      address: '1098 LE CONTE AVE',
      blocklot: '5475016',
      block: '5475',
      lot: '016',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6012690.947',
      y: '2089990.938',
      latitude: '37.7194317184807',
      longitude: '-122.398139506914',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM/12PM-1PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398139506914, 37.7194317184807]
      }
    },
    {
      objectid: '755221',
      applicant: 'Fruteria Serrano',
      cnn: '9167000',
      locationdescription: 'MISSION ST: OCEAN AVE to PERSIA AVE (4650 - 4699)',
      address: '4650 MISSION ST',
      blocklot: '6955044',
      block: '6955',
      lot: '044',
      permit: '16MFF-0011',
      status: 'REQUESTED',
      fooditems:
        'Fruits including mangoes: pineapples: coconuts: watermelon: corn: cucumber: potatoes chips: water: Mexican drinks: sodas: juices: snow cones',
      x: '6001790.666',
      y: '2091754.638',
      latitude: '37.7236612795053',
      longitude: '-122.43594382524',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0011&ExportPDF=1&Filename=16MFF-0011_schedule.pdf',
      dayshours: 'Mo/Th/Fr:11AM-6PM',
      received: '2016-02-17',
      priorpermit: '0',
      expirationdate: '2017-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.43594382524, 37.7236612795053]
      }
    },
    {
      objectid: '934606',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '1259000',
      locationdescription: '23RD ST: HARRISON ST to TREAT AVE (3000 - 3053)',
      address: '3050 23RD ST',
      blocklot: '3639004B',
      block: '3639',
      lot: '004B',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6008696.252',
      y: '2102835.373',
      latitude: '37.7544764341075',
      longitude: '-122.412855363284',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:12PM-1PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.412855363284, 37.7544764341075]
      }
    },
    {
      objectid: '934584',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '1516000',
      locationdescription:
        '26TH ST: TREAT AVE \\ TREAT WAY to LUCKY ST (3133 - 3164)',
      address: '3150 26TH ST',
      blocklot: '6524019A',
      block: '6524',
      lot: '019A',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6008583.969',
      y: '2101037.332',
      latitude: '37.7495331145231',
      longitude: '-122.413116536729',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.413116536729, 37.7495331145231]
      }
    },
    {
      objectid: '934362',
      applicant: 'Mob Dog',
      facilitytype: 'Push Cart',
      cnn: '8745201',
      locationdescription:
        'MARKET ST: 03RD ST \\ KEARNY ST to GRANT AVE \\ OFARRELL ST (700 - 748) -- NORTH --',
      address: '720 MARKET ST',
      blocklot: '0312004',
      block: '0312',
      lot: '004',
      permit: '17MFF-0068',
      status: 'REQUESTED',
      fooditems: 'Hot Dogs: Chips: Bottled Drinks',
      x: '6011475.041',
      y: '2114841.614',
      latitude: '37.7875984155546',
      longitude: '-122.404090439434',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0068&ExportPDF=1&Filename=17MFF-0068_schedule.pdf',
      dayshours: 'Th/Fr/Sa:8AM-10PM',
      received: '2017-02-13',
      priorpermit: '0',
      expirationdate: '2018-05-06T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.404090439434, 37.7875984155546]
      }
    },
    {
      objectid: '934596',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '2111000',
      locationdescription: 'ALABAMA ST: MARIPOSA ST to 18TH ST (500 - 599)',
      address: '501 ALABAMA ST',
      blocklot: '4018005',
      block: '4018',
      lot: '005',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6009055.309',
      y: '2105741.745',
      latitude: '37.762476819591',
      longitude: '-122.411819003679',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.411819003679, 37.762476819591]
      }
    },
    {
      objectid: '931093',
      applicant: 'Swell Cream & Coffee',
      facilitytype: 'Truck',
      cnn: '12412000',
      locationdescription: 'TARAVAL ST: 36TH AVE to SUNSET BLVD (2600 - 2649)',
      address: '2401 36TH AVE',
      blocklot: '2389001',
      block: '2389',
      lot: '001',
      permit: '17MFF-0002',
      status: 'REQUESTED',
      fooditems: 'Ice cream: coffee: pastries',
      x: '5985030.8',
      y: '2098527.088',
      latitude: '37.7412902847707',
      longitude: '-122.494377920435',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0002&ExportPDF=1&Filename=17MFF-0002_schedule.pdf',
      received: '2017-01-30',
      priorpermit: '0',
      expirationdate: '2018-01-30T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.494377920435, 37.7412902847707]
      }
    },
    {
      objectid: '453012',
      applicant: 'Tacos Santana',
      cnn: '3742000',
      locationdescription:
        'CARROLL AVE: QUINT ST to BAY SHORE BLVD \\ THORNTON AVE (2100 - 2199)',
      address: '2101 CARROLL AVE',
      blocklot: '5436012',
      block: '5436',
      lot: '012',
      permit: '13MFF-0112',
      status: 'EXPIRED',
      x: '6011371.493',
      y: '2093947.369',
      latitude: '37.7302216813049',
      longitude: '-122.402978526686',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=13MFF-0112&ExportPDF=1&Filename=13MFF-0112_schedule.pdf',
      dayshours: 'Mo-Su:10AM-9PM',
      noisent: '2013-07-25T00:00:00.000',
      approved: '2018-02-07T00:00:00.000',
      received: '2013-06-05',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402978526686, 37.7302216813049]
      }
    },
    {
      objectid: '1089427',
      applicant: 'Halal Food',
      facilitytype: 'Push Cart',
      cnn: '3524000',
      locationdescription: 'CALIFORNIA ST: DRUMM ST to DAVIS ST (1 - 99)',
      address: '50 CALIFORNIA ST',
      blocklot: '0235022',
      block: '0235',
      lot: '022',
      permit: '18MFF-0003',
      status: 'REQUESTED',
      fooditems: "rice chicken beef hot dogs and sandwich's and coke and water",
      x: '6013470.754',
      y: '2117151.885',
      latitude: '37.7940531837329',
      longitude: '-122.397347693326',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0003&ExportPDF=1&Filename=18MFF-0003_schedule.pdf',
      received: '2018-02-05',
      priorpermit: '0',
      expirationdate: '2019-02-28T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397347693326, 37.7940531837329]
      }
    },
    {
      objectid: '1292792',
      applicant: 'F & C Catering',
      facilitytype: 'Truck',
      cnn: '9058000',
      locationdescription: 'MINNESOTA ST: 23RD ST to 24TH ST (1200 - 1299)',
      address: '1275 MINNESOTA ST',
      blocklot: '4229004',
      block: '4229',
      lot: '004',
      permit: '19MFF-00011',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad',
      x: '6015479.602',
      y: '2102615.711',
      latitude: '37.7542517088937',
      longitude: '-122.38938122888',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00011&ExportPDF=1&Filename=19MFF-00011_schedule.pdf',
      approved: '2019-03-27T00:00:00.000',
      received: '2019-03-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.38938122888, 37.7542517088937]
      }
    },
    {
      objectid: '934552',
      applicant: "Casey's Pizza, LLC",
      facilitytype: 'Truck',
      cnn: '9093000',
      locationdescription:
        'MISSION ST: NEW MONTGOMERY ST to ANNIE ST (635 - 664)',
      address: '654 MISSION ST',
      blocklot: '3707019',
      block: '3707',
      lot: '019',
      permit: '17MFF-0104',
      status: 'EXPIRED',
      fooditems:
        "Artisan Pizzas (Margherita: Yukon Potato: Zoe's Pepperoni: Funghi: Brocolli Rabe: Bacon Kale:  Arugula) and Drinks.",
      x: '6012296.995',
      y: '2114673.552',
      latitude: '37.7871828477154',
      longitude: '-122.401234808851',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0104&ExportPDF=1&Filename=17MFF-0104_schedule.pdf',
      dayshours: 'Fr:11AM-3PM',
      approved: '2017-08-29T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401234808851, 37.7871828477154]
      }
    },
    {
      objectid: '934588',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '2478101',
      locationdescription:
        'CESAR CHAVEZ ST: KANSAS ST to BAY SHORE BLVD \\ VERMONT ST (2501 - 2625) -- SOUTH --',
      address: '2501 CESAR CHAVEZ ST',
      blocklot: '4339001',
      block: '4339',
      lot: '001',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6011674.927',
      y: '2100772.595',
      latitude: '37.7489792411554',
      longitude: '-122.402409234561',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM/12PM-1PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402409234561, 37.7489792411554]
      }
    },
    {
      objectid: '934560',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '9206000',
      locationdescription:
        'MISSISSIPPI ST: END to CESAR CHAVEZ ST (1200 - 1299)',
      address: '1200 MISSISSIPPI ST',
      blocklot: '4288003',
      block: '4288',
      lot: '003',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6014017.542',
      y: '2101712.689',
      latitude: '37.7516910357229',
      longitude: '-122.394374213263',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo/Tu/We/Th/Fr:12AM-5AM;Sa:2PM-6PM;Mo-Fr:3PM-6PM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394374213263, 37.7516910357229]
      }
    },
    {
      objectid: '934594',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '13768000',
      locationdescription: 'YORK ST: 19TH ST to 20TH ST (700 - 799)',
      address: '720 YORK ST',
      blocklot: '4080018',
      block: '4080',
      lot: '018',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6009791.69356',
      y: '2104761.23213',
      latitude: '37.7598258374358',
      longitude: '-122.409202915083',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.409202915083, 37.7598258374358]
      }
    },
    {
      objectid: '627558',
      applicant: 'Off the Grid Services, LLC',
      facilitytype: 'Truck',
      cnn: '4609000',
      locationdescription:
        'DAVIS ST: DAVIS CT \\ JACKSON ST to BROADWAY (500 - 699)',
      address: 'Assessors Block /Lot',
      permit: '15MFF-0039',
      status: 'REQUESTED',
      fooditems: 'varies truck to truck',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=15MFF-0039&ExportPDF=1&Filename=15MFF-0039_schedule.pdf',
      dayshours: 'Tu/Th/Fr:10AM-3PM',
      received: '2015-03-06',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '934624',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '6805000',
      locationdescription:
        'HAWES ST: INGERSON AVE to JAMESTOWN AVE (2900 - 2999)',
      address: '2930 HAWES ST',
      blocklot: '4971022',
      block: '4971',
      lot: '022',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6014554.034',
      y: '2089351.467',
      latitude: '37.717779453627',
      longitude: '-122.391654765179',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Su:10AM-11AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391654765179, 37.717779453627]
      }
    },
    {
      objectid: '1047771',
      applicant: 'The Chef Station',
      cnn: '4801101',
      locationdescription:
        'DIVISADERO ST: OAK ST to FELL ST (401 - 499) -- WEST --',
      address: '425 DIVISADERO ST',
      blocklot: '1215016',
      block: '1215',
      lot: '016',
      permit: '17MFF-0202',
      status: 'REQUESTED',
      fooditems:
        'South American Peruvian Food - Ceiches: hot wok dishes: hot pastas: rice dishes: and Tapas.',
      x: '6001606.909',
      y: '2109860.071',
      latitude: '37.7733640531909',
      longitude: '-122.437875225303',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0202&ExportPDF=1&Filename=17MFF-0202_schedule.pdf',
      received: '2017-12-15',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.437875225303, 37.7733640531909]
      }
    },
    {
      objectid: '934555',
      applicant: "Casey's Pizza, LLC",
      facilitytype: 'Truck',
      cnn: '11544000',
      locationdescription: 'SANSOME ST: PINE ST to CALIFORNIA ST (200 - 299)',
      address: '231 SANSOME ST',
      blocklot: '0260002',
      block: '0260',
      lot: '002',
      permit: '17MFF-0104',
      status: 'EXPIRED',
      fooditems:
        "Artisan Pizzas (Margherita: Yukon Potato: Zoe's Pepperoni: Funghi: Brocolli Rabe: Bacon Kale:  Arugula) and Drinks.",
      x: '6012313.995',
      y: '2116649.543',
      latitude: '37.792609401119',
      longitude: '-122.401314905451',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0104&ExportPDF=1&Filename=17MFF-0104_schedule.pdf',
      dayshours: 'Mo/We:10AM-2PM',
      approved: '2017-08-29T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401314905451, 37.792609401119]
      }
    },
    {
      objectid: '1265597',
      applicant:
        "San Francisco Carts & Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '10628000',
      locationdescription: 'POST ST: STOCKTON ST to POWELL ST (300 - 399)',
      address: 'Assessors Block /Lot',
      permit: '19MFF-00001',
      status: 'REQUESTED',
      fooditems:
        'American Food: Hot dogs: pretzels: ice cream: salads: beverages: sandwiches: soup: coffee: pastries:etc.',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00001&ExportPDF=1&Filename=19MFF-00001_schedule.pdf',
      received: '2019-01-07',
      priorpermit: '0',
      expirationdate: '2020-01-07T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '934615',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '517000',
      locationdescription:
        'BRYANT ST: 11TH ST \\ 13TH ST \\ DIVISION ST to DIVISION ST (1300 - 1319)',
      address: '1300 BRYANT ST',
      blocklot: '3903004',
      block: '3903',
      lot: '004',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6009188.668',
      y: '2108146.472',
      latitude: '37.7690871267671',
      longitude: '-122.411527667132',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:3PM-4PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.411527667132, 37.7690871267671]
      }
    },
    {
      objectid: '934583',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '7166000',
      locationdescription:
        'ILLINOIS ST: MARIPOSA ST \\ TERRY A FRANCOIS BLVD to 18TH ST (600 - 699)',
      address: '600 ILLINOIS ST',
      blocklot: '3994011',
      block: '3994',
      lot: '011',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6015910.503',
      y: '2106215.604',
      latitude: '37.7641601282203',
      longitude: '-122.388142262128',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388142262128, 37.7641601282203]
      }
    },
    {
      objectid: '1265569',
      applicant:
        "San Francisco Carts & Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '10678000',
      locationdescription: 'POWELL ST: GEARY ST to POST ST (300 - 399)',
      address: '331 POWELL ST',
      blocklot: '0307001',
      block: '0307',
      lot: '001',
      permit: '19MFF-00001',
      status: 'REQUESTED',
      fooditems:
        'American Food: Hot dogs: pretzels: ice cream: salads: beverages: sandwiches: soup: coffee: pastries:etc.',
      x: '6010120.694',
      y: '2114926.344',
      latitude: '37.7877552989675',
      longitude: '-122.408782213965',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00001&ExportPDF=1&Filename=19MFF-00001_schedule.pdf',
      received: '2019-01-07',
      priorpermit: '0',
      expirationdate: '2020-01-07T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.408782213965, 37.7877552989675]
      }
    },
    {
      objectid: '934577',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '9056000',
      locationdescription: 'MINNESOTA ST: 20TH ST to 22ND ST (800 - 999)',
      address: '900 MINNESOTA ST',
      blocklot: '4106001A',
      block: '4106',
      lot: '001A',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:8AM-9AM/2PM-3PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '934622',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '7428000',
      locationdescription:
        'JAMESTOWN AVE: GRIFFITH ST to CORONADO ST (800 - 850)',
      address: '800 JAMESTOWN AVE',
      blocklot: '4973034',
      block: '4973',
      lot: '034',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6015040.705',
      y: '2088854.908',
      latitude: '37.7164430021474',
      longitude: '-122.389937879321',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Su:9AM-10AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.389937879321, 37.7164430021474]
      }
    },
    {
      objectid: '934592',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '7163000',
      address: '299 ILLINOIS ST',
      blocklot: '3850001A',
      block: '3850',
      lot: '001A',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM/12PM-1PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '934604',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '9503000',
      locationdescription:
        'NAPOLEON ST: SELBY ST to EVANS AVE \\ TOLAND ST (1 - 98)',
      address: 'Assessors Block 4347a/Lot004',
      blocklot: '4347a004',
      block: '4347a',
      lot: '004',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6013931.07958',
      y: '2100313.06289',
      latitude: '37.7478431533724',
      longitude: '-122.394575214957',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo/Mo/Mo/Mo/Mo:9AM-10AM/10AM-11AM/12PM-1PM/1PM-2PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394575214957, 37.7478431533724]
      }
    },
    {
      objectid: '1047831',
      applicant: 'The Chef Station',
      facilitytype: 'Truck',
      cnn: '480000',
      locationdescription:
        '10TH ST: FELL ST \\ MARKET ST \\ POLK ST to END (1 - 18)',
      address: '8 10TH ST',
      blocklot: '3507041',
      block: '3507',
      lot: '041',
      permit: '17MFF-0203',
      status: 'REQUESTED',
      fooditems: 'South American/Peruvian food',
      x: '6007585.376',
      y: '2110633.378',
      latitude: '37.7758255197583',
      longitude: '-122.417249626643',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0203&ExportPDF=1&Filename=17MFF-0203_schedule.pdf',
      received: '2017-12-15',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.417249626643, 37.7758255197583]
      }
    },
    {
      objectid: '934564',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '3144000',
      locationdescription: 'BROADWAY: FRONT ST to BATTERY ST (100 - 199)',
      address: '100 BROADWAY',
      blocklot: '0141003B',
      block: '0141',
      lot: '003B',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6012663.956',
      y: '2118920.369',
      latitude: '37.7988640669494',
      longitude: '-122.400263583781',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400263583781, 37.7988640669494]
      }
    },
    {
      objectid: '934607',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '792000',
      locationdescription: '17TH ST: TREAT AVE to FOLSOM ST (3025 - 3099)',
      address: '3030 17TH ST',
      blocklot: '3572005',
      block: '3572',
      lot: '005',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6008506.685',
      y: '2106321.603',
      latitude: '37.7640381828174',
      longitude: '-122.413757516589',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:12PM-1PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.413757516589, 37.7640381828174]
      }
    },
    {
      objectid: '934571',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '9094000',
      locationdescription: 'MISSION ST: ANNIE ST to 03RD ST (663 - 699)',
      address: '667 MISSION ST',
      blocklot: '3722067',
      block: '3722',
      lot: '067',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6012350.571',
      y: '2114444.914',
      latitude: '37.7865580501799',
      longitude: '-122.40103337535',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo-Fr:8PM-9PM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40103337535, 37.7865580501799]
      }
    },
    {
      objectid: '934581',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '10672000',
      locationdescription: 'POTRERO AVE: 24TH ST to 25TH ST (1200 - 1299)',
      address: '1200 POTRERO AVE',
      blocklot: '4265026',
      block: '4265',
      lot: '026',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6010430.557',
      y: '2102108.308',
      latitude: '37.7525772700714',
      longitude: '-122.406806417152',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.406806417152, 37.7525772700714]
      }
    },
    {
      objectid: '934619',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '5372103',
      locationdescription:
        'EXECUTIVE PARK BLVD: CANDLESTICK COVE WAY to SANDPIPER COVE WAY \\ THOMAS MELLON DR (138 - 198)',
      address: '150 EXECUTIVE PARK BLVD',
      blocklot: '4991086',
      block: '4991',
      lot: '086',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6013956.743',
      y: '2086835.501',
      latitude: '37.710837931141',
      longitude: '-122.393543363013',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:7PM-8PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.393543363013, 37.710837931141]
      }
    },
    {
      objectid: '839523',
      applicant: 'Halal Cart of San Francisco',
      facilitytype: 'Push Cart',
      cnn: '8741201',
      locationdescription:
        'MARKET ST: FREMONT ST \\ FRONT ST to 01ST ST \\ BUSH ST (400 - 498) -- NORTH --',
      address: '1 FRONT ST',
      blocklot: '0266009',
      block: '0266',
      lot: '009',
      permit: '16MFF-0136',
      status: 'REQUESTED',
      fooditems: 'Gyro; Chicken over rice; Gyro over rice;',
      x: '6013006.032',
      y: '2116325.123',
      latitude: '37.7917572059444',
      longitude: '-122.398897636892',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0136&ExportPDF=1&Filename=16MFF-0136_schedule.pdf',
      received: '2016-08-12',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.398897636892, 37.7917572059444]
      }
    },
    {
      objectid: '997504',
      applicant: 'Munch India',
      facilitytype: 'Truck',
      cnn: '10624001',
      locationdescription: 'POST ST: MONTGOMERY ST to LICK PL (1 - 40)',
      address: 'Assessors Block /Lot',
      permit: '17MFF-0187',
      status: 'REQUESTED',
      fooditems:
        'Daily rotating menus consisting of various local & organic vegetable: poultry: meat: seafood : rice & bread dishes.',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0187&ExportPDF=1&Filename=17MFF-0187_schedule.pdf',
      received: '2017-07-19',
      priorpermit: '0',
      expirationdate: '2017-07-19T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '934517',
      applicant: 'Scotch Bonnet',
      facilitytype: 'Truck',
      cnn: '9297000',
      locationdescription: 'MONTGOMERY ST: POST ST to SUTTER ST (1 - 99)',
      address: '25 MONTGOMERY ST',
      blocklot: '0292001A',
      block: '0292',
      lot: '001A',
      permit: '17MFF-0094',
      status: 'EXPIRED',
      fooditems:
        'Jerk chicken: curry chicken: curry goat: curry dhal: Burritos: Fish: Ox tails: rice: beans: veggies.',
      x: '6011957.923',
      y: '2115519.499',
      latitude: '37.7894866961278',
      longitude: '-122.402467438004',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0094&ExportPDF=1&Filename=17MFF-0094_schedule.pdf',
      dayshours: 'We:6AM-8PM',
      approved: '2017-03-16T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402467438004, 37.7894866961278]
      }
    },
    {
      objectid: '934618',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '9086000',
      locationdescription: 'MISSION ST: BEALE ST to FREMONT ST (300 - 399)',
      address: '350 MISSION ST',
      blocklot: '3710017',
      block: '3710',
      lot: '017',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6013638.57',
      y: '2115994.808',
      latitude: '37.7908854635019',
      longitude: '-122.396685875811',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:6PM-7PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.396685875811, 37.7908854635019]
      }
    },
    {
      objectid: '934579',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '1631000',
      locationdescription: '29TH ST: DOLORES ST to CHURCH ST (200 - 299)',
      address: '210 29TH ST',
      blocklot: '6618010',
      block: '6618',
      lot: '010',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6005080.565',
      y: '2099108.286',
      latitude: '37.7440390986017',
      longitude: '-122.425094186331',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.425094186331, 37.7440390986017]
      }
    },
    {
      objectid: '934576',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '7169000',
      locationdescription: 'ILLINOIS ST: 20TH ST to 22ND ST (900 - 1099)',
      address: '1000 ILLINOIS ST',
      blocklot: '4109001',
      block: '4109',
      lot: '001',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6015939.401',
      y: '2104425.293',
      latitude: '37.7592459190261',
      longitude: '-122.387917376991',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:8AM-9AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.387917376991, 37.7592459190261]
      }
    },
    {
      objectid: '934573',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '12626000',
      locationdescription:
        'TOLAND ST: KIRKWOOD AVE to MCKINNON AVE (600 - 799)',
      address: '600 TOLAND ST',
      blocklot: '5285A011',
      block: '5285A',
      lot: '011',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6012349.895',
      y: '2098741.535',
      latitude: '37.7434400420051',
      longitude: '-122.399932569577',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-8AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.399932569577, 37.7434400420051]
      }
    },
    {
      objectid: '934516',
      applicant: 'Scotch Bonnet',
      facilitytype: 'Truck',
      cnn: '101000',
      locationdescription: '01ST ST: STEVENSON ST to END (21 - 56)',
      address: '50 01ST ST',
      blocklot: '3708055',
      block: '3708',
      lot: '055',
      permit: '17MFF-0094',
      status: 'EXPIRED',
      fooditems:
        'Jerk chicken: curry chicken: curry goat: curry dhal: Burritos: Fish: Ox tails: rice: beans: veggies.',
      x: '6013063.33',
      y: '2115738.283',
      latitude: '37.7901490737255',
      longitude: '-122.398658184604',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0094&ExportPDF=1&Filename=17MFF-0094_schedule.pdf',
      dayshours: 'Mo:6AM-8PM',
      approved: '2017-03-16T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.398658184604, 37.7901490737255]
      }
    },
    {
      objectid: '1292788',
      applicant: 'F & C Catering',
      facilitytype: 'Truck',
      cnn: '1403000',
      locationdescription: '25TH ST: MICHIGAN ST to ILLINOIS ST (700 - 799)',
      address: '700 25TH ST',
      blocklot: '4244004',
      block: '4244',
      lot: '004',
      permit: '19MFF-00011',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad',
      x: '6016344.255',
      y: '2102281.09',
      latitude: '37.7533808099749',
      longitude: '-122.386367685857',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00011&ExportPDF=1&Filename=19MFF-00011_schedule.pdf',
      approved: '2019-03-27T00:00:00.000',
      received: '2019-03-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.386367685857, 37.7533808099749]
      }
    },
    {
      objectid: '934569',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '716000',
      locationdescription: '16TH ST: HAMPSHIRE ST to BRYANT ST (2200 - 2399)',
      address: 'Assessors Block 3930A/Lot002',
      blocklot: '3930A002',
      block: '3930A',
      lot: '002',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6009824.81',
      y: '2107195.241',
      latitude: '37.7665109269083',
      longitude: '-122.40926014493',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo-Fr:7PM-8PM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.40926014493, 37.7665109269083]
      }
    },
    {
      objectid: '934575',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '7502000',
      locationdescription: 'JERROLD AVE: UPTON ST to NAPOLEON ST (2201 - 2299)',
      address: '2270 JERROLD AVE',
      blocklot: '5230008',
      block: '5230',
      lot: '008',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6012245.5',
      y: '2099714.018',
      latitude: '37.7461044517152',
      longitude: '-122.400361834965',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:8AM-9AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.400361834965, 37.7461044517152]
      }
    },
    {
      objectid: '934595',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '5690000',
      locationdescription: 'FOLSOM ST: 16TH ST to ENTERPRISE ST (2000 - 2035)',
      address: '2000 FOLSOM ST',
      blocklot: '3571001',
      block: '3571',
      lot: '001',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6008008.225',
      y: '2106691.986',
      latitude: '37.7650271638822',
      longitude: '-122.41550777249',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.41550777249, 37.7650271638822]
      }
    },
    {
      objectid: '364218',
      applicant: 'The Chai Cart',
      facilitytype: 'Push Cart',
      cnn: '9543000',
      locationdescription:
        'NEW MONTGOMERY ST: AMBROSE BIERCE ST to MISSION ST (77 - 99)',
      address: '79 NEW MONTGOMERY ST',
      blocklot: '3707014',
      block: '3707',
      lot: '014',
      permit: '12MFF-0083',
      status: 'SUSPEND',
      fooditems: 'Hot Indian Chai (Tea)',
      x: '6012504.312',
      y: '2114926.774',
      latitude: '37.7878896999061',
      longitude: '-122.400535326777',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=12MFF-0083&ExportPDF=1&Filename=12MFF-0083_schedule.pdf',
      dayshours: 'Mo-Su:7AM-6PM',
      received: '2012-04-03',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.400535326777, 37.7878896999061]
      }
    },
    {
      objectid: '839524',
      applicant: 'Halal Cart of San Francisco',
      facilitytype: 'Push Cart',
      cnn: '8742101',
      locationdescription:
        'MARKET ST: 01ST ST \\ BUSH ST to 02ND ST (501 - 599) -- SOUTH --',
      address: '555 MARKET ST',
      blocklot: '3708057',
      block: '3708',
      lot: '057',
      permit: '16MFF-0136',
      status: 'REQUESTED',
      fooditems: 'Gyro; Chicken over rice; Gyro over rice;',
      x: '6012693.864',
      y: '2115651.384',
      latitude: '37.7898898782098',
      longitude: '-122.399930411351',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0136&ExportPDF=1&Filename=16MFF-0136_schedule.pdf',
      received: '2016-08-12',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.399930411351, 37.7898898782098]
      }
    },
    {
      objectid: '812018',
      applicant: 'SF Street Food',
      facilitytype: 'Truck',
      cnn: '9094000',
      locationdescription: 'MISSION ST: ANNIE ST to 03RD ST (663 - 699)',
      address: '667 MISSION ST',
      blocklot: '3722067',
      block: '3722',
      lot: '067',
      permit: '16MFF-0126',
      status: 'REQUESTED',
      fooditems:
        'Chicken Tikka Masala: Vegetarian Rice Plate: Burritos: Tacos: Mango Lassi',
      x: '6012350.571',
      y: '2114444.914',
      latitude: '37.7865580501799',
      longitude: '-122.40103337535',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0126&ExportPDF=1&Filename=16MFF-0126_schedule.pdf',
      received: '2016-05-31',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.40103337535, 37.7865580501799]
      }
    },
    {
      objectid: '1292785',
      applicant: 'F & C Catering',
      facilitytype: 'Truck',
      cnn: '0',
      address: 'Assessors Block /Lot',
      permit: '19MFF-00011',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00011&ExportPDF=1&Filename=19MFF-00011_schedule.pdf',
      approved: '2019-03-27T00:00:00.000',
      received: '2019-03-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '1010174',
      applicant: "Julie's Hot Dogs",
      facilitytype: 'Truck',
      cnn: '9121000',
      locationdescription: 'MISSION ST: 19TH ST to 20TH ST (2300 - 2399)',
      address: '2386 MISSION ST',
      blocklot: '3596119',
      block: '3596',
      lot: '119',
      permit: '15MFF-0007',
      status: 'REQUESTED',
      fooditems:
        'Hot dogs: bacon-wrapped hot dogs: chicken burgers: energy drinks: water and various other drinks.',
      x: '6006843.48',
      y: '2104477.073',
      latitude: '37.7588799920148',
      longitude: '-122.419379202984',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=15MFF-0007&ExportPDF=1&Filename=15MFF-0007_schedule.pdf',
      dayshours: 'Tu/We/Th:12AM-3AM;Mo-We:12PM-12AM',
      received: '2015-02-23',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.419379202984, 37.7588799920148]
      }
    },
    {
      objectid: '934609',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '3887000',
      locationdescription: 'CHANNEL ST: 03RD ST to 04TH ST (0 - 0)',
      address: 'Assessors Block 8711/Lot023',
      blocklot: '8711023',
      block: '8711',
      lot: '023',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6015253.3503',
      y: '2109839.76272',
      latitude: '37.7740748410583',
      longitude: '-122.390668458146',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo/Mo/Mo/Mo/Mo:9AM-10AM/10AM-11AM/12PM-1PM/1PM-2PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390668458146, 37.7740748410583]
      }
    },
    {
      objectid: '934518',
      applicant: 'Scotch Bonnet',
      facilitytype: 'Truck',
      cnn: '11543000',
      locationdescription: 'SANSOME ST: BUSH ST to PINE ST (100 - 199)',
      address: '115 SANSOME ST',
      blocklot: '0268002',
      block: '0268',
      lot: '002',
      permit: '17MFF-0094',
      status: 'EXPIRED',
      fooditems:
        'Jerk chicken: curry chicken: curry goat: curry dhal: Burritos: Fish: Ox tails: rice: beans: veggies.',
      x: '6012385.284',
      y: '2116217.3',
      latitude: '37.7914265413321',
      longitude: '-122.401037856688',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0094&ExportPDF=1&Filename=17MFF-0094_schedule.pdf',
      dayshours: 'Fr:6AM-8PM',
      approved: '2017-03-16T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401037856688, 37.7914265413321]
      }
    },
    {
      objectid: '934616',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '4909000',
      locationdescription: 'DONNER AVE: END to 03RD ST (1600 - 1699)',
      address: '1600 DONNER AVE',
      blocklot: '4881023',
      block: '4881',
      lot: '023',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6014214.714',
      y: '2091627.121',
      latitude: '37.7240091065402',
      longitude: '-122.392986782578',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:4PM-5PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.392986782578, 37.7240091065402]
      }
    },
    {
      objectid: '934302',
      applicant: 'Yummy Hot Dogs',
      facilitytype: 'Push Cart',
      cnn: '8749201',
      locationdescription:
        'MARKET ST: MASON ST \\ TURK ST to 06TH ST \\ GOLDEN GATE AVE \\ TAYLOR ST (950 - 998) -- NORTH --',
      address: '954 MARKET ST',
      blocklot: '0342001',
      block: '0342',
      lot: '001',
      permit: '17MFF-0063',
      status: 'SUSPEND',
      fooditems: 'Hot dogs: pretzels: chips: juices and cold drinks',
      x: '6009859.555',
      y: '2113263.691',
      latitude: '37.7831754207336',
      longitude: '-122.409568315547',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0063&ExportPDF=1&Filename=17MFF-0063_schedule.pdf',
      dayshours: 'Tu/Th/Sa:10AM-7PM',
      approved: '2017-03-15T00:00:00.000',
      received: '2017-02-11',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.409568315547, 37.7831754207336]
      }
    },
    {
      objectid: '934590',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '2955000',
      locationdescription: 'BERRY ST: 05TH ST to 06TH ST (300 - 399)',
      address: '301 BERRY ST',
      blocklot: '8708002',
      block: '8708',
      lot: '002',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6014277.187',
      y: '2109955.224',
      latitude: '37.7743376663696',
      longitude: '-122.394053286313',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.394053286313, 37.7743376663696]
      }
    },
    {
      objectid: '934620',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '9050000',
      locationdescription: 'MINNA ST: 10TH ST to 11TH ST (900 - 999)',
      address: '911 MINNA ST',
      blocklot: '3510043',
      block: '3510',
      lot: '043',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6008034.46',
      y: '2110104.285',
      latitude: '37.7743980109403',
      longitude: '-122.415658655811',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:8PM-9PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.415658655811, 37.7743980109403]
      }
    },
    {
      objectid: '934574',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '8700000',
      locationdescription:
        'MARIN ST: KANSAS ST to HWY 101 N ON RAMP (2500 - 2599)',
      address: '2525 MARIN ST',
      blocklot: '4343001D',
      block: '4343',
      lot: '001D',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6011789.79',
      y: '2100273.801',
      latitude: '37.7476160722331',
      longitude: '-122.401976975724',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:7AM-8AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401976975724, 37.7476160722331]
      }
    },
    {
      objectid: '934582',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '1259000',
      locationdescription: '23RD ST: HARRISON ST to TREAT AVE (3000 - 3053)',
      address: '3000 23RD ST',
      blocklot: '3639004',
      block: '3639',
      lot: '004',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:9AM-10AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '934614',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '5340000',
      locationdescription:
        'EVANS AVE: NAPOLEON ST \\ TOLAND ST to MARIN ST (2000 - 2099)',
      address: '2090 EVANS AVE',
      blocklot: '4347A003',
      block: '4347A',
      lot: '003',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6013578.61428',
      y: '2100360.92261',
      latitude: '37.7479549645678',
      longitude: '-122.395797384916',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:3PM-4PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395797384916, 37.7479549645678]
      }
    },
    {
      objectid: '1292791',
      applicant: 'F & C Catering',
      facilitytype: 'Truck',
      cnn: '9056000',
      locationdescription: 'MINNESOTA ST: 20TH ST to 22ND ST (800 - 999)',
      address: '900 MINNESOTA ST',
      blocklot: '4106001A',
      block: '4106',
      lot: '001A',
      permit: '19MFF-00011',
      status: 'APPROVED',
      fooditems:
        'Cold Truck: Hot/Cold Sandwiches: Water: Soda: Juice: Snacks: Milk: Candies: Canned Food: Soups: Cup of Noodles: Fruit: Salad',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00011&ExportPDF=1&Filename=19MFF-00011_schedule.pdf',
      approved: '2019-03-27T00:00:00.000',
      received: '2019-03-25',
      priorpermit: '1',
      expirationdate: '2020-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '934303',
      applicant: 'Yummy Hot Dogs',
      facilitytype: 'Push Cart',
      cnn: '8749101',
      locationdescription:
        'MARKET ST: MASON ST \\ TURK ST to 06TH ST \\ GOLDEN GATE AVE \\ TAYLOR ST (943 - 999) -- SOUTH --',
      address: '945 MARKET ST',
      blocklot: '3704240',
      block: '3704',
      lot: '240',
      permit: '17MFF-0063',
      status: 'SUSPEND',
      fooditems: 'Hot dogs: pretzels: chips: juices and cold drinks',
      x: '6010068.04758',
      y: '2113135.15204',
      latitude: '37.7828341636984',
      longitude: '-122.408837940446',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0063&ExportPDF=1&Filename=17MFF-0063_schedule.pdf',
      dayshours: 'Mo/We/Fr:10AM-7PM',
      approved: '2017-03-15T00:00:00.000',
      received: '2017-02-11',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.408837940446, 37.7828341636984]
      }
    },
    {
      objectid: '934519',
      applicant: 'Scotch Bonnet',
      facilitytype: 'Truck',
      cnn: '3528000',
      locationdescription:
        'CALIFORNIA ST: SANSOME ST to LEIDESDORFF ST (400 - 448)',
      address: '430 CALIFORNIA ST',
      blocklot: '0239029',
      block: '0239',
      lot: '029',
      permit: '17MFF-0094',
      status: 'EXPIRED',
      fooditems:
        'Jerk chicken: curry chicken: curry goat: curry dhal: Burritos: Fish: Ox tails: rice: beans: veggies.',
      x: '6012181.836',
      y: '2116889.979',
      latitude: '37.7932622069231',
      longitude: '-122.401789091363',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0094&ExportPDF=1&Filename=17MFF-0094_schedule.pdf',
      dayshours: 'Tu/Th:6AM-8PM',
      approved: '2017-03-16T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401789091363, 37.7932622069231]
      }
    },
    {
      objectid: '1265606',
      applicant:
        "San Francisco Carts & Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '10628000',
      locationdescription: 'POST ST: STOCKTON ST to POWELL ST (300 - 399)',
      address: '384 POST ST',
      blocklot: '0295007',
      block: '0295',
      lot: '007',
      permit: '19MFF-00001',
      status: 'REQUESTED',
      fooditems:
        'American Food: Hot dogs: pretzels: ice cream: salads: beverages: sandwiches: soup: coffee: pastries:etc.',
      x: '6010333.205',
      y: '2115237.376',
      latitude: '37.7886212190862',
      longitude: '-122.408068906407',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00001&ExportPDF=1&Filename=19MFF-00001_schedule.pdf',
      received: '2019-01-07',
      priorpermit: '0',
      expirationdate: '2020-01-07T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.408068906407, 37.7886212190862]
      }
    },
    {
      objectid: '735315',
      applicant: 'Ziaurehman Amini',
      facilitytype: 'Push Cart',
      cnn: '4969000',
      locationdescription: 'DRUMM ST: MARKET ST to CALIFORNIA ST (1 - 6)',
      address: '1 CALIFORNIA ST',
      blocklot: '0264004',
      block: '0264',
      lot: '004',
      permit: '15MFF-0159',
      status: 'REQUESTED',
      x: '6013552.57',
      y: '2116844.5',
      latitude: '37.7932137316634',
      longitude: '-122.397043036718',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=15MFF-0159&ExportPDF=1&Filename=15MFF-0159_schedule.pdf',
      received: '2015-12-31',
      priorpermit: '0',
      expirationdate: '2016-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.397043036718, 37.7932137316634]
      }
    },
    {
      objectid: '1265607',
      applicant:
        "San Francisco Carts & Concessions, Inc. DBA Stanley's Steamers Hot Dogs",
      facilitytype: 'Push Cart',
      cnn: '6109000',
      locationdescription: 'GEARY ST: STOCKTON ST to POWELL ST (200 - 299)',
      address: 'Assessors Block /Lot',
      permit: '19MFF-00001',
      status: 'REQUESTED',
      fooditems:
        'American Food: Hot dogs: pretzels: ice cream: salads: beverages: sandwiches: soup: coffee: pastries:etc.',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=19MFF-00001&ExportPDF=1&Filename=19MFF-00001_schedule.pdf',
      received: '2019-01-07',
      priorpermit: '0',
      expirationdate: '2020-01-07T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '934605',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '718000',
      locationdescription: '16TH ST: FLORIDA ST to ALABAMA ST (2500 - 2599)',
      address: '2500 16TH ST',
      blocklot: '3927004',
      block: '3927',
      lot: '004',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6009037.016',
      y: '2106959.859',
      latitude: '37.7658204544832',
      longitude: '-122.411968357912',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:12PM-1PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.411968357912, 37.7658204544832]
      }
    },
    {
      objectid: '934566',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '192201',
      locationdescription:
        '03RD ST: 23RD ST to 24TH ST (2700 - 2798) -- WEST --',
      address: '2700 03RD ST',
      blocklot: '4230001',
      block: '4230',
      lot: '001',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6015750.256',
      y: '2102782.473',
      latitude: '37.7547246040128',
      longitude: '-122.388456870373',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo-Fr:6PM-7PM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.388456870373, 37.7547246040128]
      }
    },
    {
      objectid: '773105',
      applicant: 'Athena SF Gyro',
      facilitytype: 'Push Cart',
      cnn: '417000',
      locationdescription: '08TH ST: BRANNAN ST to TOWNSEND ST (600 - 699)',
      address: '699 08TH ST',
      blocklot: '3783009',
      block: '3783',
      lot: '009',
      permit: '15MFF-0145',
      status: 'REQUESTED',
      fooditems:
        'Gyro pita bread (Lamb or chicken): lamb over rice: chicken over rice: chicken biryani rice: soft drinks',
      x: '6011509.501',
      y: '2108803.834',
      latitude: '37.7710219992437',
      longitude: '-122.403546254184',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=15MFF-0145&ExportPDF=1&Filename=15MFF-0145_schedule.pdf',
      dayshours: 'Mo-We:6AM-6PM',
      received: '2015-09-01',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.403546254184, 37.7710219992437]
      }
    },
    {
      objectid: '334914',
      applicant: 'Halal Cart, LLC',
      facilitytype: 'Push Cart',
      cnn: '8748101',
      locationdescription:
        'MARKET ST: 05TH ST \\ CYRIL MAGNIN ST to MASON ST \\ TURK ST (901 - 941) -- SOUTH --',
      address: '901 MARKET ST',
      blocklot: '3704001',
      block: '3704',
      lot: '001',
      permit: '11MFF-0175',
      status: 'INACTIVE',
      fooditems: 'Kebab: Halal Gyros: Grilled Halal Meat: Beverages',
      x: '6010303.105',
      y: '2113361.952',
      latitude: '37.7834700660829',
      longitude: '-122.408040736138',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=11MFF-0175&ExportPDF=1&Filename=11MFF-0175_schedule.pdf',
      dayshours: 'Sa-Su:12AM-3AM;Mo-Su:10AM-8PM;Fr/Sa:9PM-12AM',
      received: '2011-09-26',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.408040736138, 37.7834700660829]
      }
    },
    {
      objectid: '934610',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '2477000',
      locationdescription:
        'CESAR CHAVEZ ST: EVANS AVE to KANSAS ST (2100 - 2550)',
      address: '2400 CESAR CHAVEZ ST',
      blocklot: '4328A005',
      block: '4328A',
      lot: '005',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6012051.606',
      y: '2101106.273',
      latitude: '37.749916469391',
      longitude: '-122.401130112212',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:6AM-7AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.401130112212, 37.749916469391]
      }
    },
    {
      objectid: '934567',
      applicant: 'M M Catering',
      facilitytype: 'Truck',
      cnn: '7196000',
      locationdescription: 'INDIANA ST: 22ND ST to TUBBS ST (1000 - 1099)',
      address: '1095 INDIANA ST',
      blocklot: '4170010',
      block: '4170',
      lot: '010',
      permit: '17MFF-0109',
      status: 'REQUESTED',
      fooditems:
        'Cold Truck: sandwiches: corndogs: tacos: yogurt: snacks: candy: hot and cold drinks',
      x: '6015168.427',
      y: '2103589.069',
      latitude: '37.7569070856214',
      longitude: '-122.390525368135',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0109&ExportPDF=1&Filename=17MFF-0109_schedule.pdf',
      dayshours: 'Mo-Fr:6PM-7PM',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-03-31T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390525368135, 37.7569070856214]
      }
    },
    {
      objectid: '934601',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '6751000',
      locationdescription: 'HARRISON ST: 19TH ST to MISTRAL ST (2301 - 2360)',
      address: '2301 HARRISON ST',
      blocklot: '4083008',
      block: '4083',
      lot: '008',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6008876.646',
      y: '2104879.645',
      latitude: '37.7600996654893',
      longitude: '-122.412375997322',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:11AM-12PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.412375997322, 37.7600996654893]
      }
    },
    {
      objectid: '934589',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '6746000',
      locationdescription: 'HARRISON ST: 17TH ST to MARIPOSA ST (2050 - 2149)',
      address: '2130 HARRISON ST',
      blocklot: '3573046',
      block: '3573',
      lot: '046',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6008655.37685',
      y: '2105873.06628',
      latitude: '37.7628149532289',
      longitude: '-122.413211513673',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Fr:10AM-11AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.413211513673, 37.7628149532289]
      }
    },
    {
      objectid: '848080',
      applicant: 'Taqueria Lolita',
      facilitytype: 'Truck',
      cnn: '10927000',
      locationdescription: 'RANKIN ST: DAVIDSON AVE to EVANS AVE (200 - 299)',
      address: '1700 EVANS AVE',
      blocklot: '5227001',
      block: '5227',
      lot: '001',
      permit: '16MFF-0128',
      status: 'SUSPEND',
      fooditems:
        'Tacos: burritos: quesadillas: combination plates: tortas: tostadas',
      x: '6014950.929',
      y: '2099216.653',
      latitude: '37.744889286143',
      longitude: '-122.390971976935',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0128&ExportPDF=1&Filename=16MFF-0128_schedule.pdf',
      dayshours: 'Th/Fr/Sa:7AM-3PM',
      approved: '2017-08-01T00:00:00.000',
      received: '2016-06-22',
      priorpermit: '0',
      expirationdate: '2018-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.390971976935, 37.744889286143]
      }
    },
    {
      objectid: '812017',
      applicant: 'SF Street Food',
      facilitytype: 'Truck',
      cnn: '12320000',
      locationdescription: 'SUTTER ST: CLAUDE LN to GRANT AVE (216 - 299)',
      address: '290 SUTTER ST',
      blocklot: '0287014',
      block: '0287',
      lot: '014',
      permit: '16MFF-0126',
      status: 'REQUESTED',
      fooditems:
        'Chicken Tikka Masala: Vegetarian Rice Plate: Burritos: Tacos: Mango Lassi',
      x: '6011162.135',
      y: '2115691.265',
      latitude: '37.7899138671344',
      longitude: '-122.405232892524',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0126&ExportPDF=1&Filename=16MFF-0126_schedule.pdf',
      received: '2016-05-31',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [-122.405232892524, 37.7899138671344]
      }
    },
    {
      objectid: '848185',
      applicant: 'Reecees Soulicious',
      facilitytype: 'Truck',
      cnn: '211101',
      locationdescription:
        '03RD ST: NEWCOMB AVE to OAKDALE AVE (4701 - 4799) -- EAST --',
      address: '4705 03RD ST',
      blocklot: '5311036',
      block: '5311',
      lot: '036',
      permit: '16MFF-0139',
      status: 'REQUESTED',
      fooditems:
        'Fried Chicken: Fried Fish: Greens: Mac & Cheese: Peach Cobbler: and String beans',
      x: '6015109.358',
      y: '2095613.38',
      latitude: '37.7350042289514',
      longitude: '-122.3901724697',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0139&ExportPDF=1&Filename=16MFF-0139_schedule.pdf',
      dayshours: 'Th/Fr/Sa:7AM-7PM',
      received: '2016-09-08',
      priorpermit: '0',
      expirationdate: '2017-03-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.3901724697, 37.7350042289514]
      }
    },
    {
      objectid: '837171',
      applicant: 'Chilifruit',
      facilitytype: 'Push Cart',
      cnn: '1346000',
      locationdescription: '24TH ST: MISSION ST to OSAGE ALY (3300 - 3322)',
      address: 'Assessors Block /Lot',
      permit: '16MFF-0135',
      status: 'REQUESTED',
      fooditems: 'Mangoneadas: Fruit snacks: Chamoyadas: Bionicos',
      latitude: '0',
      longitude: '0',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=16MFF-0135&ExportPDF=1&Filename=16MFF-0135_schedule.pdf',
      received: '2016-08-05',
      priorpermit: '0',
      location: {
        type: 'Point',
        coordinates: [0, 0]
      }
    },
    {
      objectid: '934623',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '12775000',
      locationdescription: 'ULLOA ST: WOODSIDE AVE to SYDNEY WAY (1 - 56)',
      address: '2 ULLOA ST',
      blocklot: '2914001',
      block: '2914',
      lot: '001',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '5996669.215',
      y: '2099864.483',
      latitude: '37.7456366838808',
      longitude: '-122.454233188657',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo-Su:9AM-10AM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.454233188657, 37.7456366838808]
      }
    },
    {
      objectid: '453013',
      applicant: 'Tacos Santana',
      cnn: '7498000',
      locationdescription: 'JERROLD AVE: PHELPS ST to QUINT ST (1700 - 1799)',
      address: '1700 JERROLD AVE',
      blocklot: '5262009',
      block: '5262',
      lot: '009',
      permit: '13MFF-0112',
      status: 'EXPIRED',
      x: '6014746.675',
      y: '2098348.869',
      latitude: '37.7424951959228',
      longitude: '-122.391617595098',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=13MFF-0112&ExportPDF=1&Filename=13MFF-0112_schedule.pdf',
      dayshours: 'Mo-Su:11AM-5PM',
      noisent: '2013-07-25T00:00:00.000',
      approved: '2018-02-07T00:00:00.000',
      received: '2013-06-05',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.391617595098, 37.7424951959228]
      }
    },
    {
      objectid: '934608',
      applicant: 'May Catering',
      facilitytype: 'Truck',
      cnn: '3889000',
      locationdescription: 'CHANNEL ST: END to END (0 - 0)',
      address: 'Assessors Block 3810/Lot008',
      blocklot: '3810008',
      block: '3810',
      lot: '008',
      permit: '17MFF-0110',
      status: 'EXPIRED',
      fooditems:
        'Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks',
      x: '6013705.031',
      y: '2109129.688',
      latitude: '37.772039113525',
      longitude: '-122.395974631586',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&Filename=17MFF-0110_schedule.pdf',
      dayshours: 'Mo/Mo/Mo/Mo/Mo:9AM-10AM/10AM-11AM/12PM-1PM/1PM-2PM',
      approved: '2017-12-28T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '1',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.395974631586, 37.772039113525]
      }
    },
    {
      objectid: '934553',
      applicant: "Casey's Pizza, LLC",
      facilitytype: 'Truck',
      cnn: '10624001',
      locationdescription: 'POST ST: MONTGOMERY ST to LICK PL (1 - 40)',
      address: '1 POST ST',
      blocklot: '0311015',
      block: '0311',
      lot: '015',
      permit: '17MFF-0104',
      status: 'EXPIRED',
      fooditems:
        "Artisan Pizzas (Margherita: Yukon Potato: Zoe's Pepperoni: Funghi: Brocolli Rabe: Bacon Kale:  Arugula) and Drinks.",
      x: '6011921.732',
      y: '2115262.393',
      latitude: '37.788778723378',
      longitude: '-122.402574568411',
      schedule:
        'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=17MFF-0104&ExportPDF=1&Filename=17MFF-0104_schedule.pdf',
      dayshours: 'Sa:12PM-4PM;Tu/We/Th:3PM-8PM',
      approved: '2017-08-29T00:00:00.000',
      received: '2017-02-13',
      priorpermit: '0',
      expirationdate: '2018-07-15T00:00:00.000',
      location: {
        type: 'Point',
        coordinates: [-122.402574568411, 37.788778723378]
      }
    }
  ],
  notFound: false
};

export const searchReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_START:
      return {
        ...state
      };
    case SEARCH_SUCESS:
      return {
        ...state,
        copyData: state.copyData.filer(food => {
          return (
            food.fooditem.toLowerCase().indexOf(payload.toLowerCase()) >= 0
          );
        })
      };

    case SEARCH_FAIL:
      return {
        ...state,
        notFound: true
      };
    default:
      return state;
  }
};
