report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document-0.png",
        "test": "../bitmaps_test/20210706-141047/Entire_document-0.png",
        "selector": "document",
        "fileName": "Entire_document-0.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/html-form/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "4.77",
          "analysisTime": 47
        },
        "diffImage": "../bitmaps_test/20210706-141047/failed_diff_Entire_document-0.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Form-0.png",
        "test": "../bitmaps_test/20210706-141047/Form-0.png",
        "selector": "form",
        "fileName": "Form-0.png",
        "label": "Form",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/html-form/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -667,
            "height": -412
          },
          "misMatchPercentage": "13.15",
          "analysisTime": 39
        },
        "diffImage": "../bitmaps_test/20210706-141047/failed_diff_Form-0.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Fieldset_tag-0.png",
        "test": "../bitmaps_test/20210706-141047/Fieldset_tag-0.png",
        "selector": "fieldset",
        "fileName": "Fieldset_tag-0.png",
        "label": "Fieldset tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/html-form/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -663,
            "height": 93
          },
          "misMatchPercentage": "33.63",
          "analysisTime": 46
        },
        "diffImage": "../bitmaps_test/20210706-141047/failed_diff_Fieldset_tag-0.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Submit_button-0.png",
        "test": "../bitmaps_test/20210706-141047/Submit_button-0.png",
        "selector": "[type=\"submit\"]",
        "fileName": "Submit_button-0.png",
        "label": "Submit button",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/html-form/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -288,
            "height": -248
          },
          "misMatchPercentage": "1.05",
          "analysisTime": 10
        },
        "diffImage": "../bitmaps_test/20210706-141047/failed_diff_Submit_button-0.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Email_with_placeholder-0.png",
        "test": "../bitmaps_test/20210706-141047/Email_with_placeholder-0.png",
        "selector": "[type=\"email\"][placeholder]",
        "fileName": "Email_with_placeholder-0.png",
        "label": "Email with placeholder",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/html-form/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -210,
            "height": -247
          },
          "misMatchPercentage": "2.74",
          "analysisTime": 21
        },
        "diffImage": "../bitmaps_test/20210706-141047/failed_diff_Email_with_placeholder-0.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Number_with_value-0.png",
        "test": "../bitmaps_test/20210706-141047/Number_with_value-0.png",
        "selector": "[type=\"number\"][value]",
        "fileName": "Number_with_value-0.png",
        "label": "Number with value",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/html-form/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -299,
            "height": -247
          },
          "misMatchPercentage": "0.88",
          "analysisTime": 21
        }
      },
      "status": "pass"
    }
  ]
});