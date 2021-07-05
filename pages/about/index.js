import Container from '../../components/container'
import Layout from '../../components/layout'
import Head from 'next/head'
import Header from "../../components/header";
import React from "react";

export default function About() {
    let lang = 'en';

    return (
        <>
            <Layout>
                <Head>
                    <title>
                        Kamiran Khalil
                    </title>
                </Head>
                <Container>
                    <Header selected='about'/>
                    <div className='pt-32' id="About">
                        <div className='name-header'>
                            Kamiran Khalil
                        </div>
                        {lang === 'en' ? (<table>
                            <tr>
                                <td>Born in Aleppo, <br/>Syrian 1986</td>
                                <td><br/>Settled in Berlin.</td>
                            </tr>

                            <tr>
                                <td>2016-2017</td>
                                <td>„Meisterschüler“ Fine Arts in UdK -Berlin(Germany)</td>
                            </tr>
                            <tr>
                                <td>2009</td>
                                <td>Graduate of Fine Arts – Damascus ( Syria)</td>
                            </tr>
                            <tr>
                                <td/>
                                <td><h1>Solo Exhibition</h1></td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td>"With illusions" Lawrence Gallery, Berlin (Germany )</td>
                            </tr>
                            <tr>
                                <td>2015</td>
                                <td>Gallery Khawatem Art & Jewelry / Beirut (Libanon)</td>
                            </tr>
                            <tr>
                                <td>2011</td>
                                <td>Gallery Art House / Damascus ( Syria)</td>
                            </tr>

                            <tr>
                                <td/>
                                <td><h1>Shared Exhibition <span className="auswahl">(selection)</span></h1></td>
                            </tr>
                            <tr>
                                <td>2020</td>
                                <td>Azimut Gallery/ Berlin (Germany)</td>
                            </tr>
                            <tr>
                                <td>2019</td>
                                <td>"Erde der Fremden " bei FPS, Berlin</td>
                            </tr>
                            <tr>
                                <td>2018</td>
                                <td>Konsthallen Sandviken / Sweden</td>
                            </tr>
                            <tr>
                                <td>2017</td>
                                <td>University of Fine Arts Berlin -UdK tour /Rundgang- /Berlin (Germany)</td>
                            </tr>
                            <tr>
                                <td>2016</td>
                                <td>92 Art Gallery - 1x1 - through Berlin Art Week / Berlin (Germany)</td>
                            </tr>
                            <tr>
                                <td>2016</td>
                                <td>Artscoops -The Middle East Modern and Contemporary Auction- / Beirut (Libanon)</td>
                            </tr>
                            <tr>
                                <td>2015</td>
                                <td>Tajalliyat art Gallery -The Woman Through the Eyes- / Beirut (Libanon)</td>
                            </tr>
                            <tr>
                                <td>2013</td>
                                <td>Art Center -Artists from Syrian and Bahrain- /Manama ( Bahrain)</td>
                            </tr>
                            <tr>
                                <td>2010</td>
                                <td>Konsthallen Sandviken - Paintings from The Middle- / Sandviken (Sweden)</td>
                            </tr>
                            <tr>
                                <td>2010</td>
                                <td>National Library -In The Middle of the Road- /Damascus ( Syria)</td>
                            </tr>
                            <tr>
                                <td>2010</td>
                                <td>French Cultural Center- Exhibition of Graduates of the Faculty of Fine Arts 2009-/
                                    Damascus (
                                    Syria)
                                </td>
                            </tr>

                            <tr>
                                <td>2007-2009</td>
                                <td>Springs Exhibitions in Khan Asaád Basha-/Old City of Damascus ( Syria)</td>
                            </tr>
                            <tr>
                                <td>2007</td>
                                <td>Faculty of Fine Arts “ Workshop” - Artists of Mediterranean Sea -/ Damascus (
                                    Syria)
                                </td>
                            </tr>
                            <tr>
                                <td>2007</td>
                                <td>–“Workshop in Palmyra “ for Students of the Faculty of Fine Arts in Damascus/
                                    Palmyra ( Syria)
                                </td>
                            </tr>
                            <tr>
                                <td>2002</td>
                                <td>Shibani School / Old City of Aleppo ( Syria)</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><a href="mailto:kamiranart@hotmail.com" target=""
                                       name="kamirankhalil">kamiranart@hotmail.com</a></td>
                            </tr>
                        </table>) : (<table>
                            <h1>Kamiran Khalil</h1>
                            <tr>
                                <td>Geboren 1986 in Aleppo,Syrien</td>
                                <td><br/>Lebt und arbeitet in Berlin.</td>
                            </tr>
                            <tr>
                                <td>2016-2017</td>
                                <td>Studium/ Meisterschüler an der UDK ( Bildende Kunst) -Berlin</td>
                            </tr>
                            <tr>
                                <td>2009</td>
                                <td>Absolvent der Universität der Bildende Künste — Damaskus</td>
                            </tr>
                            <tr>
                                <td/>
                                <td><h1>Einzelausstellungen</h1></td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td>"Mit Illusionen" Lawrence Galerie , Berlin (Deutschland)</td>
                            </tr>
                            <tr>
                                <td>2015</td>
                                <td>Galerie Khawatem Art & Jewelry / Beirut/Libanon</td>
                            </tr>
                            <tr>
                                <td>2011</td>
                                <td>Galerie Art House / Damaskus</td>
                            </tr>
                            <tr>
                                <td/>
                                <td><h1>Gruppenausstellungen & Workshops <span className="auswahl">(Auswahl)</span></h1>
                                </td>
                            </tr>
                            <tr>
                                <td>2019</td>
                                <td>"Erde der Fremden " bei FPS, Berlin</td>
                            </tr>
                            <tr>
                                <td>2018</td>
                                <td>Konsthallen Sandviken “ Syrian Aesthetical Scream “ / Schweden</td>
                            </tr>
                            <tr>
                                <td>2017</td>
                                <td>Universität der Bildende Künste Berlin UDK ,Rundgang der UDK / Berlin</td>
                            </tr>
                            <tr>
                                <td>2016</td>
                                <td>92 Art Gallery “ 1x1 “ während der Berlin Art Week / Berlin</td>
                            </tr>
                            <tr>
                                <td>2016</td>
                                <td> Artscoops “The Middle East Modern and Contemporary Auction”/ Beirut</td>
                            </tr>
                            <tr>
                                <td>2015</td>
                                <td>Tajalliyat art Gallery “The Woman Through the Eyes“/ Beirut</td>
                            </tr>
                            <tr>
                                <td>2013</td>
                                <td>Zentrum der Künste-einiger Künstler aus Syrien und Bahrain- / Bahrain</td>
                            </tr>
                            <tr>
                                <td>2010</td>
                                <td>Konsthallen Sandviken „ Gemälden aus dem Osten“ / Schweden</td>
                            </tr>
                            <tr>
                                <td>2010</td>
                                <td>Nationalbibliothek -Mitte dem Weg- / Damaskus (Syrien)</td>
                            </tr>
                            <tr>
                                <td>2010</td>
                                <td>Das französische Kulturzentrum-- Ausstellung der Absolventen der Fakultät der
                                    bildenden Künste 2009/ Damaskus
                                </td>
                            </tr>

                            <tr>
                                <td>2007-2009</td>
                                <td>Jährliche Ausstellung „Frühling“ im Khan Asaád Basha“/Alt-Damaskus</td>
                            </tr>
                            <tr>
                                <td>2007</td>
                                <td>Fakultät der bildenden Künste - Workshop „Künstler des Mittelmeers“/ Damaskus</td>
                            </tr>
                            <tr>
                                <td>2007</td>
                                <td>Workshop für die Studenten der Fakultät der bildenden Künste in Damaskus/ Palmyra
                                </td>
                            </tr>
                            <tr>
                                <td>2002</td>
                                <td>Shibani Schule / Alt-Aleppo</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><a href="mailto:kamiranart@hotmail.com" target=""
                                       name="kamirankhalil">kamiranart@hotmail.com</a></td>
                            </tr>
                        </table>)
                        }
                    </div>
                </Container>
            </Layout>
        </>
    )
}
