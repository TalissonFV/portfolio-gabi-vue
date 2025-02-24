<template>
    <div :class="$style.footerArea">
        <div style="background-color: #F3CAAA; height: 45px;">
        </div>

        <footer>
            <div >
                <img :src="logo"  :class="$style.footerLogo" ></img>
                <span :class="$style.footerTitle">Gabi Kamui</span>
            </div>
            <div :class="$style.footerRights">
                <span> <v-icon icon="far fa-copyright" ></v-icon> {{new Date().getFullYear()}} Todos os direitos reservados </span>
            </div>
            <v-divider class="border-opacity-100" color="white" vertical></v-divider>
            <div :class="$style.footerSocials">
                <a style="text-decoration: none!important; color: white;" href=""><v-icon class="pr-16" icon="fab fa-instagram" ></v-icon></a>
                <a style="text-decoration: none!important; color: white;" href="http://linkedin.com/in/gabriel-matheus-a2ab97210/"><v-icon class="pr-5" icon="fab fa-linkedin" ></v-icon></a>
                <a style="text-decoration: none!important; color: white;" href="https://www.behance.net/gabikamui#"><v-icon class="pl-10" icon="fab fa-behance" ></v-icon></a>
                
            </div>
        </footer>
    </div>

</template>

<script setup>
import logo from '../../assets/img/logo-light.svg'


</script>

<style lang="scss" module>
footer {
    width: 100%;
    height: 186px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    background-image: none;
    background-repeat: repeat;
    background-attachment: scroll;
    background-position: 0% 0%;
    position: relative;
    bottom: 0pt;
    left: 0pt;

    background-color: #CC6D59;
    margin-top: auto;
    padding: 20px;

    .footerLogo {
        color: #F3A86D;
        width: 50px;
    }

    .footerTitle {
        padding-left: 20px;
        color: #F3A86D;
        font-weight: 700;
        font-size: 3vw;
        bottom: 8px;
        position: relative;
    }
    .footerSocials{
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 2vw;
        
    }

    .footerRights {
        i {
            font-size: 1.5vw;
            padding-bottom: 4px;
        }

        span {
            font-size: 1vw;

            @media (max-width: 1640px) {
                font-size: 1.1vw;
            }
            @media (max-width: 800px) {
                font-size: 1.5vw;
            }
        }
    }
}
</style>