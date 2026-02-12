var APP_DATA = {
  "scenes": [
    {
      "id": "0-4-",
      "name": "4층 복도",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.3020641869391127,
        "pitch": 0.2856883083886643,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.581661224520639,
          "pitch": 0.22372175807615946,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": -0.577925636562096,
          "pitch": 0.09751948749643269,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3834571131592082,
          "pitch": -0.04955133767295372,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": -0.6376226449482374,
          "pitch": -0.05010581212996712,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-",
      "name": "강당",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1635355068476194,
          "pitch": 0.013463132411189349,
          "rotation": 0,
          "target": "0-4-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-",
      "name": "자치활동실",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2939696126761078,
          "pitch": 0.057369732491952874,
          "rotation": 0,
          "target": "0-4-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8999891864231362,
          "pitch": 0.3877248915520646,
          "title": "Title",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "아주문집",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
