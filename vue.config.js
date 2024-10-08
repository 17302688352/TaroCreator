module.exports = {
  productionSourceMap: false,
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ['github'],
        appId: 'taro.creator.app',
        productName: 'TaroCreator',
        copyright: '鱼鱼',
        directories: {
          output: './dist' // 输出文件路径
        },
        win: {
          // win相关配置
          icon: './appicon/icon.png',
          target: [
            {
              target: 'nsis', // 利用nsis制作安装程序
              arch: ['x64']
            }
          ]
        },
        nsis: {
          oneClick: false,
          allowElevation: true,
          allowToChangeInstallationDirectory: true,
          installerIcon: './appicon/icon.ico',
          uninstallerIcon: './appicon/icon.ico',
          installerHeaderIcon: './appicon/icon.ico',
          createDesktopShortcut: true,
          createStartMenuShortcut: true,
          shortcutName: 'TaroCreator',
          artifactName: 'TaroCreator-${version}.${ext}'
        },
        mac: {
          target: 'dmg',
          icon: './appicon/icon.icns'
        },
        dmg: {
          title: 'TaroCreator',
          icon: './appicon/icon.icns',
          contents: [
            {
              x: 180,
              y: 220
            },
            {
              x: 360,
              y: 220,
              type: 'link',
              path: '/Applications'
            }
          ],
          artifactName: 'TaroCreator-${version}.${ext}',
          window: {
            x: 400,
            y: 100
          }
        }
      }
    }
  }
}
