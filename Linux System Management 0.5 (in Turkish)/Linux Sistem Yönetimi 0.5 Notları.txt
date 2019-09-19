# Sistem yönetimi 0.5 notlar

gizli dosyaları göster                                  => ls -a
nerde olduğunu gör                                      => pwd
kullanıcı değiştir                                      => su
repo listesi                                            => /etc/apt/source.list
historydeki x'inci sıradaki komutu çalştırır            => !x
arşivleme                                               => tar -cvf <dosya_adı.tar> <<dizin>/ ya da <dosya>>
linux görev yöneticisi                                  => top
force close                                             => killal -9 <ID>

## I/O

stdout yönlendirme                                      => > , 1> , >> , 1>>
stderr yönlendirme                                      => 2> , 2>>

## Kullanıcı Hesabı Yönetimi

kullanıcı ekle                                          => adduser
grup ekle                                               => addgroup
kullanıcıyı gruba taşı                                  => usermod -G <grup-adı> <kullanıcı-adı>
şifre değiştir                                          => passwd
kullanıcıyı sil                                         => deluser
grubu sil                                               => delgroup

### Hesap Dosyaları

şifrelenmiş kullanıcı bilgileri                         => /etc/shadow
daha okunabilir /etc/shadow                             => /etc/passwd
sudo grubu üyeleri                                      => /etc/sudoers
