﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebMovie.AuthContext;

namespace WebMovie.Migrations
{
    [DbContext(typeof(AuthorizaionContext))]
    partial class AuthorizaionContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebMovie.ModelsAuth.Role", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("NameRole");

                    b.Property<Guid?>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("Role");
                });

            modelBuilder.Entity("WebMovie.ModelsAuth.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("Password");

                    b.Property<string>("SecondName");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("WebMovie.ModelsAuth.UserRole", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("RoleId");

                    b.Property<Guid?>("RoleId1");

                    b.Property<int>("UserId");

                    b.Property<Guid?>("UserId1");

                    b.HasKey("Id");

                    b.HasIndex("RoleId1");

                    b.HasIndex("UserId1");

                    b.ToTable("UserRole");
                });

            modelBuilder.Entity("WebMovie.ModelsAuth.Role", b =>
                {
                    b.HasOne("WebMovie.ModelsAuth.Role")
                        .WithMany("UserRoles")
                        .HasForeignKey("RoleId");
                });

            modelBuilder.Entity("WebMovie.ModelsAuth.UserRole", b =>
                {
                    b.HasOne("WebMovie.ModelsAuth.Role", "Role")
                        .WithMany()
                        .HasForeignKey("RoleId1");

                    b.HasOne("WebMovie.ModelsAuth.User", "User")
                        .WithMany("UserRole")
                        .HasForeignKey("UserId1");
                });
#pragma warning restore 612, 618
        }
    }
}
