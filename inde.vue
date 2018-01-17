<template>
  <div class="navbar">
    <a class="f-left logo" :href="(userInfo.userType==0?'/mogoroom-partnerpc/pages/dashboard':'/landlord/user/#/childaccountDashboard')+'?'+token">
      <img src="./images/logo.png" alt="">
    </a>
    <div class="f-right">
      <div class="qqHelper f-left">QQ帮助：3538230023</div>
      <div class="userInfo f-left" @mouseenter="showMenu=true" @mouseleave="showMenu=false">
        <a href="javascript:void(0);">
          <div class="headImg f-left" :style="{backgroundImage: 'url(' + userInfo.photoUrl + ')'}" />
          <span class="name f-left">{{ userInfo.name }}</span>
          <span class="triangle_down" />
        </a>
        <ul class="drop_down_menu shadow" v-show="showMenu">
          <li v-for="menu in menus" v-if="checkShowMenu(menu.hostOnly,menu.fcode)">
            <a :href="(menu.out?'':globalUrl)+(userInfo.userType==0?menu.url:(menu.subUrl||menu.url))+'?'+token+(menu.route?menu.route:'')">{{ menu.name }}</a>
          </li>
        </ul>
      </div>
      <div class="actionButtons f-left">
        <a href="javascript:void(0);" class="wechat f-left" v-if="userInfo.userType==0" @mouseenter="showWechat=true" @mouseleave="showWechat=false">
          <img src="./images/weiChat_white.png" alt="">
          <div class="wechatModal shadow" v-show="showWechat">
            <img class="f-left" src="./images/fallad2.jpg" alt="">
            <p>扫一扫，关注【蘑菇伙伴】微信公众号，系统教程、版本更新全部看得到。</p>
          </div>
        </a>
        <a :href="globalUrl+'setting/showMessageList'+'?'+token" class="message f-left"><img src="./images/email_white.png" alt=""><span v-if="parseInt(unreadCount)">{{ unreadCount }}</span></a>
        <a :href="globalUrl+'index/logout'+'?'+token" class="logout f-left"><img src="./images/logout_icon.png" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      /*如果是子账号，则用fcode与后端返回的权限列表做对比，在列表中的才显示*/
      return {
        menus: [
          {
            name: '个人中心',
            url: 'setting/personalCenterLoad',
            subUrl: 'setting/subPersonalCenterLoad'
          },
          {
            name: '账户明细',
            url: '/landlord/accounting',
            route: '#/manage',
            fcode: 8100000,
            out: true
          },
          {
            name: '消息中心',
            url: 'setting/showMessageList'
          },
          {
            name: '配置中心',
            url: 'config/configCenter',
            fcode: "B000000"
          },
          {
            name: '消息管理',
            url: 'category/categorySettingList',
            fcode: 3300000
          },
          {
            name: '操作日志',
            url: 'orgExtend/operationLog',
            fcode: 8200000
          },
          {
            name: '下载中心',
            url: '/landlord/accounting',
            route: '#/downloadCenter',
            fcode: 7000000,
            out: true
          },
          {
            name: '帮助中心',
            url: 'pages/download'
          },
          {
            name: '意见反馈',
            url: 'suggestion/feedback'
          }
        ],
        showMenu: false,
        showWechat: false
      };
    },
    computed: {
      globalUrl () {
        return this.$store.state.globalUrl;
      },
      token () {
        return this.$store.state.token;
      },
      userInfo () {
        return this.$store.state.userInfo;
      },
      unreadCount () {
        return this.$store.state.unreadCount.count;
      }
    },
    methods: {
      checkShowMenu (hostOnly, fcode) {
        let isShow = true;
        if (this.userInfo.userType != 0) {
          // 子账号
          if (hostOnly == true || (fcode && this.$store.state.permissionMenuList.indexOf(fcode + '') == -1)) {
            isShow = false;
          }
        } else {
          isShow = true;
        }
        return isShow;
      }
    },
    created () {
    },
    beforeMount () {
      this.$store.state.userInfo = {
        id: localStorage.loginPartnerId,
        name: localStorage.loginPartnerAppellation,
        photoUrl: 'http://image.mgzf.com/' + (localStorage.loginPartnerPhoto ? localStorage.loginPartnerPhoto : 'imagefile/website/index/defaultimg-female.png'),
        userType: localStorage.userType || 0
      };
      this.$store.state.token = localStorage.tokenKey + '=' + localStorage.token;

      // 获取权限列表
      this.$ajax.post('/mogoroom-partnerpc/index/getPermissionMenuList')
        .then((res) => {
          this.$store.state.permissionMenuList = res.functionInfoList.map((item) => {
            return item.fcode;
          });
          this.$store.state.userInfo.userType = res.userTypePermission;
        });

      // 获取未读消息
      this.$ajax.post('/mogoroom-partnerpc/setting/findUnreadMsg')
        .then((res) => {
          if (typeof res === 'object') {
            this.$store.state.unreadCount = res;
          }
        });
    }
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .navbar{
    position: fixed;
    width: 100%;
    height: 60px;
    top:0;
    left:0;
    background: #507bea;
    color: #fff;
    font-size: 14px;
    z-index: 1000;
    min-width: 980px;
    .logo{
      width: 70px;
      height:60px;
      background-color: #3856a3;
      img{
        width: 100%;
      }
    }
    .qqHelper{
      line-height: 60px;
    }
    .userInfo{
      position: relative;
      margin: 0 20px;
      height: 60px;
      line-height: 60px;
    }
    .headImg{
      width: 38px;
      height: 38px;
      margin: 11px;
      border: 2px solid #fff;
      border-radius: 100%;
      overflow: hidden;
      background: #fff no-repeat center;
      background-size: cover;
    }
    .name{
      display: inline-block;
      max-width: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .triangle_down{
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 6px solid #fff;
      display: inline-block;
      margin-left: 5px;
    }
    .drop_down_menu{
      position: absolute;
      background: #fff;
      padding: 10px;
      width: 116px;
      top: 60px;
      left: 12px;
      z-index: 10000;
      line-height: 32px;
      text-align: center;
      &:before{
        content: ' ';
        width: 0;
        height: 0;
        border-width: 0 10px 10px;
        border-style: solid;
        border-color: transparent transparent #fff;
        position: absolute;
        top: -10px;
        left: 40px;
      }
      li{
        border-bottom: 1px dashed #eee;
        &:last-child{
          border-bottom: none;
        }
      }
      a{
        color: #666;
        &:hover{
          color: #008de6;
        }
      }
    }
    .actionButtons{
      margin-right: 10px;
    }
    .shadow{
      border: 1px solid rgba(0, 0, 0, .15);
      box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    }
    .actionButtons a{
      height: 60px;
      margin: 0 10px;
    }
    .wechat img, .message img{
      margin-top: 20px;
    }
    .message{
      position: relative;
      span{
        position: absolute;
        background-color: rgb(255, 0, 84);
        color: #fff;
        padding: 0 5px;
        min-width: 16px;
        text-align: center;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        border-radius: 10px;
        top: 12px;
        right: -5px;
      }
    }
    .logout img{
      width: 36px;
      margin-top: 12px;
    }
    .wechat{
      position: relative;
    }
    .wechatModal{
      position: absolute;
      width: 310px;
      top: 60px;
      right: -40px;
      padding: 20px;
      background-color: #fff;
      color: #666;
      border: 1px #ddd solid;
      border-radius: 5px;
      &:before{
        content: ' ';
        width: 0;
        height: 0;
        border-width: 0 10px 10px;
        border-style: solid;
        border-color: transparent transparent #fff;
        position: absolute;
        top: -10px;
        right: 40px;
      }
      img{
        width: 160px;
        margin: 0;
      }
      p{
        margin: 20px;
      }
    }
  }
</style>
